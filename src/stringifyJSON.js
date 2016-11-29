// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var resultString = ''; // initialize the string variable to return
  
  // check what the type of the obj being passed is
  if(obj === null){ // when object is null, we return null
    resultString = 'null';
  }
  else if(typeof(obj) === 'string'){ // when object is a string, return the string being string'd '"string"'
    resultString = '"' + obj + '"';
  }
  else if(Array.isArray(obj)){ // handles array inputs
    if(obj.length === 0){ //when the array is empty, return a string of empty array
      resultString = '[]';
    }
    else{//when array is NOT empty
      // send the array into a recursive call of stringifyJSON to take care of nested arrays
      resultString =  '[' + _.map(obj, function(item){
        //console.log('item: ', item);
        //console.log('stringifyJSON(item): ', stringifyJSON(item));

        // return accumulator += stringifyJSON(item);
        // console.log(accumulator.push(stringifyJSON(item)));
        return stringifyJSON(item);

      }) + ']'; //'[8]'
    }
  }
  else if(typeof(obj) === 'object'){ // handles object inputs
    //example: input {x: 5} --> outputs '{"x": 5}'
    //example: input {x: "five"} --> outputs '{"x": "five"}'
    if(jQuery.isEmptyObject(obj)){ //if the object is empty, return a string of empty object
      resultString = '{}';
    }
    else{

      //var a = ['a','b','c'];
      //a.join(); --> 'a,b,c'
      //initialize array variable to store the stringified properties and values in its indexes for .join() method
      var arr = [];
      //console.log('hello');

      for (var key in obj){ //for every property in the object
        if(obj[key] === undefined || typeof(obj[key]) === 'function'){ // if the object @ key is undefined or a function
        	break; // break out of the for loop and return empty object
        }
        arr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key])); //push the "property":value from recursive stringified calls to arr
      }
      resultString = '{' + arr.join() + '}'; //return the result string as '{joined arr}'
    }
  }
  else{ //base case is where we find a value to string
    //handles primitive numbers and booleans
    // console.log(toString({});
    //{}.toString;
    resultString = obj.toString();
  }
  //return a string
  // console.log(resultString);
  return resultString;
};