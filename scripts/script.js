// ---------------- UPLOAD DEL IMAGE PARA EL MEME ---------------- 
const link = document.getElementById('url');
const insertImage = () => {
    const insertImage = document.getElementById('imageMeme');
    insertImage.style.backgroundImage = `url("${link.value}")`;
}
link.addEventListener('change', insertImage);

// ---------------- CAMBIO DEL COLOR DE FONDO IMAGE PARA EL MEME ----------------
const pickUpColor = document.getElementById('colorPickerImage');
const changeColor = () => {
    const colorMeme = document.getElementById('imageMeme');
    colorMeme.style.backgroundColor = pickUpColor.value;
}
pickUpColor.addEventListener('input', changeColor);

// ---------------- CAMBIO DE LA MEZCLA DEL COLOR DE FONDO IMAGE PARA EL MEME ----------------
const colorBlend = document.getElementById('colorBlend');
const changeBlend = () => {
    const colorMeme = document.getElementById('imageMeme');
    colorMeme.style.backgroundBlendMode = colorBlend.value;
}
colorBlend.addEventListener('input', changeBlend);

//---------------- CAMBIO DE FILTRO IMAGE PARA EL MEME ----------------


// FUNCIONA OK 1 opcion VIERNES 7/5 


const filterBlend = document.getElementsByClassName('input-filter');
const colorMeme = document.getElementById('imageMeme');
const brightness=document.getElementById('brightnessSlider');
const opacity=document.getElementById('opacitySlider');
const contrast=document.getElementById('contrastSlider');
const blur=document.getElementById('blurSlider');
const grayscale=document.getElementById('grayScaleSlider');
const sepia=document.getElementById('sepiaSlider');
const hueRotation=document.getElementById('hueRotateSlider');
const saturation=document.getElementById('saturateSlider');
const invert=document.getElementById('invertSlider');

const changeFilter = () => {
    let brightnessValue= brightness.value;
    let opacityValue= opacity.value;
    let contrastValue= contrast.value;
    let blurValue= blur.value;
    let grayscaleValue= grayscale.value;
    let sepiaValue= sepia.value;
    let hueRotationValue= hueRotation.value;
    let saturationValue= saturation.value;
    let invertValue= invert.value;
    colorMeme.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) blur(${blurValue}px) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueRotationValue}deg) sepia(${sepiaValue}%) saturate(${saturationValue}%) invert(${invertValue})`;
}

for(i=0; i<filterBlend.length; i++ ){
    
filterBlend[i].addEventListener('input', changeFilter);

}


// FUNCIONA hasta el console.log no para formar los filtros VIERNES 7/5 


// const filter = document.getElementsByClassName('input-filter');
// const colorMeme = document.getElementById('imageMeme');


// for(i=0; i<filter.length; i++) {
//     let property = filter[i].getAttribute('data-property');
//     let filterValue = filter[i].value;
//     const setFilter = (event) => {
//         event.target
//         console.log(property)
//         console.log(filterValue)
//     } 
//     filter[i].addEventListener('input', setFilter)
// };









