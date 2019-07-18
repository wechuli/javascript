fetch('coffee.jpg')
    .then(response => response.blob())
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });


async function fetchImage() {
    try {
        const response = await fetch('coffee.jpg');
        const myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    }


}
fetchImage();