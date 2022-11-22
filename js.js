const gridContainer = document.querySelector('.grid-container');
const h2Display = document.getElementById('display');
const range = document.getElementById('slider');
const randomButton = document.getElementById('random-button');
const inputColor = document.querySelector('input[type="color"]');
let check;

// Disable right click context menu on the document because it will interfere with the right click erasing feature.
document.addEventListener('contextmenu', e => e.preventDefault());

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
	if (randomButton.classList != 'selected') {
		randomButton.classList.add('selected');
		inputColor.parentElement.classList.remove('selected');
	}
})


// main function which will run when the slider is moved.
function run() {
	
	// check to see if the grid is already populated by 'modified' divs, if there's some drawing on the canvas. If so, it will prompt a confirm action asking if the canvas be cleared or not.
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
	
	// Display canvas size on the page.
	h2Display.textContent = range.value + ' x ' + range.value;
	
	// create divs inside the grid container
	document.body.style.setProperty('--num', range.value)
	for (let i=0; i<(range.value**2); i++) {
		const div = document.createElement('div');
		gridContainer.appendChild(div);
	}
	
	// select all divs and listen for mouse enter event
	const divs = document.querySelectorAll('.grid-container > div');
	divs.forEach(div => {
		div.setAttribute('draggable', 'false');
		div.addEventListener('mouseenter', clickhover);
	})
	
	
	// once mouse enter event is triggered, perform the action based on whether the button cliked is left or right.
	function clickhover(e){
		// check to see if the random button is selected or not.
		randomButton.classList == 'selected' ? check = true : check = false;
		if (e.buttons == 1) {
			if (check) {
				// if random button is selected, rainbow mode is run.
				this.setAttribute('style', `background-color: hsl(${random(361)},100%, 50%)`);
			} else {
				// else normal colormode is run
				this.style.backgroundColor = inputColor.value;
			}
			
		} else if (e.buttons == 2) {
			this.removeAttribute('style');
		}
		
	}
	
};
	







