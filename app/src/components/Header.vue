<script setup>
import { ref } from "vue";

const menuItems = ref([
  { name: "Services", link: "#" },
  { name: "What I Offer", link: "#" },
  { name: "Portfolio", link: "#" },
  { name: "Technologies", link: "#" },
  { name: "Contact me", link: "#" },
]);
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              class="mt-2 mb-2 logo"
              src="../assets/maria-bravo-logo.svg"
              alt="Maria Bravo logo"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <template v-for="item in menuItems" :key="item.name">
                  <a class="menu-item" :href="item.link">{{ item.name }}</a>
                </template>
                <a
                  class="button is-rounded linkedin"
                  href="https://www.linkedin.com/in/mariafbravo/"
                  target="_blank"
                >
                  <img src="../assets/icons/linkedin.svg" alt="LinkedIn" />
                  <strong>LinkedIn</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.navbar-item img {
  max-height: unset;
}
.buttons {
  display: flex;
  align-items: center;
  a {
    margin: 0.5rem;
    padding: 0.5rem;
  }
}

header {
  background-color: #fff;
}
.linkedin {
  transition: all 0.3s;
  border: 1px solid #0077b5;
  color: #0077b5;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  padding: 0.5rem 1rem !important;
  align-items: normal;
  cursor: pointer;
  font-size: 15px;
  img {
    margin-right: 0.3rem;
  }
}
.menu li {
  margin: 0.5rem;
  padding: 0.5rem;
}
.menu-item {
  color: #343841;
  font-family: "Hind Siliguri SemiBold", sans-serif;
  font-size: 15px;
  margin: 0.5rem;
  padding: 0.5rem;
  &:hover {
    color: #33efab;
  }
  &:active {
    color: #33efab;
  }
}
</style>
