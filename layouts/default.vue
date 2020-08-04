<template>
  <div class="app">
    <a href="#main" class="c-skip-link">Skip to main content</a>
    <Header />
    <main id="main" tabindex="-1">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style>
main:focus {
  outline: 0;
}

.c-skip-link:not(:focus) {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

.c-skip-link:focus {
  display: block;
  left: 0;
  position: absolute;
  top: 0;
}
</style>
