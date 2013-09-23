// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  } else if (Array.isArray(obj)){
    return '[' + obj.map(function(item){
      return stringifyJSON(item);
    }) + ']';
  } else if (obj && typeof obj === 'object'){
    return '{' + _.filter(_(obj).map(function(value, key){
      if (typeof value !== 'function' && typeof value !== 'undefined'){
        return stringifyJSON(key) + ':' + stringifyJSON(value);
      }
    }),function(item){
      if(item !== undefined) {
        return item;
      }
    }) + '}';
  } else {
  return obj + '';
  }
};
//if (typeof value !== 'function' || typeof obj !== 'undefined'){