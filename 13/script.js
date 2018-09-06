

const cardInnerFiles = document.querySelector('.card-inner-files');
const dropDown = document.querySelector('.card__section__dropdown');

dropDown.addEventListener('click', ()=> {
    console.log("I am connected");
    dropDown.classList.toggle('reversed');
    cardInnerFiles.style.height = '0px';
})