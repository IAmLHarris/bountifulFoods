let ord1 = document.createElement("p");
ord1.textContent = localStorage.getItem("ord1");
document.querySelector("#fruitBox").appendChild(ord1);

let ord2 = document.createElement("p");
ord2.textContent = localStorage.getItem("ord2");
document.querySelector("#fruitBox").appendChild(ord2);

let ord3 = document.createElement("p");
ord3.textContent = localStorage.getItem("ord3");
document.querySelector("#fruitBox").appendChild(ord3);

const fruitbox = document.getElementById("fruitBox");

function droporder() {
  localStorage.setItem("ord1", "");
  localStorage.setItem("ord2", "");
  localStorage.setItem("ord3", "");

  while (fruitbox.hasChildNodes()) {
    fruitbox.removeChild(fruitbox.firstChild);
  }
}
