// let elements=document.getElementById("myclass4");
// console.dir(elements);

// const { result } = require("lodash");

// let modeBtn=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currmode="light";

// modeBtn.addEventListener("click",()=>{
//     if (currmode==="light") {
//         currmode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light")
//     } else {
//     currmode="light";
//     body.classList.add("light");
//     body.classList.remove("dark")
//     }
//     console.log(currmode);

// });


// let person = {
//     name: "manju",
//     lastName:"madu"
//     greet: function() {
//         return "madu" + this.name;
//     }
// };

// console.log(person.greet());

// let str1="t";
// let str2="i";
// let newstr=str1.concat(str2);
// console.log(newstr);

// let person ={
//     firstName:"sagar",
//     lastName:"jay",
//     getfullName:function(){
//         return this.firstName+""+this.lastName;
//     }
// };
// console.log(person.getfullName());

// function Person(firstName,lastName) {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.getFullName = () => {
//         return this.firstName + " " + this.lastName;
//     };
// }

// let person1=new Person("sagar","jaya");
// console.log(person1.getFullName());

// let person={
//     name:"sagar",
//     age:23,
//     grades:["A","B","C"],
//     greet:function() {
//     console.log(this.name);
//     }
// };
// let animals=["dog","cat"];
// console.log(animals[1]);

// console.log(animals.length);

// const person={
//     name:"sagar",
//     age:23,
//     role:"developer"
// };

// for (let key in person) {
//     console.log(person[key]);
// }

// let arr=[1,2,3,4];

//     // Iterate backwards through the array
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 2, 1, 3, 2, 4, 4, 4];
// Frequency={};

// for (let i=0;i<arr.lenght;i++) {
//     let element=arr[i];

//     if(Frequency[element]) {
//         Frequency[element]++;
//     } else {
//         Frequency[element]=1;
//     }
   
// }
// console.log(Frequency);


// let array = [1, 2, 3, 4, 2, 1, 3, 2, 4, 4, 4];
// // let frequency=[];
// // let frequency = findFrequency(array);
// // console.log(frequency);






// function findFrequency(arr) {
//     let frequency = {};

//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];

//         // Check if element exists in frequency object
//         if (frequency[element]) {
//             // Increment count if element is already present
//             frequency[element]++;
//         } else {
//             // Initialize count to 1 if element is not present
//             frequency[element] = 1;
//         }
//     }

//     return frequency;
// }

// Example usage:
// let array = [1, 2, 3, 4, 2, 1, 3, 2, 4, 4, 4];
// let frequency = findFrequency(array);
// console.log(frequency);


//     let arr=[1,2,3,4,5,6,72,3,8];
//     for (let i=0;i<arr.length;i++){
//         let element=arr[i];

//         if(arr[element]){
//             arr[element]++;
//         } else {
//             arr[element]=1;
//         }
//     }

//     console.log(arr);
   


//         arr=[1,3,4,22,9]
//         // Iterate backwards through the array
//         for (let i = arr.length - 1; i >= 0; i--) {
//             console.log(arr[i]);
//         }
    
    
//     // Example usage:
    
//     printReverse(array);


//     function printReverse(arr){
//         for (let i=arr.length-1;i>=0;i--) {
//             console.log(arr[i]);
//         }
//     }

//     let Array=[1,3,4,2];
//     printReverse(Array);

// let array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array); ho

// let array = [1, 2, 3, 4, 5];
// console.log(printReverse(arr)); 



// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     let normalizedStr = str.replace(/[\W_]/g, "").toLowerCase();
    
//     // Reverse the normalized string
//     let reversedStr = normalizedStr.split("").reverse().join("");
    
//     // Check if original and reversed strings are the same
//     return normalizedStr === reversedStr;
// }

// // Example usage:
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));


// function isPalindrome(str) {
//     // Normalize string (remove non-alphanumeric characters and convert to lowercase)
//     str = str.toLowerCase().replace(/[\W_]/g, '');

//     Initialize pointers
//     let left = 0;
//     let right = str.length - 1;

//     // Check characters at each pointer position
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false; // Characters do not match, not a palindrome
//         }
//         left++;
//         right--;
//     }
//     return true; // All characters matched, it's a palindrome
// }

// // Examples:
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); //


// let add=function(x,y){
//     return x+y;
// }

// console.log(add(3,4));

// const button=document.getElementById('myButton');
// button.addEventListener('click',function(){
//     console.log('button clicked!');
// });


// // document.getElementById('keydown').addEventListener('click', function() {
// //     console.log"(key pressed:",event.key);
// // });

// // // Example of adding and removing a CSS class on mouseover and mouseout
// let element = document.getElementById('myButton');
// element.addEventListener('mouseover', function() {
//     element.classList.add('highlight');
// });
// element.addEventListener('mouseout', function() {
//     element.classList.remove('highlight');
// });






// let inputElement = document.getElementById('textInput');
    
// // Add event listener for keyup event
// inputElement.addEventListener('keyup', function(event) {
//     // Get the value of the input
//     let inputValue = event.target.value;
    
//     // Update the output paragraph with the input value
//     document.getElementById('output').textContent = `You typed: ${inputValue}`;
// });

// const button=document.getElementById('myButton');
// button.addEventListener('click',function(){
//     console.log('button clicked!');
// });


// let element = document.getElementById('generateButton','textInput');
// element.addEventListener('mouseover', function() {
//     element.classList.add('highlight');
// });
// element.addEventListener('mouseout', function() {
//     element.classList.remove('highlight');
// });






// document.getElementById('generateButton').addEventListener('click', function() {
//     var inputValue = document.getElementById('textInput').value.trim();

//     // if (!inputValue) {
//     //     alert('Please enter text or URL to generate QR code.');
//     //     return;
//     // }

//     document.getElementById('qrcode').innerHTML = '';

//     var qr = qrcode(10, 'M');
//     qr.addData(inputValue);
//     qr.make();

//     var qrImage = qr.createImgTag(4); // Scale factor: 4
//     document.getElementById('qrcode').innerHTML = qrImage;
// });




// document.getElementById('addAdminForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Fetch form values
// let adminName = document.getElementById('adminName').value;
// let adminAddress = document.getElementById('adminAddress').value;
// let adminContact = document.getElementById('adminContact').value;
// let adminEmail = document.getElementById('adminEmail').value;
// let adminCars = document.getElementById('adminCars').value;

// // Create a new row in the table
// let tableBody = document.getElementById('adminTableBody');
// let newRow = tableBody.insertRow();

// // Insert cells into the new row
// let cell1 = newRow.insertCell(0);
// let cell2 = newRow.insertCell(1);
// let cell3 = newRow.insertCell(2);
// let cell4 = newRow.insertCell(3);
// let cell5 = newRow.insertCell(4);
// let cell6 = newRow.insertCell(5);

// // Populate cells with form values
// cell1.textContent = adminName;
// cell2.textContent = adminAddress;
// cell3.textContent = adminContact;
// cell4.textContent = adminEmail;
// cell5.textContent = adminCars;

// // Create delete button in the last cell
// let deleteButton = document.createElement('button');
// deleteButton.textContent = 'Delete';
// deleteButton.addEventListener('click', function() {
//     // Remove the row when delete button is clicked
//     newRow.remove();
// });

// cell6.appendChild(deleteButton);

// // Clear form inputs after submission
// document.getElementById('addAdminForm').reset();
// })



// document.getElementById('addAdminForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Fetch form values
//     let adminName = document.getElementById('adminName').value;
//     let adminAddress = document.getElementById('adminAddress').value;
//     let adminContact = document.getElementById('adminContact').value;
//     let adminEmail = document.getElementById('adminEmail').value;
//     let adminCars = document.getElementById('adminCars').value;

//     // Create a new row in the table
//     let tableBody = document.getElementById('adminTableBody');
//     let newRow = tableBody.insertRow();

//     // Insert cells into the new row
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     let cell3 = newRow.insertCell(2);
//     let cell4 = newRow.insertCell(3);
//     let cell5 = newRow.insertCell(4);
//     let cell6 = newRow.insertCell(5);

//     // Populate cells with form values
//     cell1.textContent = adminName;
//     cell2.textContent = adminAddress;
//     cell3.textContent = adminContact;
//     cell4.textContent = adminEmail;
//     cell5.textContent = adminCars;

//     // Create delete button in the last cell
//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', function() {
//         // Remove the row when delete button is clicked
//         newRow.remove();
//     });
//     cell6.appendChild(deleteButton);

//     // Clear form inputs after submission
//     document.getElementById('addAdminForm').reset();
// });


// const users = [
//     { id: 1, email: 'superadmin@example.com', password: 'password', role: 'superadmin' },
//     { id: 2, email: 'admin@example.com', password: 'password', role: 'admin' },
//     { id: 3, email: 'subadmin@example.com', password: 'password', role: 'subadmin' },
//     { id: 4, email: 'instructor@example.com', password: 'password', role: 'instructor' }
// ];

// // Initial user (guest)
// let currentUser = null;

// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const superAdminDashboard = document.getElementById('superAdminDashboard');
//     const logoutBtn = document.getElementById('logoutBtn');
//     const addAdminBtn = document.getElementById('addAdminBtn');

//     // Event listener for login form submission
//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         const email = document.getElementById('loginEmail').value;
//         const password = document.getElementById('loginPassword').value;
        
//         // Find user with matching credentials
//         const user = users.find(u => u.email === email && u.password === password);
        
//         if (user) {
//             currentUser = user;
//             handleUserRole(currentUser.role);
//             loginForm.reset();
//         } else {
//             alert('Invalid email or password');
//         }
//     });

//     // Event listener for logout button
//     logoutBtn.addEventListener('click', function() {
//         currentUser = null;
//         superAdminDashboard.style.display = 'none';
//         document.getElementById('loginSection').style.display = 'block';
//     });

//     // Event listener for adding admin (example: console log)
//     addAdminBtn.addEventListener('click', function() {
//         console.log('Add Admin clicked');
//         // Implement add admin functionality (e.g., show add admin form)
//     });
// });

// Function to handle UI based on user role
// function handleUserRole(role) {
//     switch(role) {
//         case 'superadmin':
//             document.getElementById('superAdminDashboard').style.display = 'block';
//             document.getElementById('loginSection').style.display = 'none';
//             break;
//         case 'admin':
//             // Implement admin dashboard UI handling
//             break;
//         case 'subadmin':
//             // Implement subadmin dashboard UI handling
//             break;
//         case 'instructor':
//             // Implement instructor dashboard UI handling
//             break;
//         default:
//             alert('Unknown role');
//             break;
//     }
// }


// function checkOddEven(number) {
//     if (number % 2 === 0) {
//         return `${number} is even.`;
//     } else {
//         return `${number} is odd.`;
//     }
// }

// console.log(checkOddEven());

// let arr = [3, 6, 99, 4, 76, 67, 94, 998];
// // function checkOddEven(arr){
// // function checkOddEvenInArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(`${arr[i]} is even.`);
//         } else {
//             console.log(`${arr[i]} is odd.`);
//         }
//     }
// }

// Example usage:
// checkOddEven();



// arr=[1,2,3,4,5];

// let firstElement=arr.shift();
// arr.push(firstElement);

// for (let i=0;i<arr.length;i++) {
//     console.log(arr[i]);

// }


// let arr=[1,2,3,4,5];

// let index=-1;

// for (let i=0;i<arr.length;i++){
//     if (arr[i]===1) {
//         index=i;
//         break;
//     }


// if (index !==-1){
//     for (let i=index; i<arr.length-1; i++){
//         let temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;
//     }
// }

// // console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// // Find the index of element 1
// let index = -1;
// for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] === 1) {
//         index = i;
//         break;
//     }
// }



// // Shift the element to the end
// if (index !== -1) {
//     for (let i = index; i < Arr.length - 1; i++) {
//         let temp = Arr[i];
//         Arr[i] = Arr[i + 1];
//         Arr[i + 1] = temp;
//     }
// }



// function shiftElementToEnd(arr) {
//     let index = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             index = i;
//             break;
//         }
//     }
//     if (index !== -1) {
//         for (let i = index; i < arr.length - 1; i++) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }

//     return arr;
// }

// let Arr=[1,2,3,4,5];

// Arr = shiftElementToEnd(Arr);
// console.log(Arr); 

// let Arr=["12345"];
// let result=[];

// for (let i=0;i<Arr[0].length;i++){
//     // if (i===4){
//     //     Arr[0]=Arr[0]+"1";
//     // }
//     result.push(parseInt(Arr[0][i]));
// }

// console.log(result);

// function shiftElementToEnd(arr) {

//     for (let i=0;i<arr[0].length;i++){
//         if (i===4){
//             arr[0]=arr[0]+"1";
//         }
//     }
//     return arr;
// }
// let arr=["12345"];
// // arr=shiftElementToEnd(arr);
// // console.log(arr);


// let arr = ["12345"];
// let result = [];

// // Iterate over each character in the string
// for (let i = 0; i < arr[0].length; i++) {
//     // Convert each character to a number and push it to the result array
//     result.push(parseInt(arr[0][i]));
// }

// console.log(result);

// let arr = ["12345"];
// let result = [];  // Initialize an empty array to store the converted numbers

// // Iterate over each character in the string
// for (let i = 0; i < arr[0].length; i++) {
//     // Convert each character to a number and push it to the result array
//     result.push(parseInt(arr[0][i]));
// }

// console.log(result);


// let arr = ["12345"];

// for (let i = 0; i < arr[0].length; i++) {
//     if (i === 4) {
//         arr[0] += "1";  
//     }
// }
// console.log(arr);



// Check if a number is prime
// ✅ Find the greatest common divisor (GCD) of two numbers
// ✅ Check if a number is a perfect square
// ✅ Generate the Fibonacci sequence up to n terms
// ✅ Find the factorial of a number
// ✅ Check if a number is an Armstrong number
// ✅ Check if a number is a palindrome

// Find the frequency of each element in the array
// ✅ Print the duplicate elements of an array
// ✅ Print the elements of an array in reverse order
// ✅ Print the largest element in an array
// ✅ Print the smallest element in an array
// ✅ Print the sum of all the items of the array
// ✅ Sort the elements of an array in ascending order
// ✅ Find the second-largest number in an array
// ✅ Find the second smallest number in an array
// ✅ Print odd and even numbers from an array

// String Problems:
// ✅ Remove all the white spaces in a string
// ✅ Write a code to prove that String objects are immutable
// ✅ Count the number of words in a string
// ✅ Check whether a string is a palindrome
// ✅ Reverse a string
// ✅ Remove leading zeros from a string
// ✅ Print the first letter of each word in a string
// ✅ Given a string s, find the length of the longest substring without repeating characters


// function findFrequency(arr) {
//     let frequency = {};
//     arr.forEach(item => {
//         if (frequency[item]) {
//             frequency[item]+=1;
//         } else {
//             frequency[item] = 1;
//         }
//     });
//     return frequency;
// }

// let arr = [1, 2, 2, 3, 3, 3];
// console.log(findFrequency(arr))

// function findDuplicates(arr) {
//     let duplicates = [];
//     let seen = {};
//     arr.forEach(item => {
//         if (seen[item]) {
//             if (!duplicates.includes(item)) {
//                 duplicates.push(item);
//             }
//         } else {
//             seen[item] = true;
//         }
//     });
//     return duplicates;
// }

// let arr2 = [1, 2, 2, 3, 3, 4, 5, 5];
// console.log(findDuplicates(arr2));

// function reverseArray(arr) {
//     return arr.slice().reverse();  
// }
// let arr3 = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr3));


// function findMaxmin(arr) {
//     if (arr.length === 0) {
//         return undefined;  // Return undefined for empty array
//     }

//     let max = arr[0];
//     let min=arr[0];  // Initialize max with the first element of the array
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];  // Update max if current element is larger
//         } 
            
//         if (arr[i]<min) {
//             min=arr[i];
//         }
//     }
//     return {max,min};
// }

// let arr4 = [3, 7, 2,0, 9, 1];
// console.log(findMaxmin(arr4));

// Print the sum of all the items of the array//

// function sumarray(arr) {
//     let sum=0;

//     for (let i=0;i<arr.length;i++) {
//         sum=sum+arr[i];
//     }
//     return sum;

// }

// arr1=[1,2,3,432,2];
// console.log(sumarray(arr1));

// sort//
// function bubbleSort(arr) {
//     // let n = arr.length;
//     for (let i = 0; i < (n=arr.length) - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap arr[j] and arr[j + 1]
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// let arr = [3, 7, 2, 9, 1];
// console.log(bubbleSort(arr));


// Find the second-largest number in an array
// ✅ Find the second smallest number in an array
// ✅ Print odd and even numbers from an array




// Find the second-largest number in an array

// function findSecondLargest(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//             secondLargest = arr[i];
//         }
//     }

//         return secondLargest;
    
// }

// let arr = [3, 7, 2, 9, 1];
// console.log(findSecondLargest(arr)); 


// function findSecondSmallest(arr){
//     let firstSmallest=Infinity;
//     let SecondSmallest=Infinity;
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]<firstSmallest) {
//             SecondSmallest=firstSmallest;
//             firstSmallest=arr[i];
//         } else if (arr[i] < SecondSmallest && arr[i] !==firstSmallest) {
//             SecondSmallest=arr[i];
//         }
//     } 
//         return SecondSmallest; 
// }
        

// let arr1 = [3, 7, 2, 9, 1];
// console.log(findSecondSmallest(arr1)); 


// function findSecondSmallest(arr){

//     let firstSmallest = Infinity;
//     let secondSmallest = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < firstSmallest) {
//             secondSmallest = firstSmallest;
//             firstSmallest = arr[i];
//         } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
//             secondSmallest = arr[i];
//         }
//     }
//         return secondSmallest;
// }

// arr1=[1,32,32,2,4];
// console.log(findSecondSmallest(arr1))


// function findthirdSmallest(arr){

//     let firstSmallest = Infinity;
//     let secondSmallest = Infinity;
//     let thirdSmallest = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < firstSmallest) {
//             thirdSmallest=secondSmallest;
//             secondSmallest = firstSmallest;
//             firstSmallest = arr[i];
//         } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
//             thirdSmallest=secondSmallest;
//             secondSmallest=firstSmallest;
//             firstSmallest=arr[i];
//         } else if (arr[i]< thirdSmallest && arr[i] !==secondSmallest && arr[i] !== firstSmallest) {
//             thirdSmallest=arr[i];
//         }
//     }
//         return thirdSmallest;
// }

// let arr1=[1,2,3,4,5,6,];
// console.log(findthirdSmallest(arr1));


// odd Even//

// function findEvenodd(arr) {
//     let Evens=[];
//     let odds=[];
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i]%2===0) {
//             Evens.push(arr[i]);
//         } else {
//             odds.push(arr[i]);
//         }
//     }
//         console.log("Even numbers",Evens);
//         console.log("odd numbers",odds);

// }

// let arr1=[1,2,3,4,5,3, 7, 2, 9, 1, 6, 4, 8];
// console.log(findEvenodd(arr1));
// console.log( 2==2);
// console.log(2==2==2==1)




// Check if a number is prime
// ✅ Find the greatest common divisor (GCD) of two numbers
// ✅ Check if a number is a perfect square
// ✅ Generate the Fibonacci sequence up to n terms
// ✅ Find the factorial of a number
// ✅ Check if a number is an Armstrong number
// ✅ Check if a number is a palindrome


// Check if a number is prime
// function isPrime(num) {
//     if (num <2 || !Number.isInteger(num)){
//         return false;
//     }

//     if (num===2 || num===3){
//         return true;
//     }

//     if (num%2===0){
//         return false;
//     }

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//         return true;
// }

// function printPrimeNumbers(limit) {
//     for (let i = 1; i <= limit; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }
// printPrimeNumbers(100);

// Find the greatest common divisor (GCD) of two numbers//

// const arr=["neha","khushi","nidi"];

// const changeValue=document.getElementById("hello")
// console.log(changeValue);
 
// changeValue.onclick=()=>{
//     arr.map()
// }

// function isPrime(num){
//     if (num<2 || !Number.isInteger(num)){
//         return false;
//     }

//     if (num===2 || num===3){
//         return true;
//     }

//     if (num%2===0){
//         return false;
//     }
    
//     for (let i=3;i<=Math.sqrt(num);i+=2){
//         if (num%i===0) {
//             return false
//         }
//         return true;
//     }
// }

// function printPrimeNumbers(limit){

//     for (let i=1;i<=limit;i++){
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// function countPrimeNumbers(arr) {
//     let count = 0;
//     for (let num of arr) {
//         if (isPrime(num)) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr1=[12,33,2,2,1,5];
// let primeCount= countPrimeNumbers(arr);
// console.log(primeCount);
// printPrimeNumbers(100);


// function gcd(a, b) {
//     // Ensure a >= b using absolute values
//     a = Math.abs(a);
//     b = Math.abs(b);
    
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
    
//     return a;
// }

// // Example usage:
// let num1 = 24;
// let num2 = 36;
// let result = gcd(num1, num2);
// console.log(`GCD of ${num1} and ${num2} is: ${result}`);



// is perfect number//

// function isPerfectSequers(n) {
//     if (n<0){
//         return false;
//     }

//     if (n===0) {
//         return true;
//     }

//     for (let i=1;i<=n;i++){
//         if(i*i===n){
//             return true;
//         } else if (i*i>n){
//             return false;
//         }
//     }
//         return false;
// }

// console.log(isPerfectSequers(34));


// function printNumbersAndCount() {
//     let count = 0;
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//         count++;
//     }
// //     return count;
// }

// // Call the function to print numbers and count them
// let totalCount = printNumbersAndCount();
// console.log(`Total count: ${totalCount}`);



// function FibonacciSequence(n){
//     let FibSequence=[];
//     let a=0,b=1;
//     for (let i=1;i<n;i++){
//         FibSequence.push(a);
//         let next=a+b;
//         a=b;
//         b=next; 
//     }
//     return FibSequence;
// }

// let n=10;
// let result=FibonacciSequence(n);
// console.log("Fibonacci sequence up to ${n} terms :",result);


// function factorial(n){
//     let  n=10;
//     if (n===0 || n===1){
//         return 1;
//     } else {
//         let result=1;
//         for (let i=2; i<=n;i++){
//             result*=i;
//         }
//         // return result;
//     }

// // let result=factorial(n);
// console.log(`The factorial of ${n} is:` ,result);



// ✅ Check if a number is an Armstrong number
// ✅ Check if a number is a palindrome



// function isArmstrongNumber(num) {
//     // Convert number to string to iterate over digits
//     let str = num.toString();
//     let len = str.length;
//     let sum = 0;

//     // Calculate sum of each digit raised to the power of len
//     for (let i = 0; i < len; i++) {
//         sum += Math.pow(parseInt(str[i]), len);
//     }

//     // Check if the sum is equal to the original number
//     return sum === num;
// }

// // Example usage:
// let number = 156;
// if (isArmstrongNumber(number)) {

//     console.log(`${number} is an Armstrong number.`);

// } else {
//     console.log(`${number} is not an Armstrong number.`);

// }




// function isPalindrome(num){
//     const str=num.toString();
//     const len=str.length;
    
//     for (let i=0;i<len/2;i++){
//         if(str[i]!==str[len-1-i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const num1=12233;

// const num2=313;
// // console.log(isPalindrome(num1));
// console.log(isPalindrome(num2));


// ✅ Remove all the white spaces in a string
// ✅ Write a code to prove that String objects are immutable
// ✅ Count the number of words in a string
// ✅ Check whether a string is a palindrome
// ✅ Reverse a string
// ✅ Remove leading zeros from a string
// ✅ Print the first letter of each word in a string
// ✅ Given a string s, find the length of the longest substring without repeating characters



// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     describe() {
//       return `Name: ${this.name}, Age: ${this.age}`;
//     }
//   }
  
// const person1 = new Person('Alice', 30);
  
// // Function to display person details on the page
// function displayPersonDetails() {
//     const detailsElement = document.getElementById('personDetails');
//     detailsElement.textContent = person1.describe();
// }
  
// // Add an event listener to the button
// document.getElementById('showDetails').addEventListener('click', displayPersonDetails);






// function BankAccount(customerName,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=Date.now();
//     this.balance=balance;


//     this.deposite=function(amount){
//         this.balance+=amount;
//     };
    


//     this.withdraw=(amount) => {
//         this.balance -= amount;
//     }
// }

// const sagarAccount=new BankAccount('sagar');
// const jonAccount=new BankAccount('jon',1000);

// BankAccount.prototype.deposite=function(amount) {
//     this.balance+=amount
// };

// jonAccount.deposite(3000);

// console.log(jonAccount);

// let div=document.querySelector('div')
// let h1=document.createElement('h1')
// h1.innerHTML='hi sagar,hjjfd'
// div.appendChild(h1)

// document.addEventListener('DOMContentLoaded', () => {
//     const btn5 = document.getElementById('btn5');
//     btn5.addEventListener('click', () => {
//         const btn1 = document.getElementById('btn1');
//         const btn2 = document.getElementById('btn2');
//         const btn3 = document.getElementById('btn3');
//         const btn4 = document.getElementById('btn4');
//         const btn6 = document.getElementById('btn6');
//         const btn7 = document.getElementById('btn7');
//         const btn8 = document.getElementById('btn8');
//         const btn9 = document.getElementById('btn9');

//         const temp = btn1.innerHTML;
//         btn1.innerHTML = btn4.innerHTML;
//         btn4.innerHTML = btn7.innerHTML;
//         btn7.innerHTML = btn8.innerHTML;
//         btn8.innerHTML = btn9.innerHTML;
//         btn9.innerHTML = btn6.innerHTML;
//         btn6.innerHTML = btn3.innerHTML;
//         btn3.innerHTML = btn2.innerHTML;
//         btn2.innerHTML = temp;
//     });
// });  


// const button=document.getElementById('btn');
// button.addEventListener('click',()=>{
//     button.innerHTML= parseInt(button.innerHTML)+1;
// });