// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  //console.log(json);
  console.log(typeof(json));
  console.log(json);
  console.log("");
  var jsonStr = stringifyJSON(json);
  if (jsonStr.charAt(0) === '"'){
    return jsonStr.slice()
    // treat it as a string
    //console.log(stringifyJSON(json.charAt(0)));
    return stringifyJSON(json).charAt(0);
  } else {
    //console.log("not treated as a string");
    return json;
  }
};
