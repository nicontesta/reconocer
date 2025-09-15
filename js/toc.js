document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  if (!toc) return;

  // Oculta TOC si estamos en index.md
  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
    toc.style.display = "none";
    document.querySelector("main").style.marginLeft = "0";
    return;
  }

  // Recoge encabezados del contenido principal
  const headers = document.querySelectorAll("main h1, main h2, main h3");
  if (headers.length === 0) {
    toc.style.display = "none";
    document.querySelector("main").style.marginLeft = "0";
    return;
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
    a.textContent = header.textContent;

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

  // Eliminar solo las listas UL existentes, no el encabezado
  const existingUls = toc.querySelectorAll('ul');
  existingUls.forEach(existingUl => toc.removeChild(existingUl));
  
  // Agregar la nueva lista
  toc.appendChild(ul);

  // Añadir comportamiento de plegado/desplegado
  const topLevelItems = ul.querySelectorAll("li");

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
});
