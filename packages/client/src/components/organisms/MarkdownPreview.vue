<template>
  <div
    :style="{ minHeight }"
    :class="$style.base"
    v-html="$md.render(text)"
    class="markdown-body"
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
  font-size: 16px;
  background-color: white;
  border-bottom-right-radius: 5px;
}
</style>
