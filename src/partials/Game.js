import {SVG_NS, KEYS} from '../settings';
import board from './board';
import paddle from './paddle';
export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.board = new board(this.width, this.height);
	this.paddleWidth = 8;
	this.paddleHeight = 56;
	this.boardGap = 10;
		
		this.Player1 = new paddle(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height-this.paddleHeight)/2)
		this.Player2 = new paddle(this.Height, this.paddleWidth, this.paddleHeight, (this.width-this.boardGap-this.paddleWidth), (this.height-this.paddleHeight)/2)
	
		// Other code goes here...
	}

	render() {
		// More code goes here...
		this.gameElement.innerHTML = ' ';


		let svg = document.createElementNS(SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
			svg.setAttributeNS(null, 'version', '1.1');
			this.gameElement.appendChild(svg);
			this.board.render(svg);
			this.Player1.render(svg);
			this.Player2.render(svg);
	}
}


// let game = document.getElementById('game');
// game.setAttribute('width', '200');

// let para = document.createElement('p');
// game.appendChild(para).innerHTML = 'hello world';