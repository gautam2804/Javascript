// EX 1
//  let age=prompt("Enter Your Your age")
//         // 18 > Hoil tuz lgn hoil  21 > tu motha manus zala,
//         if (age >= 21){
//                 alert("Baba Lagin")
//             }
//         else if(age >= 18 && age < 21 ){
//             alert("Hoil tuz lgn hoil ")
//         }
//         else{
//              alert("chota bacha samaj kr hamse na takrana re")
//             }

// ************ EX 2 ************
// prompt pizza size= R =100  M=200 L=300 
// Do you want extra cheese  50 
// Do you want extra Toppings  70 
let  psize=prompt("Enter R M L")
let  cheese=prompt("Do ypu want extra Cheese? y or n")
let  toppings=prompt("Do ypu want extra Toppings? y or n")
let price=0;
if(psize === "R"){
    price=price+100;
    if(cheese == "y"){
        price=price+50;
    }
    if(toppings == "y"){
        price=price+70;
    }
   
}
else if(psize==="M"){
    price=price+200;
     if(cheese == "y"){
        price=price+50;
    }
      if(toppings == "y"){
        price=price+70;
    }
}
else if(psize==="L"){
    price=price+300;
     if(cheese == "y"){
        price=price+50;
    }
      if(toppings == "y"){
        price=price+70;
    }
}

alert(price);



