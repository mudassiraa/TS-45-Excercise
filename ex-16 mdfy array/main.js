var guestList = ["Samina", "Nasreen", "Madiha", "Asifa"];
var notcoming = guestList[0];
console.log(notcoming, "is excused herself for dinner.");
guestList.splice(0, 1, "Sadia");
console.log("Good News! We have found a bigger tablr for dinner.");
guestList.unshift("Asma");
guestList.push("Ammara");
var middleIndexN = Math.floor(guestList.length / 2);
guestList.splice(middleIndexN, 0, "Iqra");
console.log("Updated list of our guests.");
guestList.forEach(function (oneguest) { return console.log("Assalam.o.Alaikum ".concat(oneguest, ", I would like to invite you for dinner with me!")); });