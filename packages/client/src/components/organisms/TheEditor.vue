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
        :style="{ minHeight }"
        @input="onInput"
        @keydown="onKey"
        @click="onClick"
        :spellcheck="false"
        class="base"
        contenteditable
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'nuxt-composition-api'
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
    const activeRow = ref<number>()
    // const m = ref()

    watch(text, (now) => {
      emit('input', now)
    })
    const onInput = ({ target }: { target: HTMLDivElement }) => {
      // if (!div.value) return
      // console.log(div.value)
      // const src = e.srcElement as HTMLDivElement

      // const range = document.createRange()
      // range.selectNode(src)
      // range.setStart(src, 0)
      // range.setEnd(src, 1)
      // const selection = document.getSelection()
      // selection.removeAllRanges()
      // selection.addRange(range)

      // const innner = getInnerContent(src.childNodes)
      // const bbb = innner.join('\n')
      // console.log(bbb)
      // rowCount.value = src.childElementCount + 1

      const text = Array.from(target.childNodes)
        .map((value) => value.textContent)
        .join('\n')
      rowCount.value = target.childNodes.length
      console.log(text)
      emit('input', text)
    }

    onMounted(() => {
      div.value!.onselectionchange = () => {
        alert()
      }
    })

    const onKey = () => {
      console.log(1)
      const selection = document.getSelection()
      console.log(selection)
      // const range = document.createRange()
      // range.setStart(div.value!, 0)
      // range.insertNode(document.createTextNode('😘'))
      // selection.removeAllRanges()
      // selection.addRange(range)
    }

    const onClick = (a: any) => {
      try {
        const result = Array.from(div.value.childNodes).findIndex((el) => {
          return el.isSameNode(a.target)
        })
        activeRow.value = result >= 0 ? result : undefined
        if (result < 0) {
          div.value.childNodes.forEach((el) => {
            const a = el as HTMLDivElement
            if (a.nodeName === '#text') return

            a.style.backgroundColor = ''
          })
          return
        }
        div.value.childNodes.forEach((el) => {
          const a = el as HTMLDivElement
          if (a.nodeName === '#text') return

          a.style.backgroundColor = ''
        })
        const d = div.value.childNodes[result] as HTMLDivElement
        console.log(d, div.value.childNodes)
        d.style.backgroundColor = 'rgb(25, 35, 39)'
        console.log(a, result, div.value.childNodes)
      } catch (e) {
        console.log(e)
      }
    }

    const onSelect = () => {
      alert()
    }
    return { onInput, div, text, rowCount, onSelect, onKey, onClick }
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
}
</style>
<style lang="scss" scoped>
$color: rgb(38, 50, 56);

.base {
  max-height: 100%;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  overflow: scroll;
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  color: white;
  white-space: nowrap;
  cursor: text;
  background-color: $color;
  caret-color: rgb(255, 196, 0);

  &:focus {
    outline: none;
  }
}
</style>
<style lang="scss">
div[contenteditable] > div {
  font-family: 'Source Code Pro', monospace;
}
</style>
