import { galleryItems } from './gallery-items.js';
// Change code below this line

const item =
` <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> `
function createItemCards (arrey){
    return arrey.map((el)=>{
        const {description, original, preview} = el
        //console.log (el)
            return`
            <div class="gallery__item">
            <a class="gallery__link" href='${original}'>
              <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
              />
            </a>
          </div>`
  })
   .join('')
}
const markup = createItemCards (galleryItems);
 console.log (markup);
const list = document.querySelector('.gallery');
list.insertAdjacentHTML("afterbegin", markup);


list.addEventListener(`click`, onGalleryItemClick)
const instance = basicLightbox.create(`
   <img src="assets/images/image.png" width="800" height="600">
 `);
function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  galleryItems.map((item) => {
    if (item.original === event.target.dataset.source) {
      const instance = basicLightbox.create(` 
        <img src=${item.original} width="800" height="600">
    `);
    instance.show();
    }
   }
  )   
 }
      
function closeModalOnPressEscape(event) {
    if (event.code !== "Escape") {
        return;
    } else {
        instance.close();
 
    }
}
console.log(galleryItems);