import { Component } from 'react'
import styled from 'styled-components'

import './App.css'

const StyledMain = styled.main`
  background-color: ${props => props.backGroundColor[0]};
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

class App extends Component {
  state = {
    backGroundColor: ["#ffffff", "#ffffff", "#ffffff"]
  }

  handleColorChange = (event, i) => {
    const newColor = event.target.value
    // create a copy of the backGroundColor array
    const newBackgroundColor = [...this.state.backGroundColor]
    // change the value of the array to the new color
    newBackgroundColor[i] = newColor
    // set the new array as the new state
    this.setState({ backGroundColor: newBackgroundColor })
  }

  render() {
    const { backGroundColor } = this.state

    return (
      // Pass the chosen color into main to set the background
      <StyledMain backGroundColor={backGroundColor}>
        <h1>CSS Gradient Generator</h1>
        {backGroundColor.map((color, i) => (
          <input type="color"
            value={color}
            onChange={(event) => this.handleColorChange(event, i)}
          />
        ))}
      </StyledMain>
    )
  }
}

export default App;
