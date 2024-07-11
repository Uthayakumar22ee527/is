const imageSources = ['00.jpg','11.webp','22.jpg','33.jpg','44.jpg','55.jpg','55.jpg','66.jpg','77.jpg','88.jpg','99.jpg'];
function changeBackgroundImage()  {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 miliseconds)
setInterval(changeBackgroundImage,1000)