function add(n){
    // Let the currying begin!
    var fn = function(x) {
      return add(n + x);
    };
    
    fn.valueOf = function() {
      return n;
    };
    
    return fn;
  }
  