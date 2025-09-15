---
layout: default
title: Generar epub desde ficheros Markdown
permalink: /md2epub/
---

## GUÍA RÁPIDA PARA GENERAR EPUB CON TOC USANDO PANDOC Y WEBTEX 

Pandoc es una herramienta poderosa para convertir documentos entre varios formatos, incluido EPUB. En esta guía, te mostraremos cómo generar un archivo EPUB con tabla de contenidos (TOC) de manera sencilla, usando WebTeX para la visualización de ecuaciones matemáticas en LaTeX.

---

### 1. Instalación de Pandoc

Antes de comenzar, asegúrate de tener instalado Pandoc en tu computadora. 

#### ➤ **Para instalar Pandoc:**

- **Windows**:  
  Ve a [Pandoc's download page](https://pandoc.org/installing.html) y descarga el instalador para Windows. Sigue las instrucciones de instalación.

- **Mac**:  
  Si tienes Homebrew instalado, puedes instalar Pandoc con el siguiente comando:
  ```
  brew install pandoc
  ```
  Si no usas Homebrew, descarga el archivo `.pkg` desde [Pandoc's download page](https://pandoc.org/installing.html) y sigue las instrucciones.

- **Linux**:  
  Usa el gestor de paquetes de tu distribución. En Ubuntu, por ejemplo, puedes instalar Pandoc con:
  ```
  sudo apt-get install pandoc
  ```

---

### 2. Preparar el archivo Markdown (.md) para convertir

Asegúrate de que el archivo Markdown (.md) tenga la estructura adecuada para generar el EPUB con una tabla de contenidos. A continuación se muestra un ejemplo básico:

```
# Título del Libro

## Capítulo 1: Introducción

Este es el primer capítulo, que puede contener **negritas**, *cursivas*, ecuaciones matemáticas, y más.

### Ecuación de ejemplo:

$$
E = mc^2
$$

## Capítulo 2: Desarrollo

Aquí continúa el contenido del libro.

```

Este archivo contiene encabezados `#`, `##`, y `###` que Pandoc usará para generar la tabla de contenidos (TOC).

---

### 3. Generar el archivo EPUB con Pandoc

Una vez tengas tu archivo `.md` listo, abre una terminal o línea de comandos y usa el siguiente comando para convertir tu archivo Markdown a EPUB:

```
pandoc -s archivo.md -o salida.epub --toc --toc-depth=2 --webtex
```

#### Explicación del comando:
- `-s archivo.md`: Indica el archivo de entrada, en este caso `archivo.md`.
- `-o salida.epub`: Define el archivo de salida como `salida.epub`.
- `--toc`: Genera una tabla de contenidos (TOC).
- `--toc-depth=2`: Define la profundidad de los encabezados en la tabla de contenidos. En este caso, se incluyen hasta los encabezados `##`.
- `--webtex`: Habilita WebTeX para renderizar ecuaciones LaTeX en formato matemático.

---

### 4. Visualizar el archivo EPUB generado

Una vez que Pandoc haya generado el archivo `salida.epub`, puedes abrirlo en cualquier lector de libros electrónicos (como Adobe Digital Editions, Calibre o un lector de EPUB en tu teléfono).

Si prefieres ver el archivo en tu navegador, puedes usar un lector de EPUB en línea o instalar una extensión para visualizar archivos EPUB directamente en tu navegador.

---

### 5. Personalización del estilo y formato del EPUB

Pandoc permite personalizar aún más el formato de tu EPUB. Puedes usar una hoja de estilo CSS personalizada para cambiar la apariencia de tu archivo. Para hacerlo, añade la opción `--css` al comando de Pandoc:

```
pandoc -s archivo.md -o salida.epub --toc --toc-depth=2 --webtex --css=mi_estilo.css
```

Esto aplicará el archivo `mi_estilo.css` al EPUB generado, lo que te permitirá personalizar el diseño (fuentes, márgenes, colores, etc.).

---

### Resumen de Comandos Pandoc para EPUB

1. **Generar EPUB con TOC y WebTeX**:
   ```
   pandoc -s archivo.md -o salida.epub --toc --toc-depth=2 --webtex
   ```

2. **Generar EPUB con TOC, WebTeX y CSS personalizado**:
   ```
   pandoc -s archivo.md -o salida.epub --toc --toc-depth=2 --webtex --css=mi_estilo.css
   ```

---

### Sintaxis Básica de Markdown para Pandoc

#### Encabezados

Para generar la tabla de contenidos, utiliza encabezados con `#`. El número de `#` define el nivel del encabezado:

```
# Título Principal
## Capítulo 1
### Sección 1.1
```

#### Ecuaciones Matemáticas (WebTeX)

Puedes incluir ecuaciones matemáticas usando LaTeX entre `$$` para bloques o `$` para ecuaciones en línea:

```
### Ecuación en bloque:
$$
E = mc^2
$$

### Ecuación en línea: $E = mc^2$
```

---

### Recursos adicionales:

- **Pandoc Documentation**: [https://pandoc.org](https://pandoc.org)
- **Guía de Markdown**: [https://www.markdownguide.org](https://www.markdownguide.org)
- **WebTeX para Pandoc**: [https://pandoc.org/MANUAL.html#webtex](https://pandoc.org/MANUAL.html#webtex)

---

Siguiendo estos pasos, podrás generar fácilmente un archivo EPUB con una tabla de contenidos y ecuaciones matemáticas usando Pandoc. ¡Ahora estás listo para crear tus propios libros electrónicos interactivos!

