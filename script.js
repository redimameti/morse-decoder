const fields = document.querySelectorAll(".textarea");
const text = document.getElementById("text");
const morse = document.getElementById("morse");

const alphabetObj = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----.",
	0: "-----",

	".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"'": ".----.",
	"/": "-..-.",
	"(": "-.--.",
	")": "-.--.-",
	"&": ".-...",
	":": "---...",
	";": "-.-.-.",
	"=": "-...-",
	"+": ".-.-.",
	"-": "-....-",
	_: "..--.-",
	'"': ".-..-.",
	$: "...-..-",
	"!": "-.-.--",
	"@": ".--.-.",
	" ": " / ",
	"\n": "\n",
};

const morseObj = Object.entries(alphabetObj).reduce(
	(acc, [key, value]) => ((acc[value] = key), acc),
	{},
);
morseObj[` / `] = "x"
console.log(morseObj[` / `])

const translateToMorse = (str, obj) => {
	const indexArr = str.map((char) => Object.keys(obj).indexOf(char));
	return indexArr.map((num) => Object.values(obj)[num]).join(" ");
};

const translateToText = (str, obj) => {
	const indexArr = str.map((char) => Object.keys(obj).indexOf(char));
	const newStr = indexArr.map((num) => Object.values(obj)[num]).join(" ");
	return newStr.replace(/\s/g,"").replace(/\s+/g,” “);
};

text.addEventListener("input", () => {
	morse.value = translateToMorse(text.value.toLowerCase().split(""), alphabetObj);
});

morse.addEventListener("input", () => {
	if (morse.value.match(/[a-zA-Z]/)) {
		alert("Invalid character entered.");
		morse.value = "";
	}
	text.value = translateToText(morse.value.split(" "), morseObj);
});
