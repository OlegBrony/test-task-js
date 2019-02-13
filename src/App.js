import React, { Component } from 'react';
import './App.css';
import CarView              from './components/CarView';
import Comparing            from './components/Comparing';
import CorrectBrackets      from './components/CorrectBrackets';
import Fibonacci            from './components/Fibonacci';
import Formula              from './components/Formula';
import Palindrome           from './components/Palindrome';
import Triangle             from './components/Triangle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={'task-item'}><Palindrome/></div>
          <div className={'task-item'}><Formula/></div>
          <div className={'task-item'}><Triangle/></div>
          <div className={'task-item'}><Fibonacci/></div>
          <div className={'task-item'}><CorrectBrackets/></div>
          <div className={'task-item'}><CarView/></div>
          <div className={'task-item'}><Comparing/></div>
        </header>
      </div>
    );
  }
}

export default App;
