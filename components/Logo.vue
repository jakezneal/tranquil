<template>
  <nuxt-link to="/" class="c-logo">
    <span class="u-visually-hidden">Homepage</span>
  </nuxt-link>
</template>

<style>
.c-logo {
  background-color: var(--Purple);
  border-radius: 50%;
  display: block;
  height: 50px;
  width: 50px;
}

.c-logo:focus {
  border: 0;
  outline-offset: 8px;
  outline: 2px dashed var(--Text_Colour);
}

.u-visually-hidden {
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
</style>
