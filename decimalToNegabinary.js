(function (exports) {
  'use strict';

  exports.decimalToNegabinary = function (number){
    if (number === 0) { return '0'; }

    var value = number,
        sequence = [], 
        lastBit = 0;

    lastBit = Math.abs(value%2);
    sequence.push(lastBit);
    
    while ( value !== 0 ){        
      value = Math.floor( (value - lastBit) / -2 ) ;      
      lastBit = Math.abs(value%2) ; 
      sequence.push(lastBit)          
    } 
    
    // remove trailing 0s
    while( sequence[sequence.length-1] === 0 ){
        sequence.pop();
    }

    return sequence.reverse().join('');
  }
})(typeof window === 'undefined' ? module.exports : window); 
