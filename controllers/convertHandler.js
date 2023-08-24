const METRIC = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']


function ConvertHandler() {
  
  this.getNum = function(input) {
    const splitInput = input.split('/');
    let result;

    if (splitInput.length === 1) {
      result = parseFloat(input) || 1;
    } else if (splitInput.length === 2) {
      const numerator = parseFloat(splitInput[0]);
      const denominator = parseFloat(splitInput[1]);
      
      if (isNaN(numerator) || isNaN(denominator)) {
        result = 'invalid number';
      } else {
        result = numerator / denominator;
      }
    } else {
      result = 'invalid number';
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
