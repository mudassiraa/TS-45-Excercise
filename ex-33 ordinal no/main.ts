let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// using foe-loop
for(let oneNumber of numbers){
    let ordinalNumderEnd: string;
    if(oneNumber === 1){
        ordinalNumderEnd = "st"
    
    }else if(oneNumber === 2){
        ordinalNumderEnd = "nd"
    
    }else if(oneNumber === 3){
        ordinalNumderEnd = "rd"
    }
    else{
        ordinalNumderEnd = "th"   
    }
    console.log(`${oneNumber}${ordinalNumderEnd}`);
}
