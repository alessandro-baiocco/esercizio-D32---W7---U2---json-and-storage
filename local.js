let inputDaInserire = document.querySelectorAll("header input");
let savedObjToString = {};
let ulLista = document.querySelector("main ul");
let tempoInHtml = document.querySelector("main p");
let tempo = 0;
let saveBtn = document.querySelector(".save");
window.onload = () => {
  if (localStorage.getItem("saved")) {
    scrivi();
    saveBtn.disabled = true;
    clearInterval(timer);
  }
};
const scrivi = () => {
  if (savedObjToString) {
    const local = JSON.parse(localStorage.getItem("saved"));
    let liLista = document.createElement("li");
    liLista.innerText = `il precedente utente è ${local.nome} il suo numero è ${local.cellNumber} `;
    ulLista.appendChild(liLista);
  } else {
    ulLista.innerHTML = "";
  }
};
const secondo = () => {
  tempo = sessionStorage.getItem("tempo");
  tempo++;
  tempoInHtml.innerText = `tempo trascorso ${tempo}`;
  sessionStorage.setItem("tempo", tempo);
};

let timer = setInterval(secondo, 1000);

const salvaInMemoria = (e) => {
  e.preventDefault();
  if (inputDaInserire[0].value !== "" && inputDaInserire[1].value !== "" && inputDaInserire[2].value !== "") {
    savedObjToString = {
      nome: inputDaInserire[0].value,
      pass: inputDaInserire[1].value,
      cellNumber: inputDaInserire[2].value,
    };
    localStorage.setItem("password", savedObjToString.pass);
    let stringedObj = JSON.stringify(savedObjToString);
    localStorage.setItem("saved", stringedObj);
    scrivi();
    savedObjToString = null;
    clearInterval(timer);
    saveBtn.disabled = true;
  }
};

const cancellaInMemoria = (e) => {
  e.preventDefault();
  if (inputDaInserire[4].value === localStorage.getItem("password")) {
    localStorage.clear("saved");
    savedObjToString = null;
    scrivi();
  }
};
