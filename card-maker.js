//NORMAL CARD CONSTRUCTOR
function NormalCard(front, back) {

  if (!(this instanceof NormalCard)) {
    return {
			front:front,
			back:back
    };
  }

  this.front = front;
  this.back = back;

};

NormalCard.prototype.showFront = function() {
	console.log(this.front);
};

NormalCard.prototype.showBack = function() {
	console.log(this.back);
};

//CLOZE CARD CONSTRUCTOR
function ClozeCard(text, cloze) {
	if(!(text.includes(cloze))) {
		console.log("Your cloze terms doesn't exist in the text")
		return
	}

  if (!(this instanceof ClozeCard)) {
    return {
			text:text,
			cloze:cloze,
			partial: text.replace(cloze, '...')
    };
  }

  this.text = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, '...')
};

ClozeCard.prototype.showFullText = function() {
	console.log(this.text);
};

ClozeCard.prototype.showCloze = function() {
	console.log(this.cloze);
};

ClozeCard.prototype.showPartial = function() {
	console.log(this.partial);
};

var mycloze = new ClozeCard("Abanda is the best", "tawe");

exports.NormalCard = NormalCard;
exports.ClozeCard = ClozeCard;