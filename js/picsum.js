export function randomimage(size){
    const img = document.createElement("img");
    img.src = `https://picsum.photos/${size}/${size}`;
    return img;
}

export function generaterandomImageSize(){
    return Math.floor(Math.random() * 300) + 500;
}