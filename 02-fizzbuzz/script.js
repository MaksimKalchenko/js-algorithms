/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    if(Number.isInteger(num)){
		for(let i = 1; i <= num; i++){
        if(!(i % 3 == 0) && !(i % 5 == 0))
        {console.log(i)}
		else if((i % 3 == 0) && (i % 5 == 0)){
			console.log('fizzbuzz')
		}
        else if(i % 3 == 0)
        {console.log('fizz')}
		else{console.log('buzz')}
    }}
	else{ console.log("Дайте мне цифры! Дайте мне цифры!")}
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));