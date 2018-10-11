
function add(number) {
	if (number == "") {
		return 0;
	}

	var sum = 0;
	var numArr = number.split(",");
	var isNegative = false;
	var negatives = "Negatives not allowed: ";

	for (var i = 0; i < numArr.length; i++) {
		var num = parseInt(numArr[i]);
		if (num < 0) {
			isNegative = true;
			negatives += numArr[i].toString() + ",";
		}
		sum += parseInt(numArr[i])
	}
	if (isNegative) {
		return negatives.slice(0, -1);

	}
	return sum;
}

module.exports = add;
