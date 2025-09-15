document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const mobileToc = document.querySelector(".mobile-toc");
  const mobileTocHeader = document.querySelector(".mobile-toc-header");
  const mobileTocContent = document.querySelector(".mobile-toc-content");
  
  // Oculta TOC si estamos en index.md
  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("index.md")) {
    if (toc) toc.style.display = "none";
    if (mobileToc) mobileToc.style.display = "none";
    return;
  }

  // Recoge encabezados del contenido principal
  const headers = document.querySelectorAll("main h1, main h2, main h3");
  if (headers.length === 0) {
    if (toc) toc.style.display = "none";
    if (mobileToc) mobileToc.style.display = "none";
    return;
  }

  // Función para crear la estructura de la TOC
  function createTOCStructure(container) {
    // Limpiar contenedor existente
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    const ul = document.createElement("ul");
    let currentH1 = null;
    let currentH2 = null;

    headers.forEach(header => {
      if (!header.id) {
        header.id = header.textContent.trim().toLowerCase().replace(/[^\w]+/g, '-');
      }

      const li = document.createElement("li");
      li.setAttribute("data-level", header.tagName.toLowerCase());
      const a = document.createElement("a");
      a.href = `#${header.id}`;
      a.textContent = header.textContent; // Mantiene el texto original sin modificar
      a.addEventListener("click", function(e) {
        // Cerrar TOC móvil después de hacer clic en un enlace
        if (window.innerWidth <= 1024 && mobileTocContent && mobileTocHeader) {
          mobileTocContent.classList.remove("expanded");
          mobileTocHeader.classList.add("toc-collapsed");
        }
      });

      li.appendChild(a);

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

    container.appendChild(ul);
    return ul;
  }

  // Crear TOC para escritorio
  if (toc) {
    createTOCStructure(toc);
    
    // Añadir comportamiento de plegado/desplegado
    const topLevelItems = toc.querySelectorAll("li");
    topLevelItems.forEach((li) => {
      const childUl = li.querySelector("ul");
      if (childUl) {
        childUl.style.display = "none"; // Ocultar por defecto

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

  // Crear TOC para móviles
  if (mobileTocContent) {
    createTOCStructure(mobileTocContent);
    
    // Añadir funcionalidad de toggle para la TOC móvil
    if (mobileTocHeader) {
      mobileTocHeader.textContent = "TABLA DE CONTENIDOS";
      
      mobileTocHeader.addEventListener("click", function() {
        this.classList.toggle("toc-collapsed");
        mobileTocContent.classList.toggle("expanded");
      });
    }
  }
});
