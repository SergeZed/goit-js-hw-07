import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

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

// window.addEventListener("keydown", onBodyElClick);
// let escapeCounter = 0;
// function onBodyElClick(evt) {
//   if (evt.key === "Escape") {
//     escapeCounter += 1;
//     console.log(escapeCounter);
//   }
// }

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

  const bigImageSrc = evt.target.getAttribute("data-source");
  console.log(bigImageSrc);

  const instance = basicLightbox.create(
    `
  <img src='${bigImageSrc}' width="1400" height="900">
`

    // {
    //   onShow: (instance) => {
    //     instance.element().querySelector("keydown.escape").onclick =
    //       instance.close;
    //   },

    // ,
    //     { onClose: () => true }
    // }
  );

  instance.show();

  //   basicLightbox
  //     .create(
  //       `
  //   		<img width="1400" height="900" src=>
  //   	`
  //     )
  //     .show();

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape && instance.visible) {
      instance.close();
    }
  };
}
