class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Ошибка: Деление на ноль!";
        }
        return a / b;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));        // Выводит 8
console.log(calc.subtract(10, 6));  // Выводит 4
console.log(calc.multiply(4, 7));   // Выводит 28
console.log(calc.divide(20, 5));    // Выводит 4
console.log(calc.divide(20, 0));    // Выводит "Ошибка: Деление на ноль!"
