document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para as seções ao clicar no menu
    const navLinks = document.querySelectorAll('.nav-links a, .hero a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Feedback de envio no formulário de contato
    const form = document.getElementById('form-contato');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            form.reset();
        });
    }
});