var inquirer = require("inquirer");

function basicCard(question, answer) {
    this.question = question;
    this.answer = answer;
}

var questionOne = new basicCard(
    "What is the fastest bird on foot?" , "ostrich"
);
//console.log(questionOne.front);
//console.log(questionOne.back);


var questionTwo = new basicCard(
    "What planet is closest to the sun?" , "mercury"
);
//console.log(questionTwo.front);
//console.log(questionTwo.back);

var questionThree = new basicCard(
    "A heptagon is a shape with how many sides?" , "7"
);

var questionFour = new basicCard(
    "How long is one regular term for a U.S. Representative?" , "2"
);

var questionFive = new basicCard(
    "What is the lowest prime number?" , "2"
);

var questionFive = new basicCard(
    "What is the largest South American country by area?" , "brazil"
);

var questionSix = new basicCard(
    "Who was the first person to step foot on the moon?" , "neil armstrong"
);

var questionSeven = new basicCard(
    "'Carefully' is an example of what type of word?" , "adjective"
);

var questionEight = new basicCard(
    "In the northern hemisphere, in what month is the autumnal equinox?" , "september"
);

var questionNine = new basicCard(
    "Emma has 2-yard sticks. She also has a 12-inch ruler. She laid them end-to-end in a line. How many feet long is the line? ​ " , "7"
);

var questionTen = new basicCard(
    "What state is the Grand Canyon in?" , "arizona"
);



inquirer.prompt ([{
    type: "input",
    message: questionOne.question,
    name: "userAnswer1"
}, {
    type: "input",
    message: questionTwo.question,
    name: "userAnswer2"
}, {
    type: "input",
    message: questionThree.question,
    name: "userAnswer3"
}, {
    type: "input",
    message: questionFour.question,
    name: "userAnswer4"
}, {
    type: "input",
    message: questionFive.question,
    name: "userAnswer5"
}, {
    type: "input",
    message: questionSix.question,
    name: "userAnswer6"
}, {
    type: "input",
    message: questionSeven.question,
    name: "userAnswer7"
}, {
    type: "input",
    message: questionEight.question,
    name: "userAnswer8"
}, {
    type: "input",
    message: questionNine.question,
    name: "userAnswer9"
}, {
    type: "input",
    message: questionTen.question,
    name: "userAnswer10"
}

]).then(function(inquirer){
    if(inquirer.userAnswer1 === questionOne.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer1 + " - Wrong, Correct Anwser is " + questionOne.answer);
    }

    if(inquirer.userAnswer2 === questionTwo.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer2 + " - Wrong, Correct Anwser is " + questionTwo.answer);
    }

    if(inquirer.userAnswer3 === questionThree.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer3 + " - Wrong, Correct Anwser is " + questionThree.answer);
    }

    if(inquirer.userAnswer4 === questionFour.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer4 + " - Wrong, Correct Anwser is " + questionFour.answer);
    }

    if(inquirer.userAnswer5 === questionFive.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer5 + " - Wrong, Correct Anwser is " + questionFive.answer);
    }

    if(inquirer.userAnswer6 === questionSix.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer6 + " - Wrong, Correct Anwser is " + questionSix.answer);
    }

    if(inquirer.userAnswer7 === questionSeven.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer7 + " - Wrong, Correct Anwser is " + questionSeven.answer);
    }

    if(inquirer.userAnswer8 === questionEight.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer8 + " - Wrong, Correct Anwser is " + questionEight.answer);
    }

    if(inquirer.userAnswer9 === questionNine.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer9 + " - Wrong, Correct Anwser is " + questionNine.answer);
    }

    if(inquirer.userAnswer10 === questionTen.answer) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer10 + " - Wrong, Correct Anwser is " + questionTen.answer);
    }

});