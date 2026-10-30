// let a=[10,20,30];
// console.log(typeof(a));
//let marth_mola_nashta= ["Upma","Pohe","Thalipeeth","Ghavane"]
// Indexing                0      1        2           3
// console.log(marth_mola_nashta[1]);
//for(true) 
//Create an array containing five numbers. Print each element on a separate line using a for loop
// let numbers=[10,20,30,40,50]  //10 20 30 40 50 
// for(i=0; i< numbers.length;i++){
//     //console.log(numbers[i]);
// }

//Write a program to calculate and print the sum of all numbers in the array

// let sumnum=[5,10,15,20]
// let sum=0
// for(i=0;i<sumnum.length;i++){
//     sum=sum+sumnum[i]
    
// }
//console.log(`sum = ${sum}`);

//Find the largest number in the array without using the built-in Math.max() method.
// let largenum = [12, 45, 7, 89, 23]
// let large=largenum[0] // 12 
// for(i=0;i<largenum.length;i++){
//     if(large < largenum[i]){
//        large=largenum[i] // 45
//        //console.log(large);
//     }
// }
//console.log(`large num is ${large}`);

//Ask the user to enter a number using prompt(). Search for that number in the array and display
//whether it exists. Convert the input to a number before comparing

// let chknumbers = [10, 25, 30, 45, 50]
// let userInput=prompt("Enter No")
// for(i=0;chknumbers.length;i++){
//     if(chknumbers[i] == userInput)
//     {
//         alert("found")
//         break
//     }
//     else{
//         alert("not found")
//         break
//     }
// }

// Count how many even and odd numbers are present in the array using a loop and if-else.
// let numbers = [11, 20, 33, 44, 55, 60]
// let even=0
// let evenno=[]
// let oddno=[]
// let odd=0
// for(i=0; i<numbers.length;i++){
//     if(numbers[i]%2 === 0){
//         evenno.push(numbers[i])
//         even++    // 1+1 +1 == 3
//     }else{
//         oddno.push(numbers[i])
//         odd++  // 1 +1 +1 ==3 
//     }
// }
// console.log(`Total Even no is ${even} and nos are ${evenno}`);
// console.log(`Total Odd no is ${odd} and  nos are ${oddno}`);
let userData=[]
while(true){
    let userInput=prompt("Enter to stop to stop")
    if(userInput === "stop"){
        break
    }
    userData.push(userInput)
   
}
alert(userData)

