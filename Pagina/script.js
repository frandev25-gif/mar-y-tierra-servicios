// ============================================
// MAR & TIERRA SERVICIOS - JAVASCRIPT
// ============================================

// === NAVIGATION ===
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll header effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.service-card, .machinery-card, .zone-feature, .value-item, .contact-item');
animatedElements.forEach(el => observer.observe(el));

// === MACHINERY SECTION - DYNAMIC CONTENT ===
const machineryData = [
    {
        name: 'Cargadora Frontal',
        description: 'Equipos de alta capacidad para carga, transporte y nivelación de materiales en todo tipo de terrenos.',
        icon: 'fas fa-truck-loading',
        image: '../Imagenes/cargadora.png'
    },
    {
        name: 'Excavadora',
        description: 'Maquinaria de precisión para excavaciones profundas, zanjas y trabajos de demolición.',
        icon: 'fas fa-hard-hat',
        image: '../Imagenes/excavadora.png'
    },
    {
        name: 'Topadora',
        description: 'Potencia y eficiencia para movimiento de grandes volúmenes de tierra y nivelación de terrenos.',
        icon: 'fas fa-tractor',
        image: '../Imagenes/topadora.png'
    },
    {
        name: 'Camiones Volcadores',
        description: 'Flota de camiones para transporte de materiales con capacidad de carga optimizada.',
        icon: 'fas fa-truck',
        image: '../Imagenes/Mar y Tierra.png' // Using this as a fallback
    }
];

const machineryGrid = document.getElementById('machineryGrid');

machineryData.forEach((machine, index) => {
    const card = document.createElement('div');
    card.className = 'machinery-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div style="width: 100%; height: 250px; background: linear-gradient(135deg, var(--color-ocean-deep), var(--color-gray-dark)); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            ${machine.image ? `<img src="${machine.image}" alt="${machine.name}" style="width: 100%; height: 100%; object-fit: cover;">` : ''}
            <i class="${machine.icon}" style="font-size: 6rem; color: var(--color-industrial-orange); opacity: 0.3; position: absolute; ${machine.image ? 'display: none;' : ''}"></i>
            <i class="${machine.icon}" style="font-size: 4rem; color: var(--color-industrial-orange); z-index: 1; ${machine.image ? 'display: none;' : ''}"></i>
        </div>
        <div class="machinery-content">
            <h3>${machine.name}</h3>
            <p>${machine.description}</p>
        </div>
    `;

    machineryGrid.appendChild(card);
});

// === ZONE MAP - DYNAMIC CONTENT ===
const zoneMap = document.getElementById('zoneMap');
zoneMap.innerHTML = `
    <div style="width: 100%; height: 400px; background: linear-gradient(135deg, var(--color-ocean-blue), var(--color-ocean-deep)); display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <i class="fas fa-map-marked-alt" style="font-size: 8rem; color: var(--color-industrial-orange); opacity: 0.2; position: absolute;"></i>
        <div style="z-index: 1; text-align: center; padding: 2rem;">
            <i class="fas fa-map-marker-alt" style="font-size: 4rem; color: var(--color-industrial-orange); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--color-white); font-size: 2rem; margin-bottom: 1rem;">Costa Atlántica Argentina</h3>
            <p style="color: var(--color-gray-light); font-size: 1.2rem; max-width: 500px;">
                Desde Mar del Plata hasta Las Grutas, cubrimos toda la región costera con nuestros servicios especializados.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 20px; color: var(--color-white);">
                    <i class="fas fa-check"></i> Mar del Plata
                </span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 20px; color: var(--color-white);">
                    <i class="fas fa-check"></i> Pinamar
                </span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 20px; color: var(--color-white);">
                    <i class="fas fa-check"></i> Villa Gesell
                </span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 20px; color: var(--color-white);">
                    <i class="fas fa-check"></i> San Clemente
                </span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 20px; color: var(--color-white);">
                    <i class="fas fa-check"></i> Las Grutas
                </span>
            </div>
        </div>
    </div>
`;

// === ABOUT IMAGE - DYNAMIC CONTENT ===
const aboutImage = document.getElementById('aboutImage');
aboutImage.innerHTML = `
    <div style="width: 100%; height: 500px; background: linear-gradient(135deg, var(--color-ocean-deep), var(--color-dark)); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <i class="fas fa-industry" style="font-size: 10rem; color: var(--color-industrial-orange); opacity: 0.2; position: absolute;"></i>
        <div style="z-index: 1; text-align: center; padding: 2rem;">
            <i class="fas fa-hard-hat" style="font-size: 5rem; color: var(--color-industrial-orange); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--color-white); font-size: 2rem; margin-bottom: 1rem;">Profesionalismo y Experiencia</h3>
            <p style="color: var(--color-gray-light); font-size: 1.1rem; max-width: 400px; margin: 0 auto;">
                Años de trayectoria respaldando cada proyecto con compromiso y calidad.
            </p>
        </div>
    </div>
`;

// === CONTACT FORM ===
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create WhatsApp message
    const whatsappMessage = `Hola! Mi nombre es ${name}.%0A%0A${message}%0A%0AMi teléfono: ${phone}`;
    const whatsappURL = `https://wa.me/5492995499836?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    contactForm.reset();

    // Show confirmation
    alert('¡Gracias por tu mensaje! Te estamos redirigiendo a WhatsApp para continuar la conversación.');
});

// === PARALLAX EFFECT ===
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    const machineryBg = document.querySelector('.hero-bg-machinery');

    if (hero && scrolled < window.innerHeight) {
        // Parallax en el hero completo
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;

        // Parallax en las imágenes de maquinaria
        if (machineryBg) {
            machineryBg.style.setProperty('--scroll-offset', `${scrolled * 0.3}px`);
        }
    }
});


// === BUTTON RIPPLE EFFECT ===
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// === LOADING ANIMATION ===
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// === PERFORMANCE OPTIMIZATION ===
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === CONSOLE MESSAGE ===
console.log('%c Mar & Tierra Servicios ', 'background: #0A2463; color: #FF6B35; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Movimiento de Suelo y Maquinaria Pesada ', 'background: #FF6B35; color: white; font-size: 14px; padding: 5px;');
console.log('%c Costa Atlántica Argentina ', 'background: #1E5AA8; color: white; font-size: 14px; padding: 5px;');
