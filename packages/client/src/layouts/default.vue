<template>
  <v-app>
    <the-app-bar />
    <v-main>
      <nuxt />
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({})
</script>
