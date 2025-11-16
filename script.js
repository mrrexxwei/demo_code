/* -----------------------------------------------------------------------------------
|   We have an array [[45,78], [32,12], [52, 52]].
|   For each set in the list, compare the value.
|   If the 1st value is greater, print(“first is greater”).
|   If the 2nd value is greater, print(“Second is greater”).
|   If they are equal, print(“The same”).
------------------------------------------------------------------------------------*/

function compareNumbers(num1, num2) {
        // this function is going to compare two numbers
        let res = "";
        if (num1 < num2) {
                res = "The 2nd is greater";
        } else if (num1 > num2) {
                res = "The 1st is greater";
        } else {
                res = "The same";
        }
        
        return res;
}

const myArray = [[45,78], [32,12], [52, 52], [0,0], [15,56]];

for (let i=0; i < myArray.length; i++) {
        console.log(compareNumbers(myArray[i][0], myArray[i][1]));
}


/* -----------------------------------------------------------------------------------
|   Create a simple JavaScript program that
|   Takes a student's name and an array of scores. (user input the score one by one)
|
|    Calculates the average score.
|	 Define a function for this
|
|    Determines the student's grade based on the average.
|    Can define another function for this
|
|    Outputs a personalized message, like
|    Hello [Student Name]!
|    Your average score is [Average Score].
|    Your grade is [Grade]. 
------------------------------------------------------------------------------------*/

const averageFinder = function (scores) {
        let s = 0;
        for (let m = 0; m < scores.length; m++) {
                s = s + scores[m];
        }
        console.log(tes);
        return s / scores.length;
}

function letterGrade(ave){
        let gradeLetter = "";
        if (ave >= 90) {
                gradeLetter = "A";
        } else if (ave >= 80) {
                gradeLetter = "B";
        } else if (ave >= 70) {
                gradeLetter = "C";
        } else if (ave >= 60) {
                gradeLetter = "E";
        } else {
                gradeLetter ="F";
        }
        return gradeLetter;
}

// // step 1 take input
let stuName = prompt("Please input name: ");
let scores = [];
while (true) {
        let inp = prompt("Please input a score: ");
        if (inp == "q") {
                break;
        } else {
                scores.push(Number(inp));
        }
}

// //call function get average
let ave = averageFinder(scores);

// call function for letter grade
let g = letterGrade(ave);


/*-------------------------------------------------------------------------------
|   Nov 12, 2025
|   Class Lecture
|--------------------------------------------------------------------------------
|   A function can be the value of an object
|   Dot notation and bracket notation can retrieve the value of a key
------------------------------------------------------------------------------- */

const car = {
        brand: "Honda",
        color: "red",
        year: 2009,
        scores: [98, 67, 88],
        drive: function() {
                console.log("the car is going");
        }
}

let y = "year";
console.log(car.color);
console.log(car[y]);    // car[y] == car.year
car.drive();


/*-------------------------------------------------------------------------------
|   Nov 14, 2025
|   Coding Task 1: Travel Log
|--------------------------------------------------------------------------------
|   travelLog = { Jan: [“Spain”, “Canada”, “UK”, “Chile”],
|	             Feb: [“Canada”, “US”],
|		         Apr: [“Japan”, “China”, “UK”],
|		         Jun: [“Mexico”, “France”, “Japan”] }
|    Write a function to return the month(s) that have been to that country(s).
|    Example:    
|    Input: UK;  
|    output: [“Jan”, “Apr”]
------------------------------------------------------------------------------- */

function searchLog(theLog, cName) {
    let monthName = [];

    // loop over the object's keys
    for (let key in theLog) {
        // check whether the country name is in the value
        if (theLog[key].includes(cName)) {
                monthName.push(key);
        }
    }
    return monthName;
}

const travelLog = { 
    Jan: ["Spain", "Canada", "UK", "Chile"],
    Feb: ["Canada", "US"],
    Apr: ["Japan", "China", "UK"],
    Jun: ["Mexico", "France", "Japan"] 
};

const cName = "US";
const res = searchLog(travelLog, cName)


/*--------------------------------------------------------------------------------------------------
|    Nov 14, 2025
|    Coding Task 2: Ceaser Cipher
|---------------------------------------------------------------------------------------------------
|    Write two functions to encrypt or decrypt text by shifting each letter in the plaintext by a 
|    fixed number of positions in the alphabet list.
|    Example:
|    Plaintext: “HELLO” (could be input value or output value)
|    Key: 3
|    Ciphertext: “KHOOR” (could be input value or output value)
|    Instructions:
|    Each letter in the plaintext is shifted by a fixed number of positions (called the "key") to
|    produce the ciphertext; For decryption, each letter in the ciphertext is shifted back by the 
|    same number of positions to recover the original plaintext;
|    Each function takes 2 arguments: a string and a key (number). And return a string.
-------------------------------------------------------------------------------------------------*/

function encrypt(s, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // get the index of original letters from alphabet
    let indexes = [];
    for (let i = 0; i < s.length; i++){
        indexes.push(alphabet.indexOf(s[i]));
    }
    
    // get the new indexes and retrieve the letter for encrypted text
    res = ""    // use to keep the result
    
    // loop over the array
    for (let t = 0; t < indexes.length; t++) {
        if (indexes[t] + key < 26) {
            res += alphabet[indexes[t] + key];
        } else {
            res += alphabet[indexes[t] + key - 26];
        }
    }

    return res;
}




