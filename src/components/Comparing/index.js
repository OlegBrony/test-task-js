import React, { Component } from 'react';
import './Comparing.css';

class Comparing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstObject: '',
      firstValidObject: '',
      secondObject: '',
      secondValidObject: '',
      answer: null,
      errorMessage: null,
    };
  }

  handleInput = async e => {
    if (e.target.value === '') {
      this.setState({
        [e.target.name]: e.target.value,
        answer: null,
      });
    } else {
      await this.setState({ // todo: remove await
        [e.target.name]: JSON.stringify(this.fromStringToJSON(e.target.value)),
      });
      if (this.state.firstObject !== '' && this.state.secondObject !== '') {
        if (this.calculate(this.state.firstObject, this.state.secondObject)) {
          this.setState({
            answer: 'YES',
          });
        } else {
          this.setState({
            answer: 'NO',
          });
        }
      }
    }
  };

  fromStringToJSON = (x) => {
    // examples:
    // { name:"John Doe", age:33, favorites:{ sports:["hoops", "baseball"], movies:["star wars", "taxi driver"] }}
    // { favorites:{ sports:["hoops", "baseball"], movies:["stars", "taxi driver"] }, name:"John Doe", age:33}
    // { favorites:{ sports:["hoops", "baseball"], movies:["star wars", "taxi driver"] }, name:"John Doe", age:33}
    // first step - make sure, that it's actually objects. I think translate it to json first is the best way.
    let xJson = x.replace(/(\w+:)|(\w+ :)/g, (s) => '"' + s.substring(0, s.length - 1) + '":');
    try {
      let success = true;
      try {
        xJson = JSON.parse(xJson);
      } catch {
        success = false;
        this.setState({
          answer: null,
          errorMessage: 'Incorrect input!',
        });
      }
      if (success) { // no error
        this.setState({
          errorMessage: '',
        });
        return xJson;
      }
    } finally {
    }
  };

  calculate_ = (x, y) => {
    let xkeys = Object.keys(x);
    let ykeys = Object.keys(y);
    for (let i = 0; i < xkeys.length; i++) {
      if (x[xkeys[i]] === y[xkeys[i]]) {
        if (i === xkeys.length-1) {
          return true;
        }
      } else if (x[xkeys[i]].length !== undefined || y[xkeys[i]].length !== undefined) {
        if (this.calculateArray(x[xkeys[i]], y[xkeys[i]])) {
          if (i === xkeys.length-1) { // item is last
            return true;
          }
        } else {
          return false
        }
      } else if (typeof x[xkeys[i]] !== 'object' || typeof y[xkeys[i]] !== 'object') {
        return false
      } else if (ykeys.includes(xkeys[i])) {
        console.log('contains the key');
        console.log(xkeys[i]);
        if (!this.calculate_(x[xkeys[i]], y[xkeys[i]])) {
          return false
        }
      } else {
        return false;
      }
    }
  }
  calculateArray = (x, y) => {
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        return false
      }
    }
    return true
  }
  calculate = (x, y) => {
    x = JSON.parse(x);
    y = JSON.parse(y);
    let xkeys = Object.keys(x);
    let ykeys = Object.keys(y);
    for (let i = 0; i < xkeys.length; i++) {
      // x[xkeys[i]] - cur item!
      // xkeys[i] - cur key!
      if (x[xkeys[i]] === y[xkeys[i]]) {
        if (i === xkeys.length-1) { // item is last
          return true;
        }
      } else if (x[xkeys[i]].length !== undefined || y[xkeys[i]].length !== undefined) {
        if (this.calculateArray(x[xkeys[i]], y[xkeys[i]])) {
          if (i === xkeys.length-1) { // item is last
            return true;
          }
        } else {
          return false
        }
      } else if (typeof x[xkeys[i]] !== 'object' || typeof y[xkeys[i]] !== 'object') {
        return false
      } else if (ykeys.includes(xkeys[i])) { // contains the key
        if (!this.calculate_(x[xkeys[i]], y[xkeys[i]])) {
          return false
        }
        if (i === xkeys.length-1) {
          return true;
        }
      } else { // keys are not equal
        return false;
      }
    }
  };


  render() {
    console.log(this.state);
    return (
      <>
        <p>7) Write function for comparing 2 objects.</p>
        <div className={'comparing'}>
          <input type="text" name={'firstObject'} placeholder={'Enter first object to compare'}
                 onChange={this.handleInput} value={this.state.firstObject}/>
          <input type="text" name={'secondObject'} placeholder={'Enter second object to compare'}
                 onChange={this.handleInput} value={this.state.secondObject}/>
          {
            this.state.answer ?
              <p>{this.state.answer}</p> : null
          }
          {
            this.state.errorMessage ?
              <p>{this.state.errorMessage}</p> : null
          }
        </div>
      </>
    );
  }
}

export default Comparing;
