// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // create an alias for leading character
  var leadingChar = json[0];
  var endingChar = json[json.length - 1];
  var elementsArray = [];
  var resultArray = [];
  var map = { '{': '}', '[': ']'};
  // if number
  var contents = json.slice(1, json.length - 2);

  // if string

  // if array
  if (map[leadingChar] === endingChar) {
    console.log('error');
    return;
  }
  if (contents.length === 0) {
    return resultArray;
  }


  if (leadingChar === '[') {
    // create a result array
    // test last index for equality with
    // define contents between brackets
    console.log(contents);
    // create our element array with string between brackets, split on ','
    elementsArray = contents.split(',');
    // for each element in element array, push to result array, parseJSON(element)
  } else if (leadingChar === '{') {
    elementsArray = contents.split(':');
  }


  elementsArray.forEach(function(element) {
    resultArray.push(parseJSON(element));
  });
  console.log(resultArray);
  // return result array
  return resultArray;

};


/*
  '{"foo": "", "bar": ""}'
*/