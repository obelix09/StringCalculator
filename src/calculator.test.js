const calculator = require('./calculator');

it("should return 0 when string is empty", () => {
	expect(calculator("")).toBe(0);
});

it("should return a number when string has only one number", () => {
	expect(calculator("3")).toBe(3);
});

it("should return sum of two numbers when string has two numbers", () => {
	expect(calculator("3,2")).toBe(5);
});

it("should return sum of 8 numbers", () => {
	expect(calculator("1,2,3,4,5,6,7,8")).toBe(36);
});

it("should return sum of 16 numbers", () => {
	expect(calculator("0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1")).toBe(8);
});