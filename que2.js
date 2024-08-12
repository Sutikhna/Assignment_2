// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

// Example usage
const base = 5;  // Example base
const height = 10;  // Example height

const area = calculateTriangleArea(base, height);

console.log(`The area of the triangle is: ${area}`);


// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example usage
const celsius = 25;  // Example Celsius temperature

const fahrenheit = celsiusToFahrenheit(celsius);

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);


// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage
const number = 5;  // Example number

const result = factorial(number);

console.log(`The factorial of ${number} is: ${result}`);



// Function to perform basic arithmetic operations
function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return 'Error: Division by zero';
            }
        case '%':
            if (b !== 0) {
                return a % b;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operator';
    }
}

// Example usage
const num1 = 10;  // First number
const num2 = 5;   // Second number

const addResult = calculator(num1, num2, '+');
const subtractResult = calculator(num1, num2, '-');
const multiplyResult = calculator(num1, num2, 'x');
const divideResult = calculator(num1, num2, '/');
const remainderResult = calculator(num1, num2, '%');

console.log(`${num1} + ${num2} = ${addResult}`);
console.log(`${num1} - ${num2} = ${subtractResult}`);
console.log(`${num1} x ${num2} = ${multiplyResult}`);
console.log(`${num1} / ${num2} = ${divideResult}`);
console.log(`${num1} % ${num2} = ${remainderResult}`);
