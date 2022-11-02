import { galleryItems } from './gallery-items.js';
// Change code below this line



function createItemCards (arrey){
    return arrey.map((el)=>{
        const {description, original, preview} = el
        
            return`
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
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





function showInstance() {
e.preventDefault();
 if (e.target.nodeName !== "IMG") {
 return;
 }
 const instance = basicLightbox.create(` 
 <img src="${e.target.dataset.source}">
 `);

instance.show() 
}  

      
function closeModalOnPressEscape(event) {
    if (event.code !== "Escape") {
        return;
    } else {
        instance.close();
 
    }
}
console.log(galleryItems);