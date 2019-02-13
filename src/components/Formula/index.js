import React, { Component } from 'react';
import './Formula.css';

class Formula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: '',
      z: '',
      answer: null,
    };
  }

  handleChange = async e => {
    if (e.target.value === '') {
      this.setState({
        [e.target.name]: '',
        answer: null,
      });
    }

    await this.setState({
      [e.target.name]: e.target.value,
    });

    const { x, y, z } = this.state;
    if (x && y && z) {
      this.setState({
        answer: this.calculate(x, y, z),
      });
    }
  };

  calculate = (x, y, z) => {
    let numeratorOfRightPart = ((x - y) ** 2);
    let rightPart;
    if (numeratorOfRightPart === 0) {
      rightPart = 0;
    } else {
      rightPart = -(numeratorOfRightPart / (2 * (z ** 2)));
    }
    let leftPart = 1 / (z * (2 * Math.PI) ** 0.5);
    if ((rightPart === 0 || leftPart) && (rightPart === 0 || rightPart)) {
      return leftPart * (Math.E ** rightPart);
    } else {
      return 'Impassible';
    }
  };


  render() {
    console.log(this.state);
    return (
      <>
        <p>2) Write a function to calculate result according to formula.</p>
        <div className={'formula'}>
          <input type="text" name={'x'} placeholder={'x'}
                 onChange={this.handleChange} value={this.state.x}/>
          <input type="text" name={'y'} placeholder={'y'}
                 onChange={this.handleChange} value={this.state.y}/>
          <input type="text" name={'z'} placeholder={'z'}
                 onChange={this.handleChange} value={this.state.z}/>
          {
            this.state.answer ?
              <p>{this.state.answer}</p> : null
          }
        </div>
      </>
    );
  }
}

export default Formula;
