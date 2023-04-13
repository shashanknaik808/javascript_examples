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