'use strict';
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {


  it('should perform fizzBuzz', function() {
    const normalCases = [
      {a:15, expected:'fizz-buzz'},
      {a:5, expected:'buzz'},
      {a:3, expected:'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).that.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['a', '1'];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});