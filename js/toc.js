document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const mobileToc = document.querySelector(".mobile-toc");
  const mobileTocHeader = document.querySelector(".mobile-toc-header");
  const mobileTocContent = document.querySelector(".mobile-toc-content");

  // Ocultar TOC si estamos en la página de inicio
  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("index.md")
  ) {
    if (toc) toc.style.display = "none";
    if (mobileToc) mobileToc.style.display = "none";
    if (document.querySelector("main"))
      document.querySelector("main").style.marginLeft = "0";
    return;
  }

  // Recoger encabezados del contenido principal
  const headers = document.querySelectorAll("main h1, main h2, main h3");
  if (headers.length === 0) {
    if (toc) toc.style.display = "none";
    if (mobileToc) mobileToc.style.display = "none";
    if (document.querySelector("main"))
      document.querySelector("main").style.marginLeft = "0";
    return;
  }

  // Función para generar estructura TOC
  function generateTOCStructure() {
    const ul = document.createElement("ul");
    let currentH1 = null;
    let currentH2 = null;

    headers.forEach((header) => {
      if (!header.id) {
        header.id = header.textContent
          .trim()
          .toLowerCase()
          .replace(/[^\w]+/g, "-");
      }

      const li = document.createElement("li");
      li.setAttribute("data-level", header.tagName.toLowerCase());

      const link = document.createElement("a");
      link.href = `#${header.id}`;
      link.textContent = header.textContent;
      link.title = header.textContent; 

      // Cierre del TOC móvil al hacer clic en un enlace
      link.addEventListener("click", function () {
        if (window.innerWidth <= 1024 && mobileTocContent) {
          mobileTocContent.classList.remove("expanded");
        }
      });

      const tocItem = document.createElement("div");
      tocItem.className = "toc-item";

      tocItem.appendChild(link);
      li.appendChild(tocItem);

      // Insertar en la estructura jerárquica
      if (header.tagName === "H1") {
        ul.appendChild(li);
        currentH1 = li;
        currentH2 = null;
      } else if (header.tagName === "H2") {
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
      } else if (header.tagName === "H3") {
        let parent = currentH2 || currentH1;
        if (!parent) {
          ul.appendChild(li);
          return;
        }
        let subUl = parent.querySelector("ul");
        if (!subUl) {
          subUl = document.createElement("ul");
          parent.appendChild(subUl);
        }
        subUl.appendChild(li);
      }
    });

    return ul;
  }

  // Función para añadir toggles
function addToggleBehavior(container) {
  const topLevelItems = container.querySelectorAll("li");

  topLevelItems.forEach((li) => {
    const childUl = li.querySelector("ul");
    const tocItem = li.querySelector(".toc-item");

    if (childUl && tocItem) {
      // Crear botón toggle
      const toggleBtn = document.createElement("span");
      toggleBtn.className = "toggle-icon";
      toggleBtn.textContent = "▶";
      toggleBtn.style.cursor = "pointer";

      // Insertar antes del enlace dentro de toc-item
      tocItem.insertBefore(toggleBtn, tocItem.firstChild);

      // Colapsar por defecto
      li.classList.remove("expanded");

      // Añadir toggle
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (li.classList.contains("expanded")) {
          li.classList.remove("expanded");
          toggleBtn.textContent = "▶";
        } else {
          li.classList.add("expanded");
          toggleBtn.textContent = "▼";
        }
      });
    }
  });
}
 
  // TOC Escritorio
  if (toc) {
    let tocListContainer = toc.querySelector(".toc-list-container");
    if (!tocListContainer) {
      tocListContainer = document.createElement("div");
      tocListContainer.className = "toc-list-container";

      const tocHeader = toc.querySelector(".toc-header");
      if (tocHeader) {
        tocHeader.insertAdjacentElement("afterend", tocListContainer);
      } else {
        toc.appendChild(tocListContainer);
      }
    }

    const tocStructure = generateTOCStructure();
    tocListContainer.innerHTML = "";
    tocListContainer.appendChild(tocStructure);
    addToggleBehavior(tocListContainer);

    // Recordar scroll
    const tocScrollPosition = localStorage.getItem("tocScrollPosition");
    if (tocScrollPosition) {
      toc.scrollTop = tocScrollPosition;
    }
    toc.addEventListener("scroll", function () {
      localStorage.setItem("tocScrollPosition", toc.scrollTop);
    });
  }

  // TOC Móvil
  if (mobileTocContent) {
    const mobileTocStructure = generateTOCStructure();
    mobileTocContent.innerHTML = "";
    mobileTocContent.appendChild(mobileTocStructure);
    addToggleBehavior(mobileTocContent);

    if (mobileTocHeader) {
      mobileTocHeader.addEventListener("click", function (e) {
        if (e.target.tagName === "A") return;
        mobileTocContent.classList.toggle("expanded");
      });
    }
  }
});


