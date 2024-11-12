let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    
    currentImageIndex = parseInt(image.getAttribute("data-index"));
    modal.style.display = "block";
    modalImg.src = images[currentImageIndex].src; 
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentImageIndex].src;
}
