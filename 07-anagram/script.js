/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = str1.split('').map(item => {
        return item.toLowerCase();
    });

    str2 = str2.split('').map(item => {
        return item.toLowerCase();
    }).join('');
    
    if (str1.length !== str2.length ){return false}
    else if(str1.join('')==str2){return false}
    else {return str1.every(item => {
		return str2.includes(item);
	});
}}
	

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up', 'UP')); // true