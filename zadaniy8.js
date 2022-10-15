/*Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/

let mMap = new Map();
mMap.set('key', 'prof');
mMap.set('world', 'toys');
mMap.set(1, 'elef');
mMap.set(true, 1256);

console.log(mMap.keys())
console.log(mMap.values())