//Read a single digit number and write the number in word using Case
{
    console.log("Enter a single digit number : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    switch(userNum) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        default:
            console.log("Invalid number");
    }
}

//Read a Number and Display the week day (Sunday, Monday,...) with case statement
{
    console.log("Enter the count of a day : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    switch(userNum) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
    }
}
        
//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,... using case statement
{
    console.log("Enter a number less than 9999 : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    switch(true) {
        case userNum < 10000:
            let unitDigit = (userNum % 10);
            console.log("Unit digit = " + unitDigit);
            switch(true) {
                case userNum > 9:
                    let tensDigit = ((userNum - unitDigit) / 10) % 10;
                    console.log("Tens digit = " + tensDigit);
                    switch(true) {
                        case userNum > 99:
                            let hundredsDigit = ((userNum - unitDigit - (tensDigit*10)) / 100) % 10;
                            console.log("Hundreds digit = " + hundredsDigit);
                            switch(true) {
                                case userNum > 999:
                                    let thousandsDigit = Math.floor(userNum / 1000);
                                    console.log("Thousands digit = " + thousandsDigit);
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        default:
            console.log("Invalid number");
    }
        
}

/* Write a program that takes User Inputs and does Unit Conversion of
different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet */

{
    console.log("Select a conversion \n1.Feet to Inch \n2.Feet to Meter \n3.Inch to Feet \n4.Meter to Feet");
    const readline = require("readline-sync");
    let userChoice = Number(readline.question());
    let feet, inches, meter;
    switch(userChoice) {
        case 1:
            console.log("Enter the values in Feet");
            feet = Number(readline.question());
            inches = feet * 12;
            console.log("Given values in inches : " + inches);
            break;
        case 2:
            console.log("Enter the values in Feet");
            feet = Number(readline.question());
            meter = feet * 0.3048;
            console.log("Given values in Meter : " + meter);
            break;
        case 3:
            console.log("Enter the values in Inch");
            inches = Number(readline.question());
            feet = inches * 0.0833333;
            console.log("Given values in Feet : " + feet);
            break;
        case 4:
            console.log("Enter the values in Meter");
            meter = Number(readline.question());
            feet = meter * 3.28084;
            console.log("Given values in Feet : " + feet);
            break;
        default:
            console.log("Invalid Choice");
    }
}
    
    
