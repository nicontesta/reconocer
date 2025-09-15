---
layout: default
title: Trucos y Soluciones
permalink: /troubleshooting/
---


## Problemas y Consideraciones con Markdown, LaTeX, MathML y Plataformas Web

---

### 1. Markdown (.md)

#### Uso:

* Formato ligero para escribir texto con formato.
* Soporta texto, listas, imágenes, enlaces, y en muchos casos, LaTeX para fórmulas.

#### Problemas comunes:

* **Compatibilidad LaTeX:** No todos los renderizadores Markdown procesan LaTeX nativamente.
* **Fórmulas complejas:** Fórmulas muy largas o con macros específicos pueden no renderizar bien.
* **MathML:** Markdown no soporta MathML directamente, es necesario insertar HTML o usar un renderizador externo.
* **Conversión a otros formatos:** Algunas conversiones pierden formato o no procesan bien las fórmulas (especialmente a EPUB o PDF).

---

### 2. LaTeX en Markdown

#### Uso:

* Escribir fórmulas matemáticas inline (`$ ... $`) o display (`$$ ... $$`).

#### Problemas comunes:

* **Renderizado variable:** Depende del motor (GitHub usa MathJax parcialmente, Pandoc usa otros).
* **MathJax:** Pesado, puede ralentizar la carga; a veces no renderiza todo o produce resultados con lupa.
* **Pandoc:** Convierte bien LaTeX a otros formatos pero puede necesitar opciones específicas (`--mathml`, `--webtex`).
* **WebTeX:** Servicio externo para renderizar fórmulas como imágenes, depende de conexión y puede afectar tiempo de carga.

---

### 3. MathML

#### Uso:

* Formato XML para expresar matemáticas, nativo en navegadores modernos.
* Mejor soporte en HTML para mostrar fórmulas sin JavaScript adicional.

#### Problemas comunes:

* **Compatibilidad navegador:** Aunque mejor que antes, algunos navegadores tienen soporte parcial o distinto.
* **Edición:** Difícil de escribir y mantener a mano.
* **Conversión:** No todos los convertidores Markdown-LaTeX a HTML generan MathML automáticamente.
* **Visualización en GitHub:** GitHub Pages soporta MathML, pero si usas Markdown puro no se genera automáticamente.

---

### 4. HTML con MathML y YAML Front Matter (para GitHub Pages)

#### Uso:

* GitHub Pages (Jekyll) procesa HTML y Markdown con YAML front matter para blogs y sitios estáticos.
* MathML permite mostrar fórmulas sin depender de JS.

#### Problemas comunes:

* **Conversión desde Markdown:** Necesitas convertir fórmulas LaTeX a MathML antes de subir o usar filtros personalizados.
* **MathJax vs MathML:** Usar MathJax puede ser más compatible pero más pesado; MathML es más limpio pero requiere buena conversión.
* **Estructura:** Debes mantener front matter en YAML para que Jekyll reconozca el archivo.
* **CSS y estilos:** MathML puede necesitar estilos CSS para verse bien en todos los navegadores.

---

### 5. Plataformas específicas

#### GitHub Pages

* Soporta Markdown y HTML con front matter.
* Usa Jekyll para generar el sitio.
* No convierte LaTeX a MathML automáticamente; debes hacerlo antes.
* MathJax se puede usar pero añade carga y puede no renderizar todo bien.

#### Bearblog

* Soporta Markdown simple.
* No soporta MathML en versión gratuita.
* Dominios personalizados solo en versión Pro.
* Exportación en CSV puede complicar la migración.

#### Netlify

* Hosting estático para sitios generados con Jekyll, Hugo, etc.
* Puedes conectar repos privados.
* Permite dominio personalizado y HTTPS gratis.
* No procesa LaTeX; debes generar HTML con MathML antes de subir.

---

### Recomendaciones generales

* **Para EPUB:** Usa Markdown con LaTeX y convierte con Pandoc usando `--webtex` o `--mathml` para fórmulas.
* **Para GitHub Pages:** Convierte Markdown a HTML con fórmulas en MathML y usa front matter YAML.
* **Para anonimato:** Considera que dominio personalizado puede revelar información WHOIS.
* **Para fórmulas con caracteres especiales:** Usa entidades HTML (`&oacute;`) o ajusta estilos para evitar problemas de tamaño.
* **Evita depender demasiado de MathJax:** Puede ser pesado y no siempre 100% fiable.
* **Automatiza tu pipeline:** Scripts para convertir Markdown a HTML con MathML facilitan mantener el sitio actualizado.

---

## Ejemplos

### 📄 1. Ejemplos de Markdown con LaTeX

#### 📌 Inline (en línea)
```
La función cuadrática es \$f(x) = ax^2 + bx + c\$.

```
$f(x) = ax^2 + bx + c$


#### 📌 Display (en bloque)


```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

> ✅ Recomendado para usar con Pandoc, Bearblog, o cuando quieras convertir a EPUB.
---

### 📘 2. Ejemplo: Markdown a EPUB con Pandoc y WebTeX

#### 📝 Archivo `libro.md`:

```
---
title: "Ejemplo de Libro"
author: "Anónimo"
lang: es
---

Este es un ejemplo de fórmula en línea: $E = mc^2$.

Y esta es en bloque:

$$
\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```
#### 🛠️ Comando:

pandoc libro.md -o libro.epub --webtex

> 🧠 WebTeX genera las fórmulas como imágenes remotas. No necesitas MathML ni MathJax.

---

### 🌐 3. Ejemplo: HTML con MathML + YAML para GitHub Pages

#### 📝 Archivo `post.html` (usado como `.md` en Jekyll):
```
---
layout: post
title: "Ejemplo con MathML"
---

<p>Aquí tienes una fórmula en MathML:</p>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup>
    <mo>+</mo>
    <mn>1</mn>
    <mo>=</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> ✅ Totalmente compatible con GitHub Pages sin MathJax.
---

### 🧪 4. Ejemplo: Conversión `.md` → `.html` con MathML usando Pandoc

#### 📝 Archivo `math.md`:
```

---

### title: "Conversión con MathML"
---

La famosa identidad:

$$
e^{i\pi} + 1 = 0
$$
```
#### 🛠️ Comando PowerShell (Windows):

pandoc math.md -o math.html --mathml --standalone

> 📄 El archivo generado tendrá MathML integrado, ideal para usar directamente en Jekyll o Netlify.

---

### ❌ 5. Errores comunes al renderizar

| Situación                    | Problema                                       | Solución                                        |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| `ó` en fórmula               | Se ve gigante                                  | Usa `&oacute;` o `<mtext mathvariant="normal">` |
| MathJax no renderiza bien    | Fórmula muy compleja o mal cerrada             | Usa MathML o prueba `--webtex`                  |
| MathML no se ve en navegador | Navegador no compatible o etiqueta mal formada | Usa Firefox o revisa el HTML generado           |
| GitHub no muestra fórmulas   | Usa `.md` con MathJax o `.html` con MathML     | Convierte antes con Pandoc                      |

---

### ⚙️ Automatización: Scripts para convertir `.md` con fórmulas LaTeX

---

### ⚙️ 1. Script PowerShell para Windows

#### Archivo: `Convert-MdToHtml.ps1`

```html
param (
\[string]\$InputFile = "entrada.md",
\[string]\$OutputFile = "salida.html"
)

## Verifica que Pandoc esté instalado

if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
Write-Error "Pandoc no está instalado o no está en el PATH."
exit 1
}

## Ejecuta pandoc con MathML y standalone

pandoc \$InputFile -o \$OutputFile --mathml --standalone

Write-Output "✅ Conversión completada: \$OutputFile"
```

#### Cómo usar en PowerShell:

```
.\Convert-MdToHtml.ps1 -InputFile "post.md" -OutputFile "post.html"
```

---

### ⚙️ 2. Script Bash para Linux/macOS

#### Archivo: `convert_md_to_html.sh`

```
\#!/bin/bash

INPUT=\${1:-entrada.md}
OUTPUT=\${2:-salida.html}

## Verificar si pandoc está instalado

if ! command -v pandoc &> /dev/null
then
echo "❌ Pandoc no está instalado. Instálalo primero."
exit 1
fi

## Ejecutar conversión

pandoc "\$INPUT" -o "\$OUTPUT" --mathml --standalone

echo "✅ Conversión completada: \$OUTPUT"
```

#### Cómo usar en terminal:

```
chmod +x convert\_md\_to\_html.sh
./convert\_md\_to\_html.sh post.md post.html
```

---

### 🧩 Opcional: Convertir todos los `.md` de una carpeta (Bash)

```
for file in \*.md; do
name="\${file%.md}"
pandoc "\$file" -o "\${name}.html" --mathml --standalone
echo "✅ \$file → \${name}.html"
done
```

---

### 📝 Notas:

* `--standalone` genera HTML completo (ideal para publicar directamente).
* `--mathml` convierte fórmulas LaTeX a MathML, útil para evitar usar MathJax.
* Puedes adaptar estos scripts para generar EPUB, PDF, etc., cambiando la extensión y los flags.

---

### 🎨 Ajustes visuales y CSS para MathML en la web

#### 🧠 Contexto:

MathML se ve bien en navegadores como Firefox, pero en otros (como Chrome y Safari), **puede salir desalineado, muy grande o con fuentes distintas** al resto del texto.

Por eso conviene aplicar estilos CSS mínimos para armonizar la presentación de las fórmulas con el resto del contenido.

---

### ✅ CSS base recomendado para MathML

Este CSS mejora la alineación, el tamaño, y la tipografía de las fórmulas MathML sin alterar su estructura semántica.

```css

<style>
/* General MathML */
math {
  font-size: 1em;
  line-height: 1.4;
  font-family: Cambria Math, Latin Modern Math, serif;
  display: inline-block;
  vertical-align: middle;
}

/* Bloques de ecuaciones */
math[display="block"] {
  display: block;
  margin: 1em auto;
  text-align: center;
}

/* Asegura que <mtext> no herede estilos raros */
math mtext {
  font-style: normal;
  font-size: 1em;
}

/* Ajusta alineación vertical de elementos */
math mi,
math mo,
math mn,
math msup,
math msub,
math mfrac {
  vertical-align: middle;
}
</style>

```

---

### 📌 Ejemplo de uso en un HTML con fórmula

```
---
layout: post
title: "Ejemplo con MathML y CSS"
---

<style>
/* Pega aquí el bloque CSS anterior */
</style>

<p>La siguiente identidad es famosa:</p>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup>
    <mo>+</mo>
    <mn>1</mn>
    <mo>=</mo>
    <mn>0</mn>
  </mrow>
</math>
```

---

### 🔍 Sugerencias adicionales

* Usa fuentes matemáticas como `Cambria Math`, `Latin Modern Math`, o `STIX Math` si las tienes disponibles.
* Puedes importar desde Google Fonts alguna tipografía que combine bien con el cuerpo del documento.
* Evita usar `zoom` o escalado en el navegador para no desajustar el MathML.
* Firefox ofrece mejor soporte nativo para MathML. Si ves que algo falla en otros navegadores, prueba primero ahí.

---

### ❌ Problemas comunes resueltos con este CSS

| Problema                                  | Solución con CSS                                 |
| ----------------------------------------- | ------------------------------------------------ |
| Fórmulas salen gigantes                   | `font-size: 1em;` y `vertical-align: middle`     |
| Letras deformes o cursivas donde no deben | `mtext { font-style: normal; }`                  |
| MathML mal alineado con el texto          | `display: inline-block; vertical-align: middle;` |
| Display math centrado mal en móviles      | `math[display="block"] { margin: auto; }`        |


---

## 🌐 Despliegue de sitios en GitHub Pages y Netlify


### 📁 Estructura mínima del proyecto (funciona en ambos)

```
mi-sitio/
├── \_config.yml         ← Solo necesario si usas Jekyll
├── index.html          ← Página principal (con YAML front matter si usas Jekyll)
├── about.html          ← Otra página HTML
├── assets/             ← CSS, JS, imágenes
│   ├── style.css
│   └── logo.png
└── posts/
├── post1.html
└── post2.html
```

---

### 🚀 Despliegue en GitHub Pages

#### 1. Sube tu proyecto a un repositorio

```
git init
git remote add origin [https://github.com/usuario/mi-sitio.git](https://github.com/usuario/mi-sitio.git)
git add .
git commit -m "Sitio inicial"
git push -u origin main
```

#### 2. Activa GitHub Pages:

* Ve a **Settings > Pages**
* En **Source**, selecciona `main` y la carpeta `/root` o `/docs`
* Espera unos segundos: tu sitio estará en
  `https://usuario.github.io/mi-sitio/`

#### 3. Uso de dominio personalizado:

Crea un archivo `CNAME` en la raíz con el dominio deseado:

```
misitio.com
```

Y en tu proveedor de dominio (Cloudflare, etc.):

* Añade un registro tipo A o CNAME apuntando a:

  * `CNAME`: `usuario.github.io`
  * (O A: `185.199.108.153` y otros IPs de GitHub Pages)

---

### 🚀 Despliegue en Netlify

#### 1. Subida desde interfaz web

* Entra a [https://app.netlify.com](https://app.netlify.com)
* "Add new site" → "Import from Git"
* Conecta tu repositorio (puede ser privado)
* Netlify detectará automáticamente si usas Jekyll, Hugo o HTML puro

#### 2. Subida desde ZIP (alternativa)

* Comprime tu carpeta (`mi-sitio.zip`)
* Sube el ZIP manualmente a Netlify

#### 3. Configura el dominio personalizado

* En "Site settings > Domain management"
* Añade tu dominio: `misitio.com`
* Cambia los DNS en Cloudflare:

  * Tipo: `CNAME`
    Nombre: `@`
    Valor: `nombre-del-sitio.netlify.app`

#### 4. Certificado SSL automático

* Netlify genera certificados HTTPS gratuitos automáticamente.
* Puedes forzar HTTPS desde las opciones del dominio.

---

### 🔄 Recomendación: estructura + conversión automática

Usa este flujo:

1. Escribes en `.md` con fórmulas LaTeX.
2. Usas un script para convertir a `.html` con MathML (como en apartados anteriores).
3. Insertas los HTML generados en tu estructura del sitio.
4. Haces push a GitHub o subes a Netlify.

---

### 💡 Notas importantes

* GitHub Pages **requiere** que los archivos tengan YAML front matter si usas Jekyll (`---` arriba).
* En Netlify puedes usar HTML puro sin YAML.
* Si tu sitio es estático, **no necesitas Jekyll ni generador**: solo HTML plano con CSS.
* Si usas MathML, puedes prescindir de MathJax (más rápido y menos dependencias).

---

### 🧪 Verificación final

* ✅ ¿El dominio carga correctamente?
* ✅ ¿Las fórmulas MathML se ven bien en Firefox y al menos legibles en Chrome?
* ✅ ¿Hay estilos aplicados a MathML?
* ✅ ¿El sitio tiene navegación básica?
* ✅ ¿HTTPS activo?

---


## 🐻 Exportar desde Bearblog → HTML / Markdown / EPUB

---

### 🧳 1. Exportación desde Bearblog

Desde tu panel en Bearblog:

1. Ve a **Settings** > **Export site**
2. Descarga el archivo `.csv` que contiene todos tus posts

Este archivo tiene las columnas: `title`, `slug`, `body`, `created_at`, etc.

---

### 🧼 2. Convertir CSV → Markdown individual por post

#### Script Bash (Linux/macOS)

```
\#!/bin/bash

## Requiere: csvkit instalado → pip install csvkit

mkdir -p posts

csvcut -c title,slug,body export.csv | tail -n +2 | while IFS=',' read -r title slug body; do
filename="posts/\${slug}.md"
echo "---" > "\$filename"
echo "title: "\$title"" >> "\$filename"
echo "layout: post" >> "\$filename"
echo "---" >> "\$filename"
echo "" >> "\$filename"
echo "\$body" | sed 's/<br>/\n/g' >> "\$filename"
done
```

> 🪟 En Windows puedes usar PowerShell con `Import-Csv`, pero también puedes abrir el CSV con Excel o LibreOffice y copiar/pegar a `.md`.

---

### 🔁 3. (Opcional) Convertir los `.md` a `.html` con MathML (para usar en Netlify / GitHub)

Usa el script de Pandoc del apartado anterior:

```
pandoc post.md -o post.html --mathml --standalone
```

O en lote:

```
for f in posts/\*.md; do
n=\$(basename "\$f" .md)
pandoc "\$f" -o "posts/\${n}.html" --mathml --standalone
done
```

---

### 📚 4. (Opcional) Generar un EPUB desde los posts

Crea un índice (si no tienes uno):

**`index.md`**

```

---
title: "Blog exportado desde Bearblog"
author: "Anónimo"
lang: es
---

## Índice

* [Post 1](posts/post1.html)
* [Post 2](posts/post2.html)
  ```

Generar EPUB:

```
pandoc index.md posts/\*.md -o blog.epub --webtex
```

---

### 🧱 5. Estructura resultante

Tu proyecto tendrá esta forma tras la conversión:

```
mi-sitio/
├── index.html
├── posts/
│   ├── post1.html
│   ├── post2.html
│   └── ...
├── assets/
│   └── style.css
└── CNAME   ← si usas dominio personalizado
```

---

### ✅ Resultado

* Sitio listo para subir a **GitHub Pages o Netlify**
* Fórmulas convertidas (si estaban en LaTeX, se convierten con Pandoc a MathML o WebTeX)
* Puedes seguir editando en Markdown si prefieres

---

### ⚠️ Notas

* Bearblog no exporta fórmulas en formato LaTeX: tendrás que **reinsertarlas manualmente** si las escribiste como MathML o `$...$`.
* Pandoc puede ayudarte a migrar todo al formato que mejor te funcione: HTML estático para web, EPUB para distribución offline, etc.

---


## 🧭 Navegación básica para sitio web estático

---

### 🧱 1. Estructura del sitio

```
mi-sitio/
├── index.html
├── about.html
├── posts/
│   ├── post1.html
│   ├── post2.html
├── assets/
│   └── style.css
└── CNAME (opcional)
```

---

### 🔗 2. Menú de navegación común

Puedes incluir este bloque HTML al principio de cada página o insertarlo dinámicamente si usas Jekyll.

#### Código base:

```

<nav>
  <ul class="nav">
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="/about.html">Acerca de</a></li>
    <li><a href="/posts/post1.html">Post 1</a></li>
    <li><a href="/posts/post2.html">Post 2</a></li>
  </ul>
</nav>
```

---

### 🎨 3. CSS para navegación simple

#### Archivo: `assets/style.css` (o dentro de `<style>`)

```
nav {
background-color: #f7f7f7;
padding: 1em;
margin-bottom: 2em;
border-bottom: 1px solid #ddd;
}

.nav {
list-style: none;
display: flex;
gap: 1em;
padding: 0;
margin: 0;
}

.nav li {
display: inline;
}

.nav a {
text-decoration: none;
color: #333;
font-weight: bold;
}

.nav a\:hover {
text-decoration: underline;
}
```

---

### 🛠 4. Incluir automáticamente (si usas Jekyll)

Si usas Jekyll, puedes tener un archivo `include/nav.html` y luego:

#### `_includes/nav.html`

```

<nav>
  <ul class="nav">
    <li><a href="{{ '/' | relative_url }}">Inicio</a></li>
    <li><a href="{{ '/about.html' | relative_url }}">Acerca de</a></li>
    <li><a href="{{ '/posts/post1.html' | relative_url }}">Post 1</a></li>
  </ul>
</nav>
```

Y en cada `.html` o `.md` con layout:

```
{% include nav.html %}
```

---

### 🔁 5. Navegación manual (si trabajas solo con HTML)

Pega el bloque `<nav>` directamente en cada archivo HTML generado por Pandoc. Para facilitarlo puedes hacer un pequeño script de reemplazo o plantilla base.

---

### 💡 Sugerencias

* Mantén el menú lo más simple posible si no usas JavaScript.
* Puedes usar `position: fixed` en CSS si quieres que el menú quede anclado arriba.
* Asegúrate de usar rutas relativas si tu sitio se desplegará en subdominios o carpetas.

---


## 📄 Usar plantillas en Pandoc para menú común en HTML

---

### 1. Crear plantilla base con menú

Crea un archivo `template.html` con contenido similar a este:

```

<!DOCTYPE html>

<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>$title$</title>
  <link rel="stylesheet" href="assets/style.css" />
</head>
<body>

<nav>
  <ul class="nav">
    <li><a href="index.html">Inicio</a></li>
    <li><a href="about.html">Acerca de</a></li>
    <li><a href="posts/post1.html">Post 1</a></li>
  </ul>
</nav>

<main>
  $body$
</main>

</body>
</html>
```

---

### 2. Convertir MD a HTML usando la plantilla

Ejecuta pandoc con el parámetro `--template=template.html`:

```
pandoc post.md -o post.html --mathml --template=template.html
```

Esto insertará el contenido del Markdown dentro del `<main>` y mantendrá el menú.

---

### 3. En lote para varios posts

Si tienes varios MD en `posts/`:

```
for f in posts/\*.md; do
n=\$(basename "\$f" .md)
pandoc "\$f" -o "posts/\${n}.html" --mathml --template=template.html
done
```

---

### 4. Ventajas

* No necesitas copiar/pegar el menú en cada archivo.
* Cambios en menú solo en plantilla, afectan todos los HTML.
* Control total del layout.

---


## 🖼️ Optimización de imágenes para sitio web estático

---

### 1. Por qué optimizar imágenes

* Reduce tiempo de carga
* Ahorra ancho de banda
* Mejora experiencia usuario y SEO

---

### 2. Formatos recomendados

* **WebP**: Mejor compresión sin perder calidad visual (compatible con casi todos los navegadores modernos)
* **JPEG**: Fotos con buena calidad y peso reducido
* **PNG**: Para imágenes con transparencias o gráficos planos

---

### 3. Herramientas para optimizar imágenes

* **Squoosh.app** (web, gratis)
* **ImageMagick** (CLI, multiplataforma)
* **pngquant** (optimiza PNGs)
* **jpegoptim** (optimiza JPEGs)
* **cwebp** (convierte a WebP)

---

### 4. Comprimir y redimensionar con ImageMagick

Para reducir tamaño y calidad:

```
convert imagen-original.jpg -resize 800x600 -strip -quality 85 imagen-optimizada.jpg
```

Para convertir JPG a WebP:

```
cwebp imagen-original.jpg -q 80 -o imagen.webp
```

---

### 5. Uso en tu proyecto

* Guarda imágenes optimizadas en `assets/img/`
* Usa rutas relativas en HTML: `<img src="assets/img/imagen.webp" alt="Descripción">`
* Considera usar atributos `width` y `height` para evitar saltos de contenido

---

### 6. Automatización con scripts (opcional)

Ejemplo para optimizar todas las JPG a WebP:

```
mkdir -p assets/img/webp
for img in assets/img/\*.jpg; do
name=\$(basename "\$img" .jpg)
cwebp "\$img" -q 80 -o "assets/img/webp/\${name}.webp"
done
```

---


## 📈 Uso de variables y metadatos YAML para SEO en Markdown/HTML

---

### 1. ¿Qué es YAML Front Matter?

Es una sección al inicio de tus archivos `.md` que contiene metadatos estructurados.

Ejemplo:

```

---
title: "Título del post"
description: "Breve descripción para SEO"
author: "Tu Nombre"
date: 2025-09-13
keywords: \[blog, markdown, SEO]
---

Contenido del post aquí...
```

---

### 2. ¿Para qué sirve?

* Define título y descripción que aparecen en buscadores
* Controla palabras clave (keywords)
* Permite personalizar etiquetas `<meta>` en HTML
* Jekyll, Hugo, Pandoc y otros generadores usan estos datos para crear páginas SEO-friendly

---

### 3. Cómo usarlo con Pandoc y plantillas

En tu plantilla HTML, usa variables como `$title$`, `$description$`, etc.

Ejemplo parcial de plantilla:

```

<head>
  <title>$title$</title>
  <meta name="description" content="$description$" />
  <meta name="author" content="$author$" />
  <meta name="keywords" content="$keywords$" />
</head>
```

Pandoc reemplaza esas variables con los valores del YAML.

---

### 4. Ejemplo completo de archivo Markdown


```
---
title: "Ejemplo SEO-friendly"
description: "Este post explica cómo mejorar SEO con YAML."
author: "ChatGPT"
date: 2025-09-13
keywords: \[SEO, markdown, pandoc]
---

## Bienvenido

Este es el contenido del post...
```

---

### 5. Consejos SEO básicos

* Usa títulos claros y únicos en cada archivo
* Añade descripciones concisas
* Incluye palabras clave relevantes
* Actualiza fechas para mostrar contenido fresco

---

## 🚀 Desplegar sitio web con SEO optimizado en Netlify y GitHub Pages

---

### 1. Preparar el repositorio

* Organiza tu sitio con estructura clara (index.html, posts/, assets/)
* Incluye tus archivos HTML generados con metadatos SEO en YAML y plantillas

---

### 2. GitHub Pages

* Publica el repositorio (preferiblemente público)
* En Settings > Pages, selecciona la rama y carpeta donde está tu `index.html`
* Añade archivo `CNAME` si usas dominio personalizado
* Verifica que tus archivos `.html` contengan las etiquetas `<title>`, `<meta description>`, etc. generadas con Pandoc

---

### 3. Netlify

* Regístrate y conecta tu repositorio de GitHub
* Configura build command (si usas un generador, e.g., `jekyll build` o `pandoc ...`, sino sin build)
* Define la carpeta de publicación (`publish directory`) que contenga tu sitio estático (por ejemplo `/` o `/docs`)
* Añade tu dominio personalizado en la configuración de Netlify
* Revisa que los archivos HTML incluyan las etiquetas SEO en `<head>`

---

### 4. SEO extra con Netlify

* Añade archivo `_headers` para control de caché, seguridad y SEO
* Usa reglas de redirección con `_redirects` si tienes URLs limpias

Ejemplo `_headers`:

```
/\*
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Cache-Control: public, max-age=31536000
```

---

### 5. Verifica SEO

* Usa herramientas online como [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
* Revisa el código fuente para ver etiquetas `<title>`, `<meta name="description">`, etc.
* Prueba que tus URLs funcionan y están accesibles

---

## 🤖 Automatización del workflow con GitHub Actions para build y deploy

---

### 1. ¿Qué es GitHub Actions?

* Sistema de CI/CD integrado en GitHub
* Permite ejecutar scripts automáticamente al hacer push, pull requests, etc.
* Ideal para compilar tu sitio, ejecutar tests y desplegar sin salir de GitHub

---

### 2. Ejemplo básico para sitio estático con Pandoc y despliegue a GitHub Pages

Crea archivo `.github/workflows/deploy.yml`:

```
name: Build y Deploy

on:
push:
branches:
\- main  # O la rama que uses

jobs:
build-deploy:
runs-on: ubuntu-latest


steps:
  - name: Checkout repo
    uses: actions/checkout@v3

  - name: Instalar Pandoc
    run: sudo apt-get install -y pandoc

  - name: Convertir MD a HTML
    run: |
      pandoc index.md -o index.html --mathml --template=template.html
      # Añade aquí más comandos para otros archivos

  - name: Commit y push HTML generado (opcional)
    run: |
      git config user.name "github-actions[bot]"
      git config user.email "github-actions[bot]@users.noreply.github.com"
      git add *.html
      git commit -m "Update HTML generado"
      git push

  - name: Deploy a GitHub Pages
    uses: peaceiris/actions-gh-pages@v3
    with:
      github_token: ${{ secrets.GITHUB_TOKEN }}
      publish_dir: ./  # Cambia si usas carpeta específica
```
---

### 3. Ajustes y mejoras

* Puedes añadir build para CSS, JS, imágenes
* Automatizar tests de validación de HTML
* Desplegar a Netlify usando Netlify CLI y secretos en GitHub Actions

---

## 🚀 Automatizar despliegue a Netlify desde GitHub Actions

---

### 1. ¿Por qué usar GitHub Actions con Netlify?

* Puedes mantener tu repositorio privado
* Desacoplas el despliegue de la interfaz de Netlify
* Integras conversión de Markdown, optimización de imágenes, tests, etc.

---

### 2. Requisitos previos

1. Tener un sitio en Netlify ya creado
2. Tener tu repositorio conectado a Netlify (aunque no lo uses para auto-deploy)
3. Obtener el **token de acceso personal** de Netlify:

   * Ve a [https://app.netlify.com/user/applications#personal-access-tokens](https://app.netlify.com/user/applications#personal-access-tokens)
   * Crea un token y **guárdalo**
4. Añade ese token como **secreto** en tu repositorio de GitHub:

   * `Settings > Secrets and variables > Actions > New repository secret`
   * Nombre del secreto: `NETLIFY_AUTH_TOKEN`
   * Valor: el token copiado
5. Añade también el ID del sitio (`Site ID`) como secreto: `NETLIFY_SITE_ID`

   * Puedes obtenerlo desde la URL del panel de tu sitio en Netlify

---

### 3. Archivo `.github/workflows/netlify-deploy.yml`

```
name: Deploy to Netlify

on:
push:
branches:
\- main  # o tu rama principal

jobs:
build-deploy:
runs-on: ubuntu-latest


steps:
  - name: Checkout repo
    uses: actions/checkout@v3

  - name: Instalar Pandoc
    run: sudo apt-get install -y pandoc

  - name: Construir HTML desde Markdown
    run: |
      pandoc index.md -o index.html --template=template.html --mathml
      # Aquí más pandoc según tus archivos

  - name: Instalar Netlify CLI
    run: npm install -g netlify-cli

  - name: Deploy a Netlify
    env:
      NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
      NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
    run: |
      netlify deploy --dir=. --site=$NETLIFY_SITE_ID --prod
```

---

### 4. Resultado

Cada vez que haces `git push` a `main`:

* Se convierte tu Markdown a HTML
* Se despliega automáticamente a Netlify en producción

---

### 5. Extras opcionales

* Puedes usar `netlify deploy --message "Build automático"` para marcar el build
* Puedes separar despliegue a `--prod` y `--draft` si quieres preview

---

## 🛠 Uso de `_redirects` y `_headers` en Netlify

Netlify permite agregar funcionalidades sin backend mediante dos archivos especiales en la raíz del directorio que se despliega:

* `_redirects`: para redirecciones URL
* `_headers`: para configurar cabeceras HTTP (caché, seguridad, CORS, etc.)

---

### 1. Archivo `_redirects`

#### 📄 Ubicación:

Colócalo en la raíz del directorio publicado (por ejemplo: `/` o `/dist/` si usas build)

#### ✏️ Sintaxis básica:

```
/antigua-url    /nueva-url    301
/blog/\*         /posts/\:splat 302

* ```
            /index.html   200
  ```



#### 🔁 Ejemplos comunes:

* Redirigir de una URL obsoleta a una nueva:

```
/articulo-viejo   /articulo-nuevo   301
```

* Redirigir todo lo que empiece con `/blog/` a `/posts/`:

```
/blog/\*    /posts/\:splat    301
```

* SPA Fallback (Single Page App):

```
/\*    /index.html    200
```

---

### 2. Archivo `_headers`

#### 📄 Ubicación:

También va en la raíz del deploy

#### ✏️ Sintaxis:

```
/\*
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Cache-Control: public, max-age=31536000
```

#### 🔐 Seguridad:

* Evita que tu sitio se inserte como iframe
* Desactiva la detección automática de tipos MIME
* Controla cómo se comparte el header `Referer`

#### 🧠 SEO y UX:

* Con `Cache-Control` puedes mejorar la velocidad de carga en visitas repetidas
* Puedes especificar cabeceras solo para ciertos archivos o rutas:

```
/assets/\*
Cache-Control: public, max-age=31536000

/index.html
Cache-Control: no-cache
```

---

### 3. Cómo probar antes de deploy

Puedes usar el CLI de Netlify:

```
netlify dev
```

Esto ejecuta un entorno local que simula Netlify y respeta `_redirects` y `_headers`.

---

### 4. Dónde poner estos archivos

Si usas Pandoc o generas HTML manualmente:

* Asegúrate de copiar `_redirects` y `_headers` dentro del directorio final que subes o despliegas.
* Si usas GitHub Actions, puedes incluirlos en tu flujo de copia de archivos.

---

### ✅ Recomendaciones

* Usa `_headers` para controlar el cacheo de tus imágenes, scripts y estilos
* Usa `_redirects` para mantener URLs limpias aunque cambie la estructura interna
* Son compatibles también si decides usar un generador como Eleventy, Jekyll, Hugo, etc.

---

## 🌐 Favicons, Open Graph y metaetiquetas sociales

Mejorar cómo se ve tu sitio cuando alguien lo comparte en redes sociales o lo guarda como acceso directo en un navegador es parte fundamental del SEO y la experiencia de usuario.

---

### 1. 🧱 Estructura mínima para favicon y redes sociales

Agrega las siguientes etiquetas dentro del `<head>` de tu plantilla HTML o en cada archivo HTML generado:

```

<!-- Favicon básico -->

<link rel="icon" href="assets/favicon.ico" type="image/x-icon" />

<!-- Apple Touch Icon -->

<link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />

<!-- Open Graph (Facebook, LinkedIn, etc.) -->

<meta property="og:title" content="Título de tu sitio o post" />
<meta property="og:description" content="Breve descripción para redes sociales" />
<meta property="og:image" content="https://tusitio.com/assets/social-card.png" />
<meta property="og:url" content="https://tusitio.com/" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Título para Twitter" />
<meta name="twitter:description" content="Descripción para Twitter" />
<meta name="twitter:image" content="https://tusitio.com/assets/social-card.png" />
```

---

### 2. 📷 Requisitos para las imágenes

* Tamaño recomendado: **1200×630 px**
* Peso: lo más liviano posible (usa WebP o JPEG optimizado)
* Deben estar accesibles públicamente (usa URL absoluta)

---

### 3. 🎨 Crear los íconos

Puedes usar herramientas como:

* [https://realfavicongenerator.net](https://realfavicongenerator.net) → genera todos los tamaños necesarios
* [https://favicon.io](https://favicon.io) → íconos simples desde texto o emoji

Guarda los archivos en tu carpeta `assets/` y enlázalos como se mostró en el `<head>`.

---

### 4. 🧪 Probar cómo se verá

* Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
* Twitter: [Card Validator](https://cards-dev.twitter.com/validator)
* LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/)

Pega la URL y verifica si las etiquetas Open Graph y Twitter funcionan.

---

### 5. 🗂 Si usas plantilla con Pandoc

Puedes incluir esas etiquetas en tu `template.html`, utilizando variables desde YAML:

``` 
<meta property="og:title" content="$title$">  
<meta property="og:description" content="$description$">  
<meta property="og:image" content="$ogimage$">  
<meta property="og:url" content="$url$">  

```

Y luego definirlas en la cabecera de cada `.md`:

```
---
title: "Post interesante"
description: "Una explicación muy útil"
ogimage: "[https://tusitio.com/assets/social-card.png](https://tusitio.com/assets/social-card.png)"
url: "[https://tusitio.com/post1.html](https://tusitio.com/post1.html)"
---

```

## 🗺️ Sitemap y robots.txt para mejorar indexación en buscadores

---

### 1. 📁 ¿Qué es `sitemap.xml`?

Es un archivo XML que indica a los motores de búsqueda todas las páginas de tu sitio que deberían indexar. Ayuda a mejorar la visibilidad de tu contenido en Google, Bing, etc.

#### 🧱 Estructura básica de `sitemap.xml`:

```

<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tusitio.com/</loc>
    <lastmod>2025-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tusitio.com/post1.html</loc>
    <lastmod>2025-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Puedes generarlo manualmente o con herramientas si tu sitio tiene muchas páginas.

---

### 2. 🤖 ¿Qué es `robots.txt`?

Es un archivo de texto que da instrucciones a los bots de los motores de búsqueda sobre qué partes de tu sitio pueden o no rastrear.

#### 🧱 Ejemplo básico:

```
User-agent: \*
Allow: /
Sitemap: [https://tusitio.com/sitemap.xml](https://tusitio.com/sitemap.xml)
```

#### ❗ Puedes bloquear carpetas:

```
User-agent: \*
Disallow: /drafts/
Disallow: /private/
```

---

### 3. 📂 Dónde colocarlos

* Ambos archivos deben ir en la raíz del sitio generado.
* Si usas Netlify o GitHub Pages, deben estar directamente en el directorio publicado.

---

### 4. ✅ Verificar que funcionan

* Visita `https://tusitio.com/robots.txt`
* Visita `https://tusitio.com/sitemap.xml`
* Usa herramientas como Google Search Console para inspeccionar tu sitemap.

---

### 5. 🛠 Generación automática (opcional)

Si manejas muchos `.md` y generas el HTML con Pandoc o scripts, puedes automatizar la creación del `sitemap.xml` con un pequeño script (bash, Python, etc.) que recorra los archivos y construya el XML.

---

## ♿ Accesibilidad web básica (A11y) para sitios estáticos

Asegurarte de que tu sitio sea accesible significa que cualquier persona, independientemente de sus capacidades físicas, cognitivas o tecnológicas, pueda navegarlo y comprender su contenido.

---

### 1. 🏷️ Buenas prácticas de HTML semántico

* Usa etiquetas adecuadas:

  * `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`
  * No abuses de `<div>` para todo
* Usa correctamente los encabezados (`<h1>` a `<h6>`) para marcar jerarquía

#### Ejemplo:

```

<article>
  <h1>Título principal</h1>
  <section>
    <h2>Subsección</h2>
    <p>Contenido relevante...</p>
  </section>
</article>
```

---

### 2. 🖼️ Texto alternativo en imágenes

Siempre incluye `alt=""` en tus imágenes. Es esencial para lectores de pantalla y mejora el SEO.

``` 
<img src="assets/grafico.png" alt="Gráfico de crecimiento mensual" />
```

---

### 3. 🧭 Navegación accesible

* Asegúrate de que la navegación sea clara y repetible
* Usa etiquetas `<nav>` para bloques de navegación

#### Ejemplo:

```

<nav>
  <ul>
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="/acerca.html">Acerca</a></li>
    <li><a href="/contacto.html">Contacto</a></li>
  </ul>
</nav>
```

---

### 4. 🎨 Contraste de colores

* Verifica que el contraste entre texto y fondo sea suficiente
* Herramientas recomendadas:

  * [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  * [Accessible Colors](https://accessible-colors.com)

---

### 5. ⌨️ Navegación con teclado

* Todo el sitio debe poder navegarse con la tecla `Tab`
* Evita elementos que dependan exclusivamente del ratón

---

### 6. 📃 Etiquetas ARIA (avanzado)

ARIA (Accessible Rich Internet Applications) permite describir elementos personalizados o reforzar la semántica cuando el HTML no es suficiente.

Ejemplo:

```

<div role="alert" aria-live="assertive">
  ¡Error al enviar el formulario!
</div>
```

---

### 7. ✅ Cómo verificar la accesibilidad

* Usa [Lighthouse](https://developers.google.com/web/tools/lighthouse/) (integrado en Chrome DevTools)
* Usa extensiones como:

  * **axe Accessibility Checker**
  * **WAVE Evaluation Tool**

Aquí tienes el siguiente apartado sobre **minificación y compresión para mejorar el rendimiento web** (HTML, CSS, JS), todo en un solo bloque con `````.

---

## ⚡ Minificación y compresión para mejorar el rendimiento web

Reducir el tamaño de tus archivos HTML, CSS y JS es clave para que tu sitio cargue más rápido y consuma menos ancho de banda.

---

### 1. 🗜️ ¿Qué es la minificación?

Proceso que elimina caracteres innecesarios (espacios, saltos de línea, comentarios) sin afectar el funcionamiento del código.

#### 🔧 Antes (HTML):

```

<!DOCTYPE html>

<html>
  <head>
    <title>Mi sitio</title>
    <!-- Comentario -->
  </head>
  <body>
    <h1>Hola</h1>
  </body>
</html>
```

#### ✅ Después:

```

<!DOCTYPE html><html><head><title>Mi sitio</title></head><body><h1>Hola</h1></body></html>

```

---

### 2. 🧰 Herramientas para minificar

#### 🖼️ HTML

* [HTMLMinifier](https://kangax.github.io/html-minifier/)
* Plugin de Pandoc: `--template` optimizado o posprocesamiento con `html-minifier`

#### 🎨 CSS

* [CleanCSS](https://www.cleancss.com/)
* `cssnano`, `purgecss` si usas build con Node.js

#### 💻 JavaScript

* [Terser](https://terser.org/)
* También puedes usar [UglifyJS](https://github.com/mishoo/UglifyJS)

---

### 3. 📦 Compresión con Gzip o Brotli (automática en Netlify)

Netlify, Vercel, y la mayoría de CDNs aplican Gzip o Brotli automáticamente al servir los archivos.

Si haces hosting manual, asegúrate de:

* Activar compresión en tu servidor (Nginx, Apache)
* O subir archivos `.gz` y `.br` precocinados

---

### 4. 💡 En GitHub Pages

No puedes usar compresión automática, pero sí puedes minificar el HTML y CSS antes de hacer `push`.

#### 🛠️ Ejemplo usando Pandoc con minificación básica:

```
pandoc entrada.md -o salida.html --template=template.html --strip-comments --ascii
```

Y luego aplicar `html-minifier`:

```
html-minifier salida.html -o salida.min.html --collapse-whitespace --remove-comments --minify-css true --minify-js true
```

---

### 5. 📁 Automatizar con GitHub Actions

En tu workflow puedes añadir un paso para minificar el HTML antes del despliegue:

```

* name: Minificar HTML
  run: |
  npm install -g html-minifier
  html-minifier index.html -o index.html --collapse-whitespace --remove-comments

```

---

## 🔤 Fuentes locales vs. externas (Google Fonts): rendimiento y privacidad

El uso de tipografías externas puede impactar el rendimiento y la privacidad de los visitantes. Aquí te explico cómo elegir la mejor estrategia.

---

### 1. 🌐 Google Fonts (uso externo)

#### ✅ Ventajas:

* Fácil de integrar
* Gran variedad de fuentes
* Cacheadas por muchos navegadores (si ya las visitaron en otro sitio)

#### ❌ Desventajas:

* **Impacta la privacidad**: carga desde los servidores de Google → tracking posible
* **Carga más lenta en conexiones lentas**
* Puede generar advertencias en herramientas de privacidad (ej. Lighthouse)

#### 🧩 Cómo se usa:

```

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Inter', sans-serif; }
</style>
```

---

### 2. 💾 Uso de fuentes locales

Descargar la fuente y alojarla en tu servidor o en tu repo.

#### ✅ Ventajas:

* Mayor control
* Mejor privacidad
* Posible mejora en rendimiento con precarga (`preload`)

#### ❌ Desventajas:

* Archivo más pesado en tu hosting
* Tienes que convertir los formatos si quieres compatibilidad completa

---

### 3. 🔧 Cómo alojar una fuente local

#### Paso 1: Descargar desde Google Fonts

* Ve a [Google Fonts](https://fonts.google.com/)
* Elige tu fuente y descarga
* Extrae los archivos `.woff` o `.woff2`

#### Paso 2: Ubícalas en tu carpeta `assets/fonts/`

#### Paso 3: Declara la fuente en CSS

```
@font-face {
font-family: 'Inter';
src: url('assets/fonts/Inter-Regular.woff2') format('woff2');
font-weight: 400;
font-style: normal;
}

body {
font-family: 'Inter', sans-serif;
}
```

#### Paso 4: Precargar para mejor rendimiento (en `<head>`):

```

<link rel="preload" href="assets/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

---

### 4. 🛡️ Alternativas más privadas

* Usa fuentes del sistema (`sans-serif`, `serif`, `monospace`)
* O fuentes libres autoalojadas (ej: [Fontsource](https://fontsource.org/))

---

### 5. 📦 En Netlify o GitHub Pages

Ambos soportan fuentes locales sin problemas. Asegúrate de que la ruta sea relativa al root de tu sitio.

---

## 🌙 Modo oscuro (Dark Mode) con CSS

El modo oscuro mejora la experiencia de lectura en entornos con poca luz, reduce el consumo en pantallas OLED y se ha convertido en una expectativa para muchos usuarios.

---

### 1. 🧠 Modo oscuro automático (preferencias del sistema)

Puedes aplicar un esquema de color oscuro automáticamente si el navegador del usuario tiene activado el modo oscuro.

#### 🧱 Ejemplo CSS:

```
/\* Estilos generales (modo claro por defecto) \*/
body {
background-color: #ffffff;
color: #111111;
}

/\* Modo oscuro automático \*/
@media (prefers-color-scheme: dark) {
body {
background-color: #121212;
color: #eeeeee;
}
}
```

Este enfoque **no requiere JavaScript** y es respetuoso con la configuración del usuario.

---

### 2. 🖱️ Selector manual (interruptor de modo)

Si quieres permitir que el usuario cambie entre claro/oscuro sin depender del sistema:

#### 🧱 HTML básico:

``` 
<label> <input type="checkbox" id="darkToggle"> Modo oscuro </label>

```

#### 🧱 CSS:

```
body.light-mode {
background: #ffffff;
color: #111111;
}

body.dark-mode {
background: #121212;
color: #eeeeee;
}
```

#### 🧠 JS para cambiar clase:

```

<script>
  const toggle = document.getElementById('darkToggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    document.body.classList.toggle('light-mode', !toggle.checked);
    localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
  });

  // Cargar preferencia guardada
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.body.classList.add(saved === 'dark' ? 'dark-mode' : 'light-mode');
    toggle.checked = saved === 'dark';
  } else {
    // Si no hay preferencia, usar la del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(prefersDark ? 'dark-mode' : 'light-mode');
    toggle.checked = prefersDark;
  }
</script>

```

---

### 3. 🪄 Recomendaciones

* Asegúrate de que haya buen **contraste** en ambos modos
* Si usas imágenes oscuras o claras, considera cambiarlas con `filter` o usar versiones alternativas
* Usa variables CSS (`--color-fondo`, `--color-texto`) para simplificar la gestión de estilos

---


## 🗂️ Estructura de carpetas en un sitio estático

Organizar bien tus archivos desde el principio te ahorra problemas a medida que tu sitio crece. Esta estructura sirve tanto si usas HTML plano como si usas herramientas como Pandoc, Jekyll, Eleventy, etc.

---

### 1. 📁 Estructura sugerida

```
/mi-sitio/
├── index.md
├── about.md
├── posts/
│   ├── post1.md
│   ├── post2.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── estilo.css
│   ├── js/
│   │   └── script.js
│   ├── fonts/
│   └── images/
│       └── grafico.png
├── layouts/         ← Plantillas HTML
│   ├── default.html
│   └── post.html
├── \_headers         ← Para Netlify
├── \_redirects       ← Para Netlify
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

---

### 2. 📦 Explicación de carpetas

* `/`: raíz del sitio

  * `index.md` o `index.html`: portada
  * `about.md`: página "Acerca de"
* `/posts/`: tus entradas de blog o artículos en Markdown
* `/assets/`: todos los recursos estáticos

  * `css/`: hojas de estilo
  * `js/`: scripts
  * `fonts/`: fuentes personalizadas
  * `images/`: imágenes de artículos o diseño
* `/layouts/`: plantillas HTML si usas generadores

  * `default.html`: layout principal
  * `post.html`: layout específico para artículos
* `_headers` y `_redirects`: configuraciones para Netlify
* `robots.txt`, `sitemap.xml`: SEO e indexación
* `favicon.ico`: ícono del sitio

---

### 3. 🧱 Si usas Pandoc

Puedes definir tu plantilla en `/layouts/default.html` y luego compilar con:

```
pandoc posts/post1.md -o public/post1.html --template=layouts/default.html --metadata title="Post 1"
```

---

### 4. 📂 Buenas prácticas

* Usa rutas relativas siempre (`assets/css/estilo.css`)
* Mantén nombres de archivo en minúsculas y sin espacios
* Si usas imágenes por post, crea carpetas por entrada:

```
/posts/post1.md
/assets/images/post1/diagrama.png
```

---


## 🔁 Generar HTML, EPUB y PDF desde un mismo archivo `.md` usando Pandoc

Pandoc es una herramienta extremadamente potente para convertir entre formatos. Puedes partir de un solo `.md` con YAML y generar múltiples salidas: sitio web, ebook, o documento imprimible.

---

### 1. 📄 Estructura de ejemplo del `.md` origen

```

---
title: "Manual de ejemplo"
author: "Tu nombre"
date: 2025-09-13
lang: es
toc: true
fontsize: 11pt
mainfont: "Inter"
geometry: margin=2.5cm
---



## Introducción

Este documento será exportado a múltiples formatos.

### Fórmula en LaTeX (inline)

La probabilidad es \$P(A) = \frac{n}{N}\$.

### Imagen

![Diagrama](assets/images/diagrama.png)
```

---

### 2. ⚙️ Comandos básicos

#### 📤 Generar HTML (sitio o página estática)

```
pandoc archivo.md -o salida.html --template=layouts/default.html --standalone --mathjax
```

Opcional: añadir `--css=assets/css/estilo.css`

---

#### 📚 Generar EPUB (ebook)

```
pandoc archivo.md -o salida.epub --toc --css=epub.css --metadata title="Mi libro"
```

* EPUB no admite MathML directamente.
* Puedes usar `--webtex` si necesitas fórmulas en línea.

---

#### 🧾 Generar PDF (requiere LaTeX instalado)

```
pandoc archivo.md -o salida.pdf --pdf-engine=xelatex
```

Opcional: pasar variables para diseño:

```
\--variable mainfont="Inter" --variable fontsize=11pt --variable geometry=margin=2.5cm
```

---

### 3. 🔠 Fórmulas matemáticas

* Para HTML: usa `--mathjax` o `--katex`
* Para EPUB: usa `--webtex=https://latex.codecogs.com/svg.latex?`
* Para PDF: fórmulas en LaTeX se procesan directamente con `xelatex`

---

### 4. 🧱 Archivos de plantilla y CSS

#### Plantilla HTML (`default.html`):

```

<html>
  <head>
    <meta charset="utf-8"/>
    <title>$title$</title>
    <link rel="stylesheet" href="assets/css/estilo.css"/>
    $if(math)$
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    $endif$
  </head>
  <body>
    $body$
  </body>
</html>
```

---

### 5. 🛠 Automatizar con Makefile o script

Puedes automatizar la conversión con un script `.bat` en Windows o `.sh` en Linux/macOS.

#### 🧪 Ejemplo básico (bash):

```
\#!/bin/bash
pandoc archivo.md -o salida.html --template=layouts/default.html --mathjax
pandoc archivo.md -o salida.epub --css=epub.css --webtex=[https://latex.codecogs.com/svg.latex](https://latex.codecogs.com/svg.latex)?
pandoc archivo.md -o salida.pdf --pdf-engine=xelatex
```

---

## Manejo de imágenes y rutas relativas en Markdown para múltiples formatos

1. Usar rutas relativas consistentes

Coloca las imágenes en una carpeta fija, por ejemplo: `/assets/images/`

En Markdown referencia así:
`![Texto alternativo](assets/images/mi-imagen.png)`

Esto funciona para HTML, EPUB y PDF si respetas la misma estructura al generar.

2. Para HTML

* La ruta es relativa al archivo HTML generado.
* Si usas un sitio con varias páginas en carpetas, ajusta la ruta o usa rutas absolutas (ej: `/assets/images/mi-imagen.png`).

3. Para EPUB

* EPUB empaqueta las imágenes dentro del archivo `.epub`.
* Pandoc incluye automáticamente las imágenes referenciadas con rutas relativas.
* No uses rutas absolutas (no funcionan dentro de EPUB).

4. Para PDF

* PDF LaTeX (xelatex) requiere que las imágenes estén accesibles desde donde se ejecuta Pandoc.
* Usa rutas relativas para evitar errores.
* Formatos compatibles: PNG, JPG, PDF, EPS.

5. Consejos prácticos

* Mantén la misma estructura de carpetas para evitar confusiones.
* Evita espacios o caracteres especiales en nombres de archivo.
* Si usas subcarpetas, verifica que el path sea correcto para cada salida.
* Para sitios con muchos niveles de carpetas, considera usar rutas absolutas relativas al root (`/assets/images/`).

6. Ejemplo de estructura con imágenes

```
/mi-sitio/
├── index.md
├── posts/
│   └── ejemplo.md
├── assets/
│   └── images/
│       └── diagrama.png
```

Markdown en `posts/ejemplo.md`:

`![Diagrama](../assets/images/diagrama.png)`

Si quieres evitar `../`, puedes copiar las imágenes a la carpeta donde esté el HTML o cambiar la estructura para que las rutas relativas sean más simples.

---


## 📋 Gestión de metadatos en YAML front matter para múltiples formatos

---

#### 1. ¿Qué es el YAML front matter?

Es un bloque al inicio del archivo Markdown, delimitado por `---`, que define metadatos como título, autor, fecha, etc. Sirve para controlar tanto el contenido como el formato de salida.

---

#### 2. Ejemplo completo de YAML front matter

```markdown
---
title: "Manual de Markdown"
author: "Tu Nombre"
date: 2025-09-13
lang: es
toc: true
abstract: "Resumen corto del documento"
mainfont: "Inter"
fontsize: 11pt
geometry: margin=2.5cm
numbersections: true
colorlinks: true
linkcolor: blue
pdf-engine: xelatex
rights: "© 2025 Tu Nombre"
...
```

---

#### 3. Explicación de los campos

* `title`, `author`, `date`: usados en cabecera, portada, metadatos EPUB/PDF.
* `lang`: idioma del documento (`es`, `en`, etc.).
* `toc`: genera tabla de contenidos.
* `abstract`: útil para resumen en EPUB o PDF.
* `mainfont`: fuente principal (PDF).
* `fontsize`: tamaño de fuente (PDF).
* `geometry`: márgenes (PDF).
* `numbersections`: numera secciones (PDF/HTML).
* `colorlinks`: activa enlaces coloreados (PDF).
* `linkcolor`: color de enlaces (PDF).
* `pdf-engine`: motor de LaTeX (recomendado: `xelatex`).
* `rights`: derechos o licencia.

---

#### 4. Uso específico por formato

* **HTML**: algunos campos solo afectan si usas plantillas personalizadas (ej. `$title$`).
* **EPUB**: todos los campos YAML se incluyen como metadatos en el archivo `.epub`.
* **PDF**: campos como fuente, tamaño, márgenes y motor son cruciales.

---

#### 5. Uso de `variables` personalizadas

Puedes definir variables propias en el YAML e insertarlas en tu plantilla Pandoc con `$variable$`.

Ejemplo:

```markdown
---
title: "Demo"
autor: "Yo"
tema: "Privacidad Digital"
...
```

Y en tu plantilla HTML:

```html
<h2>$tema$</h2>
```

---

#### 6. Tips

* Si generas varios formatos, usa un YAML **completo** y luego filtra lo necesario con opciones `--metadata`.
* Puedes dividir tu YAML en un archivo externo (`meta.yaml`) y usar `--metadata-file`.


---

## 🧩 Plantillas personalizadas en Pandoc para HTML, EPUB y PDF

---

#### 1. ¿Qué es una plantilla en Pandoc?

Una plantilla (`.html`, `.tex`, etc.) es un archivo donde Pandoc inserta el contenido del Markdown usando variables como `$title$`, `$body$`, `$author$`, etc. Te permite tener **control total sobre el diseño final**.

---

#### 2. Crear una plantilla HTML personalizada

**Archivo:** `default.html`

```html
<!DOCTYPE html>
<html lang="$lang$">
  <head>
    <meta charset="utf-8">
    <title>$title$</title>
    <meta name="author" content="$author$">
    <meta name="description" content="$abstract$">
    <link rel="stylesheet" href="assets/css/estilo.css">

    $if(math)$
      <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    $endif$
  </head>
  <body>
    <header>
      <h1>$title$</h1>
      <p><em>$author$ – $date$</em></p>
    </header>

    $if(toc)$
      <nav id="toc">
        $toc$
      </nav>
    $endif$

    <main>
      $body$
    </main>

    <footer>
      <p>$rights$</p>
    </footer>
  </body>
</html>
```

---

#### 3. Usar plantilla con Pandoc (HTML)

```bash
pandoc archivo.md -o salida.html --template=default.html --standalone --mathjax
```

---

#### 4. Plantilla para PDF (LaTeX)

**Archivo:** `template.tex`

```latex
\documentclass[12pt]{article}
\usepackage{geometry}
\geometry{$geometry$}
\usepackage{fontspec}
\setmainfont{$mainfont$}
\usepackage{xcolor}
\usepackage{hyperref}
\hypersetup{
  colorlinks=true,
  linkcolor=$linkcolor$,
  urlcolor=$linkcolor$
}

\title{$title$}
\author{$author$}
\date{$date$}

\begin{document}

\maketitle

$if(abstract)$
\begin{abstract}
$abstract$
\end{abstract}
$endif$

$if(toc)$
\tableofcontents
\newpage
$endif$

$body$

\end{document}
```

Y luego lo usas con:

```bash
pandoc archivo.md -o salida.pdf --template=template.tex --pdf-engine=xelatex
```

---

#### 5. ¿Y para EPUB?

EPUB **no requiere plantilla** como tal, pero puedes controlar el estilo con un archivo CSS:

```css
h1 { color: navy; font-size: 2em; }
body { font-family: serif; line-height: 1.5; }
img { max-width: 100%; }
```

Uso:

```bash
pandoc archivo.md -o salida.epub --css=epub.css --toc
```

---

#### 6. Buenas prácticas

* Usa variables estándar de Pandoc para compatibilidad entre formatos.
* Ten una plantilla base por formato (`.html`, `.tex`, `.css`).
* Si haces publicaciones periódicas, automatiza la salida con scripts.
* Personaliza solo lo necesario: estructura general, tipografía, colores, header/footer.

---
