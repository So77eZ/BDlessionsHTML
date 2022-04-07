document.onmousemove = function (event) {
	let elem = document.querySelector(".eye1");
	let xOffset = elem.offsetLeft;
	let yOffset = elem.offsetTop;
	 let x = event.x - xOffset - 50;
	 let y = event.y - yOffset - 50;
	console.log(x + ' ' + y);
	document.querySelector(".eye1").style.transform = 'rotate(' + atan(x, y) + 'deg)';
	document.querySelector(".eye2").style.transform = 'rotate(' + atan(x - 116, y) + 'deg)';

	function arcctg(x, y) {
		if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
		if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
		if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
		if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
	}

	function atan(x, y) {
		if (x >= 0) {
			return 57.2958 * Math.atan(y / x);
		} else {
			return 57.2958 * (Math.atan(y / x) + Math.PI);
		}
	}
};
let userName = prompt("Представьтесь пожалуйста", "аноним");
if (userName == null){
	alert("Ну и ладно");
}
else{
alert("Рад вас видеть, "+ userName + ", поставьте 5");
}