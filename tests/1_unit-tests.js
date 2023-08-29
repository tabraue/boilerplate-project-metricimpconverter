const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();


suite('Unit Tests', function(){

    test('Read whole number input', () =>{
        assert.equal(convertHandler.getNum('60kg'), 60, 'Number -not decimal- can be read')
    })
    test('Read decimal number input', () =>{
        assert.equal(convertHandler.getNum('6.2kg'), 6.2, 'Decimal number can be read');
    })
    test('Read fractional number input', () => {
      assert.equal(convertHandler.getNum('1/2kg'), 0.5, 'Fractional number can be read')
    })
    test('Read fractional with decimal number input', () => {
      assert.equal(convertHandler.getNum('1.2/2kg'), 0.6, 'Fractional with decimal number can be read')
    })
    test('Double-fraction not permited', () => {
      assert.isString(convertHandler.getNum('3/2/3'), 'invalid number')
    })
    test('Default number when no input provided', () => {
      assert.equal(convertHandler.getNum('kg'), 1, 'No numerical input provided')
    })
    test('Read valid input unit', () => {
      assert.equal(convertHandler.getUnit('60kg'), 'kg', 'Valid input unit')
    })
    test('Invalid unit input', () => {
      assert.notEqual(convertHandler.getUnit('60k'),'60kg', 'invalid unit')
    })
    test('Correct unit change', () => {
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'Valid unit change')
    })
    test('Correct spelling unit', () => {
      assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms', 'Valid unit spelling')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'gal'), '18.92705L', 'Correct conversion')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'L'), '1.32086gal', 'Correct conversion')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'mi'), '8.04670km', 'Correct conversion')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'km'), '3.10686mi', 'Correct conversion')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'lbs'), '2.26796kg', 'Correct conversion')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'kg'), '11.02312lbs', 'Correct conversion')
    })

});