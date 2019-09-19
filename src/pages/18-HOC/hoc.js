import React from 'react'
export default (Comp, arg1, arg2) => {
  // return class EnhancerComp extends React.PureComponent {
  //   render() {
  //     return <Comp arg1={arg1} arg2={arg2}></Comp>
  //   }
  // }
  // return (props) => {
  //   return (
  //     <Comp arg1={arg1} arg2={arg2}></Comp>
  //   )
  // }
  return Comp
}