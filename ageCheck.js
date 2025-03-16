// Macabenta, Vhardey John F.
// if statement activity

let age = prompt("Please enter your age:"); // Asks user to enter their age.
if (age > 0 && age < 13){ // test the age if age is greater than 0 and less than 13.
  console.log("You are a child."); // if true then thid code will execute and exits the if statement.
}else if (age >= 13 && age <= 19){ // if the first one returns false it try and test here again.
  console.log("You are a teenager."); // if it returns true then this would get printed and our program exits the if statement.
}else{ // if none of them returns true then it would fall in this code 
  console.log("You're an adult."); // and print the following.
} // exits the if statement.