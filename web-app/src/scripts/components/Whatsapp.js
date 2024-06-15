function sendToWhatsapp() {
  const number = '+6283861616016';

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const url = `https://wa.me/${number}?text=`
        + `Name : ${name}%0a`
        + `Email : ${email}%0a`
        + `Message : ${message}%0a%0a`;

  window.open(url, '_blank').focus();
}

window.sendToWhatsapp = sendToWhatsapp;
