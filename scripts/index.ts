const imagesWrappers: HTMLDivElement[] = Array.from(document.querySelectorAll('.image-wrapper'));
const modalWrapper: HTMLDivElement = document.querySelector('.modal-wrapper');
const modalContent: HTMLDivElement = document.querySelector('.modal-content');
const modalImages: HTMLImageElement[] = Array.from(document.querySelectorAll('.modal-content img'));
const openModalBtns: HTMLDivElement[] = Array.from(document.querySelectorAll('.image-wrapper .open-modal-btn'));
const closeModalBtn: HTMLDivElement = document.querySelector('.close-modal-btn');

modalContent.addEventListener('click', (e) => e.stopPropagation());

let opened = false;

function openModal(index) {
    toggleModal();
    modalImages[index].style.visibility = 'visible';
    if (!opened) {
        modalContent.style.transform = 'scale(1)';
    }
    opened = !opened;
}

function toggleModal() {
    if (opened) {
        modalContent.style.transform = 'scale(0)';
        setTimeout(() => {
            modalWrapper.classList.remove('visible');
            modalImages.forEach((img) => (img.style.visibility = 'hidden'));
        }, 300);
    } else {
        modalWrapper.classList.add('visible');
        modalImages.forEach((img) => (img.style.visibility = 'hidden'));
    }
}

openModalBtns.forEach((btn, index) => btn.addEventListener('click', () => openModal(index)));
modalWrapper.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

imagesWrappers.forEach((image, index) => {
    image.style.animation = `appear 0.4s ease-out ${index / 6}s forwards`;
});
