// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryElem = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryElem);

function createGallery(galleryItems) {
    return galleryItems.reduce((acc, { preview, original, description }) =>
        acc + `<div> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> </div>`, "")
};
const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });