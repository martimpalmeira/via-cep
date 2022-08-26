class State {
    constructor() {
        this.listSection = null;
    }
}

const state = new State();

export function init(){
    state.listSection = document.querySelector(".address-container");
}

export function addCard(address){
    const card = createCard(address);
    state.listSection.appendChild(card);
}

function createCard(address) {

    const div = document.createElement("div");
    div.classList.add("address");

    const h2 = document.createElement("h2");
    h2.classList.add("city");
    h2.innerHTML = address.city;

    const line = document.createElement("p");
    line.classList.add("logradouro");
    line.innerHTML = `${address.street}, ${address.number}`;

    const cep = document.createElement("p");
    cep.classList.add("cep-number");
    cep.innerHTML = address.cep;

    div.appendChild(h2);
    div.appendChild(line);
    div.appendChild(cep);

    return div;
}



