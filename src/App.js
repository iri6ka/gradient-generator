import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'

import './App.css'

const StyledMain = styled.main`
  ${props => props.backgroundCSS}
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

// background: linear-gradient(${props => props.backGroundColor[0]}); */
// background: linear-gradient(#fff, #000, #fff);

// takes in an array of background colors, and returns css for a gradient colors
export const generateBackgroundCSS = (backgroundColors) => {
  // loop over the background colors, add each one to the string
  let output = "background: linear-gradient("
  // backgroundColors.forEach((color) => output += `${color},`)
  output += backgroundColors.join(', ')
  output += ");"
  return output
}

const updateLocalStorage = (state) => {
  //JSON strignify the state
  const stringState = JSON.stringify(state)
  // save string to local storage
  localStorage.setItem('backgroundColors', stringState)

}
const getFromLocalStorage = () => {
  const colors = localStorage.getItem('backgroundColors')
  if (!colors) {
    return null
  }
  return JSON.parse(colors)
}

const App = () => {
  const [backgroundColors, setBackgroundColors] = useState(["#ffffff", "#ffffff", "#ffffff"])
  useEffect(() => {
    const colors = getFromLocalStorage()
    if (colors) {
      setBackgroundColors(colors)
    }
  }, [])

  useEffect(() => {
    updateLocalStorage(backgroundColors)
  },[backgroundColors])
  
  const handleColorChange = (event, i) => {
    const newColor = event.target.value
    // create a copy of the backGroundColor array
    const newBackgroundColors = [...backgroundColors]
    // change the value of the array to the new color
    newBackgroundColors[i] = newColor
    // set the new array as the new state
    // this.setState({ backGroundColor: newBackgroundColor })
    setBackgroundColors(newBackgroundColors)
  }

  const addColor = () => {
    // clone the existing colors array
    const newBackgroundColors = [...backgroundColors]
    // add the color to the end
    newBackgroundColors.push("#ffffff")
    // set it into the state (change array without mutating)
    setBackgroundColors(newBackgroundColors)
  }

  const removeColor = (i) => {
    // clone background color array
    const newBackgroundColors = [...backgroundColors]
    // remove the element index i
    newBackgroundColors.splice(i,1)
    // set new array into state
    setBackgroundColors(newBackgroundColors)  

  }

  const backgroundCSS = generateBackgroundCSS(backgroundColors)
  return (
    // Pass the chosen color into main to set the background
    <StyledMain backgroundCSS = {backgroundCSS}>
      <h1>CSS Gradient Generator</h1>
      {backgroundColors.map((color, i) => (
        <React.Fragment key={`${i}${color}`}>
        <input  type="color"
          value={color}
          onChange={(event) => handleColorChange(event, i)}
          />
          {backgroundColors.length > 2 && <button onClick={() => removeColor(i)}>Remove</button>}
          </React.Fragment>
      ))}
      <button onClick={addColor}>Add a color</button> 
      <p>
        Your CSS is:
      </p>
      <h5>
      {backgroundCSS}
      </h5>
    </StyledMain>
  )
}

// class OldApp extends Component {
//   state = {
//     backGroundColor: ["#ffffff", "#ffffff", "#ffffff"]
//   }

//   handleColorChange = (event, i) => {
//     const newColor = event.target.value
//     // create a copy of the backGroundColor array
//     const newBackgroundColor = [...this.state.backGroundColor]
//     // change the value of the array to the new color
//     newBackgroundColor[i] = newColor
//     // set the new array as the new state
//     this.setState({ backGroundColor: newBackgroundColor })
//   }

//   render() {
//     const { backGroundColor } = this.state

//     return (
//       // Pass the chosen color into main to set the background
//       <StyledMain backGroundColor={backGroundColor}>
//         <h1>CSS Gradient Generator</h1>
//         {backGroundColor.map((color, i) => (
//           <input type="color"
//             value={color}
//             onChange={(event) => this.handleColorChange(event, i)}
//           />
//         ))}
//       </StyledMain>
//     )
//   }
// }

export default App;
