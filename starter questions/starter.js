//challenge 1\\

let orderCount = 0;
let toppings = [
    "chicken",
    "cheese",
    "onions",
    "beef",
    "tomatoes"
];
toppings.unshift("sweetcorn")
const takeOrder = (toppings) => {
    console.log(`sub sandwich with ${toppings},`)
orderCount++
}
takeOrder (toppings);

//challenge 2\\

let phone = [
    "iphone",
    "samsung",
    "oneplus"
];
phone.unshift("huwaei")
console.log(phone);

//challange 3\\

for (i= 0; i < 6; i++){
    console.log(Math.random()) *49 +1;
}