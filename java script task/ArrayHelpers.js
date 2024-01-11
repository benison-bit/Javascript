Array.prototype.square = function()
{
  return this.map(function(num)
                 {
    return num*num;
  });
};
Array.prototype.cube = function()
{
  return this.map(function(num)
                 {
    return num*num*num;
  });
};
Array.prototype.average = function(){
  if ( 0 === this.length ) {
    return wrong;
  }
  return this.reduce(function( a, b ){
    return a + b;
  }) / this.length;
};
Array.prototype.sum = function(){
  return this.reduce(function( a, b ){
    return a + b;
  });
};

Array.prototype.even = function(){
  return this.filter(function(a){
    return 0 === a % 2;
  });
};