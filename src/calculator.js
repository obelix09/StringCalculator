
function add(number) {
	if (number == "") {
		return 0;
	}

	var sum = 0;
	var numArr = number.split(",");

	try {
		for (var i = 0; i < numArr.length; i++) {
			var num = parseInt(numArr[i]);
			if (num < 0) {
				throw "Negatives not allowed";
			}
			sum += parseInt(numArr[i])
		}
		return sum;
	}
	catch(e) {
		return e;
	}
}

module.exports = add;
