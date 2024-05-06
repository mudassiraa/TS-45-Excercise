let good ="good";
let uppercaseGood = "GOOD";
let five = 5;
let ten = 10;
let spices = ["Chilli", "Paper", "Cumin", "Coriander"];

// equality and unequality with 

console.log("\n is good is equal to good?\n");
console.log(good == "good");

console.log("\n is good is not equal to good\n");
console.log(good != "good");

// test using lowercase
console.log("\n is GOOD is equal to good?\n");
console.log(uppercaseGood.toLowerCase() == "good");

console.log("\n is GOOD is not equal to good?\n");
console.log(uppercaseGood.toLocaleLowerCase() != "good");

// numerical test 
console.log("\n is five is equal to ten\n");
console.log(five == ten);

console.log("\n is ten is not equal to eight\n");
console.log(ten != 8);

console.log("\n is five is less then 7\n");
console.log(five < 7);

console.log("\n is ten is greater the 8\n");
console.log(ten > 8);

// greater the or =
console.log("\n is five is greater the or equal to 6?\n");
console.log(five >= 6);

// less then or =
console.log("\n fifteen is less then or equal to 10?\n");
console.log(15 <= 10);

//  && conditions (and)
console.log("\n ten is not equal to 5 and ten is greater then 5\n");
console.log(ten != 5 && ten > 5);

console.log("\n ten is equal to 5 and ten is less then 5\n");
console.log(ten == 5 && ten < 5);

// using || condition (or)
console.log("\n nine is greater then 15 OR nine is equal to 9\n");
console.log(9 > 15 || 9 == 9);

console.log("\n ten is less then 9 OR five is equal to 7\n");
console.log(ten < 9 || five == 7);

// tesst whether include array
console.log("\n is Cumin include in my spices array?\n");
console.log(spices.includes("Cumin"));

// not includes
console.log("\n is Chilli is not include my spices array?\n");
console.log(!spices.includes("Chilli"));
