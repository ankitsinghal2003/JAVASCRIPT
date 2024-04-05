/////////////////////// learn stack(memory) and heap(memory) ///////////////////////////////////////
// memory kese allot hoti h that is study on it.
// stack is used in ->primitive type memoray allocation means isme apn ne jo  value mil gya to aapne variable se oski copy declared hoti h or apn jo bhi changes karte h bo copy me hote h.
// example----->
// let mainstack="Ankit singhal";
// let changestack1 = mainstack;
//  changestack1= "Rahul Singh" ; 
// console.log(mainstack);  // Ankit singhal
// console.log(changestack1);    // kanu singhal

// All non-primitive type used heap memoray allocation means isme apn jo variale delared karte h bo as a refrence milte h toh apn koi bhi chanr arege bo direct main variable me bhi change hoge.
 //example---->
// let userbase={
//     Name: "ankit",
//     Age :"20",
//     mail:  "ankitsingh@gmail.com"
// }
// // console.log(userbase)
// let User1new =userbase
// User1new.Age ="25";
// console.log(User1new);
// console.log(userbase); 

// // here call by refrence kam kar rha h jisse main memory me change hua h.


// string interpolation
// we create placeholders onke ander jo bhi var ibale se replace krte ho.
