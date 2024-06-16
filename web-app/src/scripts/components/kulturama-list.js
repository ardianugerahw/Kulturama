class KulturamaList extends HTMLElement {
  constructor() {
    super();
    this._ArrayKulturama = [];
    this._style = document.createElement('style');
  }

  setKulturamaList(value) {
    this._ArrayKulturama = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
		kulturama-list {
			display: grid;
			grid-gap: 20px;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			justify-items: center;
			width: 100%;
			padding: 20px;
			background-color: #1c1f21;
		}`;
  }

  render() {
    this.updateStyle();

    const kuturamaItemMap = this._ArrayKulturama.map((data) => {
      const MapRama = document.createElement('kulturama-item');
      if ('setKulturama' in MapRama) {
        MapRama.setKulturama(data);
      } else {
        console.error('Error: kulturama-item tidak punya setKulturama method.');
      }
      return MapRama;
    });

    this.innerHTML = '';
    this.append(this._style, ...kuturamaItemMap);
  }
}
customElements.define('kulturama-list', KulturamaList);
