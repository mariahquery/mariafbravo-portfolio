<script setup>
import Card from "../Card.vue";

const serviceRows = [
  [
    {
      title: "Design Systems & Web Components",
      description:
        "Building scalable, accessible Web Components with Lit, TypeScript and SCSS, with 15+ components adopted across 28+ products.",
      emoji: "🧩",
    },
    {
      title: "Framework Integrations",
      description:
        "Making design system components work seamlessly in Vue, so adopter teams can move fast independently.",
      emoji: "🔗",
    },
    {
      title: "AI Agent Instructions & Skills",
      description:
        "Authoring AI agent instructions, guardrails and reusable AI Skills that let teams integrate the design system on their own, reducing direct support.",
      emoji: "🤖",
    },
  ],
  [
    {
      title: "Agentic Testing & Evals",
      description:
        "Building agentic unit-test generation loops and Promptfoo evals in CI/CD to safeguard quality on every release.",
      emoji: "🧪",
    },
    {
      title: "Documentation & Developer Experience",
      description:
        "Interactive documentation with live, copy-ready examples, plus contributions to the Design Tokens and theming system.",
      emoji: "📚",
    },
    {
      title: "Design-to-Code",
      description:
        "A design background that means components aren't just built to spec. They're built to actually work for the people using them.",
      emoji: "🎨",
    },
  ],
];
</script>

<template>
  <section id="services">
    <div class="container">
      <div class="column">
        <h4 class="title">Focus Areas</h4>
      </div>

      <div v-for="(row, rowIndex) in serviceRows" :key="rowIndex" class="columns">
        <div
          v-for="(service, index) in row"
          :key="service.title"
          class="column"
          :class="{ 'is-one-third-fullhd': index === 0 }"
        >
          <Card :title="service.title" :description="service.description">
            <template v-slot:emoji><div class="emoji">{{ service.emoji }}</div></template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#services {
  .title {
    font-size: 36px;
    font-family: "Hind Siliguri Bold", sans-serif;
    color: #292830;
    margin-top: 80px;
  }
}
.emoji {
  font-size: 30px;
}
</style>
