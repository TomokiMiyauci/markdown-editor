<template>
  <v-row style="box-sizing: border-box;" no-gutters>
    <v-col cols="1">
      <div :style="{ minHeight }" :class="$style.base">
        <div v-for="i in rowCount" :key="i">{{ i }}</div>
      </div>
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
    const rowCount = ref(1)
    // const m = ref()

    watch(text, (now) => {
      emit('input', now)
    })
    const onInput = (e: InputEvent) => {
      if (!div.value) return
      const src = e.srcElement as HTMLDivElement
      const innner = getInnerContent(src.childNodes)
      const bbb = innner.join('\n')
      console.log(bbb)
      rowCount.value = src.childElementCount + 1

      text.value = bbb
      console.log(div.value.children)

      console.log(e)
    }

    const getInnerContent = (list: NodeListOf<ChildNode>) => {
      const a = []
      list.forEach((l) => {
        a.push(l.textContent)
      })
      return a
    }
    return { onInput, div, text, rowCount }
  },
})
</script>

<style lang="scss" module>
$color: rgb(38, 50, 56);
.base {
  box-sizing: inherit;
  padding: 20px;
  font-family: 'Source Code Pro', monospace;
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
  font-family: 'Source Code Pro', monospace;
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
  font-family: 'Source Code Pro', monospace;
  &:hover {
    background-color: rgb(33, 74, 136);
  }
}
</style>
