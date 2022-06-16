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

let SimpleLightBoxGallery = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});

SimpleLightBoxGallery.on("show.simplelightbox", function (e) {
  e.preventDefault();
});
