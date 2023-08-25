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
      assert.isString(convertHandler.getNum('1/2/2kg'), 'invalid number')
    })
    test('Read fractional with decimal number input', () => {
      assert.equal(convertHandler.getNum('kg'), 1, 'No numerical imput provided')
    })
    test('Read valid input unit', () => {
      assert.equal(convertHandler.getUnit('60kg'), 'kg', 'Valid input unit')
    })
    test('Correct unit change', () => {
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'Valid unit change')
    })
    test('Correct spelling unit', () => {
      assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms', 'Valid unit spelling')
    })
    test('Correct conversion', () => {
      assert.equal(convertHandler.convert('5', 'l'), '1.3208608842899447gal', 'Correct conversion')
    })
});