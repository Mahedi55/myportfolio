function copyBibtex(id) {
  const bibtexBlock = document.getElementById(id);
  if (!bibtexBlock || !navigator.clipboard) return;
  const text = bibtexBlock.innerText;

  navigator.clipboard.writeText(text).then(() => {
    const button = document.querySelector(`[onclick="copyBibtex('${id}')"]`);
    if (button) {
      button.setAttribute('aria-label', 'BibTeX copied to clipboard');
      window.setTimeout(() => button.removeAttribute('aria-label'), 1800);
    }
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}
