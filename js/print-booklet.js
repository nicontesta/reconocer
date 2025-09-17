// booklet-print.js - Funcionalidad para impresión en formato folleto

document.addEventListener('DOMContentLoaded', function() {
  // Crear y añadir botón de impresión
  const printBtn = document.createElement('button');
  printBtn.className = 'booklet-print-btn';
  printBtn.textContent = '📘 Imprimir Folleto';
  printBtn.title = 'Imprimir en formato de folleto (booklet)';
  document.body.appendChild(printBtn);
  
  // Función para organizar contenido en formato folleto
  printBtn.addEventListener('click', function() {
    prepareBookletPrint();
  });
  
  function prepareBookletPrint() {
    // Obtener el contenido principal
    const mainContent = document.querySelector('main').cloneNode(true);
    
    // Crear contenedor para impresión
    const printContainer = document.createElement('div');
    printContainer.className = 'booklet-printing';
    
    // Crear contenedor de páginas
    const pagesContainer = document.createElement('div');
    pagesContainer.className = 'booklet-pages';
    
    // Dividir el contenido en páginas
    const contentPages = splitContentIntoPages(mainContent);
    const totalPages = contentPages.length;
    
    // Calcular el número total de hojas necesarias (siempre múltiplo de 4)
    const totalSheets = Math.ceil(totalPages / 4) * 4;
    
    // Reorganizar páginas según el formato booklet
    const bookletPages = reorganizePagesForBooklet(contentPages, totalSheets);
    
    // Crear las páginas visuales para el booklet
    bookletPages.forEach((pageContent, index) => {
      if (pageContent) {
        const pageElement = createPageElement(pageContent, index + 1);
        pagesContainer.appendChild(pageElement);
      } else {
        // Página en blanco si es necesario
        const blankPage = document.createElement('div');
        blankPage.className = 'booklet-page';
        pagesContainer.appendChild(blankPage);
      }
    });
    
    printContainer.appendChild(pagesContainer);
    
    // Abrir ventana de impresión
    printBooklet(printContainer, totalSheets);
  }
  
  function splitContentIntoPages(content) {
    // Esta es una implementación simplificada
    // En una implementación real, necesitarías un algoritmo más sofisticado
    // para dividir el contenido en páginas según la cantidad de texto
    
    const pages = [];
    const elements = content.children;
    
    // Agrupar elementos en páginas (simulación)
    let currentPage = document.createElement('div');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i].cloneNode(true);
      
      // Simular división de contenido (en una implementación real
      // necesitarías calcular la altura del contenido)
      if (i > 0 && i % 10 === 0) {
        pages.push(currentPage);
        currentPage = document.createElement('div');
      }
      
      currentPage.appendChild(element);
    }
    
    // Añadir la última página
    if (currentPage.children.length > 0) {
      pages.push(currentPage);
    }
    
    return pages;
  }
  
  function reorganizePagesForBooklet(pages, totalSheets) {
    const bookletPages = [];
    const totalPages = pages.length;
    
    // Calcular el orden de las páginas para impresión booklet
    for (let i = 0; i < totalSheets / 2; i++) {
      const firstPageIndex = i * 2;
      const secondPageIndex = i * 2 + 1;
      
      // Primera cara de la hoja: última página y primera página
      const firstSidePage1 = totalPages - 1 - firstPageIndex;
      const firstSidePage2 = firstPageIndex;
      
      // Segunda cara de la hoja: segunda página y penúltima página
      const secondSidePage1 = secondPageIndex;
      const secondSidePage2 = totalPages - 1 - secondPageIndex;
      
      // Añadir páginas en el orden correcto
      bookletPages.push(pages[firstSidePage1] || null);
      bookletPages.push(pages[firstSidePage2] || null);
      bookletPages.push(pages[secondSidePage1] || null);
      bookletPages.push(pages[secondSidePage2] || null);
    }
    
    return bookletPages;
  }
  
  function createPageElement(content, pageNumber) {
    const pageElement = document.createElement('div');
    pageElement.className = 'booklet-page';
    
    // Añadir contenido
    pageElement.appendChild(content);
    
    // Añadir número de página
    const pageNumberElement = document.createElement('div');
    pageNumberElement.className = 'booklet-page-number';
    pageNumberElement.textContent = pageNumber;
    pageElement.appendChild(pageNumberElement);
    
    return pageElement;
  }
  
  function printBooklet(printContainer, totalSheets) {
    // Crear ventana de impresión
    const printWindow = window.open('', '_blank');
    
    // Escribir el contenido en la ventana
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Impresión en Formato Folleto</title>
        <meta charset="UTF-8">
        <style>
          ${document.querySelector('[href*="booklet-print.css"]') ? '' : '@import url("/css/booklet-print.css");'}
        </style>
      </head>
      <body>
        ${printContainer.outerHTML}
        <script>
          window.onload = function() {
            // Instrucciones para el usuario
            alert('Para imprimir en formato folleto, configure su impresora con:\\n- Orientación: Horizontal\\n- Impresión a doble cara\\n- Voltear en el borde corto\\n\\nEl documento tiene ${totalSheets} páginas organizadas para folleto.');
            
            // Imprimir
            window.print();
            
            // Cerrar ventana después de imprimir
            setTimeout(function() {
              window.close();
            }, 500);
          };
        <\/script>
      </body>
      </html>
    `);
    
    printWindow.document.close();
  }
});
