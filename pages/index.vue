<template>
  <section>
    <h1>Hola, I'm Jake.</h1>
    <p>
      I'm a front-end developer focused on performance and accessibilty. Some of
      my favourite technologies and programming languages to work with are HTML,
      CSS, JavaScript, Vue.js, Nuxt.js, and Laravel.
    </p>

    <h2>You can find me in the following places:</h2>
    <ul>
      <li>
        <a href="https://twitter.com/jakezneal" target="_blank" rel="noopener">
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/jakezneal"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </a>
      </li>
      <li>
        <a href="https://github.com/jakezneal" target="_blank" rel="noopener">
          GitHub
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style>
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:root {
  --Background_Colour: #fff;
  --Text_Colour: #000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --Background_Colour: #000;
    --Text_Colour: #fff;
  }
}

html {
  background-color: var(--Background_Colour);
  color: var(--Text_Colour);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  line-height: 1.25;
}

body {
  padding: 3rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  max-width: 60ch;
}

a {
  color: var(--Text_Colour);
  padding: 0.5rem;
}

a:focus {
  border: 2px dashed var(--Text_Colour);
  outline: none;
}

li {
  margin-bottom: 0.5rem;
}
</style>
