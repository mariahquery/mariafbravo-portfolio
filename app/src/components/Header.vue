<script setup>
import { ref } from "vue";

const menuItems = ref([
  { name: "About me", link: "#about-me" },
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Technologies", link: "#technologies" },
  { name: "Contact me", link: "#contact-me" },
]);

const showNav = ref(false);

const triggerMenuItem = () => {
  showNav.value = false;
};
</script>

<template>
  <header>
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#banner">
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
            @click="showNav = !showNav" :class="{ 'is-active': showNav }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <template v-for="item in menuItems" :key="item.name">
                  <a
                    @click="triggerMenuItem"
                    class="menu-item"
                    :href="item.link"
                    >{{ item.name }}</a
                  >
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
      </div>
    </nav>
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

@media screen and (max-width: 769px) {
  .navbar-burger {
    display: flex;
    align-self: center;
  }
  .buttons {
    display: block;
    display: flex;
    flex-direction: column;
  }
}
</style>
