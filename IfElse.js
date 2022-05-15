//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
{
    let random1 = (Math.floor(Math.random() * 100) % 1000) + 100;
    let random2 = (Math.floor(Math.random() * 100) % 1000) + 100;
    let random3 = (Math.floor(Math.random() * 100) % 1000) + 100;
    let random4 = (Math.floor(Math.random() * 100) % 1000) + 100;
    let random5 = (Math.floor(Math.random() * 100) % 1000) + 100;

    console.log("Five Random Numbers are " + (random1) + " " + (random2) + " " + (random3) + " " + (random4) + " " + (random5));

    if(random1 < random2 && random1 < random3 && random1 < random4 && random1 < random5) {
        console.log("Minimum value is = " + random1);
    }else if(random2 < random1 && random2 < random3 && random2 < random4 && random2 < random5) {
        console.log("Minimum value is = " + random2);
    }else if(random3 < random1 && random3 < random2 && random3 < random4 && random3 < random5) {
        console.log("Minimum value is = " + random3);
    }else if(random4 < random1 && random4 < random3 && random4 < random2 && random4 < random5) {
        console.log("Minimum value is = " + random4);
    }else {
        console.log("Minimum value is = " + random5);
    }

    if(random1 > random2 && random1 > random3 && random1 > random4 && random1 > random5) {
        console.log("Maximum value is = " + random1);
    }else if(random2 > random1 && random2 > random3 && random2 > random4 && random2 > random5) {
        console.log("Maximum value is = " + random2);
    }else if(random3 > random1 && random3 > random2 && random3 > random4 && random3 > random5) {
        console.log("Maximum value is = " + random3);
    }else if(random4 > random1 && random4 > random3 && random4 > random2 && random4 > random5) {
        console.log("Maximum value is = " + random4);
    }else {
        console.log("Maximum value is = " + random5);
    }
}

//Write a program that takes day and month from the command line and prints true 
//if day of month is between March 20 and June 20, false otherwise.

{
    let arguments = process.argv;
    let month = parseInt(arguments[2]);
    let date = parseInt(arguments[3]);

    if(month == 3 && date < 31 && date >= 20) {
        console.log("True");
    }else if(month == 4 && date < 30 && date >= 1) {
        console.log("True");
    }else if(month == 5 && date < 31 && date >= 1) {
        console.log("True");
    }else if(month == 6 && date <= 20 && date >= 1) {
        console.log("True");
    }else {
        console.log("False");
    }
}

/* Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400. */
{
    console.log("Enter a Year : ");
    const readline = require("readline-sync");
    let num = Number(readline.question());
    if(num/1000 > 1 && num%4 == 0) {
        console.log("The given year is a Leap year");
    }else {
        console.log("The given year is not a Leap Year");
    }
}

//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
{
    const HEADS = 1;
    let toss = Math.floor(Math.random() * 10) % 2;
    if(toss == HEADS) {
        console.log("Heads");
    }else {
        console.log("Tails");
    }
}

//Read a single digit number and write the number in word
{
    console.log("Enter a single digit number : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    if(userNum == 0) {
        console.log("Zero");
    }else if(userNum == 1) {
        console.log("One");
    }else if(userNum == 2) {
        console.log("Two");
    }else if(userNum == 3) {
        console.log("Three");
    }else if(userNum == 4) {
        console.log("Four");
    }else if(userNum == 5) {
        console.log("Five");
    }else if(userNum == 6) {
        console.log("Six");
    }else if(userNum == 7) {
        console.log("Seven");
    }else if(userNum == 8) {
        console.log("Eight");
    }else if(userNum == 9) {
        console.log("Nine");
    }else {
        console.log("Invalid number");
    }
}

//Read a Number and Display the week day (Sunday, Monday,...)
{
    console.log("Enter the count of a day : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    if(userNum == 1) {
        console.log("Sunday");
    }else if(userNum == 2) {
        console.log("Monday");
    }else if(userNum == 3) {
        console.log("Tuesday");
    }else if(userNum == 4) {
        console.log("Wednesday");
    }else if(userNum == 5) {
        console.log("Thursday");
    }else if(userNum == 6) {
        console.log("Friday");
    }else if(userNum == 7) {
        console.log("Saturday");
    }else {
        console.log("Invalid day");
    }
}

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    console.log("Enter a number less than 9999 : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    if(userNum < 10000) {
        let unitDigit = (userNum % 10);
        console.log("Unit digit = " + unitDigit);
        if(userNum > 9) {
            let tensDigit = ((userNum - unitDigit) / 10) % 10;
            console.log("Tens digit = " + tensDigit);
            if(userNum > 99) {
                let hundredsDigit = ((userNum - unitDigit - (tensDigit*10)) / 100) % 10;
                console.log("Hundreds digit = " + hundredsDigit);
                if(userNum > 999) {
                    let thousandsDigit = Math.floor(userNum / 1000);
                    console.log("Thousands digit = " + thousandsDigit);
                }
            }
        }
    }else {
        console.log("Invalid number");
    }       
}

/* Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
1.a + b * c 
2.a % b + c 
3.c + a / b 
4.a * b + c */
{
    let a = 10, b = 25, c = 28;
    let oper1 = a + b * c;
    let oper2 = a % b + c;
    let oper3 = c + a / b;
    let oper4 = a * b + c;
    if(oper1 < oper2 && oper1 < oper3 && oper1 < oper4) {
        console.log("Operation 1 is Minimum :" + oper1);
    }else if(oper2 < oper1 && oper2 < oper3 && oper2 < oper4) {
        console.log("Operation 2 is Minimum :" + oper2);
    }else if(oper3 < oper1 && oper3 < oper2 && oper3 < oper4) {
        console.log("Operation 3 is Minimum :" + oper3);
    }else {
        console.log("Operation 4 is Minimum :" + oper4);
    }

    if(oper1 > oper2 && oper1 > oper3 && oper1 > oper4) {
        console.log("Operation 1 is Maximum :" + oper1);
    }else if(oper2 > oper1 && oper2 > oper3 && oper2 > oper4) {
        console.log("Operation 2 is Maximum :" + oper2);
    }else if(oper3 > oper1 && oper3 > oper2 && oper3 > oper4) {
        console.log("Operation 3 is Maximum :" + oper3);
    }else {
        console.log("Operation 4 is Maximum :" + oper4);
    }
}



