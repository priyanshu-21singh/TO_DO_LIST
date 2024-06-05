document.body.addEventListener('click', function() {
	var colors = ['lightblue', 'lightgreen', 'lightyellow', 'pink', 'lightcoral','yellow','purple','black','lightpink'];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = randomColor;
});

document.getElementById('changeColorButton').addEventListener('click', function() {
	var colors = ['lightblue', 'lightgreen', 'lightyellow', 'pink', 'lightcoral','yellow','purple','black','lightpink'];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = randomColor;
});