// dedfine a function to creats a car objects
function object_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional options in car object
    options.forEach(function (option) {
        var _a = option.split(":"), lock = _a[0], door = _a[1];
        car[lock.trim()] = door.trim();
    });
    return car;
}
var my_car = object_car("Toyota", "2018", "colour: White", "Sunroof: True");
//  ptint the varilable
console.log(my_car);
