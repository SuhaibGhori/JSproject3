// // ASSIGNMENT#16

// // Q#01

// var studentArr;
// // Q#02

// studentArr=["Saad","Anus","Mudassir","Ashfaq"];

// // Q#03

// nameArr=["Saad","Anus","Mudassir","Ashfaq"];
// console.log(nameArr);

// // Q#04

// numberArr=[15,45]
// console.log(numberArr);

// // Q#05

// booleanArr=[true,false];
// console.log(booleanArr);

// // Q#06

// mixedArr=["Salauddin Ayyubi",true,6464,false];
// console.log(mixedArr);

// // Q#07

// degreeArr=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PhD"];
// console.log(degreeArr);

// // Q#08

// var namesArr=["Michael","John Doe","Tony Kakkar"];
// var scoresArr=[320,230,480];
// var per1=320/500*100;
// var per2=230/500*100;
// var per3=480/500*100;
// document.write(`Score of ${namesArr[0]} is ${scoresArr[0]}.Percentage:${per1}%  <br>`);
// document.write(`Score of ${namesArr[1]} is ${scoresArr[1]}.Percentage:${per2}% <br>`);
// document.write(`Score of ${namesArr[2]} is ${scoresArr[2]}.Percentage:${per3}% <br>`);

// Q#09

// var colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black"];
// console.log("Initial colors:", colors);

// // PART#a

// newColorStart = prompt("What color do you want to add to the beginning?");
// colors.unshift(newColorStart);
// console.log("After adding to the beginning:", colors);

// // PART#b
// newColorEnd = prompt("What color do you want to add to the end?");
// colors.push(newColorEnd);
// console.log("After adding to the end:", colors);

// // PART#c
//  color1 = prompt("Add another color to the beginning:");
//  color2 = prompt("Add one another color to the beginning:");
// colors.unshift(color1, color2);
// console.log("After adding two more to the beginning:", colors);

// // PART#d
// colors.shift();
// console.log("After deleting the first color:", colors);

// // PART#e
// colors.pop();
// console.log("After deleting the last color:", colors);

// // PART#f 
// var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
// var colorToAdd = prompt("What color do you want to add?");
// if (indexToAdd >= 0 && indexToAdd <= colors.length) {
//     colors.splice(indexToAdd, 0, colorToAdd);
// } else {
//     console.log("Invalid index. No color added.");
// }
// console.log("After adding a color at index", indexToAdd, ":", colors);

// // PART#g
// var indexToDelete = parseInt(prompt("At which index do you want to delete colors?"));
// var countToDelete = parseInt(prompt("How many colors do you want to delete?"));
// if (indexToDelete >= 0 && indexToDelete < colors.length) {
//     colors.splice(indexToDelete, countToDelete);
// } else {
//     console.log("Invalid index. No colors deleted.");
// }
// console.log("After deleting", countToDelete, "color(s) from index", indexToDelete, ":", colors);

// PART#10
 
// var studentScores = [320,230,480,120]; 
// document.write(  `Score of student:, ${studentScores} <br> `);
// studentScores.sort((a, b) => a - b);
// document.write("order scores of student:", studentScores);

// PART#11
 
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar <br>"];
// var selectedCities = [];
// selectedCities = cities.slice(0, 3);  
// document.write("Cities List: <br>", cities);
// document.write("<br>")
// document.write("Selected Cities: <br>", selectedCities);

// // PART#12

// var arr = ["This ", "is ", "my ", "cat","<br>"];
// var result = arr.join('');
// document.write(result);  
// var resultWithSpace = arr.join(' '); 
// document.write(resultWithSpace);  
// var fifoQueue = [];
// fifoQueue.push("Keyboard");
// fifoQueue.push("Mouse");
// fifoQueue.push("Printer");
// fifoQueue.push("Monitor");
// console.log("Devices in FIFO order:");
// for (var i = 0; i < fifoQueue.length; i++) {
//     console.log(fifoQueue[i]); 
// }
// var firstValue = fifoQueue.shift();
//  document.write(firstValue); 
// var secondValue = fifoQueue.shift(); 
// document.write(secondValue);  
// var thirdValue = fifoQueue.shift();  
// document.write(thirdValue); 
// var fourthValue = fifoQueue.shift();  
// document.write(fourthValue);  
// // Attempting to dequeue from an empty queue
// var emptyQueueValue = fifoQueue.shift();  
// if (emptyQueueValue === undefined) {
//     document.write("Queue is empty"); 
// }

// PART#13.

// var lifoStack = [];
// lifoStack.push("Keyboard");
// lifoStack.push("Mouse");
// lifoStack.push("Printer");
// lifoStack.push("Monitor");
// document.write("Values in LIFO order:");
// document.write("Last added: " + lifoStack[lifoStack.length - 1]); 
// var lastValue = lifoStack.pop(); 
// document.write(lastValue);
// lastValue = lifoStack.pop(); 
// document.write(lastValue); 
// lastValue = lifoStack.pop(); 
// document.write(lastValue); 
// lastValue = lifoStack.pop();
// document.write(lastValue);
// if (lifoStack.length === 0) {
//     document.write("Stack is empty");
// }
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<label for="manufacturers">Choose a phone manufacturer:</label>');
// document.write('<select id="manufacturers">');
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');

