// download-md.js - Descarga del contenido como Markdown

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
  
  // Función para convertir HTML a Markdown básico
  function htmlToMarkdown(html) {
    // Esta es una conversión básica, puedes mejorarla según tus necesidades
    return html
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
      .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
      .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1\n\n')
      .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1\n\n')
      .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
      .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
      .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
      .replace(/<pre[^>]*>(.*?)<\/pre>/gi, '```\n$1\n```')
      .replace(/<ul[^>]*>(.*?)<\/ul>/gi, '$1')
      .replace(/<ol[^>]*>(.*?)<\/ol>/gi, '$1')
      .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
      .replace(/<div[^>]*>(.*?)<\/div>/gi, '$1')
      .replace(/<span[^>]*>(.*?)<\/span>/gi, '$1')
      .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)')
      .replace(/<[^>]+>/g, '') // Eliminar cualquier otra etiqueta HTML
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Limpiar múltiples saltos de línea
      .trim();
  }
  
  downloadBtn.addEventListener('click', function() {
    const loading = showLoading('Preparando Markdown...');
    
    // Obtener el contenido principal
    const mainContent = document.querySelector('main');
    if (!mainContent) {
      hideLoading(loading);
      alert('No se pudo encontrar el contenido principal');
      return;
    }
    
    // Clonar el contenido para no modificar el original
    const contentClone = mainContent.cloneNode(true);
    
    // Limpiar elementos no deseados
    const elementsToRemove = contentClone.querySelectorAll('header, nav, aside, footer, .download-md-btn, .mobile-toc, #toc, script, link, style, .print-booklet-btn');
    elementsToRemove.forEach(el => el.remove());
    
    // Convertir a Markdown
    const markdown = htmlToMarkdown(contentClone.innerHTML);
    
    // Obtener el título del documento para el nombre del archivo
    const docTitle = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'documento';
    const filename = `${docTitle}.md`;
    
    // Descargar
    downloadTextAsFile(markdown, filename);
    
    hideLoading(loading);
  });
});
