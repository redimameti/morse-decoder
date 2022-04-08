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

morseObj[` / `] = "s";
morseObj[` `] = "";
// console.log("my name".split(" "))

const translateToMorse = (str, obj) => {
	const charArr = str
		.toLowerCase()
		.split("")
		.map((char) => obj[char]);
	return charArr.join(" ");
};

const translateToText = (str, obj) => {
	return str
		.split(" ")
		.map((char) => obj[char])
		.join(" ");
};

text.addEventListener("input", () => {
	morse.value = translateToMorse(text.value, alphabetObj);
});

morse.addEventListener("input", () => {
	if (morse.value.match(/[a-zA-Z]/)) {
		alert("Invalid character entered.");
		morse.value = "";
	}
	text.value = translateToText(morse.value, morseObj);
});
