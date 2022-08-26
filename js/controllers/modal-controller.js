

export function init(){
    const closeModalBtn = document.querySelector(".btnCloseModal");
    const modalContainer = document.querySelector("#modal-container");

    closeModalBtn.addEventListener('click', closeModal);
    console.log(modalContainer);
}

function closeModal(event){
    modalContainer.classList.add('modal-container-close');
}