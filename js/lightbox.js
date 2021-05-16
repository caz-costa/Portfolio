const body = document.querySelector('body');
const lightbox = document.querySelector('#lightbox');
const closeButton = lightbox.querySelector('a')
const galleryImages = document.querySelectorAll('img.gallery');

galleryImages.forEach(image => {
    image.addEventListener('click', e => {
        body.classList.add('no-scroll');
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.children.length > 1) {
            lightbox.removeChild(lightbox.children[1])
        }
        lightbox.appendChild(img);
    })
})

const closeLightbox = (e) => {
    if (e.target !== e.currentTarget && e.currentTarget !== closeButton) {
        return;
    }
    body.classList.remove('no-scroll');
    lightbox.classList.remove('active');
}

lightbox.addEventListener('click', closeLightbox)
closeButton.addEventListener('click', closeLightbox)