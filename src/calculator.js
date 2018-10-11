
function add(number) {
	if (number == "") {
		return 0;
	}

	var sum = 0;
	var numArr = number.split(",");
	for (var i = 0; i < numArr.length; i++) {
		sum += parseInt(numArr[i])
	}
	return sum;
}

module.exports = add;
