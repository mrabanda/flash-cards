const fs = require('fs');
const inquirer = require('inquirer');
const Cards = require('./card-maker');

var ClozeCard = Cards.ClozeCard;

process.argv = userInput;

var text = userInput[2];
var cloze = userInput[3];

var newClozeCard = new ClozeCard(text, cloze)

console.log(newClozeCard)
