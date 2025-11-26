import LinkedList from './linkedList.js';

const list = new LinkedList();

list.prepend('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.prepend('snake');
list.append('turtle');

console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.insertAt('donke', 3));
console.log(list.removeAt(5));
console.log(list.toString());
