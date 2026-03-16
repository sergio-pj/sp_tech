// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Revelação (Fade-in) ao carregar
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);

    // 2. Mudança no Header ao rolar a página
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });

    console.log("S.P. Tech Solutions: Sistema carregado com precisão.");
});