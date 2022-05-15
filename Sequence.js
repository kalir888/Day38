//UC1 get a random single digit
{
    console.log(Math.floor(Math.random() * 10) % 10);
}

//UC2 get random dice 
{
    console.log("Dice = " + ((Math.floor(Math.random() * 10) % 6) + 1));
}

//UC3 add two dices
{
    let dice1 = (Math.floor(Math.random() * 10) % 6) + 1;
    let dice2 = (Math.floor(Math.random() * 10) % 6) + 1;
    console.log("Result is : " + (dice1+dice2));
}

//UC4 add 5 random 2 digit values and find average
{
    let random1 = (Math.floor(Math.random() * 10) % 100) + 10;
    let random2 = (Math.floor(Math.random() * 10) % 100) + 10;
    let random3 = (Math.floor(Math.random() * 10) % 100) + 10;
    let random4 = (Math.floor(Math.random() * 10) % 100) + 10;
    let random5 = (Math.floor(Math.random() * 10) % 100) + 10;

    let sum = random1+random2+random3+random4+random5;
    let average = sum/5;
    console.log("Sum = " + sum);
    console.log("Average = " + average);
}

//UC5 UnitConversion
//1. 1ft = 12 in then 42 in = ? ft
//2. Rectangular Plot of 60 feet x 40 feet in meters
//3. Calculate area of 25 such plots in acres
{
    let inch = 42;
    let inchToFeet = 42 * 1/12;
    console.log("42 inch = " + inchToFeet + "ft");

    let length = 60 * 0.3048;
    let breadth = 40 * 0.3048;
    let plot = length * breadth;
    console.log("plot = " + plot + "metersquare");
    let area = 25 * plot;
    console.log("Area of 25 plots = " + area + "metersquare");
}

