<template>
  <section id="#home" class="hero is-small bg-gray banner">
    <div class="hero-body">
      <div class="container">
        <div class="main-banner columns">
          <div class="column">
            <div class="banner-content-wrapper">
              <img
                class="banner-text animate__animated animate__slower animate__fadeIn"
                src="../../assets/banner-text.svg"
                loading="lazy"
                alt="Hi I'm Maria, I design and build digital products for the ideal user experience."
              />
              <a href="#contact-me">
                <button
                  class="button-special button--wayra button--border-thick button--size-l animate__animated animate__slower animate__fadeIn"
                >
                  Let's Get In Touch!
                </button>
              </a>
            </div>
          </div>
          <div class="column">
            <div>
              <img
                class="banner-image animate__animated animate__slower animate__fadeIn"
                src="../../assets/banner-image-base.svg"
                loading="lazy"
                alt="Banner image"
              />
            </div>
          </div>
        </div>

        <div class="services columns  animate__animated animate__fadeInDown animate__delay-1s">
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">📱</div>
              <h1 class="banner-service-title">Websites supported in all devices</h1>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">🛠️</div>
              <h2 class="banner-service-title">Content Management Systems support</h2>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">🚀</div>
              <h2 class="banner-service-title">Search Engine Optimization and Performance</h2>
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

.banner-text {
  margin-bottom: 3rem;
}

.main-banner {
  margin-top: 8rem;
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
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .wrapper {
    background-color: #33efab;
    border-radius: 100%;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
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
      background-color: #F6F6F6;
      border: 5px solid #33efab;
    }
  }
  .column:nth-child(2) {
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    .wrapper {
      background-color: #F6F6F6;
      border: 5px solid #3b1df4;
    }
  }
  .column:nth-child(3) {
    .wrapper {
      background-color: #F6F6F6;
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
  margin-top: 0.5rem;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: 0;
}

@media screen and (max-width: 769px) {
  .subtitle,
  .title {
    font-size: 38px;
  }
  .banner-image {
    margin-top: 0;
  }
  .main-banner {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
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
  .banner-service-title {
    font-size: 17px;
  }
  .design-element {
    display: none;
    top: 77%;
    left: 17%;
    width: 58%;
  }
  .services .column:nth-child(2) {
    border-left: none !important;
    border-right: none !important;
  }
}
</style>
