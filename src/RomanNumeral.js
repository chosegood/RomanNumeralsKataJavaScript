function romanNumeral(number) {

	var SYMBOLS = {
		"M":1000,
		"CM":900, "D":500, "CD":400,
		"C" : 100, "XC" : 90, "L" : 50,
		"XL" : 40, "X" : 10, "IX" : 9,
		"V" : 5, "IV" : 4, "I" : 1
	};

	var result = "";
	for (symbol in SYMBOLS) {
		while (number >= SYMBOLS[symbol]) {
			result += symbol;
			number -= SYMBOLS[symbol];
		};
	};

	return result;
};