<script setup>
import Header from "./components/Header.vue";
import BannerSection from "./components/sections/BannerSection.vue";
import ServicesSection from "./components/sections/ServicesSection.vue";
import WhatIOfferSection from "./components/sections/WhatIOfferSection.vue";
import CodeBannerSection from "./components/sections/CodeBannerSection.vue";
import PortfolioSection from "./components/sections/PortfolioSection.vue";
import TechnologiesSection from "./components/sections/TechnologiesSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
import BannerSmallSection from "./components/sections/BannerSmallSection.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header></Header>
    <BannerSection></BannerSection>
    <ServicesSection></ServicesSection>
    <WhatIOfferSection></WhatIOfferSection>
    <BannerSmallSection></BannerSmallSection>
    <CodeBannerSection></CodeBannerSection>
    <PortfolioSection></PortfolioSection>
    <TechnologiesSection></TechnologiesSection>
    <ContactSection></ContactSection>
    <Footer></Footer>
  </main>
</template>

<style scoped lang="scss"></style>
