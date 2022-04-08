import {translateToMorse} from "./script";
import {translateToText} from "./script";
import {alphabetObj} from "./script";
import {morseObj} from "./script";

describe("Testing translateToMorse(str, obj)", () => {
	const paramError = new Error("This function needs two valid arguments.");

	it("should return the right results with valid arguments", () => {
		expect(translateToMorse("hello", alphabetObj)).toBe(
			".... . .-.. .-.. ---",
		);
		expect(translateToText(".... . .-.. .-.. ---", morseObj)).toBe("hello");

		expect(translateToMorse("My name is Redim.", alphabetObj)).toBe(
			"-- -.-- / -. .- -- . / .. ... / .-. . -.. .. -- .-.-.-",
		);
		expect(
			translateToText(
				"-- -.-- / -. .- -- . / .. ... / .-. . -.. .. -- .-.-.-",
				morseObj,
			),
		).toBe("My name is Redim.");

		expect(translateToMorse("This is a number: 54", alphabetObj)).toBe(
			"- .... .. ...  /  .. ...  /  .-  /  -. ..- -- -... . .-. ---...  /  ..... ....-",
		);
		expect(
			translateToText(
				"- .... .. ...  /  .. ...  /  .-  /  -. ..- -- -... . .-. ---...  /  ..... ....-",
				morseObj,
			),
		).toBe("This is a number: 54");
	});
});
