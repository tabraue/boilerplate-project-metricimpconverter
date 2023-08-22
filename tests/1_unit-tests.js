const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();


suite('Unit Tests', function(){
    test('Read whole number input', () =>{
        assert.strictEqual(convertHandler.getNum('60kg'), 60, 'Number -not decimal- can be read')
        assert.strictEqual(convertHandler.getNum('6 2kg'), 62, 'Number -not decimal- can be read')
/*         assert.notStrictEqual(convertHandler.getNum('kg', 6, 'Invalid format'))
        assert.notStrictEqual(convertHandler.getNum('6.2kg', 62, 'Invalid format')) */
    })
    test('Read decimal number input', () =>{
        assert.strictEqual(convertHandler.getNum('6.0kg'), 6, 'Decimal number can be read')
        assert.strictEqual(convertHandler.getNum('6.2kg', 6.2, 'Decimal number can be read'))
        assert.notStrictEqual(convertHandler.getNum('kg', 6, 'Invalid format'))
        assert.notStrictEqual(convertHandler.getNum('6.2kg', 62, 'Invalid format'))
    })
});

/*


suite('Unit Tests', function(){
 it('should correctly read a whole number input', function() {
    const input = '42L';
    const expected = 42;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

  it('should correctly read a decimal number input', function() {
    const input = '3.14L';
    const expected = 3.14;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

  it('should correctly read a fractional input', function() {
    const input = '1/2L';
    const expected = 0.5;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

  it('should correctly read a fractional input with a decimal', function() {
    const input = '3.5/2L';
    const expected = 1.75;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

  it('should correctly return an error on a double-fraction', function() {
    const input = '3/2/3L';
    assert.strictEqual(convertHandler.getNum(input), 'invalid number');
  });

  it('should correctly default to a numerical input of 1 when no numerical input is provided', function() {
    const input = 'kg';
    const expected = 1;
    assert.strictEqual(convertHandler.getNum(input), expected);
  });

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