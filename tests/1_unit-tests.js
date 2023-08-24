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
});

/*


suite('Unit Tests', function(){

  it('should correctly read each valid input unit', function() {
    assert.strictEqual(convertHandler.getUnit('10L'), 'L');
    assert.strictEqual(convertHandler.getUnit('10gal'), 'gal');
  });

  it('should correctly return an error for an invalid input unit', function() {
    assert.strictEqual(convertHandler.getUnit('10invalid'), 'invalid unit');
  });

  it('should return the correct return unit for each valid input unit', function() {
    assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal');
    assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
  });

  it('should correctly return the spelled-out string unit for each valid input unit', function() {
    assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters');
    assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons');
  });

  it('should correctly convert gal to L', function() {
    const input = 5;
    const initUnit = 'gal';
    const expected = 18.92705;
    assert.approximately(convertHandler.convert(input, initUnit), expected, 0.1);
  });
});


*/