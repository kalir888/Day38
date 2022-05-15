/* Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n. */
{
    console.log("Enter the limit : ");
    const readline = require("readline-sync");
    let userLimit = Number(readline.question());
    if(userLimit == 0) {
        console.log("2 power 0 is = 1");
    }else if(userLimit == 1) {
        console.log("2 power 0 is = 1");
        console.log("2 power 1 is = 2");
    }else {
        let currentValue = 2;
        console.log("2 power 0 is = 1");
        console.log("2 power 1 is = 2");
        for(let i = 2; i <= userLimit; i++) {
            currentValue = currentValue*2;
            console.log("2 power " + i + " is = " + currentValue);
        }
    }
}

/* Write a program that takes a command-line argument n and prints the nth harmonic
number. */
{
    console.log("Enter the limit : ");
    const readline = require("readline-sync");
    let userLimit = Number(readline.question());
    if(userLimit == 0) {
        console.log("Invalid Limit");
    }else if(userLimit == 1) {
        console.log("Harmonic number of 1 is  = 1");
    }else {
        let currentValue = 1;
        for(let i = 2; i <= userLimit; i++) {
            currentValue = currentValue + (1/i);
        }
        console.log("Harmonic number of " + userLimit + " is = " + currentValue);
    }
}

//Write a program that takes a input and determines if the number is a prime.
const IS_PRIME = 0;
const IS_NOT_PRIME = 1;
{
    console.log("Enter the number : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    if(userNum == 0) {
        console.log("0 is not a prime number");
    }else if(userNum == 1) {
        console.log("1 is not a prime number");
    }else {
        let primeCheck = IS_PRIME;
        for(let i = 2; i < userNum; i++) {
            let diviCheck = userNum%i
            if(diviCheck == 0) {
                primeCheck = IS_NOT_PRIME;
                break;
            }
        }
        if(primeCheck == IS_PRIME) {
            console.log(userNum + " is a prime number");
        }else {
            console.log(userNum + " is not a prime number");
        }
    }
}

/* Extend the program to take a range of number as input and output the Prime
Numbers in that range. */
{
    console.log("Enter the starting range");
    const readline = require("readline-sync");
    let rangeStart = Number(readline.question());
    console.log("Enter the ending range");
    let rangeEnd = Number(readline.question());
    
    for(let g = rangeStart; g <= rangeEnd; g++) {
        if(g == 0) {
            console.log("0 is not a prime number");
        }else if(g == 1) {
            console.log("1 is not a prime number");
        }else {
            let primeCheck = IS_PRIME;
            for(let i = 2; i < g; i++) {
                let diviCheck = g%i
                if(diviCheck == 0) {
                    primeCheck = IS_NOT_PRIME;
                    break;
                }
            }
            if(primeCheck == IS_PRIME) {
                console.log(g + " is a prime number");
            }
        }
    }
}

//Write a program that computes a factorial of a number taken as input.
{
    console.log("Enter the number");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    let currentValue = userNum;
    for(let i = userNum; i > 1; i--) {
        currentValue *= (i-1);
    }
    console.log("The factorial value of " + userNum + " is = " + currentValue);
}

//Write a program to compute Factors of a number N using prime factorization method.
{
    console.log("Enter the number");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    for(let g = 2; g*g <= userNum; g++) {
        let diviCheck1 = userNum%g;
        if(diviCheck1 == 0) {
            let primeCheck = IS_PRIME;
            for(let i = 2; i < g; i++) {
                let diviCheck = g%i;
                if(diviCheck == 0) {
                    primeCheck = IS_NOT_PRIME;
                    break;
                }
            }
            if(primeCheck == IS_PRIME) {
                console.log(g + " is a prime factor of " + userNum);
            }
        }
    }
}