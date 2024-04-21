<template>
  <section id="portfolio">
    <div class="container">
      <div class="column">
        <h1 class="title is-3">Portfolio</h1>
        <p class="subtitle">
          Here are some of the projects I've worked on. I've designed and
          developed websites, web apps, and mobile apps for a variety of clients
          and industries like Retail, Logistics, Recruitment and Healthcare.
        </p>
      </div>
      <div class="columns">
        <div class="column">
          <a
            href="https://www.behance.net/gallery/179360569/Koerber-Design-System-missing-protected-data"
            target="_blank"
          >
            <figure>
              <img
                src="../../assets/portfolio/portfolio-img-4.jpg"
                alt="Körber Design System"
              />
              <figcaption>
                <div class="wrapper">
                  <h4>Körber Design System</h4>
                  <p>
                    Körber Design System is a Design System for the all Körber
                    digital products. I designed and developed some of the
                    Design System guidelines and components using
                    <strong>Typescript</strong>,
                    <strong>Web components</strong> with
                    <strong>Lit</strong> and <strong>Figma</strong>.
                  </p>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>
        <div class="column">
          <a
            href="https://ltplabs.com/featured-insights/a-marketplace-for-analytics-solutions/"
            target="_blank"
          >
            <figure>
              <img
                src="../../assets/portfolio/portfolio-img-3.jpg"
                alt="Talent Portugal"
              />
              <figcaption>
                <div class="wrapper">
                  <h4>AIR</h4>
                  <p>
                    AIR is a platform that offer analytics solutions based on AI
                    models for companies to improve their business. I designed
                    it with Adobe XD and developed is using
                    <strong>HTML5</strong>, <strong>CSS3 (SCSS)</strong>,
                    <strong>JavaScript</strong>, <strong>Vue.js</strong>,
                    <strong>Git</strong>, <strong>Chart.js</strong>,
                    <strong>GraphQL</strong>, and
                    <strong>RESTful Services</strong> when working at LTPlabs.
                  </p>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a href="https://trustai.eu/" target="_blank">
            <figure>
              <img
                src="../../assets/portfolio/portfolio-img-6.jpg"
                alt="Trust AI"
              />
              <figcaption>
                <div class="wrapper">
                  <h4>Trust AI</h4>
                  <p>
                    Trust AI is a website that I developing while working for
                    LTPlabs. It presents a transparent, reliable and unbiased
                    smart AI tool that's applied in specific use cases. I
                    designed and developed the website with
                    <strong>HTML5</strong>, <strong>SCSS</strong>,
                    <strong>JavaScript</strong> and
                    <strong>Jekyll</strong> while working at LTPlabs.
                  </p>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="column">
          <figure>
            <img
              src="../../assets/portfolio/portfolio-img-1.jpg"
              alt="EUREKATHON"
            />
            <figcaption>
              <div class="wrapper">
                <h4>EUREKATHON</h4>
                <p>
                  Eurekathon is a data-driven competition that addresses
                  societal issues associated with sustainable development goals
                  supported by the European Union. I designed and developed
                  Eurekathon's all three editions:
                  <a href="https://www.eurekathon.com/" target="_blank">2021</a
                  >,
                  <a
                    href="https://www.eurekathon.com/2020/index.html"
                    target="_blank"
                    >2020</a
                  >
                  and
                  <a
                    href="https://www.eurekathon.com/2019/index.html"
                    target="_blank"
                    >2019</a
                  >.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a href="https://www.susanasoarespinto.eu/" target="_blank">
            <figure>
              <img
                src="../../assets/portfolio/portfolio-img-5.jpg"
                alt="Susana Soares Pinto"
              />
              <figcaption>
                <div class="wrapper">
                  <h4>Susana Soares Pinto</h4>
                  <p>
                    Susana Soares Pinto is a portuguese multimedia and plastic
                    artist. I designed and developed her website to showcase her
                    work and exhibitions. The website includes a gallery of her
                    work with a <strong>CMS</strong> to manage her own content
                    autonomously.
                  </p>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>
        <div class="column">
          <div>
            <a href="https://talentportugal.com/" target="_blank">
              <figure>
                <img
                  src="../../assets/portfolio/portfolio-img-2.jpg"
                  alt="Talent Portugal"
                />
                <figcaption>
                  <div class="wrapper">
                    <h4>Talent Portugal</h4>
                    <p>
                      Talent Portugal is a recruitment platform that connects
                      companies with the best talent in Portugal. I developed
                      the User Interface of the platform when I worked at
                      Webcomum, which includes a job board, company profiles,
                      and a candidate database.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#portfolio {
  padding-top: 90px;
}
#portfolio .title {
  font-size: 36px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin-bottom: 1.5rem;
}
#portfolio .subtitle {
  font-size: 18px;
  margin-bottom: 3rem;
}

figure {
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
}

figcaption {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 25%);
  color: white;
  text-align: center;
  .wrapper {
    width: 100%;
    height: 100%;

    h4 {
      font-size: 24px;
      font-family: "Hind Siliguri SemiBold", sans-serif;
      margin-bottom: 1rem;
    }
    p {
      font-size: 18px;
      font-family: "Hind Siliguri Regular", sans-serif;
      a {
        color: #33efab;
      }
    }
  }
}

img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 769px) {
  #portfolio .title {
    font-size: 24px;
  }
  #portfolio .subtitle {
    font-size: 16px;
  }
  figure {
    &::before {
      background-color: rgba(0, 0, 0, 0.7);
    }
    figcaption {
      transform: translate(-50%, 8%);
      width: 75%;
      .wrapper {
        h4 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
