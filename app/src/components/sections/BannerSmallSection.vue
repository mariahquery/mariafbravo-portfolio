<template>
  <section class="banner-small">
    <div class="container-fluid bg">
      <div class="container">
        <div class="column">
          <div class="wrapper">
            <h6 class="banner-title">
              Need a brand new website?<br />
              <span class="main-color">Let’s start a project together.</span>
            </h6>
            <a href="#contact-me">
              <button
                class="button-special button--wayra button--border-thick button--size-l"
              >
                Send me a message!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner-title {
  font-size: 50px;
  font-family: "Hind Siliguri Bold", sans-serif;
  color: #292830;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.wrapper {
  padding: 50px 0 110px 0;
}

.bg {
  background-color: #f6f6f6;
}
@media screen and (max-width: 769px) {
  .banner-title {
    font-size: 36px;
  }
  .banner-padding {
    padding: 35px 0 90px 0;
  }
}
</style>
