const requestURL = "./scripts/fruit.json";
const cards = document.querySelector(".fruitOptions");

console.log("bingus");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const fruitListFull = jsonObject;
    // console.table(jsonObject);
    fruitListFull.forEach(displayBuisinesses);
    fruitListFull.forEach(displayBuisinesses2);
    fruitListFull.forEach(displayBuisinesses3);
  });

function displayBuisinesses(fruitList) {
  // Create elements to add to the document

  // let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  // selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("#fruitDrop").appendChild(fruitn);
}

function displayBuisinesses2(fruitList) {
  // Create elements to add to the document

  // let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  // selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("#fruitDrop2").appendChild(fruitn);
}

function displayBuisinesses3(fruitList) {
  // Create elements to add to the document

  // let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  // selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("#fruitDrop3").appendChild(fruitn);
}

function poplol() {
  preventDefault();
  console.log("buttpoop");
}
