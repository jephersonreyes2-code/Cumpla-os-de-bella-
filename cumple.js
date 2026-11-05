const surpriseButton = document.querySelector('#surprise-button');
const birthdayMessage = document.querySelector('#birthday-message');

surpriseButton.addEventListener('click', () => {
    const isExpanded = surpriseButton.getAttribute('aria-expanded') === 'true';
    surpriseButton.setAttribute('aria-expanded', String(!isExpanded));
    birthdayMessage.hidden = isExpanded;
    birthdayMessage.classList.toggle('is-visible', !isExpanded);
});

document.querySelectorAll('.memory-card').forEach((card) => {
    const photoFrame = card.querySelector('.photo-frame');
    const memoryPhoto = card.querySelector('.memory-photo');
    const revealedPhoto = card.querySelector('.revealed-photo');
    const placeholder = card.querySelector('.photo-placeholder');
    const message = card.querySelector('.memory-message');

    memoryPhoto.addEventListener('load', () => {
        revealedPhoto.src = memoryPhoto.src;
        revealedPhoto.hidden = false;
        memoryPhoto.hidden = false;
        placeholder.hidden = true;
    });

    photoFrame.addEventListener('click', () => {
        const isExpanded = photoFrame.getAttribute('aria-expanded') === 'true';
        photoFrame.setAttribute('aria-expanded', String(!isExpanded));
        message.hidden = isExpanded;
    });

    memoryPhoto.src = memoryPhoto.dataset.photo;
});
