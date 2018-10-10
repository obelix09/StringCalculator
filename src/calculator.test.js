const calculator = require('./calculator');

it("should return 0 when string is empty", () => {
	expect(calculator("")).toBe(0);
});
