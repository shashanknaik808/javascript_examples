console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElm = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
    text = document.createTextNode('This is my elent. click to edit it');   
}
else{
    text = document.createTextNode(val);
}
divElm.appendChild(text);

// Give element id, style and class
divElm.setAttribute('id', 'elm');
divElm.setAttribute('class', 'elm');
divElm.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Insert the element before element with id first
container.insertBefore(divElm, first);

console.log(divElm, container, first);