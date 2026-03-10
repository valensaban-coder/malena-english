# 🩺 Male's English Lab

**Tutor de inglés personalizado para Malena** — PWA instalable en cualquier celular.

Nivel base: B2 (First Certificate), con ejercicios progresivos hasta C1.
Temática contextualizada: medicina, universidad, vocabulario académico.

## Tipos de ejercicios

| Tipo | Descripción |
|------|-------------|
| ✏️ Fill in the Blank | Completar oraciones con la forma gramatical correcta |
| 🔄 Rephrasing | Reescribir oraciones usando una palabra clave (Key Word Transformation) |
| 🔍 Error Correction | Encontrar y corregir errores gramaticales |
| 🧩 Word Formation | Transformar palabras raíz a la forma correcta (Use of English Part 3) |
| 📚 Vocabulary | Multiple choice de vocabulario médico y académico |
| 📖 Reading | Comprensión lectora con pasajes sobre medicina |

## Setup local

```bash
# 1. Clonar el repo
git clone <tu-repo-url>
cd malena-english

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
```

Abrí `http://localhost:5173` en el navegador.

## Deploy en Render (gratis)

### Opción A: Static Site (recomendado)

1. Subí el proyecto a GitHub
2. Andá a [render.com](https://render.com) → New → Static Site
3. Conectá tu repo de GitHub
4. Configurá:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click "Create Static Site"

¡Listo! Render te da una URL tipo `https://malena-english.onrender.com`

### Opción B: Vercel (también gratis)

1. Instalá Vercel CLI: `npm i -g vercel`
2. Desde la carpeta del proyecto: `vercel`
3. Seguí las instrucciones

### Opción C: Netlify

1. `npm run build`
2. Arrastrá la carpeta `dist` a [app.netlify.com/drop](https://app.netlify.com/drop)

## Instalar como app en el celular

### Android (Chrome):
1. Abrí la URL en Chrome
2. Esperá unos segundos → aparece "Agregar a pantalla de inicio" 
3. O tocá ⋮ → "Instalar aplicación"

### iPhone (Safari):
1. Abrí la URL **en Safari** (no Chrome)
2. Tocá el botón compartir (↑)
3. "Agregar a pantalla de inicio"
4. "Agregar"

La app se abre a pantalla completa, sin barra del navegador, como una app nativa.

## Reemplazar íconos

Los íconos en `public/icons/` son placeholders. Para personalizarlos:

1. Creá una imagen de 512x512 px (PNG)
2. Generá los tamaños con [favicon.io](https://favicon.io/) o similar
3. Reemplazá `icon-192.png` y `icon-512.png` en `public/icons/`

## Estructura del proyecto

```
malena-english/
├── index.html              # Entry point HTML
├── package.json            # Dependencies
├── vite.config.js          # Vite + PWA config
├── public/
│   └── icons/              # PWA icons
│       ├── icon-192.png
│       └── icon-512.png
├── src/
│   ├── main.jsx            # React mount
│   ├── App.jsx             # Main application
│   └── exercises.js        # All exercise data
└── README.md
```

## Agregar más ejercicios

Editá `src/exercises.js` — cada tipo tiene su array. Solo agregá objetos siguiendo el mismo formato:

```js
// Fill in the blank
{ id: "fb30", topic: "Conditionals", q: "If I ___ ...", a: ["had been"], hint: "..." }

// Rephrasing
{ id: "rp16", original: "...", keyword: "DESPITE", prompt: "Complete: ...", a: ["despite having"] }

// Error correction
{ id: "ec13", sentence: "...", error: "wrong part", correction: "right part", explanation: "..." }
```

## Funciona 100% offline

Una vez instalada la PWA, todos los ejercicios funcionan sin internet.
No requiere backend, API, ni base de datos.

---

Hecho con 💜 para Male
