/*
------------------Online References-------------------

https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

*/
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // BIG PICTURE ------ checking order
  // bigNode(window.document) > childNodesOfDocument > childNodesOfCN > .... > until we can see a class list
  //                             |-------------recursion------------------|
  // when looking at class list, check for className
  /*
	initialize resultsArray
	define recursion function
	  check if current node has a class list
	    if yes, check classList for className --> push to results array
	  check if current node has child nodes
	    if yes, recurse through the childNode and go deeper in
	call recursive function
	return resultsArray
 */
  // initialize array to hold results
  var resultsArray = [];

  // write a function that takes a node as an argument to traverse the "tree"
  var readNode = function(thisNode){
    //console.log(thisNode.classList !== undefined ?  thisNode.classList.contains(className) : 'undefined')

    if (thisNode.classList !== undefined) {
      if(thisNode.classList.contains(className)) {
        resultsArray.push(thisNode)
      }
    }

    if (thisNode.hasChildNodes()) {
      // _.each(Array.prototype.slice.call(thisNode.childNodes), function(item) {
      thisNode.childNodes.forEach(function(item) { //reading nodes has native forEach that is usable
          readNode(item);
      });
    }

    /*if (thisNode.hasChildNodes()) {
      _.each(Array.prototype.slice.call(thisNode.childNodes), function(item) {
          readNode(item);
      });
    }
	// _.each([].slice.call) call is redundant because nodes have a native forEach to use*/
  };

  //readNode(window.document);
  // readNode(document.body);


  // return results array after we finish pushing to it
  //console.log('resultsArray ', resultsArray)
  return resultsArray;
};
