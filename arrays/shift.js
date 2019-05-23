let colours = [
"blue",
"red",
"green",
"yellow"
];

colours.shift()//removes first elemnt from array list then returns it\\
console.log(colours)

colours.unshift("white","orange")//unshift adds element at begining of array\\
console.log(colours)

console.log(colours.slice(2,4))//slice method returns a the required section of the array\\

console.log(colours.splice(2,1))//At position 2 it removes 1 item\\