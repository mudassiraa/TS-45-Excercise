let countriesVisit: string[] = ["Saudia Arabia", "Iran", "Canada", "Australia"];
console.log("Original Array!", countriesVisit);

console.log("Alphabetical Order!", [...countriesVisit].sort());
 
console.log("Still in original Order!", countriesVisit);

console.log("Reverse Order!", [...countriesVisit].reverse());

console.log("Still in original Order!", countriesVisit);

console.log("Original Array Reversed!", countriesVisit.reverse());

console.log("Comeback to Original Order!", countriesVisit.reverse());

console.log("Sorted in Alphabetical Order!", countriesVisit.sort());

console.log("Original Array Reversed Again!", countriesVisit.reverse());