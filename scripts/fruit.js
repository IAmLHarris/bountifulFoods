const requestURL = "./scripts/fruit.json";
const cards = document.querySelector(".fruitOptions");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const fruitListFull = jsonObject;
    // console.table(jsonObject);
    fruitListFull.forEach(displayFruit);
    fruitListFull.forEach(displayFruit2);
    fruitListFull.forEach(displayFruit3);
  });

function displayFruit(fruitList) {
  // Create elements to add to the document

  // let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  fruitn.setAttribute("value", fruitList.name);

  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  // selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("#fruitDrop").appendChild(fruitn);
}

function displayFruit2(fruitList) {
  // Create elements to add to the document

  // let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  fruitn.setAttribute("value", fruitList.name);
  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  // selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("#fruitDrop2").appendChild(fruitn);
}

function displayFruit3(fruitList) {
  // Create elements to add to the document

  // let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  fruitn.setAttribute("value", fruitList.name);
  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  // selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("#fruitDrop3").appendChild(fruitn);
}

const fruitbox = document.getElementById("fruitBox");

function setorder() {
  let fname = document.getElementById("fnamel");
  let email = document.getElementById("emaill");
  let pnumb = document.getElementById("pnumbl");

  let f1 = document.getElementById("fruitDrop");
  let f2 = document.getElementById("fruitDrop2");
  let f3 = document.getElementById("fruitDrop3");

  localStorage.setItem("fname", "");
  localStorage.setItem("email", "");
  localStorage.setItem("pnumb", "");

  localStorage.setItem("ord1", "");
  localStorage.setItem("ord2", "");
  localStorage.setItem("ord3", "");

  while (fruitbox.hasChildNodes()) {
    fruitbox.removeChild(fruitbox.firstChild);
  }

  fname = fname.value;
  email = email.value;
  pnumb = pnumb.value;

  var value1 = f1.value;
  // var text1 = f1.options[f1.selectedIndex].text;

  var value2 = f2.value;
  // var text2 = f2.options[f2.selectedIndex].text;

  var value3 = f3.value;
  // var text3 = f3.options[f3.selectedIndex].text;

  localStorage.setItem("fname", fname);
  localStorage.setItem("email", email);
  localStorage.setItem("pnumb", pnumb);

  localStorage.setItem("ord1", value1);
  localStorage.setItem("ord2", value2);
  localStorage.setItem("ord3", value3);

  console.log(fname);
  console.log(email);
  console.log(pnumb);

  // console.log(value1);
  // console.log(text1);

  // console.log(value2);
  // console.log(text2);

  // console.log(value3);
  // console.log(text3);

  let name = document.createElement("p");
  name.textContent = localStorage.getItem("fname");
  document.querySelector("#fruitBox").appendChild(name);

  let mail = document.createElement("p");
  mail.textContent = localStorage.getItem("email");
  document.querySelector("#fruitBox").appendChild(mail);

  let number = document.createElement("p");
  number.textContent = localStorage.getItem("pnumb");
  document.querySelector("#fruitBox").appendChild(number);

  let ord1 = document.createElement("h3");
  ord1.textContent = localStorage.getItem("ord1");
  document.querySelector("#fruitBox").appendChild(ord1);

  let ord2 = document.createElement("h3");
  ord2.textContent = localStorage.getItem("ord2");
  document.querySelector("#fruitBox").appendChild(ord2);

  let ord3 = document.createElement("h3");
  ord3.textContent = localStorage.getItem("ord3");
  document.querySelector("#fruitBox").appendChild(ord3);
}
