function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megicians) {
    return megicians.map(function (name) { return "The Great ".concat(name); });
}
var megician_names = ["ali", "Salar", "Shoukat"];
var great_megicians = make_great(megician_names);
show_megicians(great_megicians);
