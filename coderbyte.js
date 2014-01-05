function SimpleSymbols(str){
	var result = 'true';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var i = 0; i < alphabet.length; i++){
		if (str.indexOf(alphabet[i]) != -1){
			var place = str.indexOf(alphabet[i]);
			while (str.indexOf(alphabet[i], place) != -1){
				if (str[place-1] != '+' || str[place+1] != '+'){
					return 'false';
				}
				place = str.indexOf(alphabet[i], place+1);
				if (place === -1){break;}
			}
		}
	}
	return result;
}

function CheckNums(num1, num2){
	if (num2 > num1){
		return 'true';
	}
	else if (num1 > num2){
		return 'false';
	}
	else{
		return -1;
	}
}

function TimeConvert(num){
	var hours = Math.floor(num/60);
	var minutes = num % 60;
	return hours.toString() + ':' + minutes.toString();
}

function AlphabetSoup(str){
	var letter_array = str.split('');
	var sorted_letters = letter_array.sort();
	return sorted_letters.join('');
}

function ABCheck(str){
	if (str.match(/a...b/g) != null || str.match(/b...a/g) != null){
		return 'true';
	}
	else{
		return 'false';
	}
}
var getLetterCount = function(str, letter){
	var count = 0;
	var place = str.indexOf(letter);
	while (str.indexOf(letter, place) != -1 ) {
			count++;
			if (str.indexOf(letter, place + 1) != -1){
				place = str.indexOf(letter, place + 1);
			}
			else {break;}
		}
	return count;
}

var getLetterCountRegex = function(str, letter){
	var re = new RegExp(letter, "gi");
	return str.match(re).length;
}

function VowelCount(str){
	return str.match(/a|e|i|o|u/gi).length;
}