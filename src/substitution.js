// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	// you can add any code you want within this function scope

	function substitution(input, alphabet, encode = true) {
		const uniqueCheck = new Set(alphabet).size;
		if (!alphabet || alphabet.length !== 26 || uniqueCheck !== 26) return false;

		input = input.toLowerCase();

		const control = "abcdefghijklmnopqrstuvwxyz";

		if (encode) {
			return input.split("").reduce((acc, char) => {
				char === " " ? (acc += char) : (acc += alphabet[control.indexOf(char)]);
				return acc;
			}, "");
		} else {
			return input.split("").reduce((acc, char) => {
				char === " " ? (acc += char) : (acc += control[alphabet.indexOf(char)]);
				return acc;
			}, "");
		}
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };