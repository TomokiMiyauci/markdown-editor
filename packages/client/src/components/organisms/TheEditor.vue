<template>
  <v-row style="box-sizing: border-box;" no-gutters>
    <v-col cols="1">
      <div :style="{ minHeight }" :class="$style.base">1</div>
    </v-col>
    <v-col cols="11">
      <div
        ref="div"
        class="base"
        :style="{ minHeight }"
        contenteditable
        @input="onInput"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'nuxt-composition-api'
export default defineComponent({
  props: {
    minHeight: {
      type: [String, Number],
      default: '300px',
    },
  },
  setup(_, { emit }) {
    const div = ref<HTMLDivElement>()
    const text = ref<string>('')

    watch(text, (now) => {
      emit('input', now)
    })

    const onInput = (e: InputEvent) => {
      if (!div.value) return
      const src = e.srcElement as HTMLDivElement
      text.value = src.textContent
      console.log(div.value.children)
      console.log(e)
    }
    return { onInput, div, text }
  },
})
</script>

<style lang="scss" module>
$color: rgb(38, 50, 56);
.base {
  box-sizing: inherit;
  padding: 20px;
  color: white;
  background-color: $color;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-bottom-left-radius: 5px;
}
</style>
<style lang="scss" scoped>
$color: rgb(38, 50, 56);

.base {
  box-sizing: inherit;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  cursor: text;
  background-color: $color;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  caret-color: rgb(255, 196, 0);

  &:focus {
    outline: none;
  }
}
</style>
<style lang="scss">
div[contenteditable] > div {
  &:hover {
    background-color: rgb(33, 74, 136);
  }
}
</style>
