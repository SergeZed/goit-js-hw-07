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

function onKeydown(evt, instance) {
  console.log(instance, evt.key, "-------");
  // document.addEventListener("keydown", (evt) => onKeydown(evt, instance));
  // console.log(evt);
  // console.log(evt.Key);
  if (evt.key === "Escape") {
    instance.close();
  }
}

const items = imagesContainerEl.querySelectorAll("a.gallery__link");
console.log(items, typeof items, Array.isArray(items), "************");
items.forEach((item) => {
  const image = item.querySelector("img.gallery__image");
  const bigImageSrc = image.getAttribute("data-source");

  item.onclick = (e) => {
    console.log(e);
    e.preventDefault();

    basicLightbox
      .create(
        `
        <img src="${bigImageSrc}" width="1400" height="900"></img>
      `,
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

// const instance = basicLightbox.create(listEl, {
//   onShow: (instance) =>
//     listEl.addEventListener("keydown", (evt) => onKeydown(evt, instance)),
//   onClose: (instance) =>
//     listEl.removeEventListener("keydown", (evt) => onKeydown(evt, instance)),
// });

// instance.show((instance) => console.log("finished show()", instance));

// setTimeout(() => {
// 	instance.close((instance) => console.log('finished close()', instance))
// }, 3000)

// return listEl;

// const extImagesEl = imagesEl.join("");

// const imagesContainerEl = document.querySelector("div.gallery");
// imagesContainerEl.insertAdjacentHTML("afterbegin", extImagesEl);

// imagesContainerEl.addEventListener("click", onImagesContainerElClick);
// document.addEventListener("keydown", onKeydown);
// document.removeEventListener("keydown", onKeydown);

// function onKeydown(evt) {
//   document.addEventListener("keydown", (evt) => onKeydown(evt, instance));
//   console.log(evt);
//   // if (evt === "Escape") {
//   // evt.close("c");
//   // }
// }

// function onImagesContainerElClick(evt) {
//   evt.preventDefault();

//   const isContainerEl = evt.target.nodeName === "IMG";
//   if (!isContainerEl) {
//     return;
//   }

//   const bigImageSrc = evt.target.getAttribute("data-source");
//   // console.log(bigImageSrc);

//   const instance = basicLightbox.create(
//     `
//   <img src='${bigImageSrc}' width="1400" height="900">
// `
//   );

//   instance.show();

// instance.close();
// onKeydown(instance);
// }
