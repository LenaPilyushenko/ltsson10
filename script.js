'use strict';

const parentBlock =  document.querySelector('.books'),
    itemsBook = document.querySelectorAll('.book'),
    itemBody = document.getElementsByTagName('body')[0],
    titeItemBook = itemsBook[4].getElementsByTagName('h2')[0],
    parentItemBook2 = itemsBook[0].querySelector('ul'),
    collectionItemBook2 = itemsBook[0].querySelectorAll('li'),
    parentItemBook5 = itemsBook[5].querySelector('ul'),
    collectionItemBook5 = itemsBook[5].querySelectorAll('li'),
    parentItemBook6 = itemsBook[2].querySelector('ul'),
    collectionItemBook6 = itemsBook[2].querySelectorAll('li'),
    newElement = document.createElement('li')
;

parentBlock.prepend(itemsBook[1]);
parentBlock.append(itemsBook[2]);
itemsBook[3].before(itemsBook[4]);

itemBody.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

titeItemBook.innerHTML = '<a href = "">Книга 3. this и Прототипы Объектов"</a>';

document.querySelector('.adv').remove();

parentItemBook2.append(collectionItemBook2[7]);
parentItemBook2.append(collectionItemBook2[9]);
parentItemBook2.append(collectionItemBook2[2]);
parentItemBook2.append(collectionItemBook2[10]);
collectionItemBook2[4].before(collectionItemBook2[6]);
collectionItemBook2[4].before(collectionItemBook2[8]);

collectionItemBook5[2].before(collectionItemBook5[9]);
collectionItemBook5[6].before(collectionItemBook5[2]);
collectionItemBook5[8].before(collectionItemBook5[5]);

newElement.textContent = 'Глава 8: За пределами ES6';

collectionItemBook6[9].before(newElement);

console.log ('itemsBook', itemsBook);
console.log ('parentItemBook6', parentItemBook6);
console.log ('collectionItemBook6', collectionItemBook6);
 
console.log (newElement);