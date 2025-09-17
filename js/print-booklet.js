// print-booklet.js - Funcionalidad para impresión en formato folleto

document.addEventListener('DOMContentLoaded', function() {
  // Crear y añadir botón de impresión
  const printBtn = document.createElement('button');
  printBtn.className = 'print-booklet-btn';
  printBtn.textContent = '📘 Imprimir Folleto';
  printBtn.title = 'Imprimir en formato de folleto/libro';
  document.body.appendChild(printBtn);
  
  // Función para organizar contenido en formato folleto
  printBtn.addEventListener('click', function() {
    // Crear un iframe para la impresión
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
    
    // Obtener el contenido principal
    const mainContent = document.querySelector('main').innerHTML;
    
    // Preparar el contenido para impresión
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${document.title} - Impresión Folleto</title>
        <meta charset="UTF-8">
        <style>
          @page {
            size: A4;
            margin: 0.5cm;
          }
          
          body {
            font-family: 'Special Elite', monospace;
            font-size: 10pt;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            background: white;
            color: black;
          }
          
          .booklet-page {
            width: 50%;
            height: 100vh;
            float: left;
            page-break-inside: avoid;
            box-sizing: border-box;
            padding: 1cm;
          }
          
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          
          img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
          }
          
          pre, code {
            background-color: #f5f5f5;
            color: #333;
            border: 1px solid #ddd;
            page-break-inside: avoid;
            font-size: 9pt;
            white-space: pre-wrap;
          }
          
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid;
          }
          
          ul, ol {
            page-break-inside: avoid;
          }
          
          table {
            page-break-inside: avoid;
            width: 100%;
            font-size: 9pt;
          }
          
          th, td {
            padding: 4px;
            border: 1px solid #ddd;
          }
          
          a {
            color: black;
            text-decoration: underline;
          }
          
          a::after {
            content: " (" attr(href) ")";
            font-size: 0.9em;
          }
          
          blockquote {
            border-left: 2px solid #999;
            padding-left: 1em;
            margin: 1em 0;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="booklet-container">
          <div class="booklet-page">
            ${mainContent}
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Escribir el contenido en el iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(printContent);
    iframeDoc.close();
    
    // Esperar a que el iframe cargue y luego imprimir
    iframe.onload = function() {
      // Añadir mensaje instructivo
      setTimeout(function() {
        alert('Para imprimir en formato folleto, configure su impresora para:\n- Tamaño de papel: A4\n- Impresión a doble cara\n- Modo folleto/libro (si está disponible)\n\nDespués de imprimir, doble las páginas por la mitad para formar el folleto.');
        
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        
        // Eliminar el iframe después de imprimir
        setTimeout(function() {
          document.body.removeChild(iframe);
        }, 100);
      }, 500);
    };
  });
});