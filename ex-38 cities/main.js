function city_describe(city, country) {
    if (country === void 0) { country = "PAKISTAN."; }
    console.log("".concat(city, " is in ").concat(country));
}
// callimg a functions
city_describe("Karachi");
city_describe("Lahore");
city_describe("Mmbai", "India.");
