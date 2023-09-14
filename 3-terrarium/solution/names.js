function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}

let number = 5;
let result = calculateFactorial(number);

console.log("The factorial of " + number + " is: " + result);

for (let i = 0; i < 10; i++) {
    if (i % 2 = 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.");
    }
}

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}
