/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-unresolved
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
/* eslint-enable no-underscore-dangle */
