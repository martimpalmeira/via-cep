import Address from '../models/address.js';
import * as addressService from '../services/address-service.js';
import * as listController from '../controllers/list-controller.js';

class State {
    constructor() {
        this.address = new Address();

        this.btnSave = null;
        this.btnClear = null;

        this.inputCep = null;
        this.inputStreet = null;
        this.inputNumber = null;
        this.inputCity = null;

        this.errorCep = null;
        this.errorNumber = null;
    }
}

const state = new State();

export function init() {
    state.inputCep = document.forms.cepForm.cep;
    state.inputStreet = document.forms.cepForm.street;
    state.inputNumber = document.forms.cepForm.number;
    state.inputCity = document.forms.cepForm.city;

    state.btnSave = document.forms.cepForm.btnSave;
    state.btnClear = document.forms.cepForm.btnClear;

    state.errorCep = document.querySelector('[data-error = "cep"]');
    state.errorNumber = document.querySelector('[data-error = "number"]');

    state.inputCep.addEventListener('change', handleInputCepChange);
    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);

    state.btnClear.addEventListener('click', handleBtnClearClick);
    state.btnSave.addEventListener('click', handleBtnSaveClick);

}

function handleInputNumberKeyup(event) {
    state.address.number = event.target.value;
}

async function handleInputCepChange(event) {
    const cep = event.target.value;
    try {
        const address = await addressService.findByCep(cep);
        state.inputCity.value = address.city;
        state.inputStreet.value = address.street;
        state.address = address;
        setFormError("cep", "");
        state.inputNumber.focus();
    } catch (e) {
        setFormError("cep", "Informe um cep válido");
        state.inputCity.value = "";
        state.inputStreet.value = "";
    }
}

function handleInputNumberChange(event) {
    if (event.target.value == "") {
        setFormError("number", "Campo requerido");
    } else {
        console.log(event.target.value);
        setFormError("number", "");
    }
}

function handleBtnSaveClick(event) {
    event.preventDefault();

    const errors = addressService.getErrors(state.address);

    const keys = Object.keys(errors);

    if (keys.length > 0) {
        keys.forEach( key => {
            setFormError(key, errors[key]);
        });

    } else {
        listController.addCard(state.address);
        clearForm();
    }


}

function handleBtnClearClick(event) {
    event.preventDefault();
    clearForm();
}

function clearForm() {
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.inputCep.focus();
    state.address = new Address();

}



function setFormError(key, value) {
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}
