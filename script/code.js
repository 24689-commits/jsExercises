//Question 1

//1. Variable: It is a placeholder where we can temporarily store a value.
//2. Value: Data that was saved on a specific variable.
//3. Data type: The variable’s nature, or what kind of data are we going to store in our variable.
//4. Initialization: Is the act of creating a variable and assigning a value at the same
// time.

//5 var keyword: After you've declared it, you can keep assigning different values to
// it, which is totally wrong. var is an abbreviation for a variable.
// ● let: It reinforces the scope of a variable, which means that once a variable is
// declared, JavaScript will create its reference in our memory (RAM) as a
// container, and when we are done using it, it will be removed or deleted from
// memory.
// ● const: Once we create a variable using const, that means we don’t want to
// change its value, and we need to make sure that the variable has a value.
// Otherwise, we will get an error.

//6. Variable scope is the lifetime in the program. 
 //7. Use a for loop to iterate over an array.
 // Use a while loop when the increment value is nonstandard.
 // A do-while loop is used when we don't know explicitly how many times the loop should run, and if we want the code to execute at least once.
 // Only use the for-each loop when you want to loop through all the values in an array or list. If you only want to loop through part of an array or list use a for loop instead

 //8. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution and variable scope is the lifetime in the program.


// Question 2
let sName = 'Aphelele'
function fullName(){
    console.log(sName);
}
fullName()

let firstName = 'Aphelele'
lastName = 'Joyi'
age = 19


let personalDetails = {
    firstName : 'Aphelele',
    lastName : 'Joyi',
    age : 19

}

subjectList = ['Html', 'CSS', 'Bootstrap', 'Javascript'];
let address={
    streetNumber : 183,
    streetName: 'Khali street',
    suburb : 'Khayelitsha',
    city : 'Cape Town',
    country : 'South Africa'

}
function details(){
console.log(personalDetails,address, subjectList);
}
details()



// Question 3

function calculateResult() {
    let number1 = parseFloat(document.querySelector("#number1").value) ;
    let operator = document.querySelector("#operator").value;
    let number2 = parseFloat(document.querySelector("#number2").value);
  
    let result = document.querySelector('#lblResult');
  
    if (operator === "+") {
      result.innerText = number1 + number2;
    } else if (operator === "-") {
      result.innerText = number1 - number2;
    } else if (operator === "*") {
      result.innerText = number1 * number2;
    } else if (operator === "/") {
      result.innerText = number1 / number2;
    } else {
      result.innerText = "Invalid operator";
    }
  
    
    console.log(result); 
  }
  
  let btnResult = document.querySelector("#btnResult");
  btnResult.addEventListener("click", calculateResult);

  //  Question 4

  
let sname = 'programming'
  let newName = "";
  for (let i = sname.length - 1; i >= 0; i--) {
      newName += sname[i];
  }
console.log(newName);
