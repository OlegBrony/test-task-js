import React, { Component } from 'react';
import './CorrectBrackets.css';

class CorrectBrackets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brackets: '',
      answer: null,
    };
  }

  handleInput = e => {
    if (e.target.value === '') {
      this.setState({
        brackets: '',
        answer: null,
      });
    }
    // if last symbol is '(' or ')'
    if (e.target.value.split('')[e.target.value.split('').length - 1] === '(' ||
      e.target.value.split('')[e.target.value.split('').length - 1] === ')') {
      this.setState({
        [e.target.name]: e.target.value,
        answer: this.solve(e.target.value),
      });
    }
  };


  solve = x => {
    x = x.split('');
    let temp = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === '(') {
        temp += 1;
      } else {
        temp -= 1;
        if (temp < 0) {
          return false;
        }
      }
    }
    return temp === 0;
  };


  render() {
    return (
      <>
        <p>
          5) Write a function to check if a string<br/>
          (which can contains only 2 characters - “(” and “)”)<br/>
          contains correct sequence of brackets.<br/>
          Sequence is correct when if after first bracket “(” is tail bracket “)”.<br/>
          Pair of brackets can contain another pairs of brackets.<br/>
          For example “()”, “()()”, “(())”.
        </p>
        <div className={'brackets'}>
          <input type="text" name={'brackets'} placeholder={'Enter string with brackets only...'}
                 onChange={this.handleInput} value={this.state.brackets}/>
          {
            this.state.answer === null ? null :
              <p>{`${this.state.answer}`}</p>
          }
        </div>
      </>
    );
  }
}

export default CorrectBrackets;
