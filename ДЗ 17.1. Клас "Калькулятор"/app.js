// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання, віднімання, множення та ділення.

class Calculator {
    add(value1, value2) {
        return value1 + value2;
    }

    subtract(value1, value2) {
        return value1 - value2;
    }

    multiply(value1, value2) {
        return value1 * value2;
    }

    divide(value1, value2) {
        if (value2 !== 0) {
            return value1 / value2;
        }
        return 'Forbidden';
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4