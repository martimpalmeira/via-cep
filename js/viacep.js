import Address from 'Address.js';

const inputCep = document.forms[0].cep;

inputCep.addEventListener('change', handleInputCepChange);

function handleInputCepChange(event){
    const viaCepEndPoint = `https://viacep.com.br/ws/${event.target.value}/json/`;
    const address = new Address();
}