<template>
  <div
    class="markdown-body"
    :style="{ minHeight }"
    :class="$style.base"
    v-html="$md.render(text)"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({
  props: {
    minHeight: {
      type: [String, Number],
      default: '300px',
    },

    text: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" module>
.base {
  padding: 20px;
  background-color: white;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-bottom-right-radius: 5px;
}
</style>
