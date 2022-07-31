import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryDiv = document.querySelector(".gallery");
const galleryHtml = addGalleryItemsHtml(galleryItems);
galleryDiv.insertAdjacentHTML("beforeend", galleryHtml);
galleryDiv.addEventListener("click", clickOnimageLink);

function clickOnimageLink(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  basicLightbox
    .create(
      `
    <img src=${event.target.dataset.source} width="800" height="600">
`
    )
    .show();
}

function addGalleryItemsHtml(input) {
  return input
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

console.log(galleryItems);
