<template>
  <section id="contact-me">
    <div class="container-fluid pr">
      <div class="container">
        <div class="columns">
          <div class="column column-form pr">
            <div class="hide-jotform-logo"></div>
            <iframe
              id="JotFormIFrame-240914489940364"
              title="Maria Furtado Bravo's website Contact Form"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/240914489940364"
              frameborder="0"
              loading="lazy"
              style="
                min-width: 100%;
                max-width: 100%;
                height: 539px;
                border: none;
              "
              scrolling="no"
            >
            </iframe>
          </div>
          <div class="column column-mail">
            <img src="../../assets/mail.svg" alt="mail" />
            <ul class="info">
              <li>
                <div>✉️</div>
                <a href="mailto:front.end.maria@gmail.com"
                  >front.end.maria@gmail.com</a
                >
              </li>
              <li>
                <div>👩🏼‍💻</div>
                <a href="https://www.linkedin.com/in/mariafbravo/"
                  >https://www.linkedin.com/in/mariafbravo/</a
                >
              </li>
              <li>
                <div>📌</div>
                <p>Full Remote - currently in Portugal</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        class="element"
        src="../../assets/contact-element.svg"
        alt="Contact background"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: 90px;
}
.pr {
  position: relative;
}
.element {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.hide-jotform-logo {
  position: absolute;
  content: "";
  width: 100%;
  height: 59px;
  background-color: #fff;
  z-index: 1000000;
  bottom: 20px;
}
.info {
  margin: 2.5rem 3rem;

  li {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    margin-bottom: 1rem;
    a,
    p {
      font-family: "Hind Siliguri SemiBold", sans-serif;
    }
    div {
      margin-right: 1rem;
    }
  }
}
@media screen and (max-width: 769px) {
  .info {
    margin: 4rem 7rem 13rem 7rem;
  }
  .column-mail {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    margin-top: -4rem;
  }
  section {
    padding-top: 60px;
  } 
}
</style>
