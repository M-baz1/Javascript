
let balance = 500;
let pin = 1000

const withdraw = (pin, balance) => {


if (enteredNum == pin && balance >= withdrawal) 
    console.log (`pin corrrect and suffeciant funds available.`);

else if (enteredNum != pin) 
    console.log(`pin incorrect`);

else if (withdrawal >= balance ) 
    console.log(`insuffeciant funds`);
}
balance = balance - withdrawal;
console.log(`available balance left`)

withdraw (1000, 70)