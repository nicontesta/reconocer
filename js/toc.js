document.addEventListener("DOMContentLoaded", function () {
  // Elementos TOC para escritorio y móvil
  const toc = document.getElementById("toc");
  const mobileToc = document.querySelector(".mobile-toc");
  const mobileTocHeader = document.querySelector(".mobile-toc-header");
  const mobileTocContent = document.querySelector(".mobile-toc-content");
  
  // Ocultar TOC si estamos en la página de inicio
  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("index.md")) {
    if (toc) toc.style.display = "none";
    if (mobileToc) mobileToc.style.display = "none";
    if (document.querySelector("main")) document.querySelector("main").style.marginLeft = "0";
    return;
  }

  // Recoger encabezados del contenido principal
  const headers = document.querySelectorAll("main h1, main h2, main h3");
  if (headers.length === 0) {
    if (toc) toc.style.display = "none";
    if (mobileToc) mobileToc.style.display = "none";
    if (document.querySelector("main")) document.querySelector("main").style.marginLeft = "0";
    return;
  }

  // Función para generar la estructura de la TOC
  function generateTOCStructure() {
    const ul = document.createElement("ul");
    let currentH1 = null;
    let currentH2 = null;

    headers.forEach(header => {
      // Crear ID si no existe
      if (!header.id) {
        header.id = header.textContent.trim().toLowerCase().replace(/[^\w]+/g, '-');
      }

      const li = document.createElement("li");
      li.setAttribute("data-level", header.tagName.toLowerCase());
      const a = document.createElement("a");
      a.href = `#${header.id}`;
      a.textContent = header.textContent;

      // Cerrar TOC móvil al hacer clic en un enlace
      a.addEventListener("click", function() {
        if (window.innerWidth <= 1024 && mobileTocContent) {
          mobileTocContent.classList.remove("expanded");
        }
      });

      li.appendChild(a);

      // Organizar por niveles
      if (header.tagName === 'H1') {
        ul.appendChild(li);
        currentH1 = li;
        currentH2 = null;
      } else if (header.tagName === 'H2') {
        if (!currentH1) {
          ul.appendChild(li);
          return;
        }
        let subUl = currentH1.querySelector("ul");
        if (!subUl) {
          subUl = document.createElement("ul");
          currentH1.appendChild(subUl);
        }
        subUl.appendChild(li);
        currentH2 = li;
      } else if (header.tagName === 'H3') {
        if (!currentH2) {
          if (!currentH1) {
            ul.appendChild(li);
            return;
          }
          let subUl = currentH1.querySelector("ul");
          if (!subUl) {
            subUl = document.createElement("ul");
            currentH1.appendChild(subUl);
          }
          subUl.appendChild(li);
        } else {
          let subUl = currentH2.querySelector("ul");
          if (!subUl) {
            subUl = document.createElement("ul");
            currentH2.appendChild(subUl);
          }
          subUl.appendChild(li);
        }
      }
    });

    return ul;
  }

  // Función para añadir comportamiento de plegado/desplegado
  function addToggleBehavior(container) {
    const topLevelItems = container.querySelectorAll("li");
    
    topLevelItems.forEach((li) => {
      const childUl = li.querySelector("ul");
      
      if (childUl) {
        childUl.style.display = "none";
        
        const toggleBtn = document.createElement("span");
        toggleBtn.className = "toggle-icon";
        toggleBtn.textContent = "▶";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.style.marginRight = "5px";
        toggleBtn.style.userSelect = "none";
        
        toggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (childUl.style.display === "none") {
            childUl.style.display = "block";
            toggleBtn.textContent = "▼";
          } else {
            childUl.style.display = "none";
            toggleBtn.textContent = "▶";
          }
        });
        
        li.insertBefore(toggleBtn, li.firstChild);
      }
    });
  }

  // Configurar TOC de escritorio
  if (toc) {
    // Buscar o crear contenedor para la lista
    let tocListContainer = toc.querySelector('.toc-list-container');
    if (!tocListContainer) {
      tocListContainer = document.createElement('div');
      tocListContainer.className = 'toc-list-container';
      
      // Insertar después del encabezado si existe
      const tocHeader = toc.querySelector('.toc-header');
      if (tocHeader) {
        tocHeader.insertAdjacentElement('afterend', tocListContainer);
      } else {
        toc.appendChild(tocListContainer);
      }
    }
    
    // Generar y añadir la estructura TOC
    const tocStructure = generateTOCStructure();
    tocListContainer.innerHTML = '';
    tocListContainer.appendChild(tocStructure);
    
    // Añadir comportamiento de toggle
    addToggleBehavior(tocListContainer);
    
    // Recordar posición de scroll
    const tocScrollPosition = localStorage.getItem('tocScrollPosition');
    if (tocScrollPosition) {
      toc.scrollTop = tocScrollPosition;
    }
    
    toc.addEventListener('scroll', function() {
      localStorage.setItem('tocScrollPosition', toc.scrollTop);
    });
  }

  // Configurar TOC móvil
  if (mobileTocContent) {
    const mobileTocStructure = generateTOCStructure();
    mobileTocContent.innerHTML = '';
    mobileTocContent.appendChild(mobileTocStructure);
    
    // Añadir comportamiento de toggle
    addToggleBehavior(mobileTocContent);
    
    // Configurar comportamiento expandir/colapsar
    if (mobileTocHeader) {
      mobileTocHeader.addEventListener("click", function(e) {
        // No hacer toggle si se hace clic en los iconos de navegación
        if (e.target.tagName === 'A') return;
        
        mobileTocContent.classList.toggle("expanded");
      });
    }
  }
});
