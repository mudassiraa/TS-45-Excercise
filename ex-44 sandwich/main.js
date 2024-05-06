// make a sandwich function with use rest perameter
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items.\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow enjoy Your Sandwich!");
}
// call the functions 3 times diffrent number of arguments
sandwich("Chicken Kabab", "Mayoneese", "Kechup", "Chutni");
sandwich("Chicken Piece", "Cheese Slice", "Mayoneese");
sandwich("Beef Kabab", "Tomato", "Onoin", "Lettuce", "Cucumber", "Mayoneese");
