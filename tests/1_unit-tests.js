const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();


suite('Unit Tests', function(){
    test('Read whole number input', () =>{
        assert.strictEqual(convertHandler.getNum('60kg'), 60, 'Number -not decimal- can be read')
        assert.strictEqual(convertHandler.getNum('6 2kg', 62, 'Number -not decimal- can be read'))
        assert.notStrictEqual(convertHandler.getNum('kg', 6, 'Invalid number format'))
        assert.notStrictEqual(convertHandler.getNum('6.2kg', 62, 'Invalid number format'))
    })
});

/*
        
        assert.notTypeOf('string', 'number', 'it is not a number')
        assert.notTypeOf([6, 'string'], 'number', 'it is not a number')
        assert.notTypeOf({a:'string'}, 'number', 'it is not a number')
        assert.notTypeOf(/aeiou/, 'number', 'it is not a number')
        assert.notTypeOf(null, 'number', 'it is not a number')
        assert.notTypeOf(undefined, 'number', 'it is not a number')

*/