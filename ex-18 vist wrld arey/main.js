var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesVisit = ["Saudia Arabia", "Iran", "Canada", "Australia"];
console.log("Original Array!", countriesVisit);
console.log("Alphabetical Order!", __spreadArray([], countriesVisit, true).sort());
console.log("Still in original Order!", countriesVisit);
console.log("Reverse Order!", __spreadArray([], countriesVisit, true).reverse());
console.log("Still in original Order!", countriesVisit);
console.log("Original Array Reversed!", countriesVisit.reverse());
console.log("Comeback to Original Order!", countriesVisit.reverse());
console.log("Sorted in Alphabetical Order!", countriesVisit.sort());
console.log("Original Array Reversed Again!", countriesVisit.reverse());
