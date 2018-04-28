/*
You have a fashion catalog, an inventory of items from various high-fashion designers.
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

Look up all the shoes across all the designers and list them out in a flat list:
{designer name}, {shoe name}, {price}
{designer name}, {shoe name}, {price}

E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...

*/
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderInventory(inventory) {
  //input is array with object values which contains designers name and array of shoes with price and username
  //we should output array with string value of designers name and name of shoe and price
  //create empty array to push inventory
  var inventories = [];
  //iterate through inventory
  inventory.forEach(designer => {
    //push designers name and shoe price inside empty array
    designer.shoes.forEach(sp => {
      inventories.push(`${designer.name}, ${sp.name}, ${sp.price}`);
    });
  });
  //return array
  return inventories;
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
}
renderInventory(currentInventory);
