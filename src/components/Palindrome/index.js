import React, { Component } from 'react';
import './Palindrome.css';


class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palindrome: '',
      answer: null,
    };
  }

  handleInput = async e => {
    await this.setState({
      palindrome: e.target.value,
      answer: this.isPalindrome(e.target.value),
    });
  };

  isPalindrome = (data) => {
    if (typeof data === 'number' || typeof data === 'string') {
      if (data.trim() === '') {
        return false
      }
      let result = data.toString().split('').reverse().join('');
      return result === data.toString();
    }
    return false;
  };


  render() {
    console.log(this.state);
    return (
      <>
        <p>1) Write a function to check if a string or a number is palindrome.</p>
        <div className={'palindrome'}>
          <input type="text" placeholder={'is it palindrome?'} name={'palindrome'}
                 onChange={this.handleInput} value={this.state.palindrome}/>
          {
            this.state.answer !== null ?
              <p>{this.state.answer.toString()}</p> : null
          }
        </div>
      </>
    );
  }
}

export default Palindrome;
