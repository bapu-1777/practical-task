let btnDownload = document.querySelector('button');
let img = document.querySelector('img');


btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}