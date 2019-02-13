import React, { Component } from 'react';
import './CarView.css';
import { car }              from '../../cars';

class CarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuel: car.fuel,
      name: car.name,
      nitro: car.nitro,
      step: car.step,
      x: car.x,
      y: car.y,
      message: '',
    };
  }

  turnOnNitro = () => {
    if (!this.state.nitro) {
      this.setState({
        nitro: true,
        step: this.state.step * 2,
      });
    }
  };

  turnOffNitro = () => {
    if (this.state.nitro) {
      this.setState({
        nitro: false,
        step: this.state.step / 2,
      });
    }
  };

  isCanMove = () => {
    return this.state.fuel - this.state.step >= 0;
  };

  useFuel = () => {
    this.setState({});
  };

  getCoords = () => {
    return `(${this.state.x}, ${this.state.y})`;
  };

  getFuel = () => {
    return `The fuel is ${this.state.fuel}L.`;
  };

  moveForward = async () => {
    if (this.isCanMove()) {
      this.setState({
        fuel: this.state.fuel - this.state.step,
        x: this.state.x + this.state.step,
        // message: `Forward: ${this.getCoords()} ${this.getFuel()}`,
      });
    } else if (this.state.nitro) {
      this.setState({ message: 'Not enough fuel for nitro! turning off' });
      await this.turnOffNitro();
      await this.moveForward();
    } else {
      this.setState({ message: 'Need more fuel!' });
    }
  };

  moveBack = async () => {
    if (this.isCanMove()) {
      this.setState({
        fuel: this.state.fuel - this.state.step,
        x: this.state.x - this.state.step,
        // message: `Back: ${this.getCoords()} ${this.getFuel()}`,
      });
    } else if (this.state.nitro) {
      this.setState({ message: 'Not enough fuel for nitro! turning off' });
      await this.turnOffNitro();
      await this.moveBack();
    } else {
      this.setState({ message: 'Need more fuel!' });
    }
  };

  moveRight = async () => {
    if (this.isCanMove()) {
      this.setState({
        fuel: this.state.fuel - this.state.step,
        y: this.state.y - this.state.step,
        // message: `Right: ${this.getCoords()}, ${this.getFuel()}`,
      });
    } else if (this.state.nitro) {
      this.setState({ message: 'Not enough fuel for nitro! turning off' });
      await this.turnOffNitro();
      await this.moveRight();
    } else {
      this.setState({ message: 'Need more fuel!' });
    }
  };

  moveLeft = async () => {
    if (this.isCanMove()) {
      this.setState({
        fuel: this.state.fuel - this.state.step,
        y: this.state.y + this.state.step,
        // message: `Left: ${this.getCoords()}, ${this.getFuel()}`,
      });
    } else if (this.state.nitro) {
      this.setState({ message: 'Not enough fuel for nitro! turning off' });
      await this.turnOffNitro();
      await this.moveLeft();
    } else {
      this.setState({ message: 'Need more fuel!' });
    }
  };


  render() {
    console.log(this.state);
    return (
      <>
        <p>
          6) Create new class Car. Class Car extends class Vehicle. Constructor must have additional parameter ‘nitro’
          (boolean), by default is false. Add two methods for switching on and off nitro. After switching on step
          parameter
          becomes 2 if nitro available. After switching off step parameter becomes 1. Add methods for moving right and
          left.
          If fuel is over car can’t move. Show appropriate message
        </p>
        <div className={'cars'}>
          <p>Car now on {this.getCoords()}</p>
          {
            this.state.nitro ?
              <p>Nitro is turned on</p> :
              <p>Nitro is turned off</p>
          }
          {
            this.state.message ?
              <p>{this.getFuel()} {this.state.message}</p> : <p>{this.getFuel()}</p>
          }

          <button className={'car-btn'} onClick={this.moveForward}>Forward</button>
          <button className={'car-btn'} onClick={this.moveBack}>Back</button>
          <button className={'car-btn'} onClick={this.moveRight}>Right</button>
          <button className={'car-btn'} onClick={this.moveLeft}>Left</button>
          <button className={'car-btn'} onClick={this.turnOnNitro}>Turn on nitro</button>
          <button className={'car-btn'} onClick={this.turnOffNitro}>Turn off nitro</button>
        </div>
      </>
    );
  }
}

export default CarView;
