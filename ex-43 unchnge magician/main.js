function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megicians) {
    return megicians.map(function (name) { return "The Great ".concat(name); });
}
var megician_names = ["ali", "Salar", "Shoukat"];
// make a copy of original array with slice() function
var copy_megician_name = megician_names.slice();
// modify the array copy with "the great" name
var copy_great_megicians = make_great(copy_megician_name);
// show both arrays original & copy
console.log("\nOriginal Array!\n");
show_megicians(megician_names);
console.log("\nCopied Array!\n");
show_megicians(copy_great_megicians);
