// print-booklet.js - Generación de PDF simple con instrucciones

document.addEventListener('DOMContentLoaded', function() {
  // Añadir botón de generación de PDF
  const printBtn = document.createElement('button');
  printBtn.className = 'print-booklet-btn';
  printBtn.textContent = '📘 Generar PDF';
  printBtn.title = 'Generar PDF para impresión';
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
  
  // Función para mostrar instrucciones
  function showInstructions() {
    const modal = document.createElement('div');
    modal.className = 'print-instructions-modal';
    modal.innerHTML = `
      <div class="print-instructions-content">
        <h3>Instrucciones para imprimir en formato folleto</h3>
        <p>Para imprimir este documento en formato folleto:</p>
        <ol>
          <li>Abre el PDF generado con Adobe Acrobat Reader</li>
          <li>Ve a <strong>Archivo > Imprimir</strong></li>
          <li>En la configuración de impresión, selecciona:</li>
          <ul>
            <li><strong>Folleto</strong> en el menú desplegable de páginas</li>
            <li><strong>Impresión a doble cara</strong></li>
            <li><strong>Voltear en el borde corto</strong></li>
          </ul>
          <li>Ajusta la escala al <strong>80%</strong> si es necesario</li>
          <li>Haz clic en <strong>Imprimir</strong></li>
        </ol>
        <p><strong>Nota:</strong> Las opciones exactas pueden variar según tu impresora.</p>
        <button onclick="this.parentElement.parentElement.remove()">Entendido</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  // Función para obtener el contenido HTML formateado
  function getFormattedContent() {
    const mainContent = document.querySelector('main').cloneNode(true);
    
    // Limpiar elementos no deseados
    const elementsToRemove = mainContent.querySelectorAll('header, nav, aside, footer, .print-booklet-btn, .mobile-toc, #toc, script, link, style');
    elementsToRemove.forEach(el => el.remove());
    
    // Añadir estilos de impresión
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: 'Special Elite', monospace;
        font-size: 10pt;
        line-height: 1.4;
        color: #000;
        background: #fff;
        margin: 0;
        padding: 15px;
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
        font-size: 9pt;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      img {
        max-width: 100%;
        height: auto;
        page-break-inside: avoid;
      }
      table {
        page-break-inside: avoid;
        break-inside: avoid;
        width: 100%;
        font-size: 9pt;
      }
      th, td {
        padding: 6px;
        border: 1px solid #ddd;
      }
      a {
        color: #000;
        text-decoration: underline;
      }
      a::after {
        content: " (" attr(href) ")";
        font-size: 0.9em;
        font-weight: normal;
      }
      blockquote {
        border-left: 3px solid #ddd;
        padding-left: 12px;
        margin-left: 0;
        font-style: italic;
      }
      @page {
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
    const loading = showLoading('Preparando PDF...');
    
    // Cargar la librería html2pdf.js dinámicamente
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = function() {
      try {
        // Obtener contenido formateado
        const content = getFormattedContent();
        
        // Crear contenedor para la conversión
        const element = document.createElement('div');
        element.innerHTML = content;
        document.body.appendChild(element);
        
        // Obtener el título del documento para el nombre del archivo
        const docTitle = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'documento';
        
        // Configuración para html2pdf - A4 vertical
        const opt = {
          margin: 10,
          filename: `${docTitle}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#FFFFFF'
          },
          jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait'
          }
        };
        
        // Generar PDF
        html2pdf().set(opt).from(element).save().then(() => {
          // Limpiar
          document.body.removeChild(element);
          hideLoading(loading);
          
          // Mostrar instrucciones
          showInstructions();
        });
        
      } catch (error) {
        console.error('Error al generar PDF:', error);
        hideLoading(loading);
        alert('Error al generar el PDF: ' + error.message);
      }
    };
    
    script.onerror = function() {
      hideLoading(loading);
      alert('Error al cargar la librería de generación de PDF');
    };
    
    document.head.appendChild(script);
  });
});
