// dedfine a function to creats a car objects
function object_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional options in car object
    options.forEach(option => {
        let [lock, door] = option.split(":");
        car[lock.trim()]= door.trim();
    });
    return car;
}
let my_car = object_car("Toyota", "2018", "colour: White", "Sunroof: True");

//  ptint the varilable
console.log(my_car);