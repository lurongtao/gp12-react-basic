import React from 'react'

class CustomNav extends React.Component {
  render() {
    let { title } = this.props.nav
    return (
      <li 
        key={title}
        onClick={() => this.handleClick()}
      >
        {
          this.props.match && '>'
        }
        {title}
      </li>
    )
  }

  componentDidMount() {
    
  }

  handleClick = () => {
    let { history, nav: { path } } = this.props
    history.push(path)
  }
}

export default CustomNav