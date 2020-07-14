<template>
  <picker
    :data="emojiIndex"
    :sheet-size="16"
    :emoji-tooltip="true"
    v-on="$listeners"
    set="facebook"
    title="Select emoji"
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
