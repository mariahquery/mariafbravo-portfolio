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
            <div
              class="banner-image-wrapper animate__animated animate__slower animate__fadeIn"
            >
              <div class="circle">
                <div
                  class="custom-tile developer animate__animated animate__fadeInLeft"
                >
                  <div>developer</div>
                </div>
                <div
                  class="custom-tile projects animate__animated animate__fadeInRight"
                >
                  <div
                    class="symbol light-blue is-flex is-justify-content-center is-align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="none"
                    >
                      <path
                        fill="#3B1DF4"
                        fill-rule="evenodd"
                        d="M20.583 20.583c0 .598-.486 1.084-1.083 1.084h-13a1.084 1.084 0 0 1-1.083-1.084V8.667c0-.598.486-1.084 1.083-1.084v1.084c0 1.195.972 2.166 2.167 2.166h8.666A2.169 2.169 0 0 0 19.5 8.667V7.583c.597 0 1.083.486 1.083 1.084v11.916ZM8.667 4.333l8.666.004v4.33H8.667V4.333ZM19.5 5.417V4.333a2.169 2.169 0 0 0-2.167-2.166H8.667A2.169 2.169 0 0 0 6.5 4.333v1.084a3.254 3.254 0 0 0-3.25 3.25v11.916a3.254 3.254 0 0 0 3.25 3.25h13a3.254 3.254 0 0 0 3.25-3.25V8.667a3.254 3.254 0 0 0-3.25-3.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="custom-number">20+</div>
                    <strong>projects</strong>
                  </div>
                </div>
                <div
                  class="custom-tile designer animate__animated animate__fadeInRight"
                >
                  <div>designer</div>
                </div>

                <img
                  class="banner-image"
                  src="../../assets/maria.png"
                  alt="Maria"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="services columns animate__animated animate__fadeIn animate__delay-1s"
        >
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">📱</div>
              <h1 class="banner-service-title">
                Websites supported in all devices
              </h1>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">🛠️</div>
              <h2 class="banner-service-title">
                Content Management Systems support
              </h2>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">🚀</div>
              <h2 class="banner-service-title">
                Search Engine Optimization and Performance
              </h2>
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

.mask {
  mask-image: url("../../assets/maria.png");
}

.banner-image-wrapper {
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  .circle {
    background-color: #33efab;
    border-radius: 100%;
    width: 428px;
    height: 428px;
    position: relative;
  }
  .custom-tile {
    font-weight: bold;
    background-color: #fff;
    border-radius: 15px;
    position: absolute;
    padding: 10px 18px;
    text-transform: capitalize;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;

    .custom-number {
      font-size: 25px;
      font-family: "Hind Siliguri SemiBold", sans-serif;
      font-weight: bold;
      color: #3b1df4;
      line-height: 25px;
    }

    .symbol {
      width: 14px;
      height: 14px;
      border-radius: 100%;
      display: inline-block;
      margin-right: 10px;
      &.blue {
        background-color: #3b1df4;
      }
      &.light-blue {
        background-color: rgba(72, 128, 255, 0.3);
        width: 50px;
        height: 50px;
      }
      &.yellow {
        background-color: #fec704;
      }
    }
    &.developer {
      top: 45%;
      left: -18%;
    }
    &.projects {
      top: 14%;
      left: 75%;
    }
    &.designer {
      top: 60%;
      left: 84%;
    }
  }
}

.banner-image {
  position: relative;
  left: 2%;
  top: -15%;
  clip-path: circle(218px at center);
  width: 96%;
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
      background-color: #f6f6f6;
      border: 5px solid #33efab;
    }
  }
  .column:nth-child(2) {
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    .wrapper {
      background-color: #f6f6f6;
      border: 5px solid #3b1df4;
    }
  }
  .column:nth-child(3) {
    .wrapper {
      background-color: #f6f6f6;
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

@media screen and (max-width: 450px) {
  .custom-tile {
    font-size: 14px;
    &.developer {
      top: 25% !important;
      left: -7% !important;
    }
    &.projects {
      top: 8% !important;
      left: 60% !important;
    }
    &.designer {
      top: 54% !important;
      left: 77% !important;
    }
  }
  .custom-number {
    font-size: 21px;
    line-height: 21px;
  }
}

@media screen and (max-width: 769px) {
  .subtitle,
  .title {
    font-size: 38px;
  }
  .banner-image {
    margin-top: 0;
    top: -12%;
    clip-path: circle(145px at center);
  }
  .main-banner {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: column-reverse;
    margin-top: 4rem;
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
  .circle {
    width: 300px !important;
    height: 300px !important;
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
