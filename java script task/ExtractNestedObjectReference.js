Object.prototype.hash = function(string) {
    var arr = string.split('.');
    return arr.reduce(function(person, cv)
    {
      return (person) ? person[cv] : person; 
    }, this);
  }