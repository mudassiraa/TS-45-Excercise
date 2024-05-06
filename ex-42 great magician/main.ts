function show_megicians(megicians: string[]){
    megicians.forEach(name => console.log(name));
}
function make_great(megicians: string[]){
    return megicians.map(name => `The Great ${name}`);
}
let megician_names = ["ali", "Salar", "Shoukat"];

let great_megicians = make_great(megician_names);

show_megicians(great_megicians);