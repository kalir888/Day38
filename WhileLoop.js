/* Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.. */
{
    let arguments = process.argv;
    let num = parseInt(arguments[2]);
    if(num == 0) {
        console.log("2 power 0 is = 1");
    }else if(num == 1) {
        console.log("2 power 0 is = 1");
        console.log("2 power 1 is = 2");
    }else {
        let currentValue = 2;
        console.log("2 power 0 is = 1");
        console.log("2 power 1 is = 2");
        let i = 2;
        while(i <= num && currentValue != 256) {
            currentValue = currentValue*2;
            console.log("2 power " + i + " is = " + currentValue);
            i++;
        }
    }
}
/* Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached.. */
{
    console.log("Think a number n between 1 to 100")
    const EQUAL_TO = 1;
    const LESS_THAN = 2;
    const GREATER_THAN = 3;
    
    let upperLimit = 100;
    let lowerLimit = 1;
    let newLimit = 0;

    while(upperLimit != lowerLimit) {
        newLimit = Math.floor((upperLimit+lowerLimit)/2);
        console.log("select an option\n1.n = " + newLimit + "\n2.n < " + newLimit + "\n3.n > " + newLimit);
        const readline = require("readline-sync");
        let userChoice = Number(readline.question());
        switch(userChoice) {
            case EQUAL_TO:
                upperLimit = newLimit;
                lowerLimit = newLimit;
                break;
            case GREATER_THAN:
                lowerLimit = newLimit;
                break;
            case LESS_THAN:
                upperLimit = newLimit;
                break;
            default:
                console.log("Invalid Choice");
        }
    }
    console.log("The number you thought in mind is " + newLimit);
}

//Extend the Flip Coin problem till either Heads or Tails wins 11 times.
{
    const HEADS = 0;

    let headsCount = 0;
    let tailsCount = 0;

    while(headsCount != 11 && tailsCount != 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        if(toss == HEADS) {
            console.log("Heads");
            headsCount++;
        } else {
            console.log("Tails");
            tailsCount++;
        }
    }
    if(tailsCount == 11) {
        console.log("Tails wins the match");
    }else {
        console.log("Heads wins the match");
    }
}

/* Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made. */
{
    const LOSS = 0;
    const WIN = 200;
    const WINS = 1;

    let capital = 100;
    let noOfWins = 0;
    let noOFLoose = 0;

    while(capital != LOSS && capital != WIN) {
        let gamble = Math.floor(Math.random() * 10) % 2;
        if(gamble == WINS) {
            console.log("YOU WIN THE ROUND");
            noOfWins++;
            capital++;
        }else {
            console.log("YOU LOOSE THE ROUND");
            noOFLoose++;
            capital--;
        }
    }
    if(capital == WIN) {
        console.log("OH WOW! YOU WON THE MATCH");
    }else {
        console.log("OH NO! YOU LOOSE THE MATCH")
    }
}