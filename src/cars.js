class Vehicle {
  constructor(name, fuel) {
    // console.log(`I'm ${name}`);
    this.x = 0;
    this.y = 0;
    this.step = 1;
    this.name = name;
    this.fuel = fuel;
  }

  isCanMove() {
    return this.fuel - this.step >= 0;
  }

  getCoords() {
    return `(${this.x}, ${this.y})`;
  }

  getFuel() {
    return `The fuel is ${this.fuel}L`;
  }

  useFuel() {
    this.fuel = this.fuel - this.step;
  }

  moveForward() {
    if (this.isCanMove()) {
      this.useFuel();
      this.x = this.x + this.step;
      return `Forward: ${this.getCoords()} ${this.getFuel()}`;
    }
    console.log('Need more fuel!');
  }

  moveBack() {
    if (this.isCanMove()) {
      this.useFuel();
      this.x = this.x - this.step;
      return `Back: ${this.getCoords()} ${this.getFuel()}`;
    }
    console.log('Need more fuel!');
  }
}

class Car extends Vehicle {
  constructor(name, fuel, nitro) {
    super(name, fuel);
    if (nitro) {
      this.turnOnNitro()
    } else {
      this.nitro = false;
    }
  }

  turnOnNitro() {
    if (!this.nitro) {
      this.nitro = true;
      this.step *= 2;
    }
  };

  turnOffNitro() {
    if (this.nitro) {
      this.nitro = false;
      this.step /= 2;
    }
  };

  moveForward() {
    if (this.isCanMove()) {
      this.useFuel();
      this.x = this.x + this.step;
      return `Forward: ${this.getCoords()} ${this.getFuel()}`;
    }
    if (this.nitro) {
      console.log('Not enough fuel for nitro! turning off');
      this.turnOffNitro();
      return this.moveForward();
    } else {
      return 'Need more fuel!';
    }
  }

  moveBack() {
    if (this.isCanMove()) {
      this.useFuel();
      this.x = this.x - this.step;
      return `Back: ${this.getCoords()} ${this.getFuel()}`;
    }
    if (this.nitro) {
      console.log('Not enough fuel for nitro! turning off');
      this.turnOffNitro();
      return this.moveBack();
    } else {
      return 'Need more fuel!';
    }
  }

  moveRight() {
    if (this.isCanMove()) {
      this.useFuel();
      this.y -= this.step;
      return `Right: ${this.getCoords()}, ${this.getFuel()}`;
    }
    if (this.nitro) {
      console.log('Not enough fuel for nitro! turning off');
      this.turnOffNitro();
      return this.moveRight();
    } else {
      return 'Need more fuel!';
    }
  }

  moveLeft() {
    if (this.isCanMove()) {
      this.useFuel();
      this.y += this.step;
      return `Left: ${this.getCoords()}, ${this.getFuel()}`;
    }
    if (this.nitro) {
      console.log('Not enough fuel for nitro! turning off');
      this.turnOffNitro();
      return this.moveLeft();
    } else {
      return 'Need more fuel!';
    }
  }


}

/* testing

// let v = new Vehicle('Tractor', 100);
// console.log(v.moveForward()); // '(1, 0) The fuel is 99L'
// console.log(v.moveBack()); // '(0, 0) The fuel is 98L'

const x = new Car('Mercedes', 19, true);
// x.turnOnNitro();
console.log(x);
// console.log(x);
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
// console.log(x.moveRight());
console.log(x);

*/

export const car = new Car('Mercedes', 19, true)
