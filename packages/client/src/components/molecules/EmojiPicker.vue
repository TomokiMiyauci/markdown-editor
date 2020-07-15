<template>
  <promised :promise="promise">
    <template #pending>
      <v-card
        width="336px"
        height="420px"
        style="display: flex;"
        class="justify-center align-center"
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-card>
    </template>
    <template #default="emojiIndex">
      <picker
        :data="emojiIndex"
        :sheet-size="16"
        :emoji-tooltip="true"
        v-on="$listeners"
        set="facebook"
        title="Select emoji"
      />
    </template>
  </promised>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'

import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
import { Promised } from 'vue-promised'

const wait = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}
export default defineComponent({
  components: {
    Picker,
    Promised,
  },

  setup() {
    const promise = import('emoji-mart-vue-fast/data/facebook.json').then(
      async (v) => {
        await wait(600)
        return new EmojiIndex(v.default)
      }
    )
    return { promise }
  },
})
</script>
