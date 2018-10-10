const calculator = require('./calculator');

it("return greeting with custom name", () => {
	expect(calculator('Bob')).toBe('Hello, Bob');
});
