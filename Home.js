// function getTicketPrice(age) {
//     let price;

//     if (age <= 12) {
//         price = 10;
//     } else if (age >= 13 && age <= 17) {
//         price = 15;
//     } else if (age >= 18) {
//         price = 20;
//     } else {
//         return "Invalid age.";
//     }

//     return `The ticket price is $${price}.`;
// }

// // Prompt the user for their age
// let userAge = prompt("Enter your age:");

// // Convert the input to a number
// userAge = Number(userAge);

// // Get the ticket price based on the age
// let ticketPrice = getTicketPrice(userAge);

// // Display the result
// alert(ticketPrice);



function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(2));  
console.log(fibonacci(3));  
console.log(fibonacci(4));  
console.log(fibonacci(5));  
console.log(fibonacci(6));  
console.log(fibonacci(10)); 
