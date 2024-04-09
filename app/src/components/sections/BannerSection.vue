<template>
  <section id="#home" class="hero is-small bg-gray banner">
    <div class="hero-body">
      <div class="container">
        <div class="main-banner columns">
          <div class="column">
            <div class="banner-content-wrapper">
              <img
                class="design-element"
                src="../../assets/design-element.svg"
                alt="Design Element Maria Bravo"
              />
              <h1 class="title">Hi, I’m Maria:</h1>
              <h2 class="subtitle">
                I design and build digital products for the<br />
                ideal user experience
              </h2>
              <a href="#contact-me">
                <button
                  class="button-special button--wayra button--border-thick button--size-l"
                >
                  Let's Get In Touch!
                </button>
              </a>
            </div>
          </div>
          <div class="column">
            <div>
              <img
                class="banner-image"
                src="../../assets/banner-image-base.svg"
                alt="Banner image"
              />
            </div>
          </div>
        </div>

        <div class="services columns">
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">📱</div>
              <h3 class="banner-service-title">Responsive Websites</h3>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">🛠️</div>
              <h3 class="banner-service-title">CMS solutions with Webflow</h3>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">🚀</div>
              <h3 class="banner-service-title">Web Performance and SEO</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 1rem 0 !important;
}

.title {
  font-size: 59px;
  font-family: "Hind Siliguri Bold", sans-serif;
  color: #33efab;
}
.subtitle {
  font-size: 59px;
  line-height: 1.2;
  font-family: "Hind Siliguri Bold", sans-serif;
  color: #343841;
  margin-bottom: 3rem;
}
.main-banner {
  margin-top: 8rem;
}
.design-element {
  display: none;
  position: absolute;
  top: 76%;
  left: 20%;
}
.banner-service-title {
  font-size: 20px;
  font-family: "Hind Siliguri SemiBold", sans-serif;
  color: #343841;
  text-align: center;
  max-width: 170px;
  line-height: 1.2;
}
.banner-service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .wrapper {
    background-color: #33efab;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    margin-bottom: 1.5rem;
    font-size: 35px;
    width: 80px;
    height: 80px;
  }
}
.services {
  margin-top: 2rem;
  .column:nth-child(1) {
    .wrapper {
      background-color: #fff;
      border: 5px solid #33efab;
    }
  }
  .column:nth-child(2) {
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    .wrapper {
      background-color: #fff;
      border: 5px solid #3b1df4;
    }
  }
  .column:nth-child(3) {
    .wrapper {
      background-color: #fff;
      border: 5px solid #fec704;
    }
  }
}
.worktogether {
  cursor: pointer;
  transition: all 0.3s;
  background-color: #3b1df4;
  padding: 0.5rem 1.5rem !important;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 18px;
  margin-top: 2rem;
  img {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: #33efab;
    color: white;
  }
}
.banner-content-wrapper {
  position: relative;
  margin-top: 0.5rem;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: 0;
}

@media screen and (max-width: 769px) {
  .subtitle,
  .title {
    font-size: 44px;
  }
  .banner-image {
    margin-top: 0;
  }
  .main-banner {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 7rem;
  }
  .title {
    margin-top: 3rem;
  }
  .banner-service-item {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .design-element {
    top: 77%;
    left: 17%;
    width: 58%;
  }
  .services .column[data-v-5fa86a66]:nth-child(2) {
    border-left: none;
    border-right: none;
  }
}
</style>
