<template>
  <picker
    set="facebook"
    :data="emojiIndex"
    title="Select emoji"
    :emoji-tooltip="true"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'

import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
import data from 'emoji-mart-vue-fast/data/facebook.json'

export default defineComponent({
  components: {
    Picker,
  },

  setup() {
    const emojiIndex = new EmojiIndex(data)

    return { emojiIndex }
  },
})
</script>

<style src="emoji-mart-vue-fast/css/emoji-mart.css" />
