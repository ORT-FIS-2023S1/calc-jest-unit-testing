/* eslint-disable max-len */
import Calculator from '../src/calculator';

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

const calculator = new Calculator();

describe('Calculator', () => {
  describe('add', () => {
    test('should return the sum of two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should return the sum of a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('should return the sum of two negative numbers', () => {
      /* TODO*/
    });
  });

  describe('subtract', () => {
    test('should return the difference between two positive numbers', () => {
      expect(calculator.subtract(3, 2)).toEqual(1);
    });

    test('should return the difference between a positive and a negative number', () => {
      /* TODO*/
    });

    test('should return the difference between two negative numbers', () => {
      /* TODO*/
    });
  });

  describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
      /* TODO*/
    });

    test('should return the product of a positive and a negative number', () => {
      /* TODO*/
    });

    test('should return the product of two negative numbers', () => {
      /* TODO*/
    });
  });

  describe('divide', () => {
    /* TODO*/
  });

  describe('squareRoot(num)', () => {
    /* TODO*/
  });
});
