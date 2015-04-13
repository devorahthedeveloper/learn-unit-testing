var Devorah = function(weight){
	this.weight = weight;
};

Devorah.prototype.gainWeight = function(gained){
	return this.weight = this.weight + gained;
};

Devorah.prototype.loseWeight = function(lost){
	return this.weight = this.weight - lost;
}

var DevorahDoll = function(element){
	this.el = element;
};

DevorahDoll.prototype.setMessage = function(message){
	console.log(this.el.text());
	this.el.html(message);
};