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
    // console.log("getNumberArticle", parameter);
    let transform = document.getElementsByClassName(parameter)[0];
    transform.remove();
  }
}

removeElement("No");

function localStorageFct(parameter) {

  if(parameter === "No" && localStorage.length > 0) {
    console.log("localStorage No", localStorage);

    let getDataLocal = localStorage.getItem('List');
    let parseObjt = JSON.parse(localStorage.getItem('List'));
    let splitObj = getDataLocal.split("{}").length;
    // document.getElementsByClassName('get_Title')[0].value = parseObjt.title;
    // document.getElementsByClassName('get_author')[0].value = parseObjt.Author;

    let getListAllBooks = document.getElementById('list_books');
    let dynamicList = "";
    var reset = 3;
    for (var i = 0; i < splitObj; i++) {

      let createBook = document.createElement('article');
      createBook.classList.add('article' + reset);
      dynamicList =
      `
        <div>${parseObjt.title}<br>${parseObjt.Author}</div>
        <button class="remove_btn" type="button" onClick="removeElement('article' + ${i})">Remove</button>
        <hr>
      `;

      createBook.innerHTML = dynamicList;
      getListAllBooks.appendChild(createBook);
      reset++;
    }

  } else if(parameter === "Yes") {

      let getDataLocal = localStorage.getItem('List');

      if(getDataLocal != null) {
        let parseObjt = JSON.parse(localStorage.getItem('List'));
        let splitObj = getDataLocal.split("{}").length;
        console.log("localStorage Yes", splitObj);

        for (let i = 0; i < splitObj; i++) {
          let getFullTitle = document.getElementsByClassName('get_Title')[0].value;
          let getFullAuthor = document.getElementsByClassName('get_author')[0].value;

          let objectInputs = {title: getFullTitle, Author: getFullAuthor};
          var strinfObject = JSON.stringify(objectInputs);
          console.log("strinfObject Yes", strinfObject);
          localStorage.setItem('List', strinfObject);
        }

      } else {
        let getFullTitle = document.getElementsByClassName('get_Title')[0].value;
        let getFullAuthor = document.getElementsByClassName('get_author')[0].value;
        let objectInputs = {title: getFullTitle, Author: getFullAuthor};
        var strinfObject = JSON.stringify(objectInputs);
        localStorage.setItem('List', strinfObject);
      }
  }
}

localStorageFct("No");

// window.onload = function() {
//   if (localStorage.getItem('List')) {
//     // let parseObjt = JSON.parse(localStorage.getItem('List'));
//     // console.log("parseObjt", parseObjt);

//   } else {
//     localStorage.clear();
//   }
// };