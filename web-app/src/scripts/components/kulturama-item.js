class KulturamaItem extends HTMLElement {
  constructor() {
    super();

    this._kulturama = {
      Provinsi: '',
      Gambar: '',
      IbuKota: '',
      PakaianAdat: '',
      Deskripsi: '',
    };

    this._style = document.createElement('style');
  }

  setKulturama(value) {
    this._kulturama.Provinsi = value.Provinsi;
    this._kulturama.Gambar = value.Gambar;
    this._kulturama.IbuKota = value.IbuKota;
    this._kulturama.PakaianAdat = value.PakaianAdat;
    this._kulturama.Deskripsi = value.Deskripsi;

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
		.item-card {
			width: 100%;
			margin: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;
			overflow: hidden;
			display: grid;
			grid-gap: 20px;
			background-color: #f9f9f9;
			border: 1px solid #000000;
			border-radius: 7px;
			box-shadow: 0 5px 8px #000000;
		}

		.item-card__content {
			padding: 15px;
			width: 100%;
		}

		.item-card__title {
			color: #000000;
			display: inline-block;
			min-width: 44x;
			min-height: 44px;
			font-size: 18px;
			margin-bottom: 10px;
		}

		.item-card__info {
			font-size: 14px;
			margin-bottom: 10px;
		}

		.item-card__description {
			font-size: 14px;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
				`;
  }

  render() {
    this.updateStyle();

    this.innerHTML = `
        ${this._style.outerHTML}
                <div class="item-card">
                	<img src="${this._kulturama.Gambar}" alt="Gambar Provinsi" class="item-card__image">
					<div class="item-card__content">
						<h3 class="item-card__title">${this._kulturama.Provinsi}</h3>
						<p class="item-card__info">
						<span class="item-card__label">${this._kulturama.IbuKota}</span>
						</p>
						<p class="item-card__description">
						${this._kulturama.Deskripsi}
						</p>
					</div>
                </div>
			`;
  }
}
customElements.define('kulturama-item', KulturamaItem);
