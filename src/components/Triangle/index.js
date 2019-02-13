import React, { Component } from 'react';
import './Triangle.css';

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      answer: null,
    };
  }

  handleInput = async e => {
    if (e.target.value === '') {
      this.setState({
        [e.target.name]: 0,
        answer: null,
      });
    } else {
      await this.setState({
        [e.target.name]: e.target.value.replace(',', '.'),
      });
      this.handleCalculate();
    }
  };

  handleCalculate = () => {
    let { a, b, c } = this.state;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    if (a && b && c) {
      if (this.isTriangleExist(a, b, c)) {
        this.setState({
          answer: 'Triangle',
        });
      } else {
        this.setState({
          answer: 'Not triangle',
        });
      }
    }
  };

  isTriangleExist = (a, b, c) => {
    return (a + b > c) && (b + c > a) && (a + c > b);
  };


  render() {
    return (
      <>
        <p>3) Write a function to check if triangle exists with these sides sizes.</p>
        <div className={'triangle'}>
          <input type="text" name={'a'} placeholder={'a'}
                 onChange={this.handleInput} value={this.state.a}/>
          <input type="text" name={'b'} placeholder={'b'}
                 onChange={this.handleInput} value={this.state.b}/>
          <input type="text" name={'c'} placeholder={'c'}
                 onChange={this.handleInput} value={this.state.c}/>
          {
            this.state.answer !== null ?
              <p>{`${this.state.answer}`}</p> : null
          }
        </div>
      </>
    );
  }
}

export default Triangle;
