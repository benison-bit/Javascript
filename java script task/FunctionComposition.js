function compose(f,g) {
    return function(a) 
    { 
      if (arguments.length > 1) 
        return f.call(null, g.apply(null, arguments));
      else 
        return f(g(a));
    }
  }