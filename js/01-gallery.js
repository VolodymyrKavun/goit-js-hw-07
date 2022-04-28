import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
 *
 */
function createCardsImageMarkup(card) {
  return card
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

/**
 * Додавання розмітки в DOM
 */
refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

/**
 * Модалка
 */

const instance = basicLightbox.create(
  `<img class="modal-img" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscClick);
    },
  },
  {
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscClick);
    },
  }
);

// Функція відкривання модалки

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector(".modal-img").src =
    event.target.dataset.source;

  instance.show();
}

// Функція закривання кнопкою Escape

function onEscClick(event) {
  if (event.key === "Escape") {
    instance.close();
    return;
  }
}

// Вішання слухача

refs.gallery.addEventListener("click", onImgClick);
