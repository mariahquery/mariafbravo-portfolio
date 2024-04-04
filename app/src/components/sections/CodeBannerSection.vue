<script setup></script>

<template>
  <section>
    <div class="container-fluid bg-img">
      <div class="container pr">
        <div class="columns wrapper">
          <div class="column is-one-third">
            <h5 class="content-title">
              Explore the code behind my website <span><></span>
            </h5>
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
                  src="../../assets/icons/arrow-right.svg"
                  alt="Arrow right"
                />
              </button>
            </a>
          </div>
          <div class="column pr">
            <img
              src="../../assets/VsCode.svg"
              alt="Visual Studio Code"
              class="bg-code-banner"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pr {
  position: relative;
}

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 35%);
  width: 100%;
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

@media screen and (max-width: 769px) {
  .wrapper {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    .content-title {
      font-size: 50px;
      margin: 4rem 4rem 0 5rem;
    }
    .content-description {
      font-size: 18px;
      margin: 0 4rem 1.2rem 5rem;
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
}
</style>
