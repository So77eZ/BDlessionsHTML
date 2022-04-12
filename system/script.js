document.onmousemove = function (event) {
	let elem = document.querySelector(".eye1");
	let xOffset = elem.offsetLeft;
	let yOffset = elem.offsetTop;
	let x = event.x - xOffset - 50;
	let y = event.y - yOffset - 50;
	console.log(x + ' ' + y);
	document.querySelector(".eye1").style.transform = 'rotate(' + atan(x, y) + 'deg)';
	document.querySelector(".eye2").style.transform = 'rotate(' + atan(x - 116, y) + 'deg)';

	function atan(x, y) {
		if (x >= 0) {
			return 57.2958 * Math.atan(y / x);
		} else {
			return 57.2958 * (Math.atan(y / x) + Math.PI);
		}
	}
};