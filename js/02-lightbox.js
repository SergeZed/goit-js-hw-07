import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imagesEl = galleryItems.map((option) => {
  const listEl = `<li class="gallery__item">
  <a class="gallery__item" href="${option.original}">
  <img class="gallery__image" src="${option.preview}" alt="${option.description}" />
  </a>
  </li>`;
  return listEl;
});

const extImagesEl = imagesEl.join("");

const imagesContainerEl = document.querySelector("ul.gallery");
imagesContainerEl.insertAdjacentHTML("afterbegin", extImagesEl);

imagesContainerEl.addEventListener("click", onImagesContainerElClick);

function onImagesContainerElClick(evt) {
  evt.preventDefault();

  const isContainerEl = evt.target.nodeName === "IMG";
  if (!isContainerEl) {
    return;
  }

  const imageLink = evt.target.closest(".gallery__link");

  console.log(evt.target);
  console.log(evt.target.src);

  const bigImageSrc = evt.target
    .closest("a.gallery__item")
    .getAttribute("href");
  console.log(bigImageSrc);

  const instance = basicLightbox.create(
    `
  <img src='${bigImageSrc}' width="1400" height="900">
`
  );

  instance.show();
}
