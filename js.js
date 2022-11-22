const gridContainer = document.querySelector('.grid-container');
const h2Display = document.getElementById('display');
const range = document.getElementById('slider');
const randomButton = document.getElementById('random-button');
const inputColor = document.querySelector('input[type="color"]');
let check;

console.log(randomButton.hasAttribute('class'));
//~ document.addEventListener('contextmenu', e => e.preventDefault());

// random function to randomize stuff.
function random(num) {
	return Math.floor(Math.random()*num);
}


// inputColor button toggle
inputColor.addEventListener('click', e => {
	if (e.target.parentElement.classList != 'selected') {
		randomButton.classList.remove('selected');
		inputColor.parentElement.classList.add('selected');
	}	
})

// randomButton button toggle
randomButton.addEventListener('click', e => {
	if (!randomButton.classList != 'selected') {
		randomButton.classList.add('selected');
		inputColor.parentElement.classList.remove('selected');
	}
})



function run() {
	if (gridContainer.childElementCount != 0) {
		const deleteDiv = document.querySelectorAll('.grid-container div');
		let refreshErr;
		deleteDiv.forEach(item => {
			item.hasAttribute('style') ? refreshErr = true : refreshErr == false;
		});
		if (refreshErr) {
			if (confirm('This will clear the canvas. Do you want to continue?')) {
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
		randomButton.classList == 'selected' ? check = true : check = false;
		if (e.buttons == 1) {
			if (check) {
				this.setAttribute('style', `background-color: hsl(${random(361)},100%, 50%)`);
			} else {
				this.style.backgroundColor = inputColor.value;
			}
			
		} else if (e.buttons == 2) {
			this.removeAttribute('style');
		}
		
	}
	
};
	







