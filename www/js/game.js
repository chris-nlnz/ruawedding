

function MyGame(){

	this.w = window.innerWidth;
	this.h = window.innerHeight;
	this.c = document.getElementById("gamecanvas");
	this.ctx = this.c.getContext('2d');
	this.c.width = this.w;
	this.c.height = this.h;

	this.startGame = function startGame(){
		this.ctx.fillStyle = 'rgb(205,128,0)';
		this.ctx.beginPath();
		this.ctx.rect(0, 0, this.w, this.h);
		this.ctx.closePath();
		this.ctx.fill();

		this.ctx.fillStyle = 'rgb(55,105,125)';
		this.ctx.beginPath();
		var stx = 0.15*this.w;
		var sty = 0.15*this.h;
		this.ctx.rect(stx, sty, 0.7*this.w, 0.7*this.h);
		this.ctx.closePath();
		this.ctx.fill();

		this.ctx.fillStyle = 'rgb(0,128,145)';
		this.ctx.beginPath();
		var stx = 0.25*this.w;
		var sty = 0.25*this.h;
		this.ctx.rect(stx, sty, 0.5*this.w, 0.5*this.h);
		this.ctx.closePath();
		this.ctx.fill();

		this.ctx.fillStyle = 'rgb(125,0,145)';
		this.ctx.beginPath();
		var stx = 0.4*this.w;
		var sty = 0.4*this.h;
		this.ctx.rect(stx, sty, 0.2*this.w, 0.2*this.h);
		this.ctx.closePath();
		this.ctx.fill();
	};
};
