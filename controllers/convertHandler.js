function ConvertHandler() {
  
  this.getNum = function(input) {

/*

//***************************************

const getNum2 = (input) => {
  if(input === '') return 1
  const regex = /^\d+(?:\.\d+)?(?:\d+)?[a-zA-Z]+$/
  if(regex.test(input)){
    
    
    return 'hola'
  }
  return 'bye'
}

getNum2('L')

*/

    const regex = /[.,]/
    const num = /\d+/
    let result = ''
    
    if(!regex.test(input) && num.test(input)){
      let arr = input.split('')
      for (let i = 0; i < arr.length; i++) {
        if(num.test(arr[i]) ){
          result+=arr[i]
        }
      } 
      return parseInt(result)
    }
    return 'invalid number'
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
