
import * as modalController from './modal-controller.js';

export function init() {
    const contactLink = document.querySelector('.contactLink');
    contactLink.addEventListener('click', handleContactLinkClick);
}

export function openModal() {
    modalController.showModal();
}

function handleContactLinkClick(event) {
    event.preventDefault();
    openModal();
}