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
`![Texto alternativo](https://via.placeholder.com/150)`  
- Ejemplo de imagen: ![Imagen](https://via.placeholder.com/150)

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

Si necesitas convertir contenido HTML a Markdown, tienes disponible una herramienta especial:  <a title="Conversor de HTML a Markdown" href="/conversor.html/" target="_blank" rel="noopener noreferrer">conversor.html</a>.    

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

