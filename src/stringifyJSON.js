// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON) + ']';
  } else if (obj.constructor === Object) {
    var temp = [];
    for ( var key in obj ) {
      if (typeof key !== 'undefined' && typeof key !== 'function' &&
          typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        temp.push('\"' + key + '\"' + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + temp.join(',') + '}';
  }
};
