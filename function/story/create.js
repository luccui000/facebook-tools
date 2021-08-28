const imageUpload = document.querySelector("#imageUpload"),
        storyFrame = document.querySelector(".story__frame"),
        imageUploaded = document.querySelector(".imageUploaded");

let fileUpload;

console.log(imageUploaded)
imageUpload.addEventListener('change', function() {
    fileUpload = this.files[0];
    loadImage();
})
function setTheme(index) {
    alert(index)
}

function loadImage() {
    let fileType = fileUpload.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileUrl = fileReader.result; 
            // storyFrame.classList.add('imageUploaded');
            let element = document.createElement('img');
            element.setAttribute('src', fileUrl);  
            // element.setAttribute('')
            imageUploaded.appendChild(element);
        }

        fileReader.readAsDataURL(fileUpload);
    } 
}