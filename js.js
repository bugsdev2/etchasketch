const gridContainer = document.querySelector('.grid-container');
const h2Display = document.getElementById('display');
const range = document.getElementById('slider');
document.addEventListener('contextmenu', event => event.preventDefault());

function run() {
	if (gridContainer.childElementCount != 0) {
		const deleteDiv = document.querySelectorAll('.grid-container div');
		let refreshErr;
		deleteDiv.forEach(item => {
			(item.classList == "mouse-hover") ? refreshErr = true : refreshErr == false;
		});
		if (refreshErr) {
			if (confirm('This action will clear the canvas. Do you want to continue?')) {
				deleteDiv.forEach(item => item.remove());
			} else {
				return;
			};
		}
		
	}
	
	h2Display.textContent = range.value + ' x ' + range.value;
	
	document.body.style.setProperty('--num', range.value)
	for (let i=0; i<(range.value**2); i++) {
	const div = document.createElement('div');
	gridContainer.appendChild(div);
	}

	const divs = document.querySelectorAll('.grid-container > div');

	divs.forEach(div => {
		div.setAttribute('draggable', 'false');
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
	







