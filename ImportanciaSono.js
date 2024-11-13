let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Esconde todas as imagens
    }
    slideIndex++;  // Incrementa o índice da imagem atual
    if (slideIndex > slides.length) {slideIndex = 1}  // Volta para a primeira imagem quando chegar ao fim
    slides[slideIndex - 1].style.display = "block";  // Exibe a imagem atual
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

showSlides();  // Inicia o carrossel automaticamente
