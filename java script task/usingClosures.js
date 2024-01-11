var Cat = (function () {
    const cats = [];
    
    return class Cat {
      constructor(name, weight) {
        if (!name || !weight) throw Error();
            
        Object.defineProperty(this, "weight", {
          get: () => this._weight,
          set: (v) => (this._weight = v)
        })
  
        this.name = name;
        this.weight = weight;
        cats.push(this);
      }
  
      static averageWeight() {
        return cats.map(cat => cat.weight).reduce((a, b) => a + b, 0) / cats.length;
      }
    }
  }());