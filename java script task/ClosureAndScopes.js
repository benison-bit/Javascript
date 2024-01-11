function createFunctions(n) {
    var callbacks = [];
    var foo = function(x)
    {
      return function(){
        return x;
      }
    }
    for (var i=0; i<n; i++) {
      callbacks.push(foo(i));
    } 
    return callbacks;
  }