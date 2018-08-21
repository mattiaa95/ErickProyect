const token = "f10baaec-c38f-457e-921a-632ded53c42c";
const $formContact = document.querySelector("#contact");

const sendForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#Name").value,
    jetskiS: document.querySelector("#SJetski").value,
    jetskiD: document.querySelector("#DJetski").value,
    text: document.querySelector("#Message").value,
    date: document.querySelector("#Date").value
  };
  smtpJS(message);
};
const smtpJS = message => {
    Email.send(
      "mattiaa95@gmail.com",
      "info@jetskitenerifetours.com",
      `Nueva reserva - ${message.name} Para: ${message.date}`,
      `${message.name} - ${message.date} - ${message.text} - motos single: ${message.jetskiS} - motos Double: ${message.jetskiD}`,
      { token }
    );
};

$formContact.addEventListener("submit", sendForm);