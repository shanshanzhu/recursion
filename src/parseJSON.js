// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  console.log("");
  console.log(json);
  if (json === 'true'){
    return true;
  } else if (json === 'false'){
    return false;
  } else if (json === 'null'){
    return null;
  } else if (json.charAt(0) === '"'){
    return json.slice(1,-1);
  } else if (typeof(json) === 'number') {
    return json;
  } else if (json.charAt(0) === '['){
    return _.map(praseJSON(json));
  } else if (json.charAt(0) === '{'){
    for (var key in keys) {

    }
  }
};
