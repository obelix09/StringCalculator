
function add(number) {
	if (number == "") {
		return 0;
	}
	if (number.includes(",")) {
		var numArr = number.split(",");
		return parseInt(numArr[0]) + parseInt(numArr[1]);
	}

	var num = parseInt(number);
	return num;
}

module.exports = add;
