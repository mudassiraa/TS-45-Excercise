function city_describe (city: string, country: string = "PAKISTAN."){
    console.log(`${city} is in ${country}`);
}
// callimg a functions
city_describe("Karachi");
city_describe("Lahore");
city_describe("Mmbai", "India.");