// array of current user
let current_user = ["Umair", "areeba", "Ali", "Ambreen", "Shehnaz"];
//  array the new user
let new_user = ["Umair", "Usama", "Ambreen", "Shoukat", "Sanam"];

new_user.forEach(new_one_user => {
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
 if(our_condition){
      console.log(`Sorry!!! ${new_one_user} is already taken.`)
    }else{
        console.log(`Username of ${new_one_user} is available`)
    }
})