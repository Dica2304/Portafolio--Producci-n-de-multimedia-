// Data
const projects = [
    {
        id: '1',
        title: 'Capítulo I: Deberes en el Sena',
        category: 'Animación',
        description: 'Episodio educativo que busca concientizar a los estudiantes acerca de los deberes qyue se debn cumplir dentro de la institución, no por obligación, sino que por sentido de pertenencia.',
        tools: ['Premiere Pro', 'Animate', 'Diseño Digital'],
        video: 'https://www.youtube.com/watch?v=SE97SxiXZyY',
    },
    {
        id: '2',
        title: 'Episodio I: Sombras del poder',
        category: 'Fotografía',
        description: 'Primera fotografía de una sesión de fotos inspiradas en la película "El Padrino", en estas fotografías a parte de una caracterización, es un juego con la iluminación.',
        tools: ['Lightroom', 'Photoshop', 'Contraluz'],
        image: 'photos/contraluzelpadrino.png',
    },
    {
        id: '2b',
        title: 'Episodio II: Sombras del poder',
        category: 'Fotografía',
        description: 'Segunda fotografía de la serie inspirada en El Padrino. En esta toma se utiliza iluminación rembrandt, que resalta la simetría del rostro y proyecta una sombra dura en forma de triángulo, aportando elegancia y carácter al retrato. El resultado combina la estética clásica del cine con un estilo contemporáneo de edición en Lightroom y Photoshop.',
        tools: ['Photoshop', 'Lightroom', 'Rembrandt'],
        image: 'photos/rembrandt.jpg',
    },
    {
        id: '2c',
        title: 'Episodio III: Tarde lluviosa',
        category: 'Fotografía',
        description: 'Fotografía capturada con un celular en un día nublado, donde se aplica la ley del horizonte para equilibrar la composición. El contraste de color destaca gracias a la chaqueta roja de la modelo, que rompe con los tonos fríos del entorno y aporta fuerza visual a la escena.',
        tools: ['Samsung A26', 'Ley del horizonte', 'Contraste'],
        image: 'photos/sofia.jpg',
    },
    {
        id: '2d',
        title: 'Episodio IV: Dualidad cromática',
        category: 'Fotografía',
        description: 'Fotografía que explora el contraste entre colores complementarios. El balón morado resalta frente al fondo amarillo, generando una composición dinámica y visualmente atractiva donde el color es el protagonista.',
        tools: ['Samsung A26', 'Contraste', 'Colores complementarios'],
        image: 'photos/baloncesto.jpg',
    },
    {
        id: '2e',
        title: 'Episodio V: Colombia en colores',
        category: 'Fotografía',
        description: 'Retrato de una joven con maquillaje de payaso. Rodeada de artesanías colombianas, la imagen combina la inocencia del gesto con la riqueza cromática del entorno, destacando la diversidad y el arte popular del país.',
        tools: ['Samsung A26', 'Retrato', 'Armonías'],
        image: 'photos/ojitosmentirosos.jpg',
    },

     {
        title: 'Pokemamones',
        description: 'Página desarrollada en HTML, CSS y JavaScript inspirada en el mundo Pokémon. Proyecto alojado en GitHub Pages.',
        category: 'Programación',
        image: 'photos/pokedexdos.png', // aquí va la imagen de portada
        link: 'https://dica2304.github.io/pokemamones',
        tools: ['HTML', 'CSS', 'JavaScript']
    },
     {
        title: 'Ajedrez Animado',
        description: 'Página desarrollada en HTML, CSS y Bootstrap inspirada en un Ajedrez, se agregaron animaciones para que sea dinámica',
        category: 'Programación',
        image: 'photos/ajedrez.png', // aquí va la imagen de portada
        link: 'https://dica2304.github.io/piezasajedrez',
        tools: ['HTML', 'CSS', 'Bootstrap']
    },
    {
        title: 'Lego Frame',
        description: 'Página desarrollada en HTML, CSS y Bootstrap con el fin de usar animaciones, para esto, se creó un personaje en cuatro posiciones laterales y se animó frame por frame',
        category: 'Programación',
        image: 'photos/legodos.png', // aquí va la imagen de portada
        link: 'https://dica2304.github.io/lego-frame',
        tools: ['HTML', 'CSS', 'Bootstrap']
    },

        {
        title: 'Buho Bar',
        description: 'Wireframe para computador para la página web de un bar',
        category: 'Wireframe',
        video: 'video/buhobar.mp4', // aquí va la imagen de portada
        tools: ['Photoshop']
    },
    {
        id: '4',
        title: 'Cortometraje: Memorias de una vieja historia',
        category: 'Audiovisuales',
        description: 'En este cortometraje, realicé el papel de directora y productora, con este proyecto, buscamos transmitir melancolía por medio de una historia de amor.',
        tools: ['Premiere Pro', 'Audition', 'Productora', 'Directora'],
        video: 'https://www.youtube.com/embed/AfNQNZxBBT0',
    },
    {
        id: '5',
        title: 'Póster: The godfather',
        category: 'Pósters',
        description: 'Póster en honor a la película, la fotografía fue creada por mí.',
        tools: ['Illustrator', 'Photoshop', 'Fotografía'],
        image: 'photos/posterelpadrino.jpg',
    },
    {
        id: '5b',
        title: 'Póster II: Eje Cafetero',
        category: 'Pósters',
        description: 'Póster creativo acerca de la diversidad endémica que posee el eje cafetero.',
        tools: ['Illustrator', 'Photoshop'],
        image: 'photos/ejecafetero.jpg',
    },
    {
        id: '6',
        title: 'Edición: Retoque de color- Perro',
        category: 'Edición',
        description: 'Trabajo con curvas, para darle vida a las imágenes y poder transmitir con la colorización.',
        tools: ['Lightroom', 'Retoque'],
        image: 'photos/edicionperro.png',
    },
    {
        id: '6b',
        title: 'Edición II: Retrato',
        category: 'Edición',
        description: 'Colorización en imágenes.',
        tools: ['Lightroom'],
        image: 'photos/valentinaedicion.png',
    },
];

const skills = [
    { name: 'Adobe Premiere Pro', level: 45, icon: '🎬' },
    { name: 'Adobe Photoshop', level: 60, icon: '📷' },
    { name: 'Adobe Illustrator', level: 80, icon: '⚡' },
    { name: 'Adobe Lightroom', level: 50, icon: '📷' },
    { name: 'Adobe InDesign', level: 70, icon: '🏆' },
    { name: 'Adobe Audition', level: 35, icon: '🎬' },
    { name: 'Adobe Animate', level: 60, icon: '▶' },
    { name: 'Visual Studio Code', level: 70, icon: '💻' },
    { name: 'Fotografía', level: 85, icon: '📷' },
];

// State
let currentIndex = 0;
let selectedCategory = 'Todos';
let filteredProjects = projects;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initSkills();
    initEventListeners();
});

// Carousel Functions
function initCarousel() {
    updateFilteredProjects();
    renderCarousel();
    renderDots();
}

function updateFilteredProjects() {
    if (selectedCategory === 'Todos') {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(p => p.category === selectedCategory);
    }
    currentIndex = 0;
}

function renderCarousel() {
    const content = document.getElementById('carouselContent');
    const project = filteredProjects[currentIndex];

    if (!project) return;

    content.innerHTML = `
        ${project.link ? `<a href="${project.link}" target="_blank" class="projectletra">Ver proyecto</a>` : ''}
        
        <div class="carousel-slide active">
            <div class="slide-header">
                <span class="slide-counter">EPISODIO ${currentIndex + 1} / ${filteredProjects.length}</span>
                <span class="slide-category">${project.category}</span>
            </div>

            ${
                project.video
                    ? `<div class="slide-video-container">
                        <iframe 
                            src="${project.video.replace('watch?v=', 'embed/')}"
                            title="${project.title}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>`
                    : project.image
                    ? `<div class="slide-image-container">
                        <img src="${project.image}" alt="${project.title}" class="slide-image">
                    </div>`
                    : ''
            }

            <h3 class="slide-title">${project.title}</h3>
            <p class="slide-description">${project.description}</p>
            <div class="slide-tools">
                ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
            </div>
            <div class="slide-transmitting">
                <div class="transmitting-bar"></div>
                <div class="transmitting-text">▬ TRANSMITIENDO</div>
            </div>
        </div>
    `;
}



function renderDots() {
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = '';

    for (let i = 0; i < filteredProjects.length; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % filteredProjects.length;
    renderCarousel();
    renderDots();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    renderCarousel();
    renderDots();
}

function goToSlide(index) {
    currentIndex = index;
    renderCarousel();
    renderDots();
}

// Skills Functions
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-content">
                <div class="skill-name">
                    <span>${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Event Listeners
function initEventListeners() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero buttons navigation
    document.querySelector('.hero-buttons .btn-primary').addEventListener('click', () => {
        document.getElementById('episodios').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.hero-buttons .btn-secondary').addEventListener('click', () => {
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    });

    // Carousel buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Category filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectedCategory = e.target.dataset.category;
            updateFilteredProjects();
            renderCarousel();
            renderDots();
        });
    });

    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const form = e.target;
        const inputs = form.querySelectorAll('input, textarea');
        const submitBtn = form.querySelector('button[type="submit"]');

        const formData = {
            nombre: inputs[0].value,
            email: inputs[1].value,
            codigo_proyecto: inputs[2].value,
            mensaje: inputs[3].value
        };

        submitBtn.disabled = true;
        submitBtn.textContent = '✉ ENVIANDO...';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                form.reset();
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el mensaje. Por favor intenta de nuevo.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = '✉ INICIAR TRANSMISIÓN';
        }
    });
}
