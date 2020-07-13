<template>
  <picker set="facebook" :data="emojiIndex" />
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'

import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
import data from 'emoji-mart-vue-fast/data/facebook.json'
const emojiIndex = new EmojiIndex(data)

export default defineComponent({
  components: {
    Picker,
  },

  setup() {
    return {
      emojiIndex,
    }
  },
})
</script>

<style>
@import 'emoji-mart-vue-fast/css/emoji-mart.css';
</style>
