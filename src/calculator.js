
function add(number) {
	if (number == "") {
		return 0;
	}

	var delimiter = ",";
	if (number.startsWith("//")) {
		delimiter = number[2];
	}

	var sum = 0;
	var numArr = number.split(delimiter);
	var isNegative = false;
	var negatives = "Negatives not allowed: ";

	for (var i = 0; i < numArr.length; i++) {
		var num = parseInt(numArr[i]);
		if (num < 0) {
			isNegative = true;
			negatives += numArr[i].toString() + ",";
		}
		if (num <= 1000) {
			sum += parseInt(numArr[i])
		}
	}
	if (isNegative) {
		return negatives.slice(0, -1);

	}
	return sum;
}

module.exports = add;
