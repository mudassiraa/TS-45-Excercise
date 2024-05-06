var guestList = ["Samina", "Nasreen", "Madiha", "Asifa"];
var notcoming = guestList[0];
console.log(notcoming, "is excused herself for dinner.");
guestList.splice(0, 1, "Sadia");
guestList.forEach(function (guest) { return console.log("Assalam.o.Alaikum ".concat(guest, ", I would like to invite you for dinner with me!")); });
