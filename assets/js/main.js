(function () {
  "use strict";

  var cfg = window.OPTIALEPH || {};
  var numero = String(cfg.whatsapp || "").replace(/\D/g, "");

  // Botões de contato: abrem o WhatsApp com a mensagem pronta.
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    if (numero) {
      a.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(a.getAttribute("data-wa"));
      a.target = "_blank";
      a.rel = "noopener";
    } else if (a.getAttribute("href") === "#") {
      a.href = "#contato";
    }
  });

  var nota = document.querySelector("[data-contato-nota]");
  if (nota && !numero) {
    nota.textContent = "Em breve: canal de contato em configuração.";
  }

  // Menu no celular.
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var aberto = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(aberto));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Galeria de telas com abas.
  var galeria = document.querySelector("[data-galeria]");
  if (galeria) {
    var abas = Array.prototype.slice.call(galeria.querySelectorAll("[role=tab]"));
    var img = galeria.querySelector(".galeria__tela img");
    var leg = galeria.querySelector(".galeria__tela figcaption");

    function ativar(aba, foco) {
      abas.forEach(function (b) {
        var on = b === aba;
        b.setAttribute("aria-selected", String(on));
        b.tabIndex = on ? 0 : -1;
      });
      img.src = aba.getAttribute("data-src");
      img.alt = aba.getAttribute("data-alt");
      leg.textContent = aba.getAttribute("data-leg");
      if (foco) aba.focus();
    }

    abas.forEach(function (b, i) {
      b.tabIndex = i === 0 ? 0 : -1;
      b.addEventListener("click", function () { ativar(b, false); });
      b.addEventListener("keydown", function (e) {
        var j = null;
        if (e.key === "ArrowRight") j = (i + 1) % abas.length;
        if (e.key === "ArrowLeft") j = (i - 1 + abas.length) % abas.length;
        if (e.key === "Home") j = 0;
        if (e.key === "End") j = abas.length - 1;
        if (j !== null) { e.preventDefault(); ativar(abas[j], true); }
      });
    });
  }

  var ano = document.querySelector("[data-ano]");
  if (ano) ano.textContent = new Date().getFullYear();
})();
