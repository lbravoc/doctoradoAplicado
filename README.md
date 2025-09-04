# Micrositio UDD + Fundación País Digital

## Descripción
Página web para la convocatoria del Doctorado en Ingeniería Aplicada - Colaboración entre Universidad del Desarrollo y Fundación País Digital.

## Tecnologías utilizadas
- React 18
- Vite
- Tailwind CSS
- Framer Motion (animaciones)
- Lucide React (iconos)

## Instalación y desarrollo local

1. **Clonar el repositorio**
```bash
git clone [URL-de-tu-repositorio]
cd micrositio-udd-pais-digital
```

2. **Instalar dependencias**
```bash
npm install
# o
pnpm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
pnpm run dev
```

4. **Construir para producción**
```bash
npm run build
# o
pnpm run build
```

## Despliegue en GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

1. **Crear el archivo `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "Deploy from a branch"
   - Elige la rama "gh-pages"
   - Guarda los cambios

### Opción 2: Despliegue manual

1. **Construir el proyecto:**
```bash
npm run build
```

2. **Subir la carpeta `dist` a la rama `gh-pages`:**
```bash
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## Configuración del base path

Si tu repositorio no está en el dominio raíz, actualiza `vite.config.js`:

```javascript
export default defineConfig({
  base: '/nombre-de-tu-repositorio/',
  // ... resto de la configuración
})
```

## Estructura del proyecto

```
micrositio-udd-pais-digital/
├── public/
│   ├── Formulario_Empresas.docx
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Características principales

- ✅ Diseño responsivo
- ✅ Animaciones suaves
- ✅ Descarga de formulario funcional
- ✅ Timeline interactivo
- ✅ Optimizado para SEO
- ✅ Compatible con GitHub Pages

## Contacto

Para soporte técnico: soporte@udd.cl
Para información del programa: doctorado.ingenieria@udd.cl

