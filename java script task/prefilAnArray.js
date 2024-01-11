function prefill(n, v) {
    if(n === 0 || n === '0') return [];
  
    if(!parseInt(n) || n < 0 ){
  
      let typeError = new TypeError();
      typeError.name = "TypeError";
      typeError.message =  n + " is invalid";
      throw typeError
    };
  
    return new Array(n).fill(v); 
  }