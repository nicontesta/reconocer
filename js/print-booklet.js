// print-booklet.js - Generación de PDF en formato folleto

document.addEventListener('DOMContentLoaded', function() {
  // Crear y añadir botón de generación de PDF
  const printBtn = document.createElement('button');
  printBtn.className = 'print-booklet-btn';
  printBtn.textContent = '📘 Generar Folleto PDF';
  printBtn.title = 'Generar PDF en formato folleto para impresión';
  document.body.appendChild(printBtn);
  
  // Función para mostrar carga
  function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'pdf-loading';
    loadingDiv.innerHTML = `
      <div class="pdf-loading-spinner"></div>
      <div class="pdf-loading-text">Generando PDF folleto...</div>
    `;
    document.body.appendChild(loadingDiv);
    return loadingDiv;
  }
  
  // Función para ocultar carga
  function hideLoading(loadingDiv) {
    if (loadingDiv && loadingDiv.parentNode) {
      loadingDiv.parentNode.removeChild(loadingDiv);
    }
  }
  
  // Función para reorganizar páginas en formato folleto
  function arrangePagesForBooklet(pages) {
    const totalPages = pages.length;
    const bookletPages = [];
    
    // Asegurar que el número de páginas es múltiplo de 4
    const paddedPages = [...pages];
    while (paddedPages.length % 4 !== 0) {
      paddedPages.push(null); // Añadir páginas vacías si es necesario
    }
    
    // Reorganizar páginas para folleto
    for (let i = 0; i < paddedPages.length / 2; i += 2) {
      const firstIndex = i;
      const lastIndex = paddedPages.length - 1 - i;
      
      // Añadir dos páginas por hoja (doble cara)
      bookletPages.push(paddedPages[lastIndex]);
      bookletPages.push(paddedPages[firstIndex]);
      bookletPages.push(paddedPages[firstIndex + 1]);
      bookletPages.push(paddedPages[lastIndex - 1]);
    }
    
    return bookletPages.filter(page => page !== null);
  }
  
  // Función principal para generar el PDF
  printBtn.addEventListener('click', async function() {
    const loading = showLoading();
    
    try {
      // Cargar las bibliotecas necesarias dinámicamente
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
      
      // Obtener el contenido principal
      const element = document.querySelector('main');
      if (!element) {
        throw new Error('No se encontró el contenido principal');
      }
      
      // Clonar el elemento para no afectar al DOM original
      const contentClone = element.cloneNode(true);
      
      // Configuración de html2pdf
      const opt = {
        margin: [10, 10, 10, 10],
        filename: 'folleto.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        },
        pagebreak: { mode: ['css', 'legacy'] }
      };
      
      // Generar el PDF
      const worker = html2pdf().set(opt).from(contentClone).toPdf();
      
      // Obtener el PDF generado
      const pdf = await worker.outputPdf('blob');
      
      // Descargar el PDF
      const url = URL.createObjectURL(pdf);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'folleto.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Mostrar instrucciones
      alert('PDF generado con éxito. Para imprimir en formato folleto:\n\n1. Abra el PDF con Adobe Acrobat Reader\n2. Vaya a Archivo > Imprimir\n3. Seleccione la opción "Folleto"\n4. Configure su impresora para impresión a doble cara\n5. Asegúrese de que las páginas se organicen automáticamente');
      
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Error al generar el PDF: ' + error.message);
    } finally {
      hideLoading(loading);
    }
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
