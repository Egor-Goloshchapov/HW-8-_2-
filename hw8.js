// 1


let friends = ['Mango', 'banana', 'cherry', 'orange']; 
let string = ''; 

for (let i = 0; i < friends.length; i++) {
  string += friends[i]; 
  if (i < friends.length - 1) {
    string += ','; 
  }
}
console.log(string); 



let strings = friends.join(','); 
console.log(string);


// 2

const cards = ["Карточка-1" , "Карточка-2" , "Карточка-3", "Карточка-4" , "Карточка-5"];
cards.splice(5 , 0 , "Карточка-6");
console.log(cards);

let indexOf = cards.indexOf("Карточка-3");
if (indexOf === 2) {
    cards.splice(indexOf , 1);
}
console.log(cards);

let index = cards.indexOf("Карточка-6");
if (index !== -1) {
    cards.splice(index + 4 , 0 , "Карточка-7");
}
console.log(cards);

let update = cards.indexOf("Карточка-5");
if (index !== -1) {
    cards.splice(cards[update] = "Карточка-10");
}