let guestList = ["Samina", "Nasreen", "Madiha", "Asifa"];
let notcoming = guestList[0];
console.log(notcoming, "is excused herself for dinner.");
guestList.splice(0, 1, "Sadia");
console.log("Good News! We have found a bigger tablr for dinner.");
guestList.unshift("Asma");
guestList.push("Ammara");
let middleIndexN: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndexN, 0, "Iqra");
console.log("Updated list of our guests.");
guestList.forEach(oneguest => console.log(`Assalam.o.Alaikum ${oneguest}, I would like to invite you for dinner with me!`));

// ex-17 

console.log("oops!!! the new dinner table is broken, So i would like to invite just 2 friends for dinner with me.");
while(guestList.length > 2){
    let guestRemoved = guestList.pop();   
    console.log(`Sorry, ${guestRemoved} I can't invite you for dinner.`);
}
console.log("invitations for the last 2 guest.");
guestList.forEach(luckytwo => console.log(`Dear ${luckytwo}, you are still invited for dinner.`));

guestList.pop();
guestList.pop();
console.log("Oops!!! Empty guest list:", guestList);