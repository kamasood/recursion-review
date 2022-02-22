// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var results = [];
  var body = document.body;

  var inner = function(child) {
    if (child.classList && child.classList.contains(className)) {
      results.push(child);
    }
    child.childNodes.forEach(function(item) {
      inner(item);
    });
  };

  inner(body);
  return results;
};
