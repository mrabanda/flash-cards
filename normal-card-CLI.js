const fs = require('fs');
const inquirer = require('inquirer');
const Cards = require('./card-maker');

var NormalCard = Cards.NormalCard;

userInput = process.argv;

var front = userInput[2];
var back = userInput[3];

var newNormalCard = new NormalCard(front, back);

var cardText = JSON.stringify(newNormalCard)

console.log(newNormalCard)

