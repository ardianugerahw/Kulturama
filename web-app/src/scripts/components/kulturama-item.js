class KulturamaItem extends HTMLElement {
	constructor() {
		super();

		this._kulturama = {
			Provinsi: 'Nanggroe Aceh Darussalam',
			Gambar: '',
			IbuKota: 'Banda Aceh',
			PakaianAdat: '',
			Deskripsi: 'Deskripsi untuk Wilayah 1',
		};

		this._style = document.createElement('style');
	}
	setKulturama(value) {
		this._kulturama['Provinsi'] = value.Provinsi;
		this._kulturama['Gambar'] = value.Gambar;
		this._kulturama['IbuKota'] = value.IbuKota;
		this._kulturama['PakaianAdat'] = value.PakaianAdat;
		this._kulturama['Deskripsi'] = value.Deskripsi;

		this.render();
	}
	connectedCallback() {
		this.render();
	}
	updateStyle() {
		this._style.textContent = `
        
		

        .item-card {
  width: 300px; /* Adjust as needed */
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.item-card__image {
  width: 100%;
  height: 150px; /* Adjust as needed */
  object-fit: cover;
}

.item-card__content {
  padding: 15px;
}

.item-card__title {
  font-size: 18px;
  margin-bottom: 10px;
}

.item-card__info {
  font-size: 14px;
  margin-bottom: 10px;
}

.item-card__description {
  font-size: 14px;
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
                    <span class="item-card__label">${this._kulturama.IbuKota}</span> Banda Aceh
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
