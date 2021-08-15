/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    let answer
    if (n == 0) {answer = 1}
    else{
        let array = [];
        
        for (i = 1; i <= n; i++){
            array.push(i);
        }
        answer = array.reduce((count, item) => {
            return count = count * item;
        }, 1)
        return answer;
    }
    return answer;

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720