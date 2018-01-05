
          window.__NEXT_REGISTER_PAGE('/components/date-pickers', function() {
            var comp = module.exports=webpackJsonp([36],{1613:function(e,t,n){e.exports=n(1614)},1614:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(9),i=n(13),d=a(i),s=n(28),c=a(s),u=n(29),p=a(u),f=[{name:"start",description:"Start date in the format 2012-10-01.",defaultValue:"-",type:"string",optional:!0},{name:"end",description:"End date in the format 2012-10-01.",defaultValue:"-",type:"string",optional:!0},{name:"onChange",description:"Triggered every time the start or end dates change.",type:"(change: {start: string, end: string}) => void",defaultValue:"-",optional:!0},{name:"placeholder",description:"Placeholder text when no dates selected",defaultValue:"",type:"string",optional:!0}];t.default=function(e){return o.createElement(d.default,{pathname:e.url.pathname},o.createElement(l.Card,null,o.createElement("p",null,"DatePickers can currently be used to pick an period bound by two day selections."),o.createElement(l.Heading2Type,null,"Usage"),o.createElement(p.default,{snippet:String('\n(() => {\n  class ComponentWithDatePicker extends React.Component {\n    state = {\n      start: "2017-10-03",\n      end: "2017-10-18"\n    }\n    render() {\n      return (\n        <DatePicker\n          start={this.state.start}\n          end={this.state.end}\n          placeholder="Pick a date"\n          onChange={newState => {\n            this.setState(prevState => newState)\n          }}\n        />\n      )\n    }\n  }\n\n  return <ComponentWithDatePicker />\n})()\n'),components:{DatePicker:l.DatePicker}}),o.createElement(l.Heading2Type,null,"Props"),o.createElement(c.default,{props:f})))}}},[1613]);
            return { page: comp.default }
          })
        