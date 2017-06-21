var inquirer = require("inquirer");

function basicCard(question, answer) {
    this.question = question;
    this.answer = answer;
}

var questionOne = new basicCard(
    "question1?" , "answer1"
);
//console.log(questionOne.front);
//console.log(questionOne.back);

var questionTwo = new basicCard(
    "question2?" , "answer2"
);
//console.log(questionTwo.front);
//console.log(questionTwo.back);

inquirer.prompt ([{
    type: "input",
    message: questionOne.question,
    name: "userAnswer1"
}, {
    type: "input",
    message: questionTwo.question,
    name: "userAnswer2"
}

]).then(function(inquirer){
    if(inquirer.userAnswer1 === questionOne.answer) {
        console.log("Correct")
    } else {
        console.log("Wrong")
    }

});