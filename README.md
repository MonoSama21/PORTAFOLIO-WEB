# 💼 Portafolio Web - QA Automation Engineer

Portafolio web profesional desarrollado con React + Vite, diseñado específicamente para mostrar mis habilidades como QA Automation Engineer y Full Stack Developer.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🎯 Características

- ✨ **Diseño Moderno y Responsive**: Adaptable a todos los dispositivos
- 🎨 **Animaciones Suaves**: Transiciones y efectos visuales profesionales
- 🧪 **Sección de Automatización**: Destacando herramientas como Selenium, Cypress y Playwright
- 💼 **Galería de Proyectos**: Filtrado dinámico por categorías
- 📱 **Navegación Fluida**: Scroll suave entre secciones
- 🌙 **Tema Oscuro**: Diseño optimizado para desarrolladores
- 📧 **Formulario de Contacto**: Integrado y funcional

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18.2** - Biblioteca de UI
- **Vite 5.2** - Build tool y dev server
- **CSS3** - Estilos personalizados con variables CSS
- **JavaScript ES6+** - Lógica moderna

### Herramientas Destacadas en el Portafolio
- 🤖 **Automatización**: Selenium, Cypress, Playwright, Rest Assured, Postman, JMeter
- 💻 **Frontend**: JavaScript, TypeScript, HTML/CSS, Tailwind, Bootstrap
- ⚙️ **Backend**: Python, Java, SQL Server
- 🛠️ **DevOps & Tools**: Git, Jira, VS Code, IntelliJ IDEA

## 📦 Instalación

### Prerrequisitos
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/MonoSama21/PORTAFOLIO-WEB.git
cd PORTAFOLIO-WEB
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Genera build optimizado para producción
npm run preview      # Preview del build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 📁 Estructura del Proyecto

```
PORTAFOLIO-WEB/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx       # Barra de navegación
│   │   ├── Hero.jsx         # Sección principal
│   │   ├── About.jsx        # Sobre mí
│   │   ├── Skills.jsx       # Habilidades técnicas
│   │   ├── Projects.jsx     # Proyectos destacados
│   │   ├── Contact.jsx      # Formulario de contacto
│   │   ├── Footer.jsx       # Pie de página
│   │   └── *.css            # Estilos de cada componente
│   ├── assets/
│   │   └── images/          # Imágenes y logos
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globales de App
│   ├── index.css            # Estilos base y variables CSS
│   └── main.jsx             # Punto de entrada
├── public/                  # Archivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md               # Este archivo
```

## 🎨 Secciones del Portafolio

### 1. **Hero Section**
Presentación principal con código de ejemplo de Playwright, foto profesional y botones de acción.

### 2. **About (Sobre Mí)**
Información personal, experiencia y estadísticas clave con diseño visual atractivo.

### 3. **Skills (Habilidades Técnicas)**
Muestra de tecnologías organizadas en 4 categorías:
- 🧪 Automatización de Pruebas
- 🎨 Frontend Development
- ⚙️ Backend Development
- 🛠️ Herramientas & DevOps

### 4. **Projects (Proyectos)**
Galería de proyectos con filtrado por categoría (Todos, Automatización, Full Stack).

### 5. **Contact (Contacto)**
Formulario de contacto con información personal y enlaces a redes sociales.

## 🌐 Despliegue

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para usar la carpeta 'dist'
```

## 🔧 Personalización

### Cambiar Información Personal
Edita los siguientes archivos:
- `src/components/Hero.jsx` - Nombre y título
- `src/components/About.jsx` - Biografía y estadísticas
- `src/components/Contact.jsx` - Email, teléfono y redes sociales

### Modificar Proyectos
Edita el array `projects` en `src/components/Projects.jsx`

### Actualizar Skills
Edita el objeto `skills` en `src/components/Skills.jsx`

### Cambiar Colores
Modifica las variables CSS en `src/index.css`:
```css
:root {
  --primary-color: #4F46E5;
  --secondary-color: #06B6D4;
  --dark-bg: #0F172A;
  /* ... más variables */
}
```

## 📈 Optimizaciones

- ⚡ **Lazy Loading**: Carga diferida de imágenes
- 🎯 **Code Splitting**: División automática del código
- 📦 **Asset Optimization**: Compresión de recursos
- 🚀 **Fast Refresh**: Actualización instantánea en desarrollo

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Yrvin Pachas**
- LinkedIn: [@yrvin-pachas](https://www.linkedin.com/in/yrvin-pachas/)
- GitHub: [@MonoSama21](https://github.com/MonoSama21)
- Email: yrvi21pachas2004@gmail.com

## 🙏 Agradecimientos

- React Team por la excelente biblioteca
- Vite por la increíble velocidad de desarrollo
- Comunidad open source por las herramientas y recursos

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!** ⭐

Desarrollado con ❤️ por Yrvin - QA Automation Engineer