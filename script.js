// Menu Responsivo Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em algum link (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simulação de Envio do Formulário de Orçamento
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Captura dos valores (poderia ser enviado para um backend aqui)
    const name = document.getElementById('name').value;
    
    alert(`Obrigado, ${name}! Sua solicitação de orçamento foi enviada com sucesso. Nossa equipe entrará em contato em breve.`);
    
    quoteForm.reset();
});