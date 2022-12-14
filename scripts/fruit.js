const requestURL = "./scripts/fruit.json";
const cards = document.querySelector(".fruitOptions");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const fruitListFull = jsonObject;
    // console.table(jsonObject);
    fruitListFull.forEach(displayBuisinesses);
  });

function displayBuisinesses(fruitList) {
  // Create elements to add to the document

  let selection = document.createElement("select");
  let fruitn = document.createElement("option");

  // Change the textContent property of the h2 element to contain the fruitList's full name

  fruitn.textContent = fruitList.name;

  // console.log(fruitList.name);
  // console.log(fruitn.textContent);

  selection.appendChild(fruitn);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.fruitOptions").appendChild(selection);
}
