const uploadInput = document.getElementById('upload-input');
const uploadImage = document.getElementById('upload-imagem');

uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    uploadImage.src = URL.createObjectURL(file);;
});
