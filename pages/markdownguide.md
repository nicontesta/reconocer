---
layout: default
title: Guía básica Markdown
permalink: /markdownguide/
---

## 📘 GUÍA BÁSICA PARA GUARDAR Y VER ARCHIVOS `.md` (MARKDOWN)  
**Ideal para usuarios sin experiencia previa**

Al utilizar el **Generador de Bonus Track Interactivo**, el resultado se entrega en formato **Markdown** (`.md`), que contiene dos bloques de contenido:  
- 🟣 Un bloque **Dramatúrgico**  
- 🔵 Un bloque **Filosófico-Académico**

Si no estás familiarizado con este tipo de archivos, aquí te explicamos cómo copiarlos, guardarlos y visualizarlos correctamente.

**Markdown** es un lenguaje sencillo para escribir texto con formato (como títulos, listas, negritas o enlaces) usando caracteres normales del teclado.
Además, permite estructurar el documento con encabezados que facilitan crear una tabla de contenidos **(ToC)**, una lista que organiza y enlaza las secciones para navegar fácilmente, aunque la ToC suele generarse con herramientas externas o extensiones.

---

### 1. 📋 Copiar el contenido del bloque de código

- Coloca el cursor dentro del bloque de código (comienza y termina con tres acentos invertidos como estos: ```).
- Selecciona todo el contenido. Puedes usar:
  - `Ctrl + A` para seleccionar todo.
  - `Ctrl + C` para copiar.
- 🧠 **Sugerencia:** Si hay un botón que dice **"Copiar código"**, haz clic en él para copiar más rápido.

---

### 2. 📝 Pegar en el Bloc de Notas (Notepad)

- Abre el **Bloc de notas** desde el menú de inicio de Windows.
- Pega el contenido con `Ctrl + V`.

---

### 3. 💾 Guardar el archivo como `.md`

1. Ve a **Archivo > Guardar como…**  
2. En **"Nombre del archivo"**, escribe un nombre terminado en `.md`  
   - Ejemplo: `ColoquioEscena1.md`
3. En **"Tipo"**, elige: ✅ **Todos los archivos (*.*)**  
4. En **"Codificación"**, selecciona: **UTF-8**  
5. Haz clic en **Guardar**

---

### 4. 👀 Ver el archivo `.md` con formato (títulos, negritas, etc.)

Tienes varias formas de visualizarlo de forma amigable, como si fuera un documento estructurado (títulos, negritas, etc.), te recomendamos instalar una extensión gratuita para tu navegador o usar un visor dedicado.

#### ➤ **Extensiones para Google Chrome**  
- [Markdown Viewer](https://chrome.google.com/webstore/detail/markdown-viewer/pghodfjepegmciihfhdipmimghiakcjf)  
- [Markdown Preview Plus](https://chrome.google.com/webstore/detail/markdown-preview-plus/aejoelaoggembcahagimdiliamlcdmfm)

#### ➤ **Extensiones para Mozilla Firefox**  
- [Markdown Viewer Webext](https://addons.mozilla.org/es/firefox/addon/markdown-viewer-webext/)  
- [MD Reader](https://addons.mozilla.org/es-ES/firefox/addon/markdown-reader-ext/)  

#### ➤ **Sin instalar nada para previsualizar (sin tabla de contenidos)**  
- [http://markdown.pioul.fr/](http://markdown.pioul.fr/)  
- [https://www.jekyllpad.com/tools/online-markdown-wysiwyg-editor](https://www.jekyllpad.com/tools/online-markdown-wysiwyg-editor)

#### ➤ **Si quieres compartir tus propias escenas (sin tabla de contenidos)**  
- [http://bearblog.dev](http://bearblog.dev)  
- [https://write.as](https://write.as)  
✔️ Las versiones gratuitas son suficientes para comenzar.   

#### ➤ **Para tener una mejor experiencia de lectura en PC**[^1] 

[^1]: Smart TOC genera automáticamente tablas de contenido, optimizando la navegación y la estructura de tus documentos. Es el complemento ideal para compartir archivos Markdown en plataformas como Bearblog o Write.as.

- [Smart TOC](https://chromewebstore.google.com/detail/smart-toc/lifgeihcfpkmmlfjbailfpfhbahhibba?pli=1) *Chrome*
- [Smart TOC](https://addons.mozilla.org/es-ES/firefox/addon/smart_toc/)  *Firefox*  

#### ➤ **Si quieres convertir ficheros .html a .md** 
- [Conversor de HTML a Markdown](https://codebeautify.org/html-to-markdown) 

Siguiendo cualquiera de estos métodos, podrás abrir y visualizar el archivo `.md` con la estructura adecuada, ideal para leer, compartir o archivar tus escenas del Coloquio Imposible o cualquier otro documento generado en formato Markdown.

---

### 5. ✅ Resumen rápido de la **Sintaxis Markdown**

#### Énfasis  
Se puede aplicar formato al texto como:  
- **Negrita**  
- *Cursiva*  
- ~~Tachado~~  
- ==Resaltado==

#### Encabezados  
Hay diferentes niveles de encabezados, del más grande al más pequeño, definidos con el símbolo `#`. Esta característica permite generar de forma semiautomática una tabla de contenidos (ToC)    

Ejemplo:  
- `# Encabezado 1`  
- `## Encabezado 2`  
- `### Encabezado 3`

#### Listas  
Se pueden crear:  
- Listas genéricas (con viñetas).  
- Listas numeradas.  
- Listas anidadas (listas dentro de listas).

#### Enlaces  
Se pueden insertar enlaces externos o internos al mismo documento.  
Ejemplo:  
- Enlace a una página externa: `[Google](https://www.google.com)`  
- Enlace a una sección interna: `[Ir a Título](#encabezado-1)`.

#### Reemplazos tipográficos
Se admiten símbolos tipográficos automáticos como  ®, ©, ™, ±, subíndices y superíndices.

#### Saltos de línea  
- Un solo salto de línea no se muestra a menos que se use una barra invertida (`\`) o dos espacios al final de la línea.  
- Dos saltos de línea crean un nuevo párrafo.

#### Notas al pie  
Markdown permite crear notas al pie con el siguiente formato:  
**Ejemplo:**  
Este es un texto con una nota al pie.[^2]  

[^2]: Y el ejemplo es la segunda nota al pie.

#### Citas  
Para crear citas, usa el símbolo `>` al inicio de la línea:  
> Esta es una cita simple.  
> Puede ocupar varias líneas.

#### Imágenes  
Para insertar imágenes:  
`![Texto alternativo](https://url.correcta.imagen)`  
- Ejemplo de imagen: ![Doraemon](https://dn710004.ca.archive.org/0/items/doraemon-pngs/05_15_PERSONAJES_WEB_DORAEMON_BRUSH_BOING_DORAEMON.png)

#### Tablas  
Markdown permite crear tablas con formato (depende del css):  

| Nombre | Edad |
|--------|------|
| Ana    | 25   |
| Luis   | 30   |

#### Código

Texto con código en línea: `console.log("Hola");`

```python
def saludar():
    print("Hola")
```

---

#### LaTeX

Ecuación en línea: $E = mc^2$

Bloque matemático:

$$
\int_0^\infty e^{-x} dx = 1
$$

#### Editores recomendados

- ✅ **Bloc de notas (Notepad)**  
- 🆗 **Notepad++** (más avanzado, pero fácil de usar)

---

## 🛠️ Herramientas para ir más allá de la lectura pasiva

El uso de Markdown no es un fin en sí mismo, sino una muestra práctica de cómo las tecnologías accesibles pueden simplificar la creación, navegación y publicación de contenido especializado.

En este sitio encontrarás:

### 📑 Tabla de Contenidos (TOC) Interactiva

En muchas páginas de este sitio, incluida esta guía, contarás con una Tabla de Contenidos interactiva. En la versión de escritorio, se encuentra en el lateral, y en dispositivos móviles, se despliega al tocar el icono correspondiente. Esta TOC se genera automáticamente a partir de los encabezados del documento, permitiéndote navegar rápidamente entre las secciones.

### 📥 Descarga del Contenido en Formato Markdown

Si lo prefieres, puedes descargar el contenido completo de la página en formato Markdown a través del botón de descarga (📥). Esta opción es útil si deseas guardar el contenido para editarlo localmente, publicarlo en otra plataforma, o incluso si estás comenzando a familiarizarte con la sintaxis de Markdown.

### 🔄 Conversor de HTML a Markdown

Si necesitas convertir contenido HTML a Markdown, tienes disponible una herramienta especial:  <a title="Conversor de HTML a Markdown" href="/conversor.html" target="_blank" rel="noopener noreferrer">conversor.html</a>    

Así es como funciona:  

1. Copia el HTML de cualquier página.
2. Pégalo en el conversor.
3. Obtén el código Markdown resultante.
4. Previsualiza el archivo sin necesidad de instalar nada.

¡Anímate a probarla y simplifica el proceso!

### 🚀 Publicación en bearblog.dev

Una vez que tengas tu contenido en formato Markdown, publicarlo en **bearblog.dev** es muy sencillo:

1. Crea una cuenta gratuita en **bearblog.dev**.
2. Pega tu archivo Markdown en el editor.
3. Personaliza tu sitio y publica.

Bearblog es una plataforma minimalista y enfocada en el contenido, ideal para blogs y documentación.  

Si prefieres tener un mayor control o BearBlog se te queda pequeño tienes una [Hoja de Ruta](/Bearblog2GitHub/) para usar Github como plataforma   

### Conclusión

Estas herramientas están pensadas para inspirarte en la creación de tus propios proyectos. Te demuestran cómo, con recursos accesibles y un enfoque estratégico, puedes generar contenido de calidad, educativo y profesional, sin necesidad de grandes inversiones técnicas o económicas.

---

## Código fuente con comentarios del Conversor  

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Conversor HTML a Markdown</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 
    Librerías externas necesarias:
    - Marked: para convertir Markdown a HTML en la previsualización
    - DOMPurify: para limpiar el HTML y prevenir ataques XSS
  -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.5/purify.min.js"></script>
  
  <!-- 
    Estilo GitHub Markdown CSS: 
    Proporciona estilos similares a los de GitHub para la previsualización
  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
  
  <style>
    /* 
      Variables CSS para los colores y estilos.
      Esto permite cambiar fácilmente el aspecto de la aplicación.
    */
    :root {
      --font-main: 'Courier New', monospace;
      --background-color: #fbfbf6;
      --text-color: #333;
      --border-color: #ccc;
      --button-color: #27ae60;
      --button-hover: #2ecc71;
      --preview-bg: #ffffff;
      --toc-bg: rgba(251, 251, 246, 0.95);
      --toc-border: 1px solid #ccc;
      --toc-width: 240px;
    }
    
    /* 
      Estilos para el modo oscuro del sistema.
      Se activan automáticamente si el usuario tiene preferencia por el modo oscuro.
    */
    @media (prefers-color-scheme: dark) {
      :root {
        --background-color: #1f1d25;
        --text-color: #ededed;
        --border-color: #444;
        --preview-bg: #2d2d2d;
        --toc-bg: rgba(31, 29, 37, 0.95);
        --toc-border: 1px solid #444;
      }
      
      /* Variables específicas para el estilo GitHub Markdown en modo oscuro */
      .markdown-body {
        color-scheme: dark;
        --color-prettylights-syntax-comment: #8b949e;
        --color-prettylights-syntax-constant: #79c0ff;
        /* ... (otras variables de color) ... */
      }
    }
    
    /* 
      Estilos generales del cuerpo de la página
    */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: var(--background-color);
      color: var(--text-color);
      max-width: 1000px;
      margin: 0 auto;
    }
    
    /* 
      Estilos para los encabezados principales
    */
    h1, h2 {
      font-family: var(--font-main);
    }
    
    /* 
      Contenedor principal con diseño de cuadrícula (grid) de 2 columnas
    */
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;
    }
    
    /* 
      En dispositivos móviles, cambiamos a una sola columna
    */
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
    
    /* 
      Estilos para los paneles (áreas de entrada y salida)
    */
    .panel {
      border: 1px solid var(--border-color);
      border-radius: 5px;
      padding: 15px;
      background-color: var(--background-color);
    }
    
    /* 
      Estilos para el área de texto donde se pega el HTML
    */
    textarea {
      width: 100%;
      min-height: 300px;
      font-family: monospace;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--background-color);
      color: var(--text-color);
    }
    
    /* 
      Estilos para los botones
    */
    .button {
      background-color: var(--button-color);
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 10px;
      margin-right: 10px;
      transition: background-color 0.3s;
    }
    
    /* 
      Efecto hover para los botones
    */
    .button:hover {
      background-color: var(--button-hover);
    }
    
    /* 
      Estilo para botones deshabilitados
    */
    .button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    
    /* 
      Estilos para el área de instrucciones
    */
    .instructions {
      background-color: rgba(0, 0, 0, 0.05);
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    
    .instructions ol {
      padding-left: 20px;
    }
    
    .instructions li {
      margin-bottom: 10px;
    }
    
    /* 
      Estilos para el área de resultado Markdown
    */
    .output {
      white-space: pre-wrap;
      font-family: monospace;
      padding: 10px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      min-height: 300px;
      max-height: 500px;
      overflow-y: auto;
    }
    
    /* 
      Estilos para la ventana modal de previsualización
    */
    .preview-modal {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      background-color: var(--preview-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      overflow: hidden;
      flex-direction: column;
    }
    
    /* 
      Estilos para la cabecera de la ventana de previsualización
    */
    .preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      border-bottom: 1px solid var(--border-color);
      background-color: var(--background-color);
    }
    
    .preview-title {
      margin: 0;
      font-size: 18px;
      font-weight: bold;
    }
    
    .preview-close {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--text-color);
    }
    
    /* 
      Contenedor del contenido de previsualización
    */
    .preview-content {
      display: flex;
      flex: 1;
      overflow: hidden;
    }
    
    /* 
      Cuerpo de la previsualización (donde se muestra el Markdown renderizado)
    */
    .preview-body {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      background-color: var(--preview-bg);
    }
    
    /* 
      Estilos para la tabla de contenidos (TOC) en la previsualización
    */
    .preview-toc {
      width: var(--toc-width);
      padding: 15px;
      border-right: var(--toc-border);
      background-color: var(--toc-bg);
      overflow-y: auto;
      display: none;
    }
    
    /* 
      Mostrar TOC solo en pantallas grandes
    */
    @media (min-width: 1024px) {
      .preview-toc {
        display: block;
      }
    }
    
    .preview-toc-header {
      font-weight: bold;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border-color);
    }
    
    .preview-toc ul {
      list-style: none;
      padding-left: 10px;
    }
    
    .preview-toc li {
      margin: 5px 0;
    }
    
    .preview-toc a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
    }
    
    .preview-toc a:hover {
      text-decoration: underline;
    }
    
    /* 
      Estilos para el contenido Markdown renderizado
    */
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 20px;
      background-color: var(--preview-bg);
    }
    
    /* 
      Fondo oscuro semitransparente detrás de la ventana modal
    */
    .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
    
    /* 
      Grupo de botones (Previsualizar y Descargar)
    */
    .button-group {
      display: flex;
      margin-top: 10px;
    }
    
    /* 
      Estilos para el campo de entrada de URL base
    */
    .url-input {
      width: 100%;
      padding: 8px;
      margin-top: 10px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--background-color);
      color: var(--text-color);
    }
    
    .url-input-label {
      display: block;
      margin-top: 15px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <h1>Conversor HTML a Markdown</h1>
  
  <div class="instructions">
    <h2>¿Cómo usar esta herramienta?</h2>
    <ol>
      <li>Abre las herramientas de desarrollador de tu navegador (F12 o clic derecho → Inspeccionar)</li>
      <li>Selecciona el elemento que quieres convertir usando el selector (icono de flecha en la esquina superior izquierda de las herramientas de desarrollador)</li>
      <li>Una vez seleccionado el elemento, haz clic derecho sobre él en el inspector</li>
      <li>Selecciona "Copiar" → "Copiar elemento" o "Copy" → "Copy element"</li>
      <li>Pega el HTML copiado en el área de la izquierda</li>
      <li>Si el HTML tiene enlaces relativos, introduce la URL base para corregirlos (opcional)</li>
      <li>Haz clic en "Convertir a Markdown"</li>
      <li>Usa los botones "Previsualizar" o "Descargar Markdown" según necesites</li>
    </ol>
    <p><strong>Nota:</strong> Esta herramienta funciona completamente en tu navegador. Tu HTML no se envía a ningún servidor.</p>
  </div>
  
  <div class="container">
    <div class="panel">
      <h2>HTML de entrada</h2>
      <!-- Área para pegar el HTML que se desea convertir -->
      <textarea id="html-input" placeholder="Pega tu HTML aquí..."></textarea>
      <!-- Botón para iniciar la conversión -->
      <button id="convert-btn" class="button">Convertir a Markdown</button>
      
      <!-- Campo opcional para URL base (para enlaces relativos) -->
      <label class="url-input-label" for="base-url">URL base (para enlaces relativos):</label>
      <input type="text" id="base-url" class="url-input" placeholder="https://ejemplo.com/ruta/">
    </div>
    
    <div class="panel">
      <h2>Resultado Markdown</h2>
      <!-- Área donde se mostrará el resultado de la conversión -->
      <div id="markdown-output" class="output">El resultado aparecerá aquí...</div>
      <div class="button-group">
        <!-- Botones para previsualizar y descargar el resultado -->
        <button id="preview-btn" class="button" disabled>Previsualizar</button>
        <button id="download-btn" class="button" disabled>Descargar Markdown</button>
      </div>
    </div>
  </div>

  <!-- 
    Ventana de previsualización:
    Se muestra como modal cuando se hace clic en el botón "Previsualizar"
  -->
  <div class="overlay" id="preview-overlay"></div>
  <div class="preview-modal" id="preview-modal">
    <div class="preview-header">
      <h3 class="preview-title">Previsualización de Markdown</h3>
      <button class="preview-close" id="preview-close">&times;</button>
    </div>
    <div class="preview-content">
      <!-- Tabla de contenidos (TOC) en la barra lateral -->
      <div class="preview-toc" id="preview-toc">
        <div class="preview-toc-header">ÍNDICE</div>
        <div id="toc-content"></div>
      </div>
      <!-- Área donde se renderiza el Markdown convertido -->
      <div class="preview-body">
        <div class="markdown-body" id="preview-rendered"></div>
      </div>
    </div>
  </div>

  <!-- 
    Librería Turndown: convierte HTML a Markdown
  -->
  <script src="https://cdn.jsdelivr.net/npm/turndown@7.1.1/dist/turndown.js"></script>
  <script>
    // Variable global para almacenar el último Markdown generado
    let lastGeneratedMarkdown = '';
    
    // Esperar a que el DOM esté completamente cargado antes de ejecutar el código
    document.addEventListener('DOMContentLoaded', function() {
      // Obtener referencias a todos los elementos HTML que necesitamos manipular
      const htmlInput = document.getElementById('html-input');
      const convertBtn = document.getElementById('convert-btn');
      const markdownOutput = document.getElementById('markdown-output');
      const downloadBtn = document.getElementById('download-btn');
      const previewBtn = document.getElementById('preview-btn');
      const previewModal = document.getElementById('preview-modal');
      const previewOverlay = document.getElementById('preview-overlay');
      const previewClose = document.getElementById('preview-close');
      const previewRendered = document.getElementById('preview-rendered');
      const tocContent = document.getElementById('toc-content');
      const baseUrlInput = document.getElementById('base-url');
      
      // Configurar el servicio Turndown con reglas personalizadas
      function configureTurndown() {
        // Crear una nueva instancia de Turndown con opciones específicas
        const turndownService = new TurndownService({
          headingStyle: 'atx',      // Estilo de encabezados: #, ##, ###
          codeBlockStyle: 'fenced', // Estilo de bloques de código: ``` ```
          fence: '```'             // Caracteres para delimitar bloques de código
        });
        
        // Regla personalizada para bloques de código (pre > code)
        turndownService.addRule('codeBlocks', {
          filter: function(node) {
            return node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE';
          },
          replacement: function(content, node) {
            let language = '';
            // Extraer el lenguaje de la clase (si existe)
            if (node.firstChild.className) {
              const match = node.firstChild.className.match(/language-(\w+)/);
              if (match) language = match[1];
            }
            return '\n\n```' + language + '\n' + node.firstChild.textContent + '\n```\n\n';
          }
        });
        
        // Regla personalizada para código en línea (code que no está dentro de pre)
        turndownService.addRule('inlineCode', {
          filter: function(node) {
            return node.nodeName === 'CODE' && 
                   (!node.parentNode || node.parentNode.nodeName !== 'PRE');
          },
          replacement: function(content) {
            return '`' + content + '`';
          }
        });
        
        // Regla personalizada para imágenes
        turndownService.addRule('images', {
          filter: 'img',
          replacement: function(content, node) {
            const alt = node.alt || '';
            const src = node.src || '';
            return '![' + alt + '](' + src + ')';
          }
        });
        
        // Regla personalizada para tablas
        turndownService.addRule('tables', {
          filter: 'table',
          replacement: function(content, node) {
            const rows = node.querySelectorAll('tr');
            let markdown = '';
            
            // Procesar encabezados de tabla
            const headerCells = rows[0].querySelectorAll('th, td');
            let headerRow = '|';
            let separatorRow = '|';
            
            for (let i = 0; i < headerCells.length; i++) {
              const cellContent = turndownService.turndown(headerCells[i].innerHTML).trim();
              headerRow += ' ' + cellContent + ' |';
              separatorRow += ' --- |';
            }
            
            markdown += headerRow + '\n' + separatorRow + '\n';
            
            // Procesar filas de datos
            for (let i = 1; i < rows.length; i++) {
              const cells = rows[i].querySelectorAll('td');
              let row = '|';
              
              for (let j = 0; j < cells.length; j++) {
                const cellContent = turndownService.turndown(cells[j].innerHTML).trim();
                row += ' ' + cellContent + ' |';
              }
              
              markdown += row + '\n';
            }
            
            return '\n\n' + markdown + '\n';
          }
        });
        
        // Regla personalizada para fórmulas matemáticas (MathJax)
        turndownService.addRule('mathFormulas', {
          filter: function(node) {
            return (node.classList && (
              node.classList.contains('MathJax') || 
              node.classList.contains('math') ||
              node.tagName === 'MJX-CONTAINER'
            ));
          },
          replacement: function(content, node) {
            // Mantener el HTML original para fórmulas matemáticas
            return node.innerHTML;
          }
        });
        
        return turndownService;
      }
      
      // Función para descargar texto como archivo Markdown
      function downloadTextAsFile(text, filename) {
        // Crear un blob (objeto binario) con el contenido Markdown
        const blob = new Blob([text], { type: 'text/markdown' });
        // Crear una URL para el blob
        const url = URL.createObjectURL(blob);
        // Crear un elemento de enlace temporal
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        // Añadir el enlace al documento, hacer clic y luego eliminarlo
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url); // Liberar memoria
        }, 100);
      }
      
      // Función para limpiar y formatear el Markdown resultante
      function cleanMarkdown(markdown) {
        return markdown
          .replace(/\n\s*\n\s*\n/g, '\n\n')       // Eliminar líneas en blanco excesivas
          .replace(/```\s*\n\s*```/g, '')         // Eliminar bloques de código vacíos
          .replace(/^[ \t]+|[ \t]+$/gm, '')       // Eliminar espacios en blanco al inicio/final de línea
          .replace(/([^\n])\n(#+ )/g, '$1\n\n$2') // Asegurar espacio antes de encabezados
          .replace(/\|\s+\n/g, '|\n')             // Limpiar espacios en tablas
          .replace(/\|\s+$/gm, '|')               // Limpiar espacios al final de celdas
          .trim();                                // Eliminar espacios al inicio/final
      }
      
      // Función para corregir enlaces relativos (convertirlos a absolutos)
      function fixRelativeLinks(html, baseUrl) {
        if (!baseUrl) return html;
        
        // Crear un elemento temporal para manipular el HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Corregir enlaces (<a> tags)
        const links = tempDiv.querySelectorAll('a[href]');
        links.forEach(link => {
          const href = link.getAttribute('href');
          // Si es un enlace relativo (no comienza con http, // o #)
          if (href && !href.startsWith('http') && !href.startsWith('//') && !href.startsWith('#')) {
            try {
              // Crear una URL absoluta usando la URL base
              const absoluteUrl = new URL(href, baseUrl).href;
              link.setAttribute('href', absoluteUrl);
            } catch (e) {
              console.error('Error al corregir enlace:', e);
            }
          }
        });
        
        // Corregir imágenes (<img> tags)
        const images = tempDiv.querySelectorAll('img[src]');
        images.forEach(img => {
          const src = img.getAttribute('src');
          // Si es una ruta relativa (no comienza con http, // o data:)
          if (src && !src.startsWith('http') && !src.startsWith('//') && !src.startsWith('data:')) {
            try {
              // Crear una URL absoluta usando la URL base
              const absoluteUrl = new URL(src, baseUrl).href;
              img.setAttribute('src', absoluteUrl);
            } catch (e) {
              console.error('Error al corregir imagen:', e);
            }
          }
        });
        
        return tempDiv.innerHTML;
      }
      
      // Función para generar la tabla de contenidos (TOC) a partir del contenido renderizado
      function generateTOC() {
        // Seleccionar todos los encabezados en el contenido renderizado
        const headings = previewRendered.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        // Si no hay encabezados, mostrar mensaje
        if (headings.length === 0) {
          return '<p>No hay encabezados para mostrar</p>';
        }
        
        // Construir el HTML del TOC
        let tocHTML = '<ul>';
        
        headings.forEach((heading, index) => {
          // Añadir ID si el encabezado no tiene uno
          if (!heading.id) {
            heading.id = `heading-${index}`;
          }
          
          // Determinar nivel de indentación según el nivel del encabezado (h1, h2, etc.)
          const level = parseInt(heading.tagName.substring(1));
          const indent = (level - 1) * 15;
          
          // Añadir elemento al TOC
          tocHTML += `
            <li style="margin-left: ${indent}px;">
              <a href="#${heading.id}" onclick="event.preventDefault(); scrollToHeading('${heading.id}')">
                ${heading.textContent}
              </a>
            </li>
          `;
        });
        
        tocHTML += '</ul>';
        return tocHTML;
      }
      
      // Función para desplazarse a un encabezado específico en la previsualización
      function scrollToHeading(id) {
        const heading = previewRendered.querySelector('#' + id);
        if (heading) {
          // Desplazarse suavemente hasta el encabezado
          heading.scrollIntoView({ behavior: 'smooth' });
          
          // Resaltar temporalmente el encabezado
          heading.style.backgroundColor = 'rgba(255, 255, 0, 0.2)';
          setTimeout(() => {
            heading.style.backgroundColor = '';
          }, 1000);
        }
      }
      
      // Evento para el botón de conversión (HTML → Markdown)
      convertBtn.addEventListener('click', function() {
        const html = htmlInput.value.trim();
        const baseUrl = baseUrlInput.value.trim();
        
        // Validar que se haya introducido HTML
        if (!html) {
          alert('Por favor, introduce algún HTML para convertir.');
          return;
        }
        
        try {
          // Corregir enlaces relativos si se proporciona una URL base
          const correctedHtml = baseUrl ? fixRelativeLinks(html, baseUrl) : html;
          
          // Configurar y usar el servicio Turndown
          const turndownService = configureTurndown();
          const markdown = turndownService.turndown(correctedHtml);
          
          // Limpiar y formatear el Markdown resultante
          const cleanedMarkdown = cleanMarkdown(markdown);
          
          // Mostrar el resultado
          markdownOutput.textContent = cleanedMarkdown;
          
          // Habilitar botones de previsualización y descarga
          downloadBtn.disabled = false;
          previewBtn.disabled = false;
          
          // Guardar el markdown para reutilización
          lastGeneratedMarkdown = cleanedMarkdown;
        } catch (error) {
          console.error('Error al convertir:', error);
          markdownOutput.textContent = 'Error al convertir el HTML. Por favor, verifica que es HTML válido.';
          downloadBtn.disabled = true;
          previewBtn.disabled = true;
        }
      });
      
      // Evento para el botón de descarga
      downloadBtn.addEventListener('click', function() {
        if (lastGeneratedMarkdown) {
          downloadTextAsFile(lastGeneratedMarkdown, 'converted.md');
        }
      });
      
      // Evento para el botón de previsualización
      previewBtn.addEventListener('click', function() {
        if (!lastGeneratedMarkdown) return;
        
        // Convertir Markdown a HTML usando la librería marked
        const rawHtml = marked.parse(lastGeneratedMarkdown);
        
        // Sanitizar el HTML para prevenir ataques XSS
        const cleanHtml = DOMPurify.sanitize(rawHtml);
        
        // Mostrar el HTML en la previsualización
        previewRendered.innerHTML = cleanHtml;
        
        // Generar y mostrar la tabla de contenidos
        tocContent.innerHTML = generateTOC();
        
        // Mostrar la ventana de previsualización
        previewModal.style.display = 'flex';
        previewOverlay.style.display = 'block';
        
        // Desplazarse al principio del contenido
        previewRendered.scrollTop = 0;
      });
      
      // Evento para cerrar la previsualización (botón X)
      previewClose.addEventListener('click', function() {
        previewModal.style.display = 'none';
        previewOverlay.style.display = 'none';
      });
      
      // Cerrar previsualización al hacer clic fuera de ella
      previewOverlay.addEventListener('click', function() {
        previewModal.style.display = 'none';
        previewOverlay.style.display = 'none';
      });
      
      // Hacer la función scrollToHeading accesible globalmente
      // (necesaria para que funcione al hacer clic en los enlaces del TOC)
      window.scrollToHeading = scrollToHeading;
      
      // HTML de ejemplo para probar la herramienta
      htmlInput.value = `<!-- Puedes pegar tu HTML aquí para probar -->
<h1>Título de ejemplo</h1>
<p>Este es un párrafo con <strong>texto en negrita</strong> y <em>texto en cursiva</em>.</p>
<ul>
  <li>Elemento de lista 1</li>
  <li>Elemento de lista 2</li>
</ul>
<pre><code class="language-javascript">// Código de ejemplo
function hello() {
  console.log("Hola mundo");
}</code></pre>
<h2>Subtítulo</h2>
<p>Más contenido de ejemplo con un <a href="/ruta/relativa">enlace relativo</a>.</p>
<h3>Sub-subtítulo</h3>
<p>Texto adicional para demostrar la tabla de contenidos.</p>`;
    });
  </script>
</body>
</html>
```

