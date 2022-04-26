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
 * @param {element} card
 * @returns {}
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
 * Додавання дозмітки в DOM
 */
refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

/**
 *  Функція заборони переходу на силку та одночасне вішання Функції з картинкою
 * @param {event} event
 */
function onImagePreventClick(event) {
  event.preventDefault();

  event.target.addEventListener("click", createImageOnModalLightBox);
}

/**
 * Вішання слухача по кліку
 */
refs.gallery.addEventListener("click", onImagePreventClick);

/**
 * BackDrop
 */
const modal = document.createElement("div");
modal.id = "lightbox";
refs.gallery.after(modal);

/**
 * Функція додавання картинки на модалку
 * @param {event} event
 */
function createImageOnModalLightBox(event) {
  modal.classList.add("active");
  window.addEventListener("keydown", onKeyToClose);

  /**
   * Картинка
   */
  const img = document.createElement("img");
  img.src = event.target.dataset.source;

  if (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  modal.append(img);
}

/**
 * Вішання на слухача функції закривання
 */
modal.addEventListener("click", onClickModalToClose);

/**
 * Функція закривання модалки
 * @param {event} event
 */
function onClickModalToClose(event) {
  modal.classList.remove("active");
  window.removeEventListener("keydown", onKeyToClose);
}

/**
 * Функція закривання модалки кнопкою
 * @param {event} event
 */
function onKeyToClose(event) {
  if (event.code === "Escape") {
    onClickModalToClose();
  }
}
