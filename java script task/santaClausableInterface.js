function isSantaClausable(obj) {
    // TODO
     let count = 0;
  
    if(obj.sayHoHoHo && obj.sayHoHoHo !== true) {
      count++
    }
    if(obj.distributeGifts && obj.distributeGifts !== true) {
      count++
    }
    if(obj.goDownTheChimney && obj.goDownTheChimney !== true) {
      count++
    }
  
    if(count === 3) {
      return true
    } 
    
    return false
  }