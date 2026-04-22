# Mar & Tierra Servicios - Sitio Web Profesional

## 📋 Descripción

Sitio web profesional y moderno para **Mar & Tierra Servicios**, empresa especializada en movimiento de suelo y maquinaria pesada en la Costa Atlántica Argentina.

## ✨ Características

### Diseño
- ✅ **Estética industrial moderna** con paleta de colores profesional (azules, arena, naranjas industriales)
- ✅ **Diseño responsive** optimizado para móviles, tablets y desktop
- ✅ **Animaciones suaves** y transiciones elegantes
- ✅ **Navegación intuitiva** con menú fijo y scroll suave
- ✅ **Efectos visuales modernos** (parallax, hover effects, gradientes)

### Funcionalidad
- ✅ **Integración directa con WhatsApp** para contacto rápido
- ✅ **Formulario de contacto** que redirige a WhatsApp
- ✅ **SEO optimizado** para búsquedas locales
- ✅ **Carga rápida** y optimización de rendimiento
- ✅ **Accesibilidad** y mejores prácticas web

### Secciones
1. **Hero** - Presentación impactante con llamada a la acción
2. **Servicios** - Movimiento de suelo, obras civiles, trabajos costeros
3. **Maquinaria** - Cargadora, excavadora, topadora, camiones
4. **Zona de Trabajo** - Cobertura en Costa Atlántica
5. **Nosotros** - Perfil de la empresa y valores
6. **Contacto** - WhatsApp, email y formulario
7. **Footer** - Información adicional y enlaces

## 📁 Estructura de Archivos

```
Mar y Tierra Servicios/
├── Imagenes/
│   ├── MT Firma.jpeg          # Logo de la empresa
│   └── Mar y Tierra.png       # Imagen de presentación
└── Pagina/
    ├── index.html             # Estructura HTML
    ├── styles.css             # Estilos y diseño
    ├── script.js              # Interactividad
    ├── package.json           # Dependencias y scripts
    ├── playwright.config.js   # Configuración de pruebas
    └── tests/                 # Pruebas automatizadas (E2E)
        └── site.spec.js       # Suite de pruebas del sitio
```

## 🚀 Cómo Usar

### Abrir el Sitio
1. Navegá a la carpeta `Pagina`
2. Hacé doble clic en `index.html`
3. El sitio se abrirá en tu navegador predeterminado

### Pruebas Automatizadas
El sitio cuenta con una suite de pruebas E2E (End-to-End) para asegurar que todo funcione correctamente:
1. Asegurate de tener [Node.js](https://nodejs.org/) instalado.
2. Abrí una terminal en la carpeta `Pagina`.
3. Instalá las dependencias: `npm install`.
4. Ejecutá las pruebas: `npm test`.
5. Para ver las pruebas en acción: `npx playwright test --headed`.

### Publicar en Internet

#### Opción 1: GitHub Pages (Gratis)
1. Creá una cuenta en [GitHub](https://github.com)
2. Creá un nuevo repositorio
3. Subí los archivos de la carpeta `Pagina` y `Imagenes`
4. Activá GitHub Pages en la configuración del repositorio
5. Tu sitio estará disponible en `https://tuusuario.github.io/nombre-repo`

#### Opción 2: Netlify (Gratis)
1. Creá una cuenta en [Netlify](https://www.netlify.com)
2. Arrastrá la carpeta completa del proyecto
3. Tu sitio estará online en minutos
4. Podés conectar un dominio personalizado

#### Opción 3: Hosting Tradicional
1. Contratá un hosting (ej: Hostinger, DonWeb, etc.)
2. Subí los archivos vía FTP
3. Configurá tu dominio

## 🎨 Personalización

### Cambiar Colores
Editá las variables CSS en `styles.css` (líneas 10-20):
```css
:root {
  --color-ocean-deep: #0A2463;
  --color-ocean-blue: #1E5AA8;
  --color-industrial-orange: #FF6B35;
  /* ... más colores */
}
```

### Modificar Textos
Todos los textos están en `index.html`. Buscá la sección que querés modificar y editá el contenido.

### Cambiar Imágenes
Reemplazá las imágenes en la carpeta `Imagenes` manteniendo los mismos nombres, o actualizá las rutas en `index.html`.

### Agregar Galería de Trabajos
Para agregar una galería de proyectos realizados:

1. Creá una nueva sección en `index.html` después de "Maquinaria":
```html
<section class="section" id="galeria">
    <div class="container">
        <h2 class="text-center">Nuestros <span class="gradient-text">Trabajos</span></h2>
        <div class="gallery-grid">
            <!-- Agregar imágenes aquí -->
        </div>
    </div>
</section>
```

2. Agregá estilos en `styles.css`:
```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-xl);
}
```

## 📱 Contacto

### WhatsApp
- **Número:** +54 9 223 542 9896
- El botón de WhatsApp abre automáticamente una conversación
- El formulario también redirige a WhatsApp con el mensaje pre-cargado

### Email
- **Email:** martierra.servicios@gmail.com
- Click directo desde el sitio

## 🔍 SEO

El sitio está optimizado para aparecer en búsquedas de:
- "movimiento de suelo costa atlántica"
- "maquinaria pesada costa atlántica"
- "excavaciones costa atlántica"
- "cargadora frontal costa atlántica"

### Mejorar el SEO
1. **Google My Business:** Creá un perfil de empresa
2. **Meta Tags:** Ya están incluidos en el `<head>`
3. **Contenido:** Agregá más texto descriptivo si es necesario
4. **Backlinks:** Conseguí enlaces desde otros sitios

## 📊 Análisis

Para agregar Google Analytics:

1. Creá una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtené tu código de seguimiento
3. Agregalo antes del `</head>` en `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID-AQUI');
</script>
```

## 🛠️ Soporte Técnico

### Navegadores Compatibles
- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

### Resolución de Problemas

**El menú móvil no funciona:**
- Verificá que `script.js` esté cargando correctamente
- Abrí la consola del navegador (F12) y buscá errores

**Las imágenes no se ven:**
- Verificá que las rutas sean correctas
- Asegurate de que las imágenes estén en la carpeta `Imagenes`

**El formulario no envía:**
- Verificá que el número de WhatsApp sea correcto
- Probá en diferentes navegadores

## 📈 Próximas Mejoras Sugeridas

1. **Galería de Proyectos** - Mostrar trabajos realizados con fotos
2. **Testimonios** - Agregar opiniones de clientes
3. **Blog** - Artículos sobre movimiento de suelo
4. **Calculadora de Presupuesto** - Estimación online
5. **Chat en Vivo** - Atención inmediata
6. **Versión en Inglés** - Para clientes internacionales

## 📄 Licencia

Este sitio web fue desarrollado específicamente para Mar & Tierra Servicios.

## 👨‍💻 Desarrollo

Sitio desarrollado con:
- HTML5 semántico
- CSS3 moderno con variables y grid/flexbox
- JavaScript vanilla (sin frameworks)
- Font Awesome para iconos
- Google Fonts (Montserrat + Roboto)

---

**Mar & Tierra Servicios**  
Movimiento de Suelo y Maquinaria Pesada  
Costa Atlántica Argentina  
📱 +54 9 223 542 9896  
📧 martierra.servicios@gmail.com
