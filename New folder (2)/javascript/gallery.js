/***************************************   GALLERY   ***************************************/


const mediaCheck = window.matchMedia("(max-width: 800px)");
const mainImage = document.querySelector("#gallery-main-image");
const mainImageText = document.querySelector("#gallery-main-image-text");

const images = [ 
    {filename: "GalleryImg1.jpg", alt: "1"},
    {filename: "GalleryImg2.jpg", alt: "2"},
    {filename: "GalleryImg3.jpg", alt: "3"},
    {filename: "GalleryImg4.jpg", alt: "4"},
    {filename: "GalleryImg5.jpg", alt: "5"},
    {filename: "GalleryImg6.jpg", alt: "6"},
    {filename: "GalleryImg7.jpg", alt: "7"},
    {filename: "GalleryImg8.jpg", alt: "8"},
    {filename: "GalleryImg9.jpg", alt: "9"},
    {filename: "GalleryImg10.jpg", alt: "10"},
    {filename: "GalleryImg11.jpg", alt: "11"},
    {filename: "GalleryImg12.jpg", alt: "12"},
    {filename: "GalleryImg13.jpg", alt: "13"},
    {filename: "GalleryImg14.jpg", alt: "14"}
];


const imageElems = images.map((img) => 
    `<div><img alt="${img.alt}" src="../media/img/imagesGallery/${img.filename}" 
    onclick="openLightbox('${img.filename}', '${img.alt}')"></div>`
).join("");

const imageThumbs = images.map((img) => 
    `<img alt="${img.alt}" src="../media/img/imagesGallery/${img.filename}" 
    onclick ="mainImageSetter('${img.filename}', '${img.alt}')" class="gallery-thumbnail">`
).join("");



const openLightbox = (filename, alt) =>{
    mainImageSetter(filename, alt);
    document.querySelector("#gallery-lightbox-wrapper").style.right = "0%";
}

const mainImageSetter = (filename, alt) =>{
    mainImage.setAttribute("src", `../media/img/imagesGallery/${filename}`);
    mainImage.setAttribute("alt", `${alt}`);
    activeThumbnailSetter();
    mainImageText.textContent = `Bild ${mainImage.alt} / ${images.length}`;
} 

const activeThumbnailSetter = () =>{
    const thumbnailNodelist = document.querySelectorAll(".gallery-thumbnail"); 
    for(let i = 0; i < thumbnailNodelist.length; i++){ 
        if(thumbnailNodelist[i].src === mainImage.src){ 
            if(mediaCheck.matches){ 
                thumbnailNodelist[i].style.boxShadow = "0px 0px 5px 2px #8f8f8f"; 
                thumbnailNodelist[i].style.transform = "scale(1.1)"; 
            }else{ 
                thumbnailNodelist[i].style.boxShadow = "0px 0px 10px 4px #8f8f8f"; 
                thumbnailNodelist[i].style.transform = "scale(1.1)"; 
            }
        }else{ 
            thumbnailNodelist[i].style.boxShadow = "";
            thumbnailNodelist[i].style.transform = "scale(1)";
        }
    }
}

const prevImg = () =>{ 
    const thumbnailNodelist = document.querySelectorAll(".gallery-thumbnail"); 
    for(let i = 0; i < thumbnailNodelist.length; i++){
        if(thumbnailNodelist[i].src === mainImage.src && i !== 0){ 
            mainImage.setAttribute("src", thumbnailNodelist[i -= 1].src); 
            activeThumbnailSetter(); 
            mainImageText.textContent = `Bild ${thumbnailNodelist[i].alt} / ${thumbnailNodelist.length}`; 
        }else if(thumbnailNodelist[i].src === mainImage.src && i === 0){ 
            mainImage.setAttribute("src", thumbnailNodelist[i += (thumbnailNodelist.length - 1)].src);
            activeThumbnailSetter(); 
            mainImageText.textContent = `Bild ${thumbnailNodelist[i].alt} / ${thumbnailNodelist.length}`; 
        }
    }
}

const nextImg = () =>{ 
    const thumbnailNodelist = document.querySelectorAll(".gallery-thumbnail"); 
    for(let i = 0; i < thumbnailNodelist.length; i++){ 
        if(thumbnailNodelist[i].src === mainImage.src && i !== (thumbnailNodelist.length - 1)){ 
            mainImage.setAttribute("src", thumbnailNodelist[i += 1].src); 
            mainImageText.textContent = `Bild ${thumbnailNodelist[i].alt} / ${thumbnailNodelist.length}`; 
            activeThumbnailSetter(); 
        }else if(thumbnailNodelist[i].src === mainImage.src && i === (thumbnailNodelist.length - 1)){ 
            mainImage.setAttribute("src", thumbnailNodelist[0].src); 
            mainImageText.textContent = `Bild ${thumbnailNodelist[0].alt} / ${thumbnailNodelist.length}`; 
            activeThumbnailSetter(); 
        }
    }
}

const closeLightbox = () =>{ 
    document.querySelector("#gallery-lightbox-wrapper").style.right = "-100%"; 
}




window.addEventListener("load", () =>{
    document.querySelector("#gallery-image-wrapper").innerHTML = imageElems; 
    document.querySelector("#gallery-thumbnails-wrapper").innerHTML = imageThumbs; 
});
mediaCheck.addEventListener 




























































































































































