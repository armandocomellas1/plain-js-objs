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
    let transform = document.getElementsByClassName(parameter)[0];
    transform.remove();
    let removeLocalStore = JSON.parse(localStorage.getItem('List'));
    for (let j = 0; j < removeLocalStore.length; j++) {
      let removeData = removeLocalStore[j].Article;
      let toRemove = removeLocalStore;
      if(removeData === parameter) {
        removeLocalStore = removeLocalStore.splice(j, 1);
        localStorage.setItem('List', JSON.stringify(toRemove));
      }

    }
  }
}

removeElement("No");

function localStorageFct(parameter) {
  if(parameter === "No") {

    let getDataLocalStorage = JSON.parse(localStorage.getItem('List'));
    let parseObjt = getDataLocalStorage;

    let getListAllBooks = document.getElementById('list_books');

    if(parseObjt !== null) {
      var lengthArray = parseObjt.length;
    } else {
      lengthArray = 0;
    }

    var reset = 3;
    for (var i = 0; i < lengthArray; i++) {
      let setData = parseObjt[i];

      let createBook = document.createElement('article');
      createBook.classList.add('article' + reset);
      let dynamicList =
      `
        <div>${setData.title}<br>${setData.Author}</div>
        <button class="remove_btn" type="button" onClick="removeElement('article' + ${reset})">Remove</button>
        <hr>
      `;
      createBook.innerHTML = dynamicList;
      getListAllBooks.appendChild(createBook);
      reset++;
    }

  } else if(parameter === "Yes") {
      let getFullTitle = document.getElementsByClassName('get_Title')[0].value;
      let getFullAuthor = document.getElementsByClassName('get_author')[0].value;
      let getArticlePos = document.getElementsByTagName('article');
      let getLengthArticlePos = getArticlePos.length;
      let joinTogether = "article" + getLengthArticlePos;
      let objectInputs = {title: getFullTitle, Author: getFullAuthor, Article: joinTogether};
      let getDataLocals = localStorage.getItem('List');
      if(getDataLocals !== null) {
        getDataLocals = JSON.parse(getDataLocals);
        localStorage.setItem('List', JSON.stringify(getDataLocals.concat(objectInputs)));
      } else {
        var arrSetItem = [objectInputs]; //Create ARRAY
        localStorage.setItem('List', JSON.stringify(arrSetItem));
      }
  }
}

localStorageFct("No");
