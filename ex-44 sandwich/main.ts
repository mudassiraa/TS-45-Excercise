// make a sandwich function with use rest perameter
function sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items.\n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\nNow enjoy Your Sandwich!");
}
// call the functions 3 times diffrent number of arguments
sandwich("Chicken Kabab", "Mayoneese", "Kechup", "Chutni");
sandwich("Chicken Piece", "Cheese Slice", "Mayoneese");
sandwich("Beef Kabab", "Tomato", "Onoin", "Lettuce", "Cucumber", "Mayoneese");
