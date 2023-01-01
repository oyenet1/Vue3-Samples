<<<<<<< HEAD
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
=======
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      links: [{ url: "calculator" }],
    };
  },
};
</script>

<template>
  <main
    class="
      space-y-6
      lg:space-y-8
      w-full
      rounded-lg
      text-blue-500
      uppercase
      bg-white
      p-6
      lg:max-w-5xl
      text-center
      border
    "
  >
    <h1
      class="
        text-center
        mx-auto
        px-6
        py-2
        shadow
        rounded
        font-medium
        text-2xl
        bg-white
        max-w-max
      "
    >
      My projects in Vue js
    </h1>

    <section class="w-full text-left p-4 rounded border">
      <h1 class="text-lg">Project List</h1>
      <div class="flex p-8 justify-center gap-4 items-center">
        <RouterLink
          v-for="(link, index) in links"
          :key="index"
          to="/calculator"
          class="
            text-sm
            p-2
            lowercase
            duration-300
            hover:text-white hover:bg-blue-500
            rounded
            border
            px-3
            border-blue-500
          "
          v-text="'#' + (index + 1) + ' ' + link.url"
        ></RouterLink>
      </div>
    </section>
>>>>>>> origin/cacl
  </main>
</template>
