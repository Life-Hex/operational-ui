import * as React from "react"
import { createPortal } from "react-dom"
import isString from "lodash/isString"

import { DefaultProps } from "../types"
import styled from "../utils/styled"
import ContextMenuItem, { rowHeight, IContextMenuItem } from "./ContextMenu.Item"
import { useUniqueId } from "../useUniqueId"
import { useListbox } from "../useListbox"
import ContextMenuPopout from "./ContextMenu.Popout"

export interface ContextMenuProps extends DefaultProps {
  /** Optional reference for the menu container  */
  containerRef?: React.RefObject<HTMLDivElement>
  /** Children of the component  */
  children?: React.ReactNode | ((isActive: boolean) => React.ReactNode)
  /** Specify whether the menu items are visible. Overrides internal open state that triggers on click. */
  open?: boolean
  /** Condensed mode */
  condensed?: boolean
  /** onClick method for all menu items */
  onClick?: (item: IContextMenuItem) => void
  /** Handles click events anywhere outside the context menu container, including menu items. */
  onOutsideClick?: () => void
  /** Suppresses the default behavior of closing the context menu when one of its items is clicked. */
  keepOpenOnItemClick?: boolean
  /** Menu items */
  items: Array<IContextMenuItem>
  /** Where shall we place an icon in rows? */
  iconLocation?: "left" | "right"
  /** Alignment */
  align?: "left" | "right"
  /** Custom width */
  width?: number
  /* Is the child disabled? */
  disabled?: boolean
  /**
   * Whether to include the click element in the context menu styling.
   * Only recommended when the click element is the same width as the context menu.
   */
  embedChildrenInMenu?: boolean
  /** Where do we start focus from? */
  initialFocusedItemIndex?: number
  /** Is this ContextMenu anchored to an element? */
  anchored?: boolean
}

export interface State {
  isOpen: boolean
  focusedItemIndex: number
}

const isChildAFunction = (children: ContextMenuProps["children"]): children is (isActive: boolean) => React.ReactNode =>
  typeof children === "function"

const Container = styled.div<{ side: ContextMenuProps["align"]; isOpen: boolean }>(
  ({ isOpen, theme, side: align }) => ({
    label: "contextmenu",
    cursor: "pointer",
    outline: "none",
    position: "relative",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: align === "left" ? "flex-start" : "flex-end",
    zIndex: isOpen ? theme.zIndex.selectOptions + 1 : theme.zIndex.selectOptions,
  }),
)

/**
 * Overlay to prevent mouse events when the context menu is open
 */
const InvisibleOverlay = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  cursor: "default",
  zIndex: theme.zIndex.selectOptions + 1,
}))

const Separator = styled.div`
  padding: ${({ theme }) => theme.space.small}px 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};

  ::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.border.select};
  }
`

const ContextMenu: React.FC<ContextMenuProps> = ({
  containerRef,
  id,
  align = "left",
  embedChildrenInMenu = false,
  keepOpenOnItemClick,
  condensed,
  iconLocation,
  children,
  items,
  onClick,
  onOutsideClick,
  disabled,
  width,
  open,
  anchored,
  ...props
}) => {
  const $invisibleOverlay = React.useRef<HTMLDivElement | null>(null)
  const uniqueId = useUniqueId(id)
  const { isOpen, setIsOpen, buttonProps, listboxProps, getChildProps, focusedOptionIndex } = useListbox({
    itemCount: items.length,
    isMultiSelect: keepOpenOnItemClick,
    isDisabled: disabled,
    initiallyOpen: open,
  })

  React.useEffect(() => {
    if (isOpen && setIsOpen) {
      const hideOnScroll = () => setIsOpen(false)
      document.addEventListener("scroll", hideOnScroll)
      return () => {
        document.removeEventListener("scroll", hideOnScroll)
      }
    }
  }, [isOpen, setIsOpen])

  React.useEffect(() => {
    if (!items) {
      throw new Error("No array of items has been provided for the ContextMenu.")
    }
  }, [items])

  const renderedChildren = React.useMemo(
    () => (isChildAFunction(children) ? children(isOpen ? isOpen : false) : children),
    [isOpen, children],
  )

  const currentItem = React.useMemo(() => {
    if (focusedOptionIndex === null || focusedOptionIndex === undefined) {
      return
    }
    return items[focusedOptionIndex]
  }, [focusedOptionIndex, items])

  const handleSelect = React.useCallback(() => {
    if (!currentItem) {
      return
    }
    if (currentItem.onClick) {
      currentItem.onClick(currentItem)
    }
    if (onClick) {
      onClick(currentItem)
    }
  }, [currentItem, onClick])

  const overlay = (
    <InvisibleOverlay
      ref={$invisibleOverlay}
      onClick={e => {
        e.stopPropagation()
        setIsOpen && setIsOpen(false)
        if (onOutsideClick) {
          onOutsideClick()
        }
      }}
    />
  )

  return (
    <>
      {isOpen && (anchored ? overlay : createPortal(overlay, document.body))}
      <Container
        {...props}
        isOpen={isOpen || false}
        side={align}
        onClick={e => {
          e.stopPropagation()
          if (keepOpenOnItemClick && isOpen) {
            return
          }
          if (!disabled && setIsOpen) {
            setIsOpen(!isOpen)
          }
        }}
        onKeyDown={e => {
          switch (e.key) {
            case "Enter":
              e.stopPropagation()
              handleSelect()
              break
          }
        }}
      >
        <div style={{ outline: "none", width: "100%" }} {...buttonProps}>
          {renderedChildren}
        </div>
        {isOpen && (
          <ContextMenuPopout
            {...listboxProps}
            key={`ContextMenuPopout-${uniqueId}-${items.length}-items`}
            ref={containerRef}
            condensed={Boolean(condensed)}
            numRows={items.length}
            align={align}
            embedChildrenInMenu={embedChildrenInMenu}
            container={$invisibleOverlay}
            rowHeight={rowHeight}
            anchored={Boolean(anchored)}
          >
            {embedChildrenInMenu && renderedChildren}
            {items.map((item, index: number) => (
              <React.Fragment key={index}>
                {(item.separator === "top" || item.separator === "both") && <Separator />}
                <ContextMenuItem
                  id={`operational-ui__ContextMenuItem-${uniqueId}-${index}`}
                  isActive={typeof item !== "string" && item.isActive}
                  condensed={condensed}
                  align={align}
                  iconLocation={iconLocation}
                  width={width || "min-content"}
                  item={item}
                  disabled={isString(item) ? !onClick : !item.onClick && !onClick}
                  onClick={e => {
                    e.stopPropagation() // clicking on an item should not trigger the parent's onClick
                    if (!keepOpenOnItemClick && setIsOpen) {
                      setIsOpen(false)
                    }
                    if (!isString(item) && item.onClick) {
                      item.onClick(item)
                    }
                    if (onClick) {
                      onClick(item)
                    }
                  }}
                  {...(getChildProps ? getChildProps(index) : {})}
                />
                {(item.separator === "bottom" || item.separator === "both") && <Separator />}
              </React.Fragment>
            ))}
          </ContextMenuPopout>
        )}
      </Container>
      {/* Element to close an open select when blurring it so only one can be open at a time */}
      {isOpen && (
        <div
          style={{ position: "absolute", zIndex: -1, width: 0, height: 0 }}
          tabIndex={0}
          data-cy="operational-ui__ContextMenu-focus-trap"
          onFocus={() => setIsOpen && setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
export default ContextMenu
