function partitionOn(pred,items) {
    var result = 0; 
  for(var item in items) {
    if(!pred(items[item]))
       { items.splice((result++), 0, items.splice(item, 1)[0]); 
    }
  }
  return result;
}