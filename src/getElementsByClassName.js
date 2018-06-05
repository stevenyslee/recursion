// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
// 	let array = [];
//   if( this.childNodes ){
//   	for( let i = 0; i < this.childNodes; i++ ){
//   		let childNode = this.childNodes[i];
//   		if( this.childNodes[i].className === className ){
//   			array.push(this.childNodes[i]);
//   		}
//   		this.childNodes[i].getElementsByClassName(className);
//   	}
//   } else {
// 		if( this.className === className ){
// 				array.push(this);
// 		}
// 		return;
//   }
//   return;
// };

var getElementsByClassName = function(className) {
	let array = [];
	if( this.className === className ){
		array.push(this);
	}
  if( this.childNodes ){
  	for( let i = 0; i < this.childNodes; i++ ){
  		this.childNodes[i].getElementsByClassName(className);
  	}
  }
  return;
};