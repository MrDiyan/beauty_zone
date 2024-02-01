const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.classList.toggle('is-hidden');
    }
});
