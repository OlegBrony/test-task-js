import React, { Component } from 'react';
import './Fibonacci.css';

class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      answer: null,
    };
  }

  handleInput = e => {
    if (e.target.value === '') {
      this.setState({
        input: 0,
        answer: null,
      });
    } else {
      this.setState({
        input: parseInt(e.target.value),
        answer: this.calculateWithLoop(parseInt(e.target.value)),
        // answer: this.calculateWithRecursion(parseInt(e.target.value))
      });
    }
  };


  // 0 1 2 3 4 5 6  7  8  9 10 11  12  13  14  15  16  17   18   19   20
  // 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765
  calculateWithLoop = (x) => {
    if (x === 0) return [];
    if (x === 1) return [1];
    if (x === 2) return [1, 1];

    let answer = [1, 1];
    for (let i = 0; i < x - 2; i++) {
      answer.push(answer[answer.length - 2] + answer[answer.length - 1]);
    }
    return answer;
  };

  calculateWithRecursion = (x) => {
    if (x === 0) return [];
    if (x === 1) return [1];
    if (x === 2) return [1, 1];
    else {
      let numbers = this.calculateWithRecursion(x - 1);
      numbers = [...numbers, numbers[numbers.length - 1] + numbers[numbers.length - 2]];
      return numbers;
    }
  };

  render() {
    return (
      <>
        <p>
          4) Write 2 functions for printing sequence of Fibonacci numbers.<br/>
          In first function use recursion, in second one loop.<br/>
          Input parameter is last number in Fibonacci sequence.
        </p>
        <div className={'fibonacci'}>
          <input type="text" name={'fibonacci'} placeholder={'How many numbers?'}
                 value={this.state.input} onChange={this.handleInput}/>
          {
            this.state.answer === null ? null :
              <p>{`${this.state.answer}`}</p>
          }
        </div>
      </>
    );
  }
}

export default Fibonacci;
