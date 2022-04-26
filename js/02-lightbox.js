import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

/**
 *  Отримання доступу до елементів
 */
const refs = {
  gallery: document.querySelector(".gallery"),
};

/**
 * Константа усіх елементів галереї
 */
const galleryMarkup = createCardsImageMarkup(galleryItems);

/**
 * Функція створення розмітки елементів галереї
 * @param {element} card
 * @returns {}
 */
function createCardsImageMarkup(card) {
  return card
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join("");
}

/**
 * Додавання дозмітки в DOM
 */
refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

/**
 * SimpleLightbox
 */

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
