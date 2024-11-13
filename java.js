let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    
    slides[currentSlide].classList.remove("active");
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function highlight(element) {
    element.style.backgroundColor = "#009999";
    element.style.color = "white";
    element.style.transform = "scale(1.05)";
}

function unhighlight(element) {
    element.style.backgroundColor = "#b3e0ff";
    element.style.color = "black";
    element.style.transform = "scale(1)";
}

function showTip(tip) {
    let title, description;
    
    switch (tip) {
        case 'alimentacao':
            title = "Dica sobre Alimentação";
            description = "Tente incluir mais vegetais e frutas em sua dieta diária. Lembre-se de manter um equilíbrio entre carboidratos, proteínas e gorduras.";
            break;
        case 'atividade':
            title = "Dica sobre Atividade Física";
            description = "Realize pelo menos 30 minutos de atividade física por dia. Caminhadas, yoga ou até mesmo alongamentos podem ser ótimas opções.";
            break;
        case 'meditacao':
            title = "Dica sobre Meditação";
            description = "Tente praticar 5 minutos de meditação para acalmar a mente. Focar na respiração pode reduzir significativamente o estresse.";
            break;
        case 'estresse':
            title = "Dica sobre Estresse";
            description = "Experimente técnicas de respiração profunda. Inspire profundamente pelo nariz, segure por 4 segundos e expire lentamente pela boca.";
            break;
        case 'gratidao':
            title = "Dica sobre Gratidão";
            description = "Tente escrever 3 coisas pelas quais você é grato todos os dias. Isso pode melhorar seu estado de espírito e trazer mais positividade.";
            break;
        default:
            title = "Dica Interativa";
            description = "Aqui vai aparecer a dica interativa.";
    }

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;

    // Exibir o modal
    document.getElementById("dica-modal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("dica-modal").style.display = "none";
}

// Função para alternar entre expandir e recolher a dica
function toggleTip(button, tip) {
    const textContainer = button.nextElementSibling; // Pega o próximo elemento (p) após o botão
    const isExpanded = textContainer.style.display === "block";

    // Alterar o texto do botão com base no estado atual
    button.innerText = isExpanded ? "Dica Interativa" : "Fechar Dica";

    // Exibir ou ocultar o conteúdo
    textContainer.style.display = isExpanded ? "none" : "block";

    if (!isExpanded) {
        // Preencher o texto com a dica dependendo do tipo
        switch (tip) {
            case 'alimentacao':
                textContainer.innerText = "Tente incluir mais vegetais e frutas em sua dieta diária. Lembre-se de manter um equilíbrio entre carboidratos, proteínas e gorduras.";
                break;
            case 'atividade':
                textContainer.innerText = "Realize pelo menos 30 minutos de atividade física por dia. Caminhadas, yoga ou até mesmo alongamentos podem ser ótimas opções.";
                break;
            case 'meditacao':
                textContainer.innerText = "Tente praticar 5 minutos de meditação para acalmar a mente. Focar na respiração pode reduzir significativamente o estresse.";
                break;
            case 'estresse':
                textContainer.innerText = "Experimente técnicas de respiração profunda. Inspire profundamente pelo nariz, segure por 4 segundos e expire lentamente pela boca.";
                break;
            case 'gratidao':
                textContainer.innerText = "Tente escrever 3 coisas pelas quais você é grato todos os dias. Isso pode melhorar seu estado de espírito e trazer mais positividade.";
                break;
            default:
                textContainer.innerText = "Aqui vai aparecer a dica interativa.";
        }
    }
}

