let orderCount = 0;

const takeOrder = (topping, size) => {
    console.log (`pizza with ${topping}, ${size}`);
    orderCount++
}
takeOrder ("chicken", "10inch");