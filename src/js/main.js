'use strict'

const acc = document.querySelectorAll('.nav-list__header');

function miFuncion(){
	const accItem = document.querySelectorAll('.sub-list');
	accItem.classList.toggle('sub-list--hidden');
	console.log(accItem);
}

for (var i=0; i<acc.length; i++){
	acc[i].addEventListener('click', miFuncion, false);
}
