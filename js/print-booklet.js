// print-booklet.js - Generación de PDF en formato folleto

document.addEventListener('DOMContentLoaded', function() {
  // Añadir botón de generación de PDF
  const printBtn = document.createElement('button');
  printBtn.className = 'print-booklet-btn';
  printBtn.textContent = '📘 Generar Folleto PDF';
  printBtn.title = 'Generar PDF en formato folleto para impresión a doble cara';
  document.body.appendChild(printBtn);
  
  // Función para mostrar carga
  function showLoading(message) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'print-booklet-loading';
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
  
  // Función para obtener el contenido HTML formateado
  function getFormattedContent() {
    const mainContent = document.querySelector('main').cloneNode(true);
    
    // Limpiar elementos no deseados
    const elementsToRemove = mainContent.querySelectorAll('header, nav, aside, footer, .print-booklet-btn, .mobile-toc, #toc');
    elementsToRemove.forEach(el => el.remove());
    
    // Añadir estilos de impresión inline
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: 'Special Elite', monospace;
        font-size: 12pt;
        line-height: 1.5;
        color: #000;
        background: #fff;
        margin: 0;
        padding: 0;
      }
      h1, h2, h3, h4, h5, h6 {
        page-break-after: avoid;
        break-after: avoid-page;
      }
      pre, code {
        background-color: #f5f5f5;
        color: #333;
        border: 1px solid #ddd;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      table {
        page-break-inside: avoid;
        break-inside: avoid;
        width: 100%;
      }
      a {
        color: #000;
        text-decoration: underline;
      }
      a::after {
        content: " (" attr(href) ")";
        font-size: 0.9em;
      }
      @page {
        size: A4 landscape;
        margin: 1cm;
      }
    `;
    
    // Crear documento HTML para impresión
    const printDoc = document.createElement('div');
    printDoc.appendChild(style);
    printDoc.appendChild(mainContent);
    
    return printDoc.innerHTML;
  }
  
  // Función para generar el PDF
  printBtn.addEventListener('click', function() {
    const loading = showLoading('Preparando contenido para folleto PDF...');
    
    // Usamos setTimeout para permitir que la UI se actualice con el mensaje de carga
    setTimeout(async function() {
      try {
        // Cargar las librerías necesarias dinámicamente
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
        
        // Obtener contenido formateado
        const content = getFormattedContent();
        
        // Crear contenedor para la conversión
        const element = document.createElement('div');
        element.innerHTML = content;
        element.style.width = '100%';
        element.style.padding = '20px';
        document.body.appendChild(element);
        
        // Configuración para html2pdf
        const opt = {
          margin: 10,
          filename: 'folleto.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        };
        
        // Generar PDF
        loading.querySelector('div').textContent = 'Generando PDF...';
        
        html2pdf().set(opt).from(element).save().then(() => {
          // Limpiar
          document.body.removeChild(element);
          hideLoading(loading);
          alert('PDF generado correctamente. Para imprimir en formato folleto:\n\n1. Abra el PDF con Adobe Acrobat Reader\n2. En Imprimir, seleccione "Folleto" en el menú desplegable de configuración de páginas\n3. Asegúrese de que está configurado para imprimir a doble cara');
        });
        
      } catch (error) {
        console.error('Error generando PDF:', error);
        hideLoading(loading);
        alert('Error al generar el PDF: ' + error.message);
      }
    }, 100);
  });
  
  // Función para cargar scripts dinámicamente
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
});
