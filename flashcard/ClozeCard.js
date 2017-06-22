var inquirer = require("inquirer");

function clozeCard(clozeDelet, clozePart, clozeFull) {
    this.clozeDelet = clozeDelet;
    this.clozePart = clozePart;
    this.clozeFull = clozeFull;
}

var one = new clozeCard(
    "ostrich", "... is the fastest bird on foot" , "Ostrich is the fastest bird on foot"
);
    //delete - part - full

var two = new clozeCard(
    "mercury" , "... is the planet that is closest to the sun" , "Mercury is the planet that is closest to the sun"
);

var three = new clozeCard(
    "7", "A heptagon is a shape with ... sides" , "A heptagon is a shape with 7 sides"
);

var four = new clozeCard(
    "2" , "U.S. Representative can do ... regular term(s)" , "U.S. Representative can do 2 regular term(s)"
);

var five = new clozeCard(
    "brazil" , "... is the largest South American country by area" , "Brazil is the largest South American country by area"
);

var six = new clozeCard(
    "neil armstrong" , "... was the first person to step foot on the moon" , "Neil Armstrong was the first person to step foot on the moon"
);

var seven = new clozeCard(
    "adjective" , "'Carefully' is an ..." , "'Carefully' is an adjective"
);

var eight = new clozeCard(
    "september" , "In the northern hemisphere, ... is the month that is the start of the autumnal equinox" , "In the northern hemisphere, September is the month that is the start of the autumnal equinox"
);

var nine = new clozeCard(
    "7" , "Emma has 2-yard sticks. She also has a 12-inch ruler. She laid them end-to-end in a line. it was ... feet long in a line" , "Emma has a 7 feet long line"
);

var ten = new clozeCard(
    "arizona" , "... is where the Grand Canyon is located" , "Arizona is where the Grand Canyon is located"
);

var eleven = new clozeCard(
    "2" , "... is the lowest prime number" , "2 is the lowest prime number"
);


inquirer.prompt ([{
    type: "input",
    message: one.clozePart,
    name: "userAnswer1"

}, { type: "input",
    message: two.clozePart,
    name: "userAnswer2"

}, { type: "input",
    message: three.clozePart,
    name: "userAnswer3"

}, { type: "input",
    message: four.clozePart,
    name: "userAnswer4"

}, { type: "input",
    message: five.clozePart,
    name: "userAnswer5"

}, { type: "input",
    message: six.clozePart,
    name: "userAnswer6"

}, { type: "input",
    message: seven.clozePart,
    name: "userAnswer7"

}, { type: "input",
    message: eight.clozePart,
    name: "userAnswer8"

}, { type: "input",
    message: nine.clozePart,
    name: "userAnswer9"

}, { type: "input",
    message: ten.clozePart,
    name: "userAnswer10"

}, { type: "input",
    message: eleven.clozePart,
    name: "userAnswer11"

}


]).then(function(inquirer){
    if(inquirer.userAnswer1 === one.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer1 + " - Wrong, Correct Anwser is the " + one.clozeFull);
    }

    if(inquirer.userAnswer2 === two.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer2 + " - Wrong, Correct Anwser is " + two.clozeFull);
    }

    if(inquirer.userAnswer3 === three.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer3 + " - Wrong, Correct Anwser is " + three.clozeFull);
    }

    if(inquirer.userAnswer4 === four.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer4 + " - Wrong, Correct Anwser is the " + four.clozeFull);
    }

    if(inquirer.userAnswer5 === five.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer5 + " - Wrong, Correct Anwser is " + five.clozeFull);
    }

    if(inquirer.userAnswer6 === six.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer6 + " - Wrong, Correct Anwser is " + six.clozeFull);
    }

    if(inquirer.userAnswer7 === seven.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer7 + " - Wrong, Correct Anwser is " + seven.clozeFull);
    }

    if(inquirer.userAnswer8 === eight.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer8 + " - Wrong, Correct Anwser is " + eight.clozeFull);
    }

    if(inquirer.userAnswer9 === nine.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer9 + " - Wrong, Correct Anwser is " + nine.clozeFull);
    }

    if(inquirer.userAnswer10 === ten.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer10 + " - Wrong, Correct Anwser is " + ten.clozeFull);
    }

    if(inquirer.userAnswer11 === eleven.clozeDelet) {
        console.log("Correct");
    } else {
        console.log(inquirer.userAnswer11 + " - Wrong, Correct Anwser is " + eleven.clozeFull);
    }

});