import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleColorChange = (e) => {
    e.stopPropagation(); // why do I need this?
    const newColor = getRandomColor();

    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    });
  }

  handleChildColorChange = (e) => {
    e.stopPropagation();
    const newColor = getRandomColor();

    this.setState({
      childColor: newColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleColorChange} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={this.handleChildColorChange} color={this.state.childColor} />
        <Tier2 handleChildClick={this.handleChildColorChange} color={this.state.childColor} />
      </div>
    )
  }
}

// when do I have to write `onClick={() => handleColorChange}`?
// https://github.com/learn-co-students/react-props-and-state-lab-v-000/blob/solution/src/components/Pet.js
