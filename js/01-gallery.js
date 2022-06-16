import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesEl = galleryItems.map((option) => {
  const listEl = `<li class="gallery__item">
  <a class="gallery__link" href="${option.original}">
  <img class="gallery__image" src="${option.preview}" data-source="${option.original}" alt="${option.description}"/>
  </a>
  </li>`;

  return listEl;
});

const extImagesEl = imagesEl.join("");

const imagesContainerEl = document.querySelector("div.gallery");
imagesContainerEl.insertAdjacentHTML("afterbegin", extImagesEl);

function onKeydown(evt, instance) {
  if (evt.key === "Escape") {
    instance.close();
  }
}

const items = imagesContainerEl.querySelectorAll("a.gallery__link");
items.forEach((item) => {
  const image = item.querySelector("img.gallery__image");
  const bigImageSrc = image.getAttribute("data-source");

  item.onclick = (e) => {
    e.preventDefault();

    basicLightbox
      .create(
        `<img src="${bigImageSrc}" width="1400" height="900" style="border: '1px solid black'; color:'transparent'"></img>`,
        {
          onShow: (instance) =>
            document.addEventListener("keydown", (event) =>
              onKeydown(event, instance)
            ),
          onClose: (instance) =>
            document.removeEventListener("keydown", (event) =>
              onKeydown(event, instance)
            ),
        }
      )
      .show();
  };
});
