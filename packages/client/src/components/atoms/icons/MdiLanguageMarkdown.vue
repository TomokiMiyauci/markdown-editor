<template>
  <v-icon v-bind="$attrs">{{ mdiLanguageMarkdown }}</v-icon>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import { mdiLanguageMarkdown } from '@mdi/js'
export default defineComponent({
  setup() {
    return { mdiLanguageMarkdown }
  },
})
</script>
