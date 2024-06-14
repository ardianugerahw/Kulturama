class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footerbar">
            <div class="foot-title">About Us</div>
            <p>Melalui Kulturama, kami berusaha memanfaatkan teknologi digital untuk menyajikan konten budaya Indonesia dalam format yang menarik dan interaktif. Kami percaya bahwa dengan pendekatan ini, generasi muda akan lebih tertarik dan termotivasi untuk mengenal, menghargai, dan melestarikan warisan budaya Indonesia.</p>
        </div>
        `;
  }
}

customElements.define('footer-bar', footerBar);
