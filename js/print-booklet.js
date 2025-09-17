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
  
  // Función para mostrar instrucciones
  function showInstructions() {
    const modal = document.createElement('div');
    modal.className = 'print-instructions-modal';
    modal.innerHTML = `
      <div class="print-instructions-content">
        <h3>Instrucciones para imprimir en formato folleto</h3>
        <p>Una vez que se descargue el PDF, sigue estos pasos para imprimirlo correctamente:</p>
        <ol>
          <li>Abre el PDF con Adobe Acrobat Reader (recomendado)</li>
          <li>Ve a <strong>Archivo > Imprimir</strong></li>
          <li>En el diálogo de impresión, selecciona tu impresora</li>
          <li>Busca la opción <strong>"Folleto"</strong> o <strong>"Booklet"</strong> en la configuración</li>
          <li>Asegúrate de que está configurado para imprimir a <strong>doble cara</strong></li>
          <li>Selecciona la opción de <strong>enganche lateral</strong> (para folletos)</li>
          <li>Haz clic en <strong>Imprimir</strong></li>
        </ol>
        <p><strong>Nota:</strong> Algunas impresoras tienen la opción de folleto en el menú de configuración avanzada.</p>
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
        font-size: 12pt;
        line-height: 1.6;
        color: #000;
        background: #fff;
        margin: 0;
        padding: 20px;
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
        font-size: 10pt;
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
        font-size: 10pt;
      }
      th, td {
        padding: 8px;
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
        border-left: 4px solid #ddd;
        padding-left: 15px;
        margin-left: 0;
        font-style: italic;
      }
      @media print {
        body {
          padding: 15px;
        }
        pre, code {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
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
        
        // Obtener el título del documento para el nombre del archivo
        const docTitle = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'folleto';
        
        // Configuración para html2pdf
        const opt = {
          margin: 15,
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
            orientation: 'portrait',
            compress: true
          }
        };
        
        // Generar PDF
        loading.querySelector('div').textContent = 'Generando PDF... Esto puede tardar unos momentos.';
        
        // Generar el PDF
        html2pdf().set(opt).from(element).save().then(() => {
          // Limpiar
          document.body.removeChild(element);
          hideLoading(loading);
          
          // Mostrar instrucciones
          showInstructions();
        }).catch(error => {
          console.error('Error al generar PDF:', error);
          hideLoading(loading);
          alert('Error al generar el PDF: ' + error.message);
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
