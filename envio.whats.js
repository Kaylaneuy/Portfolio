function formulario() {
  const nome = document.getElementById("formulario-nome").value;
  const email = document.getElementById("formulario-email").value;
  const desc = document.getElementById("formulario-desc").value;
  console.log(nome, email, desc);
  window.location.assign(template(desc));
}

const template = (text) =>
  `https://api.whatsapp.com/send?phone=5584998084621&te/xt=${text}`;
