// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
	let array = [];

	function checkNode(node){
		if( node.classList ){
			if( (node.classList).contains(className) ){
				array.push(node);
			}
		}
		if( node.childNodes.length > 0 ){
			for( let i = 0; i < node.childNodes.length; i++ ){
				checkNode(node.childNodes[i]);
			}
			return;
		}
		return;
	};

  checkNode(document.body);
  return array;
};

