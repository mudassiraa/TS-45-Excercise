let userNames = ["Admin", "Asad", "Ali", "Usama", "Iqra"];
userNames = [];

if (userNames.length === 0){
     console.log(" Your array is empty, You need to find some users!");
}else{
      userNames.forEach(oneUser => {
      if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
     }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
    })
}