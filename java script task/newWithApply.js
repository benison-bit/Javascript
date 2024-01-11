function construct(Class) {
    var object =  Object.create(Class.prototype);
     var arrayOfArguments = Object.values(arguments);
     Class.apply(object, arrayOfArguments.slice(1));
     return object;
 }