import {SVG_NS, KEYS} from '../settings';
import board from './Board';
import paddle from './Paddle';
import ball from './Ball';
export default class Game {

	constructor(element, width, height, spaceBar) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.board = new board(this.width, this.height);

	this.paddleWidth = 8;
	this.paddleHeight = 56;
	this.boardGap = 10;
	this.radius = 8;
		
		this.Player1 = new paddle (this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height-this.paddleHeight)/2, KEYS.a, KEYS.z, KEYS.spaceBar)
		this.Player2 = new paddle (this.height, this.paddleWidth, this.paddleHeight, (this.width-this.boardGap-this.paddleWidth), (this.height-this.paddleHeight)/2, KEYS.up, KEYS.down, KEYS.spaceBar)
		this.ball = new ball (this.radius, this.width, this.height);

		document.addEventListener('keydown', event => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
			}
		});
	}

	render() {
		if (this.pause) {
			return
		}

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
			this.ball.render(svg, this.Player1, this.Player2);
	}
}