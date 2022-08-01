//This is the code
let collectionBooks = [
  {
    title: "Waking the giant inside",
    Author: "Tony Robbins"
  },
  {
    title: "The four Agreements",
    Author: "Don Miguel Ruiz"
  },
  {
    title: "The art of war",
    Author: "Tsun Tsu"
  }
];

let getListAllBooks = document.getElementById('list_books');
let dynamicList = "";

for (var i = 0; i < collectionBooks.length; i++) {

let createBook = document.createElement('article');
  createBook.classList.add('article' + i);
  dynamicList =
  `
    <div>${collectionBooks[i].title}<br>${collectionBooks[i].Author}</div>
    <button class="remove_btn" type="button" onClick="removeElement('article' + ${i})">Remove</button>
    <hr>
  `;
  createBook.innerHTML = dynamicList;
  getListAllBooks.appendChild(createBook);
}

let getFunctionAdd = document.getElementsByClassName('add_book')[0];
let getFunctionTitle = document.getElementsByClassName('get_Title')[0];
let getFunctionAuthor = document.getElementsByClassName('get_author')[0];

getFunctionAdd.addEventListener("click", function(){
  collectionBooks.push({title: getFunctionTitle.value, Author: getFunctionAuthor.value});
  let createBook = document.createElement('article');
  createBook.classList.add('article' + (collectionBooks.length - 1));
  let addBook =
  `
    <div>${collectionBooks[collectionBooks.length - 1].title}<br>${collectionBooks[collectionBooks.length - 1].Author}</div>
    <button class="remove_btn" type="button" onClick="removeElement('article' + ${collectionBooks.length - 1})">Remove</button>
    <hr>
  `;
  createBook.innerHTML = addBook;
  getListAllBooks.appendChild(createBook);
});

function removeElement(parameter) {
  if(parameter != "No") {
    console.log("getNumberArticle", parameter);
    let transform = document.getElementsByClassName(parameter)[0];
    transform.remove();
  }
}

removeElement("No");
