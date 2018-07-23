import * as React from "react"
import styled from "react-emotion"
import { OperationalStyleConstants, expandColor } from "../utils/constants"
import { isModifiedEvent } from "../utils"
import { Icon } from ".."
import { Consumer, Context } from "../OperationalUI/OperationalUI"

type WithTheme = { theme?: OperationalStyleConstants }

export interface Props {
  /** Size, in pixels, that the logomark should be */
  size?: number
  /** A color from the constants, or an arbitrary hex value */
  color?: keyof OperationalStyleConstants["color"] | string
  /** Do we want it stacked vertically? */
  stack?: boolean
  /** Link url prop a'la react-router */
  to?: string
  /** Click handler */
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
}

const Svg: React.SFC<{}> = props => (
  <svg viewBox="0 0 1740 360">
    <path d="M93.869,283.579c-31.861,-31.93 -49.275,-78.675 -41.663,-126.448c9.095,-57.083 54.741,-106.57 112.674,-119.197c10.342,-2.254 20.923,-3.352 31.549,-3.335c38.192,0.192 76.071,16.199 103.329,42.946c0.389,0.27 0.607,0.582 0.889,0.883c1.778,1.896 1.982,4.717 -0.104,6.948l0,0.001l-0.001,0.001l-0.006,0.006l-51.919,51.919c-0.862,0.809 -1.22,0.952 -1.885,1.184c-1.42,0.497 -2.913,0.132 -4.109,-0.719c-0.762,-0.372 -1.496,-0.879 -2.156,-1.504c-19.836,-18.528 -52.364,-21.787 -75.812,-6.922c-13.025,8.258 -22.867,21.534 -26.696,36.609c-7.372,29.017 9.762,62.436 39.857,72.714c21.527,7.352 46.688,2.23 63.659,-14.203c0.901,-1.042 2.27,-1.721 3.959,-1.721c0.104,0.006 0.209,0.013 0.313,0.019c1.721,0.218 2.123,0.558 3.065,1.443l51.111,51.11c0.318,0.339 0.566,0.719 0.751,1.126l0.335,0.504l0.378,1.914l-0.384,1.912c-2.542,3.792 -6.593,6.957 -10.411,10.165c-43.029,36.155 -107.286,45.572 -159.303,19.697c-13.554,-6.742 -25.897,-15.671 -36.633,-26.27c-0.292,-0.232 -0.557,-0.494 -0.787,-0.782Zm177.733,-22.445c-1.673,1.564 -3.576,3.103 -5.368,4.55c-30.91,24.96 -74.943,32.906 -112.76,17.18c-11.313,-4.704 -21.735,-11.39 -30.847,-19.572l-17.497,17.497c26.413,23.747 62.281,36.873 98.408,34.767c31.602,-1.843 62.332,-15.13 85.707,-36.778l-17.643,-17.644Zm-26.461,-26.46c-0.976,0.846 -2.007,1.662 -3.007,2.432c-24.638,18.957 -62.085,19.733 -87.789,0.255c-1.094,-0.829 -2.162,-1.691 -3.203,-2.583l-21.552,21.551l0.069,0.06c22.951,20.122 55.428,29.209 85.678,22.83c18.209,-3.84 35.443,-12.829 49.145,-25.204l-19.341,-19.341Zm-159.621,-48.825l-24.862,0c1.479,31.868 14.048,63.442 36.907,87.572c0.129,0.135 0.257,0.27 0.386,0.405l17.537,-17.537c-15.171,-16.25 -25.652,-36.987 -28.931,-59.32c-0.541,-3.688 -0.885,-7.401 -1.037,-11.12Zm1500.15,-82.447c-36.511,0 -75.81,24.001 -75.81,76.7c0,52.815 39.299,76.871 75.81,76.871c36.512,0 75.81,-24.056 75.81,-76.871c0,-52.699 -39.298,-76.7 -75.81,-76.7Zm-1049.9,76.701c0,52.814 39.297,76.87 75.809,76.87c36.514,0 75.811,-24.056 75.811,-76.87c0,-52.7 -39.297,-76.701 -75.811,-76.701c-36.512,0 -75.809,24.001 -75.809,76.701Zm-57.482,-35.201l22.6,-22.599c-13.89,-12.313 -32.804,-18.899 -52.028,-18.899c-10.567,0 -21.227,1.988 -31.206,6.104c-28.273,11.667 -44.487,37.396 -44.487,70.593c0,33.307 16.244,59.105 44.565,70.781c28.109,11.586 61.638,6.246 83.133,-12.837l-22.53,-22.528c-11.692,10.852 -29.079,14.311 -44.648,8.516c-17.499,-6.506 -27.945,-22.928 -27.945,-43.932c0,-20.755 10.372,-37.031 27.745,-43.541c15.61,-5.846 33.051,-2.462 44.801,8.342Zm291.003,109.085l-33.295,0l0,-148.579l19.72,0l73.744,84.017l-0.191,-83.044l33.106,0l0,147.606l-19.528,0l-73.556,-82.418l0,82.418Zm242.751,-147.91l0,27.223l-38.124,0l0,120.384l-31.01,0l0,-120.384l-38.345,0l0,-27.223l107.479,0Zm74.014,-0.001l0,147.608l-31.015,0l0,-147.608l31.015,0Zm130.028,-2.006l64.239,149.614l-33.296,0l-7.561,-19.619l-67.845,0l-7.56,19.619l-33.295,0l64.238,-149.614l21.08,0Zm174.683,72.737l51.929,-71.955l20.723,0l0,148.05l-32.35,0l0.052,-80.279l-36.77,46.53l-6.8,0l-36.744,-46.53l0,80.279l-32.35,0l0,-148.05l20.724,0l51.586,71.955Zm-1264.46,9.042l-30.284,0c1.147,22.858 9.795,45.62 26.402,63.507l21.613,-21.613c-10.14,-11.566 -16.557,-26.423 -17.731,-41.894Zm528.734,-5.746c0,30.655 -21.805,46.694 -43.348,46.694c-21.54,0 -43.347,-16.039 -43.347,-46.694c0,-30.434 21.807,-46.359 43.347,-46.359c21.543,0 43.348,15.925 43.348,46.359Zm930.742,46.694c-21.54,0 -43.349,-16.039 -43.349,-46.695c0,-30.433 21.809,-46.359 43.349,-46.359c21.54,0 43.349,15.926 43.349,46.359c0,30.656 -21.809,46.695 -43.349,46.695Zm-355.927,-18.392l-24.581,-55.835l-23.973,55.835l48.554,0Zm-939.999,-126.48c-0.422,-0.401 -0.848,-0.799 -1.278,-1.189c-38.329,-34.694 -96.652,-46.086 -145.353,-25.477c-36.914,15.621 -66.175,48.285 -77.459,87.024c-3.178,10.915 -4.901,22.211 -5.204,33.566l25.015,0c1.343,-26.307 12.107,-52.181 30.551,-71.422c20.338,-21.217 49.456,-33.789 78.99,-34.018c0.352,-0.001 0.705,-0.002 1.057,-0.001c27.59,0.138 54.653,11.136 75.223,29.975l18.458,-18.458Zm-25.541,25.541c-23.22,-20.96 -56.015,-31.199 -87.184,-25.319c-25.374,4.787 -48.633,19.859 -63.554,41.074c-10.779,15.326 -16.725,33.771 -17.58,52.628l30.291,0c1.976,-26.808 20.269,-51.774 46.23,-61.538c8.272,-3.111 17.053,-4.646 25.98,-4.619c16.874,0.151 33.581,6.19 46.436,17.155l19.381,-19.381Z" />
  </svg>
)

const svgAspectRatio = 1740 / 360

const StackedSvg: React.SFC<{}> = props => (
  <svg viewBox="0 0 860 560">
    <path d="M786.686,424.188c-22.908,0 -47.565,15.058 -47.565,48.123c0,33.137 24.657,48.23 47.565,48.23c22.908,0 47.564,-15.093 47.564,-48.23c0,-33.065 -24.656,-48.123 -47.564,-48.123Zm-658.728,48.123c0,33.137 24.655,48.23 47.564,48.23c22.909,0 47.565,-15.093 47.565,-48.23c0,-33.065 -24.656,-48.124 -47.565,-48.124c-22.909,0 -47.564,15.059 -47.564,48.124Zm-36.066,-22.086l14.18,-14.179c-8.715,-7.725 -20.582,-11.857 -32.643,-11.857c-6.63,0 -13.318,1.247 -19.579,3.829c-17.74,7.321 -27.913,23.464 -27.913,44.292c0,20.897 10.192,37.084 27.962,44.409c17.635,7.27 38.672,3.919 52.159,-8.054l-14.136,-14.134c-7.336,6.809 -18.245,8.979 -28.013,5.343c-10.979,-4.082 -17.534,-14.386 -17.534,-27.564c0,-13.022 6.508,-23.234 17.409,-27.318c9.793,-3.668 20.736,-1.545 28.108,5.233Zm182.581,68.443l-20.89,0l0,-93.222l12.373,0l46.269,52.714l-0.12,-52.103l20.771,0l0,92.611l-12.252,0l-46.151,-51.711l0,51.711Zm152.307,-75.722l-23.92,0l0,75.532l-19.456,0l0,-75.532l-24.058,0l0,-17.08l67.434,0l0,17.08Zm46.438,75.531l-19.459,0l0,-92.611l19.459,0l0,92.611Zm121.887,0l-20.891,0l-4.744,-12.309l-42.567,0l-4.743,12.309l-20.89,0l40.304,-93.87l13.226,0l40.305,93.87Zm44.223,-0.49l-20.297,0l0,-92.89l13.003,0l32.366,45.146l32.581,-45.146l13.002,0l0,92.89l-20.297,0l0.033,-50.368l-23.071,29.193l-4.266,0l-23.054,-29.193l0,50.368Zm-436.538,-45.676c0,19.234 -13.681,29.297 -27.198,29.297c-13.515,0 -27.196,-10.063 -27.196,-29.297c0,-19.094 13.681,-29.086 27.196,-29.086c13.517,0 27.198,9.992 27.198,29.086Zm583.965,29.297c-13.514,0 -27.197,-10.063 -27.197,-29.297c0,-19.095 13.683,-29.087 27.197,-29.087c13.515,0 27.199,9.992 27.199,29.087c0,19.234 -13.684,29.297 -27.199,29.297Zm-223.315,-11.54l-15.423,-35.031l-15.041,35.031l30.464,0Zm-215.924,-205.158c-20.365,-20.281 -35.018,-46.456 -40.62,-75.146c-9.268,-47.475 6.874,-99.038 41.839,-132.753c26.739,-25.783 63.27,-40.643 100.587,-40.823c0.308,-0.001 0.615,-0.001 0.923,0c38.168,0.192 76.224,16.349 103.299,42.915c0.504,0.322 0.778,0.725 1.131,1.154c1.579,1.917 1.705,4.547 -0.316,6.709l-0.001,0.001l-0.001,0.001l-0.005,0.005l-51.919,51.919c-0.841,0.788 -1.202,0.944 -1.837,1.167c-0.599,0.23 -1.28,0.337 -2.038,0.286c-1.405,-0.096 -2.527,-0.805 -3.725,-1.969c-0.272,-0.261 -0.272,-0.261 -0.546,-0.519c-22.63,-21.138 -61.591,-22.112 -85.442,0.595c-13.149,12.52 -20.324,30.943 -18.677,49.467c2.403,27.015 24.947,51.187 53.027,55.081c18.455,2.559 38.081,-3.614 51.563,-16.433c0.146,-0.139 0.278,-0.265 0.398,-0.379c0.296,-0.372 0.648,-0.702 1.053,-0.977c0.21,-0.177 0.264,-0.189 0.396,-0.241c0.743,-0.406 1.634,-0.641 2.645,-0.641c0.104,0.007 0.209,0.013 0.313,0.02c1.137,0.143 1.876,0.325 3.065,1.442l51.111,51.111l0.007,0.007c0.786,0.839 0.929,1.187 1.162,1.834c0.145,0.404 0.219,0.817 0.23,1.231c0.135,0.728 0.124,1.322 -0.319,2.386c-0.437,1.048 -1.266,1.804 -2.043,2.567c-37.923,37.239 -96.303,52.114 -147.961,35.345c-21.004,-6.819 -40.191,-18.705 -56.037,-34.121c-0.492,-0.342 -0.924,-0.759 -1.262,-1.241Zm177.868,-22.221c-22.04,20.148 -51.973,31.634 -81.767,30.027c-24.639,-1.328 -48.548,-11.384 -67.202,-27.807l-17.277,17.277c26.622,23.752 62.523,37.388 99.475,34.879c31.167,-2.117 61.406,-15.38 84.447,-36.7l-17.676,-17.676Zm-120.246,-26.503l-21.65,21.651c22.941,19.887 54.908,29.551 85.974,22.905c18.087,-3.87 35.121,-12.696 48.842,-25.134l-19.356,-19.356c-18.142,15.52 -44.34,21.239 -67.603,14.401c-9.679,-2.846 -18.604,-7.87 -26.207,-14.467Zm-65.713,-48.749l-24.824,0c0.726,19.334 5.475,38.563 14.441,56.037c5.996,11.687 13.758,22.383 22.878,31.788l17.291,-17.291c-6.093,-6.421 -11.447,-13.604 -15.86,-21.445c-8.414,-14.951 -13.13,-31.899 -13.926,-49.089Zm40.696,0l-30.727,0c0.933,17.868 6.564,35.522 16.634,50.637c3.044,4.569 6.475,8.862 10.237,12.844l21.778,-21.778c-10.088,-11.459 -16.717,-26.06 -17.922,-41.703Zm163.554,-103.93c-33.3,-30.81 -81.464,-44.224 -125.718,-33.556c-32.117,7.742 -61.077,27.739 -79.898,55.033c-14.624,21.207 -22.603,46.668 -23.476,72.453l24.823,0c0.498,-11.745 2.84,-23.444 7.097,-34.538c15.75,-41.051 57.424,-70.552 102.429,-70.901c0.352,-0.002 0.705,-0.003 1.058,-0.002c27.59,0.139 54.652,11.136 75.222,29.975l18.463,-18.464Zm-25.547,25.548c-23.219,-20.96 -56.015,-31.199 -87.183,-25.32c-36.073,6.805 -67.442,34.365 -77.93,71.218c-2.088,7.336 -3.298,14.89 -3.65,22.484l30.738,0c1.973,-26.476 20.098,-51.361 45.41,-61.225c8.51,-3.316 17.656,-4.954 26.798,-4.932c16.95,0.152 33.603,6.171 46.441,17.151l19.376,-19.376Z" />
  </svg>
)

const stackedSvgAspectRatio = 860 / 560

const containerStyles = ({
  stack,
  color_,
  size_,
  theme,
}: {
  stack?: boolean
  color_?: string
  size_?: number
  theme?: OperationalStyleConstants
}) => `
  padding: 6px;
  width: ${size_ * (stack ? stackedSvgAspectRatio : svgAspectRatio)}px;
  height: ${size_}px;
  fill: ${expandColor(theme, color_) || theme.color.white};
`

const Container = styled("div")(containerStyles)

const LinkContainer = styled("a")(containerStyles)

const ContiamoLogo: React.SFC<Props> = ({ size, color, stack, to, ...props }) => {
  const svgEl = stack ? <StackedSvg /> : <Svg />
  if (!to) {
    return (
      <Container size_={size} color_={color} stack={stack} {...props}>
        {svgEl}
      </Container>
    )
  }
  return (
    <Consumer>
      {ctx => (
        <LinkContainer
          size_={size}
          color_={color}
          stack={stack}
          {...props}
          href={to}
          onClick={(ev: React.MouseEvent<HTMLElement>) => {
            props.onClick && props.onClick(ev)

            if (!isModifiedEvent(ev) && to && ctx.pushState) {
              ev.preventDefault()
              ctx.pushState(to)
            }
          }}
        >
          {svgEl}
        </LinkContainer>
      )}
    </Consumer>
  )
}

ContiamoLogo.defaultProps = {
  size: 50,
  color: "white",
  stack: false,
}

export default ContiamoLogo
