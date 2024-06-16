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
    this._isOpen = false; // Flag to track modal state

    this.addEventListener('click', this._handleClick.bind(this));
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
		div.item-card {
			width: 100%;
			margin: 10px;
			border: 1px solid #ccc;
			overflow: hidden;
			display: grid;
			grid-gap: 20px;
			background-color: #f9f9f9;
			border: 1px solid #000000;
			border-radius: 50px;
			box-shadow: 0 5px 8px #000000;
		}

		div.item-card div.item-card__content {
			padding: 15px;
			width: 100%;
		}

		div.item-card h3.item-card__title {
			color: #000000;
			display: inline-block;
			min-width: 44x;
			min-height: 44px;
			font-size: 18px;
			margin-bottom: 10px;
		}

		div.item-card p.item-card__info {
			font-size: 14px;
			margin-bottom: 10px;
		}

		div.item-card p.item-card__description {
			font-size: 14px;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

	div.modal {
        display: none; /* Sembunyikan modal pada awalnya */
        position: fixed; /* Tetap di tempat saat scrolling */
        z-index: 1; /* Letakkan di atas elemen lain */
        left: 0;
        top: 0;
        width: 100%; /* Lebar penuh */
        height: 100%; /* Tinggi penuh */
        //overflow: auto; /* Tambahkan scrollbar jika konten modal melebihi ketinggian layar */
        background-color: rgba(0, 0, 0, 0.4); /* Warna latar belakang semi-transparan */
        text-align: center;
        animation: fade-in 0.3s ease-in-out;
    }
  
  div.modal div.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* Posisikan modal di tengah layar */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Lebar modal */
    border-radius: 15px;
  }
  
  div.modal div.modal-content span#closeModal {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  div.modal div.modal-content p {
    
    // font-size: 28px;
    font-weight: bold;
  }

 div.modal div.modal-content div.modal__item{
    display: grid;
    //grid-template-columns: 250px 500px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 20px;
    
 }
  
  div.modal img.modal__image {
    
    width: 200px;
    height: auto;
    margin-bottom: 20px;
    border-radius: 5px; /* Lengkungan gambar */
  }

   div.modal div.modal-content p.modal__description {
    
    align-content: center;
    text-align: start;
    font-weight: lighter;

  }
  
  div.modal div.modal-content span#closeModal:hover,
  div.modal div.modal-content span#closeModal:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
    /* Animasi */
@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
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
        <button id="btnModal">Buka Modal</button>
        <div id="modal" class="modal">
          <div class="modal-content">
            <span id="closeModal">&times;</span>
            <h2>Pakaian Adat</h2>
            <p>${this._kulturama.PakaianAdat}</p>
            <div class="modal__item">
                <img src="${this._kulturama.Gambar}" alt="Gambar Provinsi" class="modal__image">
                <p class="modal__description">
                ${this._kulturama.Deskripsi}
                </p>
            </div>
            <button id="btnTutup">Tutup Modal</button>
          </div>
        </div>
      `;
  }

  _handleClick(event) {
    const { target } = event;
    if (target.id === 'btnModal') {
      this._openModal();
    } else if (target.id === 'closeModal' || target.id === 'btnTutup') {
      this._closeModal();
    }
  }

  _openModal() {
    if (!this._isOpen) {
      const modal = this.querySelector('#modal');
      modal.style.display = 'block';
      this._isOpen = true;
    }
  }

  _closeModal() {
    if (this._isOpen) {
      const modal = this.querySelector('#modal');
      modal.style.display = 'none';
      this._isOpen = false;
    }
  }
}

customElements.define('kulturama-item', KulturamaItem);
