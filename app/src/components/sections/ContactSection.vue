<template>
  <section>
    <div class="container-fluid pr">
      <div class="container">
        <div class="column">
          <h6 class="title is-3">Contact Me</h6>
          <p class="subtitle">
            Let's get in touch! I'm always open to new opportunities and
            collaborations. Feel free to reach out to me if you have any
            questions or just want to say hi!
          </p>
        </div>
        <div class="columns">
          <!--<div class="column column-form pr">
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
          </div> -->

          <!--<form @submit.prevent="handleSubmit">
            <div>
              <label for="name">Nome:</label>
              <input type="text" v-model="name" required />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" v-model="email" required />
            </div>
            <div>
              <label for="message">Email:</label>
              <textarea for="message"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
          <div v-if="message">{{ message }}</div>-->

          <div class="column column-mail">
            <div class="contact-info is-flex is-justify-content-center">
              <!--<img src="../../assets/mail.svg" alt="mail" />-->
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
      </div>
      <img
        class="element"
        src="../../assets/contact-element.svg"
        alt="Contact background"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { db, collection, addDoc, serverTimestamp } from '../../firebaseConfig';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = async () => {
  try {
    await addDoc(collection(db, 'formResponses'), {
      name: name.value,
      email: email.value,
      timestamp: serverTimestamp()
    });
    message.value = 'Formulário enviado com sucesso!';
    name.value = '';
    email.value = '';
  } catch (error) {
    message.value = 'Erro ao enviar formulário: ' + error.message;
  }
};
</script>

<style scoped lang="scss">
.title {
  font-size: 36px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin-bottom: 1.5rem;
}
.subtitle {
  font-size: 18px;
}
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
  margin: 6rem 3rem;

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
    margin: 8rem 7rem 16rem 7rem;
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
