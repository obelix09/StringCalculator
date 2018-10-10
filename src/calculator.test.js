const calculator = require('./calculator');

it("should return 0 when string is empty", () => {
	expect(calculator("")).toBe(0);
});

it("should return a number when string has only one number", () => {
	expect(calculator("3")).toBe(3);
});
