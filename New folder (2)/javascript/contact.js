/***************************************   CONTACT   ***************************************/

const sendMessage = () => {
    const email = document.querySelector("#email").value;
    const firstname = document.querySelector("#firstname").value;
    const message = document.querySelector("#message").value;
    const emailRegex = /\S+@\S+\./;
    const noHtmlRegex = /[</>]/;
  
    /* 3st const som används för att ta upp deras respektive elements value properties, detta låter mig nå vad som skrivs in i fälten.
    emailRegex används för att kolla om vissa strängar innehåller @-tecken och punkter, kommer användas i Try-catch senare. noHtmlRegex används för att 
    stoppa vissa symboler att använads i strängar.*/
  
  
    try {
      if (!emailRegex.test(email)) {
        throw "Incorrect email";
      }
      if (noHtmlRegex.test(email)) {
        throw "Incorrect email syntax";
      }
      if (noHtmlRegex.test(firstname)) {
        throw "Incorrect firstname";
      }
      if (noHtmlRegex.test(message)) {
        throw "Incorrect message";
      }
      showModal(firstname, message);
    } catch (error) {
      switch (error) {
        case "Incorrect email":
          document.querySelector("#email-error").innerHTML = error;
          setTimeout(() => {
            document.querySelector("#email-error").innerHTML = "";
          }, 3000);
          break;
        case "Incorrect email syntax":
          document.querySelector(
            "#email-error"
          ).innerHTML = `${error}, please avoid using: <, /, or >`;
          setTimeout(() => {
            document.querySelector("#email-error").innerHTML = "";
          }, 3000);
          break;
        case "Incorrect firstname":
          document.querySelector(
            "#firstname-error"
          ).innerHTML = `${error}, please avoid using: <, /, or >`;
          setTimeout(() => {
            document.querySelector("#firstname-error").innerHTML = "";
          }, 3000);
          break;
        case "Incorrect message":
          document.querySelector(
            "#message-error"
          ).innerHTML = `${error}, Please avoid using: <, /, or >`;
          setTimeout(() => {
            document.querySelector("#message-error").innerHTML = "";
          }, 3000);
          break;
        default:
          alert("something went wrong!");
      }
    }
  };
  
  /* Try catch + switch sats för att fånga upp felakti syntax som satts upp tidigare, kollar för korrekt e-post format samt kollar för <, / och > i fälten och slänger ett felmeddelande om 
  de upptäks och villket fält felet skrevs i. Fel meddelandet vissas i 3 sekunder. Ifall något går fel men inte är någon av dessa så vissas ett default meddelande.  */
  
  const showModal = (firstname, message) => {
    document.querySelector("#modal").style.display = "flex";
    setTimeout(() => {
      document.querySelector("#modal").innerHTML = `
          <h2>Hi ${firstname}</h2>
          <p>Your message has been received!</p>
          <p>We'll get back to you soon as we can!</p>
          <button onclick="closeModal()">Close</button>
      `;
    }, 3000);
  
    /* Modal som använder namnet som skrivs in i firstname som en del av meddelandet, samt en knapp som stänger ner modalen. setTimeout används för att sätta hur länge laddningsanimationen
    från CSS'n ska spelas innan meddelantet vissas. */
  };
  
  const closeModal = () => {
    document.querySelector("#email").value = "";
    document.querySelector("#firstname").value = "";
    document.querySelector("#message").value = "";
    document.querySelector("#modal").style.display = "none";
    document.querySelector("#modal").innerHTML = `<span class="loader"></span>`;
  };
  
  /* Tömmer de respektive fälten när CloseModal  används samt nollställer modalens innehåll så att ny information kan vissas. */














































































