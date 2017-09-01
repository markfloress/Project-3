import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.board = new Board(this.width, this.height);

	this.paddleWidth = 8;
	this.paddleHeight = 56;
	this.boardGap = 10;
	this.radius = 8;
		
		this.Player1 = new Paddle (this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height-this.paddleHeight)/2, KEYS.a, KEYS.z, KEYS.spaceBar)
		this.Player2 = new Paddle (this.height, this.paddleWidth, this.paddleHeight, (this.width-this.boardGap-this.paddleWidth), (this.height-this.paddleHeight)/2, KEYS.up, KEYS.down, KEYS.spaceBar)
		this.ball = new Ball (this.radius, this.width, this.height);
		this.Point1 = new Score (this.width / 2 - 45, 30);
		this.Point2 = new Score (this.width / 2 + 30, 30);

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
			this.Point1.render(svg, this.Player1.score);
			this.Point2.render(svg, this.Player2.score);

				if (this.Player1.score >= 15){
			alert('LEFT PLAYER WON THE GAME');
			location.reload(); 
			return;
		} else if (this.Player2.score >= 15){
			alert('RIGHT PLAYER WON THE GAME');
			location.reload(); 
			return;
		} else {
			this.ball.render(svg, this.Player1, this.Player2);
		}
	}
}