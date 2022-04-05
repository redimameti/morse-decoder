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
};

const morseObj = Object.entries(alphabetObj).reduce(
	(acc, [key, value]) => ((acc[value] = key), acc),
	{},
);

const testFunc = (obj) => {
	if (Object.entries(obj).includes(char)) {
		return "null";
	}
};

const translate = (str, obj) => {
	let splitStr = str.split("");
	const indexArr = splitStr.map((char) => Object.keys(obj).indexOf(char));
	return indexArr.map((num) => Object.values(obj)[num]).join(" ");
};

text.addEventListener("input", () => {
	morse.value = translate(text.value, alphabetObj);
});

morse.addEventListener("input", () => {
	text.value = translate(morse.value, morseObj);
});
