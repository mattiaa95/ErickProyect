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
      "bot@jetskitenerifetours.com",
      "info@jetskitenerifetours.com",
      `Nueva reserva - ${message.name} Para: ${message.date}`,
      `${message.name} - ${message.date} - ${message.text} - motos single: ${message.jetskiS} - motos Double: ${message.jetskiD}`,
      {        
        token: "b397a6ad-0606-4a21-a2c0-062aacdec726"
        //callback: function done(message) { alert(message) }
         }
    );
};

$formContact.addEventListener("submit", sendForm);
