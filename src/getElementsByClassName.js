// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {
  node = node || document.documentElement;
  var results = [];
  if (node.classList && node.classList.contains(className)){
    results.push(node);
  }
  _.each(node.childNodes, function (child) {
    var subresults = getElementsByClassName(className,child);
    results = results.concat(subresults);    // body...
  });
  return results;
};
