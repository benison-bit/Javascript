function compose() {
    // Your solution
      var m=arguments.length
    var arr=[];
      for (var i=0; i<m; ++i)
        arr.push(arguments[m-1-i]);
    return function (n){
    for (var i=0; i<m; ++i)
      n=arr[i](n);
    return n}
  
  }