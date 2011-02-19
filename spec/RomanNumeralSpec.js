describe("romanNumeral()", function() {

	it("should not return anything for 0", function() {
		expect(romanNumeral(0)).toEqual("");
	});

	it("should calculate single numerals", function() {
		expect(romanNumeral(1)).toEqual("I");
		expect(romanNumeral(5)).toEqual("V");
		expect(romanNumeral(10)).toEqual("X");
		expect(romanNumeral(50)).toEqual("L");
		expect(romanNumeral(100)).toEqual("C");
		expect(romanNumeral(500)).toEqual("D");
		expect(romanNumeral(1000)).toEqual("M");
	});

	it("should calculate additions", function() {
		expect(romanNumeral(2)).toEqual("II");
		expect(romanNumeral(3)).toEqual("III");
		expect(romanNumeral(8)).toEqual("VIII");
		expect(romanNumeral(37)).toEqual("XXXVII");
		expect(romanNumeral(200)).toEqual("CC");
		expect(romanNumeral(2000)).toEqual("MM");
		expect(romanNumeral(3204)).toEqual("MMMCCIV");
		expect(romanNumeral(3738)).toEqual("MMMDCCXXXVIII");
	});

	it("should calculate subtractions", function() {
		expect(romanNumeral(4)).toEqual("IV");
		expect(romanNumeral(9)).toEqual("IX");
		expect(romanNumeral(40)).toEqual("XL");
		expect(romanNumeral(44)).toEqual("XLIV");
		expect(romanNumeral(199)).toEqual("CXCIX");
		expect(romanNumeral(400)).toEqual("CD");
		expect(romanNumeral(449)).toEqual("CDXLIX");
		expect(romanNumeral(900)).toEqual("CM");
	});

});
