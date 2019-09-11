import styled from 'styled-components'

let color = 'green'

const Font = styled.div `
  font-size: 100px;
  color: ${(props)=>props.color};
  background: yellowgreen;
`

export {
  Font
}