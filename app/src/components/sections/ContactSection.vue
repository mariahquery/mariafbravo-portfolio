<template>
  <section class="contact">
    <div class="container-fluid">
      <div class="container">
        <div class="columns">
          <div class="column pr">
            <div class="hide-jotform-logo"></div>
            <iframe
              id="JotFormIFrame-240914489940364"
              title="Maria Furtado Bravo's website Contact Form"
              onload="window.parent.scrollTo(0,0)"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/240914489940364"
              frameborder="0"
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
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: 90px;
  background-color: #191919;
}
.pr {
  position: relative;
}
.hide-jotform-logo {
  position: absolute;
  content: "";
  width: 100%;
  height: 59px;
  background-color: #191919;
  z-index: 1000000;
  bottom: 20px;
}
</style>
