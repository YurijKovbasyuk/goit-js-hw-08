// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    galleryItem =>
      `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`,
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItem);

const onClickToImage = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImg = event.target.parentNode.href;
  console.dir(event.target.parentNode.href);
};

gallery.addEventListener('click', onClickToImage);

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.85,
  captionsData: 'alt',
  scrollZoomFactor: 0.05,
  captionDelay: 250,
});
