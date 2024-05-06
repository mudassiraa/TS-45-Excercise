// array of current user
var current_user = ["Umair", "areeba", "Ali", "Ambreen", "Shehnaz"];
//  array the new user
var new_user = ["Umair", "Usama", "Ambreen", "Shoukat", "Sanam"];
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry!!! ".concat(new_one_user, " is already taken."));
    }
    else {
        console.log("Username of ".concat(new_one_user, " is available"));
    }
});
