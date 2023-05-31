/**
 * Represents a Calculator object.
 *
 * @class
 */
class Calculator {
  /**
   * Creates an instance of the Calculator class.
   *
   * @constructor
   */
  constructor() {}

  /**
   * Adds two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The sum of the two numbers.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The difference between the two numbers.
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The product of the two numbers.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides two numbers.
   *
   * @param {number} a - The dividend.
   * @param {number} b - The divisor.
   * @return {number} The quotient of the division.
   * @throws {Error} Throws an error if the divisor is zero.
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Divisor cannot be zero');
    }
    return a / b;
  }

  /**
   * Calculates the square root of a number.
   *
   * @param {number} num - The number.
   * @return {number} The square root of the number.
   * @throws {Error} Throws an error if the number is negative.
   */
  squareRoot(num) {
    if (num < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    return Math.sqrt(num);
  }
}

export default Calculator;
