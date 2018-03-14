import 'babel-polyfill';

window.addEventListener('load', () => {
    const loading: HTMLDivElement = document.querySelector('.loading');

    const imagesWrappers: HTMLDivElement[] = Array.from(document.querySelectorAll('.image-wrapper'));

    const modalWrapper: HTMLDivElement = document.querySelector('.modal-wrapper');
    const modalContent: HTMLDivElement = document.querySelector('.modal-content');
    const modalImages: HTMLImageElement[] = Array.from(document.querySelectorAll('.modal-content img'));

    const openModalBtns: HTMLDivElement[] = Array.from(document.querySelectorAll('.image-wrapper .open-modal-btn'));
    const closeModalBtn: HTMLDivElement = document.querySelector('.close-modal-btn');

    loading.parentElement.removeChild(loading);

    modalContent.addEventListener('click', (e) => e.stopPropagation());

    let opened: boolean = false;

    function openModal(index) {
        document.body.style.overflow = 'hidden';
        toggleModal();
        modalImages[index].classList.add('visible');
    }

    function toggleModal() {
        if (opened) {
            modalContent.style.transform = 'scale(0)';

            setTimeout(() => {
                modalWrapper.classList.remove('visible');
                modalImages.forEach((img) => img.classList.remove('visible'));
            }, 300);

            document.body.style.overflow = 'auto';
        } else {
            modalWrapper.classList.add('visible');

            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
            }, 50);
        }
        opened = !opened;
    }

    openModalBtns.forEach((btn, index) => btn.addEventListener('click', () => openModal(index)));
    modalWrapper.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);

    imagesWrappers.forEach((image, index) => {
        image.style.animation = `appear 0.4s ease-out ${(index + 1) / 10}s forwards`;
    });
});
