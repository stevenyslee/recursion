// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if( json[0] === '[' ){
  	return [];
  }
  if( json[0] === '{' ){
  	return {};
  }
};
