const fields = document.querySelectorAll(".textarea");
const text = document.getElementById("text");
const textContent = text.value;
const morse = document.getElementById("morse");
const morseContent = morse.value;

// This function returns morse code as text and text as morse code
const translate = (char) => {
	switch (char) {
		case "a":
			return ".-";
			break;
		case "A":
			return ".-";
			break;
		case ".-":
			return "A";
			break;

		case "b":
			return "-...";
			break;
		case "B":
			return "-...";
			break;
		case "-...":
			return "B";
			break;

		case "c":
			return "-.-.";
			break;
		case "C":
			return "-.-.";
			break;
		case "-.-.":
			return "C";
			break;

		case "d":
			return "-..";
			break;
		case "D":
			return "-..";
			break;
		case "-..":
			return "D";
			break;

		case "e":
			return ".";
			break;
		case "E":
			return ".";
			break;
		case ".":
			return "E";
			break;

		case "f":
			return "..-.";
			break;
		case "F":
			return "..-.";
			break;
		case "..-.":
			return "F";
			break;

		case "g":
			return "--.";
			break;
		case "G":
			return "--.";
			break;
		case "--.":
			return "G";
			break;

		case "h":
			return "-...";
			break;
		case "H":
			return "....";
			break;
		case "....":
			return "H";
			break;

		case "i":
			return "..";
			break;
		case "I":
			return "..";
			break;
		case "..":
			return "I";
			break;

		case "j":
			return ".---";
			break;
		case "J":
			return ".---";
			break;
		case ".---":
			return "J";
			break;

		case "k":
			return "-.-";
			break;
		case "K":
			return "-.-";
			break;
		case "-.-":
			return "K";
			break;

		case "l":
			return ".-..";
			break;
		case "L":
			return ".-..";
			break;
		case ".-..":
			return "L";
			break;

		case "m":
			return "--";
			break;
		case "M":
			return "--";
			break;
		case "--":
			return "M";
			break;

		case "n":
			return "-.";
			break;
		case "N":
			return "-.";
			break;
		case "-.":
			return "N";
			break;

		case "o":
			return "---";
			break;
		case "O":
			return "---";
			break;
		case "---":
			return "O";
			break;

		case "p":
			return ".--.";
			break;
		case "P":
			return ".--.";
			break;
		case ".--.":
			return "P";
			break;

		case "q":
			return "--.-";
			break;
		case "Q":
			return "--.-";
			break;
		case "--.-":
			return "Q";
			break;

		case "r":
			return ".-.";
			break;
		case "R":
			return ".-.";
			break;
		case ".-.":
			return "R";
			break;

		case "s":
			return "...";
			break;
		case "S":
			return "...";
			break;
		case "...":
			return "S";
			break;

		case "t":
			return "-";
			break;
		case "T":
			return "-";
			break;
		case "-":
			return "T";
			break;

		case "u":
			return "..-";
			break;
		case "U":
			return "..-";
			break;
		case "..-":
			return "U";
			break;

		case "v":
			return "...-";
			break;
		case "V":
			return "...-";
			break;
		case "...-":
			return "V";
			break;

		case "w":
			return ".--";
			break;
		case "W":
			return ".--";
			break;
		case ".--":
			return "W";
			break;

		case "x":
			return "-..-";
			break;
		case "X":
			return "-..-";
			break;
		case "-..-":
			return "X";
			break;

		case "y":
			return "-.--";
			break;
		case "Y":
			return "-.--";
			break;
		case "-.--":
			return "Y";
			break;

		case "z":
			return "--..";
			break;
		case "Z":
			return "--..";
			break;
		case "--..":
			return "Z";
			break;

		case "0":
			return "-----";
			break;
		case "-----":
			return "0";
			break;

		case "1":
			return ".----";
			break;
		case ".----":
			return "1";
			break;

		//continue here
		case "2":
			return "..---";
			break;
		case "..---":
			return "2";
			break;

		case "3":
			return "...--";
			break;
		case "...--":
			return "3";
			break;

		case "4":
			return "....-";
			break;
		case "....-":
			return "4";
			break;

		case "5":
			return ".....";
			break;
		case ".....":
			return "5";
			break;

		case "6":
			return "-....";
			break;
		case "-....":
			return "6";
			break;

		case "7":
			return "--...";
			break;
		case "--...":
			return "7";
			break;

		case "8":
			return "---..";
			break;
		case "---..":
			return "8";
			break;

		case "9":
			return "----.";
			break;
		case "----.":
			return "9";
			break;

		case ".":
			return ".-.-.-";
			break;
		case ".-.-.-":
			return ".";
			break;

		case ",":
			return "--..--";
			break;
		case "--..--":
			return ",";
			break;

		case "?":
			return "..--..";
			break;
		case "..--..":
			return "?";
			break;

		case "'":
			return ".----.";
			break;
		case ".----.":
			return "'";
			break;

		case "!":
			return "-.-.--";
			break;
		case "-.-.--":
			return "!";
			break;

		case "(":
			return "-.--.";
			break;
		case "-.--.":
			return "(";
			break;

		case ")":
			return "-.--.-";
			break;
		case "-.--.-":
			return ")";
			break;

		case "&":
			return ".-...";
			break;
		case ".-...":
			return "&";
			break;

		case ":":
			return "---...";
			break;
		case "---...":
			return ":";
			break;

		case ";":
			return "-.-.-.";
			break;
		case "-.-.-.":
			return ";";
			break;

		case "=":
			return "-...-";
			break;
		case "-...-":
			return "=";
			break;

		case "+":
			return ".-.-.";
			break;
		case ".-.-.":
			return "+";
			break;

		case "-":
			return "-....-";
			break;
		case "-....-":
			return "_";
			break;

		case '"':
			return ".-..-.";
			break;
		case ".-..-.":
			return '"';
			break;

		case "$":
			return "...-..-";
			break;
		case "...-..-":
			return "$";
			break;

		case "@":
			return ".--.-.";
			break;
		case ".--.-.":
			return "@";
			break;

		case " ":
			return "/";
			break;

		case "/":
			return " ";
			break;

		case "\n":
			return "/\n";
			break;

		case "":
			return "";
			break;

		default:
			return "An invalid character has been entered.";
			break;
	}
};

// This will loop through all characters in the text field, and return another string with the translate func applied to it (in morse code)
const textConvert = (str, func) => {
	let splitStr = str.split("");
	return splitStr.map((char) => func(char)).join(" ");
};

// This does the same for the morse field, and output text
const morseConvert = (str, func) => {
	let splitStr = str.split(" ");
	return splitStr.map((char) => func(char)).join("");
};

text.addEventListener("input", () => {
	morse.value = textConvert(text.value, translate);
});

morse.addEventListener("input", () => {
	text.value = morseConvert(morse.value, translate);
});
