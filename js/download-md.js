// download-md.js - Descarga del contenido como Markdown usando Turndown.js

document.addEventListener('DOMContentLoaded', function() {
  // Añadir botón de descarga de Markdown
  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'download-md-btn';
  downloadBtn.textContent = '📥 Descargar MD';
  downloadBtn.title = 'Descargar contenido como Markdown';
  document.body.appendChild(downloadBtn);
  
  // Función para mostrar carga
  function showLoading(message) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'download-md-loading';
    loadingDiv.innerHTML = `<div>${message}</div>`;
    document.body.appendChild(loadingDiv);
    return loadingDiv;
  }
  
  // Función para ocultar carga
  function hideLoading(loadingDiv) {
    if (loadingDiv && loadingDiv.parentNode) {
      loadingDiv.parentNode.removeChild(loadingDiv);
    }
  }
  
  // Función para descargar texto como archivo
  function downloadTextAsFile(text, filename) {
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }
  
  // Función para cargar Turndown.js
  function loadTurndown() {
    return new Promise((resolve, reject) => {
      if (window.TurndownService) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/turndown@7.1.1/dist/turndown.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Configuración personalizada para bloques de código
  function configureTurndown() {
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      fence: '```'
    });
    
    // Añadir reglas personalizadas para mejorar la conversión
    turndownService.addRule('codeBlocks', {
      filter: function(node) {
        return node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE';
      },
      replacement: function(content, node) {
        // Obtener el lenguaje del código si está especificado
        let language = '';
        if (node.firstChild.className) {
          const match = node.firstChild.className.match(/language-(\w+)/);
          if (match) language = match[1];
        }
        
        return '\n\n```' + language + '\n' + node.firstChild.textContent + '\n```\n\n';
      }
    });
    
    // Mejorar el manejo de código en línea
    turndownService.addRule('inlineCode', {
      filter: function(node) {
        return node.nodeName === 'CODE' && 
               (!node.parentNode || node.parentNode.nodeName !== 'PRE');
      },
      replacement: function(content) {
        return '`' + content + '`';
      }
    });
    
    // Mejorar el manejo de imágenes
    turndownService.addRule('images', {
      filter: 'img',
      replacement: function(content, node) {
        const alt = node.alt || '';
        const src = node.src || '';
        return '![' + alt + '](' + src + ')';
      }
    });
    
    return turndownService;
  }
  
  downloadBtn.addEventListener('click', async function() {
    const loading = showLoading('Preparando Markdown...');
    
    try {
      // Cargar Turndown.js
      await loadTurndown();
      
      // Obtener el contenido principal
      const mainContent = document.querySelector('main');
      if (!mainContent) {
        throw new Error('No se pudo encontrar el contenido principal');
      }
      
      // Clonar el contenido para no modificar el original
      const contentClone = mainContent.cloneNode(true);
      
      // Limpiar elementos no deseados
      const elementsToRemove = contentClone.querySelectorAll(
        'header, nav, aside, footer, .download-md-btn, .mobile-toc, #toc, script, link, style, .print-booklet-btn'
      );
      elementsToRemove.forEach(el => el.remove());
      
      // Configurar Turndown
      const turndownService = configureTurndown();
      
      // Convertir a Markdown
      const markdown = turndownService.turndown(contentClone.innerHTML);
      
      // Limpiar el Markdown resultante
      const cleanedMarkdown = cleanMarkdown(markdown);
      
      // Obtener el título del documento para el nombre del archivo
      const docTitle = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'documento';
      const filename = `${docTitle}.md`;
      
      // Descargar
      downloadTextAsFile(cleanedMarkdown, filename);
      
    } catch (error) {
      console.error('Error al generar Markdown:', error);
      alert('Error al generar el Markdown: ' + error.message);
    } finally {
      hideLoading(loading);
    }
  });
  
  // Función para limpiar el Markdown resultante
  function cleanMarkdown(markdown) {
    return markdown
      // Limpiar múltiples saltos de línea
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Asegurar que los bloques de código tengan formato correcto
      .replace(/```\s*\n\s*```/g, '')
      // Eliminar espacios en blanco al inicio/final de líneas
      .replace(/^[ \t]+|[ \t]+$/gm, '')
      // Añadir línea en blanco antes de los encabezados si no la tienen
      .replace(/([^\n])\n(#+ )/g, '$1\n\n$2')
      .trim();
  }
});
