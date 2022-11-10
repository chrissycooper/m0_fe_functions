// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
//I wasn't sure about this one, I added semi colons. Otherwise it looks pretty good to me


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

//This one I cleaned up the indenting to make it easier to tell what each line belongs to. e.g. the bottom } now lines up with its function, and the codeblock is now indented to that function so you can tell it's inside the function. 


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

//similarly, here I bumped down the second semicolon so its easy to see where the fcn ends. I added a space after the parentheses and completed the word function from "func"


//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var average = sum / 2;

  console.log(`the average is: ${average}.`);
}

//somemore bracket arranging, this time at the top as well as the bottom,and added a semicolon. Then I noticed the function name is clipped in the code block and the console.log, so I edited it to match. Then I ran it, and found an error that was pointing to the last parenthesis in the console.log. But, that looked okay. That's when I noticed the period was outside of the backtick. I moved it, and ran the code, and then it looked good!