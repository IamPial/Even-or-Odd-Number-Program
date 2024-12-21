//Create an even or odd number program using switch case statements;

let num = parseFloat(prompt("Enter any number: "));
switch(num % 2){
    case 0:
        console.log("This is even number");
        break;
    
    case 1:
        console.log("This is odd number");
        break;
        
    default:
        console.log("None of are true");   
}