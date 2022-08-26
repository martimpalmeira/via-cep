class state {
    constructor() {
        this.container = null;
        this.btnClose = null;
    }
}

export function init() {
    state.btnClose = document.querySelector(".btnCloseModal");
    state.container = document.querySelector("#modal-contact");

    state.btnClose.addEventListener('click', handleBtnCloseClick);
    state.container.addEventListener('click', handleContainerClick);

}

export function showModal() {
    state.container.classList.add('modal-container-open');
}

export function closeModal() {
    state.container.classList.remove('modal-container-open');
}

function handleBtnCloseClick(event) {
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event){
    event.preventDefault();
    console.log(event.target);
    if(event.target == state.container){
        closeModal();
    }
    
}