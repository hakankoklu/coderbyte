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

function WordCount(str){
	return str.split(' ').length;
}

function WordCountRegEx(str){
	return str.match(/\s/g).length + 1;
}

function ExOh(str){
	var xs = str.match(/x/gi);
	var os = str.match(/o/gi);
	if (xs != null){var countX = xs.length}
	if (os != null){var countO = os.length}
	if (countX != countO){
		return 'false';
	}
	else{
		return 'true';
	}
}

function Palindrome(str){
	var new_str = str.trim();
	new_str = new_str.split(' ').join('');
	var rev_string = '';
	for (var i = new_str.length-1; i >= 0; i--){
		rev_string += new_str[i];
	}
	return new_str === rev_string;
}

function RunLength(str){
	var result = '';
	var current = 0;
	var count = 1;
	var i = 0;
	//debugger;
	while (i < str.length){
		while (str[current] == str[current + count]){
			count++;
		}
		result += str[current].toString() + count.toString();
		i += count;
		current = i;
		count = 1;
	}
	return result;
}

function ArithGeo(arr){
	var diff = [];
	for (var i = 0; i < arr.length-1; i++){
		diff.push(arr[i+1] - arr[i]);
	}
	var arit = true;
	for (var i = 1; i < diff.length; i++){
		if(diff[i] != diff[0]){
			arit = false;
			break;
		}
	}
	var geo = true;
	for (var i = 1; i < diff.length; i++){
		if(diff[i]/diff[i-1] != diff[1]/diff[0]){
			geo = false;
			break;
		}
	}
	if (arit === true){
		return "Arithmetic";
	}
	else if (geo ===true){
		return "Geometric";
	}
	else{
		return -1;
	}
}

function ArrayAddition(arr){
	arr.sort(function(a, b) {
    	return a - b;
	});
	var largest = arr[arr.length];
}

function LetterCountI(str){
	var word_arr = str.split(' ');
	var repeat_count = [];
	for (var i = 0; i < word_arr.length; i++){
		var largest = 0;
		for (var j = 0; j < word_arr[i].length; j++){
			var re = new RegExp(word_arr[i][j], "gi");
			var repeated = word_arr[i].match(re).length;
			if (repeated > largest){
				largest = repeated;
			}
		}
		repeat_count.push(largest);
	}
	var repeated = false;
	var most_repeated = 1;
	var most_index = 0;
	for (var i = 0; i < repeat_count.length; i++){
		if (repeat_count[i] > 1){
			repeated = true;
		}
		if (repeat_count[i] > most_repeated){
			most_repeated = repeat_count[i];
			most_index = i;
		}
	}
	if (repeated != false){
		return word_arr[most_index];
	}
	else{
		return -1;
	}
}

function SecondGreatLow(arr){
	arr.sort(function(a, b) {return a - b;});
	for (var i = 0; i < arr.length-1; i++){
		if (arr[i] === arr[i+1]){
			arr.splice(i+1,1);
			i--;
		}
	}
	if (arr.length === 1){
		return arr[0].toString() + ' ' + arr[0].toString();
	}
	return arr[1].toString() + ' ' + arr[arr.length-2].toString();
}

function CaesarCipher(str,num) {
	var alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var result = '';
	for (var i = 0; i < str.length; i++){
		var ind = alphabet.indexOf(str[i]);
		if (ind === -1){
			result += str[i];
		}
		else{
			result += alphabet[ind+num];
		}
	}
	return result;
}

function DivisionStringified(num1, num2){
	var result = Math.round(num1/num2).toString();
	var new_result = '';
	var reslen = result.length;
	var dotloc = reslen % 3;
	for (var i = 0; i < reslen; i++){
		if ((i - reslen) % 3 === 0 && i != 0){
			new_result += ',';
		}
		new_result += result[i];
	}
  return new_result;
}

function Consecutive(arr){
	arr.sort(function(a, b) {return a - b;});
	return arr[arr.length - 1] - arr[0] + 1 - arr.length;
}

function CountingMinutes(str){
	var start = str.split('-')[0];
	var fin = str.split('-')[1];
	var start_day = start.substring(start.length - 2);
	var fin_day = fin.substring(fin.length - 2);
	var start_time = start.substring(0,start.length-2).split(':');
	var fin_time = fin.substring(0,fin.length-2).split(':');
	if (fin_day === start_day){
		var past_time = fin_time[0]*60 + parseInt(fin_time[1]) - start_time[0]*60 - parseInt(start_time[1]);
		if (past_time < 0){
			past_time += 24*60;
		} 
		return past_time;
	}
	else{
		return fin_time[0]*60 + parseInt(fin_time[1]) - start_time[0]*60 - parseInt(start_time[1]) + 12*60;
	}
}

function MeanMode(arr){
	arr.sort(function(a, b) {return a - b;});
	var most_freq = 1;
	var count = 1;
	var mean = 0;
	var mode = 0;
	var sum = 0;
	for (var i = 1; i < arr.length; i++){
		if (arr[i] === arr[i - 1]){
			count++;
		}
		else{
			count = 1;
		}
		if (count > most_freq){
			most_freq = count;
			mode = arr[i];
		}
		sum += arr[i];
	}
	sum += arr[0];
	mean = sum/arr.length;
	return mean === mode ? 1 : 0;
}

function DashInsert(num){
	var result = '';
	var numString = num.toString();
	for (var i = 1; i <= numString.length; i++){
		result += numString[i - 1];
		if (numString[i-1] % 2 === 1 && numString(i) % 2 === 1){
			result += '-';
		}
	}
	return result;
}

function SwapCase(str){
	var a = 'abcdefghijklmnopqrstuvwxyz';
	var b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var result = '';
	for (var i = 0; i < str.length; i++){
		if (a.indexOf(str[i]) != -1){
			result += str[i].toUpperCase();
		}
		else if (b.indexOf(str[i]) != -1){
			result += str[i].toLowerCase();
		}
		else{
			result += str[i];
		}
	}
	return result;
}

function NumberAddition(str){
	var nums = str.replace(/\D/g, ' ').split(' ');
	result = 0;
	for (var i = 0; i < nums.length; i++){
		if (nums[i] != false)
		result += parseInt(nums[i]);
	}
	return result;
}

function ThirdGreatest(strArr){
	strArr.sort(function(a, b) {return b.length - a.length;});
	return strArr[2];
}