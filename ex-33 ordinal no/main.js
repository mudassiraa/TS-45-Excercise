var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// using foe-loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalNumderEnd = void 0;
    if (oneNumber === 1) {
        ordinalNumderEnd = "st";
    }
    else if (oneNumber === 2) {
        ordinalNumderEnd = "nd";
    }
    else if (oneNumber === 3) {
        ordinalNumderEnd = "rd";
    }
    else {
        ordinalNumderEnd = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalNumderEnd));
}
