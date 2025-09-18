// ===== Glitch dinâmico do título =====
const glitchText = document.querySelector('.glitch');
glitchText.setAttribute('data-text', glitchText.innerText);

// ===== Piscada sutil da janela =====
const windowEl = document.querySelector('.window');
setInterval(() => {
  windowEl.style.boxShadow = Math.random() > 0.5 ? '6px 6px 0 #ff6eff' : '6px 6px 0 #6eafff';
}, 700);
