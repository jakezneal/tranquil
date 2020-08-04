<template>
  <header class="c-header">
    <div class="c-header__logo">
      <Logo />
    </div>
  </header>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo,
  },
}
</script>

<style>
.c-header {
  margin-bottom: 2rem;
}
</style>
