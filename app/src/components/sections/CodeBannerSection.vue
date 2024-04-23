<script setup></script>

<template>
  <section>
    <div class="container-fluid bg-img">
      <div class="container wrapper">
        <div class="columns">
          <div class="column is-one-third">
            <h6 class="content-title">
              Explore the code behind my website <span><></span>
            </h6>
            <p class="content-description">
              I designed and developed this website as a showcase of my skills,
              and I invite you to explore my code on my GitHub repository.
            </p>
            <a
              href="https://github.com/mariahquery/mariafbravo-portfolio"
              target="_blank"
            >
              <button class="button is-rounded github">
                <strong>View on my GitHub</strong>
                <img
                  loading="lazy"
                  src="../../assets/icons/arrow-right.svg"
                  alt="Visual Studio Code Maria Bravo Website Code"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.github {
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #33efab;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 15px;
  font-size: 21px;
  img {
    margin-left: 1rem;
  }
}
.bg-img {
  background-image: url("../../assets/bg-code-banner.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
}
.wrapper {
  position: absolute;
  width: 100%;
  transform: translate(-50%, 50%);
  left: 50%;
  bottom: 50%;
}
.content-title {
  font-size: 69px;
  font-family: "Hind Siliguri Bold", sans-serif;
  color: #ffffff;
  line-height: 1;
  max-width: 346px;
  padding: 2rem 0;
  span {
    color: #33efab;
  }
}
.content-description {
  font-size: 20px;
  font-family: "Hind Siliguri Regular", sans-serif;
  color: #ffffff;
  max-width: 400px;
  line-height: 1.5;
  margin-bottom: 3rem;
}
.wrapper {
  .title {
    font-family: "Hind Siliguri Bold", sans-serif;
    color: #ffffff;
  }

  .bg-code-banner {
    width: 100%;
    position: absolute;
    right: -22%;
  }
}

@media screen and (max-width: 480px) {
  .bg-code-banner {
    display: none !important;
  }
  .wrapper .content-title {
    font-size: 46px;
  }
  .columns:nth-child(2) {
    display: none;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .content-title {
    font-size: 40px;
  }
  .wrapper {
    left: 65%;
  }
}

@media screen and (max-width: 769px) {
  .wrapper {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    .content-title {
      font-size: 38px;
      margin: 0 4rem 0 5rem;
      max-width: 195px;
    }
    .content-description {
      font-size: 18px;
      margin: 0px 8rem 1.2rem 5rem;
      max-width: 250px;
    }
    .github {
      margin: 2rem 4rem 1.2rem 5rem;
    }
    .bg-code-banner {
      position: relative;
      right: 0%;
      width: 100%;
      margin: 1rem 4rem 2.2rem 5rem;
    }
  }
  .bg-img {
    height: 100%;
  }
}
</style>
