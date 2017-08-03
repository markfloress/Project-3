export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
	
		// Other code goes here...
	}

	render() {
		// More code goes here...
	}

}




let game = document.getElementById('game');
game.setAttribute('width', '200');

let para = document.createElement('p');
game.appendChild(para).innerHTML = 'hello world';