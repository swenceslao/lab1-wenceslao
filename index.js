// let navButton = document.querySelector('nav button');

// navButton.addEventListener('click', function() {
// 	let expanded = this.getAttribute('aria-expanded') === 'true' || false
// 	this.setAttribute('aria-expanded', !expanded)
// 	let menu = this.nextElementSibling
// 	menu.classList.toggle('open')
// });



function show() {
	var x = document.getElementById('toggle');
	var expanded = x.getAttribute('aria-expanded') === 'true' || false;
	x.setAttribute('aria-expanded', !expanded);
	var y = document.getElementById('nav-links');
	y.classList.toggle('open');
};