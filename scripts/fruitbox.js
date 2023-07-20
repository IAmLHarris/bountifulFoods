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

function droporder() {
  let fbox = document.getElementById("fruitBox");

  localStorage.setItem("fname", "");
  localStorage.setItem("email", "");
  localStorage.setItem("pnumb", "");

  localStorage.setItem("ord1", "");
  localStorage.setItem("ord2", "");
  localStorage.setItem("ord3", "");

  while (fbox.hasChildNodes()) {
    fbox.removeChild(fbox.firstChild);
  }
}
