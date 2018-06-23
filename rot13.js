
//ROT-13 Very basic Caesar cipher.
RotThirteen = function(input) {
    var letters = ['a','b','c','d','e','f', 'g', 'h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //We transform the string into an array.
    var result = input.split('').map(function(char){
    	var isInUpperCase = false;
    	//We check if the actual char is in upper case
    	if(char == char.toUpperCase()){
    		isInUpperCase = true;
    		var lowerCaseChar = char.toLowerCase();
    		//We save the actual character index
    		var index = letters.indexOf(lowerCaseChar);
    	}else{
    		var index = letters.indexOf(char);
    	}
    	//If the char was not found, it's possibly a special one char, so we just return it.
    	//Otherwise we substituted with the required char.
    	if(index == -1){
    		return char;
    	}
    	else{
    		if(isInUpperCase){
    			return letters[(index+13)%26].toUpperCase();
    		}else{
    			return letters[(index+13)%26];
    		}
    	}
    });
    //We return an string formed by the array.
    return result.join('');
};