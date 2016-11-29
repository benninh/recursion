// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // possible JSON values to read and parse
  // null, number, boolean, string, array, object (nested values will be dealt with via recursion)
  // check for json values

  // initialize result holder of the parsed JSON
  var parsedResult = 0;

  // if "null" return null
  if(json === "null"){
  	parsedResult = null;
  	//console.log("returned: " + parsedResult);
  }

  // if "boolean" return boolean
  if(json === "true"){
  	parsedResult = true;
  	//console.log("returned: " + parsedResult);
  }
  else if(json === "false"){
  	parsedResult = false;
  	//console.log("returned: " + parsedResult);
  }
  
  // if "number" return number

  // if "string" return string


  //return parsed JSON
  return parsedResult;
};
