$(document).ready(function() {
	$("#calculate").click(function() {
		let left = Number($("#left").val());
		let right = Number($("#right").val());
		let operator = $("#operator").val();
		let result;
		if (left < 0 || right < 0) {
			alert("Error :(");
			return;
		}
		if (operator === "+") {
			result = left + right;
		} else if (operator === "-") {
			result = left - right;
		} else if (operator === "*") {
			result = left * right;
		} else if (operator === "/") {
			if (right === 0) {
				alert("It's over 9000!");
				return;
			}
			result = left / right;
		} else if (operator === "%") {
			if (right === 0) {
				alert("It's over 9000!");
				return;
			}
			result = left % right;
		}
		alert(result);
		console.log(result);
	});
});
