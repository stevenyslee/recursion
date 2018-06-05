// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if( typeof obj === 'undefined' || obj === 'undefined' ){
		return '';
	}
	if( obj === null ){
		return 'null';
	}
	if( typeof(obj) === 'function' ){
		return '';
	}
	if( typeof(obj) === 'object' && !Array.isArray(obj) ){
		let string = '{';
		let keys = Object.keys(obj);
		for( let i = 0; i < keys.length; i++ ){
			if( keys[i] !== 'functions' && keys[i] !== 'undefined' ){
				string += '"' + keys[i] + '":' + stringifyJSON( obj[keys[i]] );
				if( i !== keys.length - 1 ){
					string += ',';
				}
			}
		}
		return string += '}';
	}
	if( Array.isArray(obj) ){
		let string = '[';
		for( let i = 0; i < obj.length; i++ ){
			string += stringifyJSON(obj[i]);
			if( i !== obj.length - 1){
				string += ',';
			}
		}
		return string + ']';
	}
	if( typeof(obj) === 'string' ){
		return '"' + obj + '"';
	}
	else {
		return '' + obj;
	}
};
