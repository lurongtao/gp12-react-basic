import React from 'react'

// const Comp1 = (props) => {
//   return (
//     <div>
//       Comp1
//       {props.children}
//     </div>
//   )
// }

// const enhancer = (Comp) => {
//   const x = 'hello'
//   return (props) => {
//     return (
//       <Comp x={x}>
//         <div>haha</div>
//       </Comp>
//     )
//   }
// }

// export default enhancer(Comp1)


// class Enhancer extends React.Component {
//   state = {
//     globalData: 'global data'
//   }

//   changeData(newData) {
//     this.setState({
//       globalData: newData
//     })
//   }

//   render() {
//     return (
//       <>
//         {this.props.children}
//       </>
//     )
//   }
// }

// const Comp1 = () => {
//   return (
//     <Enhancer>
//       <div>hello</div>
//     </Enhancer>
//   )
// }


class Enhancer extends React.Component {
  render() {
    return (
      <>
        {
          this.props.render()
        }
      </>
    )
  }
}

const Comp2 = () => {
  return <div>comp2</div>
}

const Comp1 = () => {
  return (
    <Enhancer render={() => {
      return <Comp2></Comp2>
    }}></Enhancer>
  )
}


export default Comp1