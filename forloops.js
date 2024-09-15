//      question no1
// var nam="hello"
// for (let index = 0; index < 5; index++ ) {
//     console.log(nam)
// }

//       question no2 
//   for(var n = 1 ; n <= 10; n++){ 
//     console.log(n)
//   }
      
//       question no3

//       var table =+prompt("enter table number :") 
//       var l =+prompt("enter the length of table:")
      
//       for(var i=1; i<= l; i++){
//         document.write(table+"*"+ i +"="+table*i +"<br>" )
//       }

//      question no4
//        var nam=["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
//         for (let index = 0; index < nam.length; index++ ) {
//           document.write(nam[index] +"<br>")
//        }
     
//         question no5
//        var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
//         for (let index = 0; index < fruits.length; index++ ) {
//           document.write(fruits[index] +"<br>")
         
//        }  
//        for (let index = 0; index < fruits.length; index++) {
//         document.write("Element at index"+index+"is"+fruits[index]+"<br>")
        
//        }

//     var arr = prompt("search items : ")

//     var A = ["cake", "apple pie", "cookie", "chips", "patties"] 
//     var found = false;
//     for (let index = 0; index < A.length; index++) {
//         if(arr ===  A[index]){
//             alert(arr+"is avaiable at index :"+index)
//             found = true;
//             break;
//         }
//     }

//     if(!found){
//         alert("we are sorry"+arr+"is not avaiable")
//     }
//     var arr = prompt("search items : ");
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var found = false;

// for (let index = 0; index < A.length; index++) {
//     if(arr === A[index]){
//         alert(arr + " is available at index : " + index);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     alert("We are sorry, " + arr + " is not available");
// }

// var arr =[43,54,23,43,]
// var stop =+prompt("enter stop value :")

//  for(var i=0;i<arr.length;i++){
//     document.write(arr[i])

   
//  }
// var scores = [12, 45, 3, 22, 34, 50];

// // Function to print numbers from start to stop value
// function printNumbersUpToStop(stopValue) {
//   for (var i = 0; i < scores.length; i++) {
//     if (scores[i] <= stopValue) {
//       console.log(scores[i]);
//     } else {
//       break;
//     }
//   }
// }
// if(!NaN){

// }

// for(var i=1;i<=5 ;i++){
//     for( var j=5; j>=i;j--){
//         console.log("*")
//     }
//     console.log(" \n")
// }
// for (var i = 1; i <= 5; i++) {
//     var line = ""; // Initialize an empty string to store the stars for each line
//     for (var j = 5; j >= i; j--) {
//         line += "*"; // Concatenate a star to the line string
//     }
//     console.log(line); // Print the line after constructing it
//     console.log("\n"); // Move this line outside of the inner loop for a line break after each line of stars
// }