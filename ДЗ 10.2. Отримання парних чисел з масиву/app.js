// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
// в якому лише парні числа з оригінального масиву.

const array = [2, 4, 67, 53, 44, 23, 98, 76, 3, 53, 26, 78, 9];

const evenNumbers1 = array.filter(number => number % 2 === 0);

console.log(evenNumbers1);