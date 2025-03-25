document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('fa-times');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('fa-times');
        });
    });
    
    // Efeito de digitação
    const typed = new Typed('.typed-text', {
        strings: ['Full Stack', 'Front-end', 'Back-end'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // Mudar header ao scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
    
    // Ativar link do menu conforme scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Animação ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skills-box, .project-card, .experience-item, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Adiciona classe inicial para animação
    document.querySelectorAll('.skills-box, .project-card, .experience-item, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const formData = new FormData(this);
            const name = formData.get('name');
            
            // Aqui você pode adicionar AJAX para enviar o formulário
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            this.reset();
        });
    }
    
    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    `;
    document.body.prepend(preloader);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
});

// Adicionando estilos para o preloader dinamicamente
const preloaderStyles = document.createElement('style');
preloaderStyles.innerHTML = `
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .spinner {
        width: 80px;
        height: 80px;
        position: relative;
    }
    
    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--primary-color);
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }
    
    .double-bounce2 {
        animation-delay: -1.0s;
    }
    
    @keyframes sk-bounce {
        0%, 100% { 
            transform: scale(0.0);
        } 50% { 
            transform: scale(1.0);
        }
    }
`;
document.head.appendChild(preloaderStyles);