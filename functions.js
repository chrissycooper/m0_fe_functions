// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(){
    console.log("Hello, world!");
}
printGreeting();
printGreeting();
printGreeting();



// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function weatherToday(describeWeather){
    console.log(`It's a ${describeWeather} day out there!`)
}
weatherToday("beautiful");
weatherToday('sunny and bright');
weatherToday('unholy mix of sleet and freezing rain');

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function jobDetails (companyName, minPay, maxPay){
    var salaryRange = maxPay - minPay;
    console.log(`The posted job is with ${companyName}. It's starting salary range is ${salaryRange}.`);
}
jobDetails("The Field Museum", 90000, 110000);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(quantity, currentStock){
    if(quantity === 0){
        console.log(`${currentStock} - OUT of stock`);
    } else if (quantity >= 3){
        console.log(`${currentStock} - running LOW`);
    } else {
        console.log(`${currentStock} is stocked`);
    }
};

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"