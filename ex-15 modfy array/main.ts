let guestList = ["Samina", "Nasreen", "Madiha", "Asifa"];
let notcoming = guestList[0];
console.log(notcoming, "is excused herself for dinner.");
guestList.splice(0, 1, "Sadia");
guestList.forEach(guest => console.log(`Assalam.o.Alaikum ${guest}, I would like to invite you for dinner with me!`));