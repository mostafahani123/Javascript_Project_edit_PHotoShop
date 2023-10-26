


let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let Grayscale = document.getElementById("Grayscale");
let Blur = document.getElementById("Blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img =document.getElementById("img");

let reset =document.querySelector('span');
let imgBox =document.querySelector('.img-box');

// load page


function changeimage(){
    img.style.filter = 'none';
    saturate.vlaue = '100';
    contrast.vlaue = '100';
    brightness.vlaue = '100';
    sepia.vlaue = '0';
    Grayscale.vlaue = '0';
    Blur.vlaue = '0';
    hueRotate.value = '0';
}

window.onload =function(){
    download.style.display="none";
    reset.style.display="none";
    imgBox.style.display="none";
}
upload.onchange = function(){
    changeimage();
    download.style.display="block";
    reset.style.display="block";
    imgBox.style.display="block";
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
   file.onload= function(){
    img.src = file.result;
   }
}


let filters = document.querySelectorAll("ul li input");
//  filter -> group filters
filters.forEach( filter =>{

    filter.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        Grayscale(${Grayscale.value})
        Blur(${Blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `

    })
})

download.onclick =function(){
    download.href = img.src;
}
