let night = false;

function handleClick(btn) {
  night = !night;
  updateStyle();
  updateBtn(btn);
}

function updateStyle() {
  if (night) {
    const style = document.createElement('style');
    style.setAttribute('id', 'night_theme_styles');
    style.innerHTML = `
      body, .sandboxhint { background: #333 !important }
      h1, h2, h3, blockquote, p, ul > li, ol > li { color: #EEE !important }
      pre, img { background: #EEE !important;}
      a, .solution { color: #e74c3c !important };
      .sandboxhint::before { border-right-color: #333 !important }`;
    document.head.appendChild(style);
  } else {
    document.getElementById('night_theme_styles').remove();
  }
}

function updateBtn(btn) {
  btn.textContent = night ? '🌕' : '🌑';
}

function init() {
  const btn = document.createElement('button');
  btn.classList = 'night_theme_switch';
  updateBtn(btn);
  btn.onclick = () => {
    handleClick(btn);
  };
  document.body.insertBefore(btn, document.body.firstChild);
}

init();
