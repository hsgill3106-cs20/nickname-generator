//VARIBLES FOR HTML ELEMENTS
let firstN = document.getElementById("FirstName");
let lastN = document.getElementById("LastName");
let nameEL = document.getElementById("Name");
let RnameEL = document.getElementById("RandomName");
let RandomNEl = document.getElementById("RandomNickname");
let AllNEl = document.getElementById("AllNicknames");
//ARRAY
let nicknames = [
  "Crusher",
  "the Scientist",
  "Twinkle-Toes",
  "the Coder",
  "the Jester",
  "the Sloth",
  "Quick-Silver",
];

//EVENT LISTENER
RandomNEl.addEventListener("click", btnDownR);
AllNEl.addEventListener("click", btnDownA);

function btnDownA() {
  let NameStr = "";
  for (let i = 0; i < nicknames.length; i++) {
    NameStr += `<p>${firstN.value} "${nicknames[i]}" ${lastN.value}</p>`;
  }
  nameEL.innerHTML = NameStr;
}

function btnDownR() {
  let NameStr = "";
  NameStr += `<p>${firstN.value} "${
    nicknames[randomInt(0, nicknames.length)]
  }" ${lastN.value}</p>`;
  RnameEL.innerHTML = NameStr;
}
