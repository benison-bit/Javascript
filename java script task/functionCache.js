function cache(func) {
    let cache = {};
    return function() {
      let n = JSON.stringify(arguments);
      if (n in cache) {
        console.log('Fetching from cache');
        return cache[n];
      }
      else {
        console.log('Calculating result');
        let result = func.apply(null, arguments);
        cache[n] = result;
        return result;
      }
    }
  }