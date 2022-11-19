const gridContainer = document.querySelector('.grid-container');
const h2Display = document.getElementById('display');
const range = document.getElementById('slider');
document.addEventListener('contextmenu', event => event.preventDefault());
function run() {
	if (gridContainer.childElementCount != 0) {
		const deleteDiv = document.querySelectorAll('.grid-container div');
		deleteDiv.forEach(item => item.remove());
	}
	h2Display.textContent = range.value + ' x ' + range.value;
	
	document.body.style.setProperty('--num', range.value)
	for (let i=0; i<(range.value**2); i++) {
	const div = document.createElement('div');
	gridContainer.appendChild(div);
	}

	const divs = document.querySelectorAll('.grid-container > div');

	divs.forEach(div => {
	div.addEventListener('mouseenter', clickhover);
	})

	function clickhover(e){
		if (e.buttons == 1) {
			this.classList.add('mouse-hover');
		} else if (e.buttons == 2) {
			this.classList.remove('mouse-hover');
		}
		
	}
	
};
	







