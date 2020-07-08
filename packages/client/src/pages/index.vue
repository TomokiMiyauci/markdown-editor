<template>
  <v-container>
    <v-card>
      <v-toolbar flat dense outlined>Markdown editor</v-toolbar>
      <v-row no-gutters>
        <v-col
          ref="div"
          style="padding-left: 12px; margin-top: 10px; line-height: 1.75rem;"
          cols="auto"
        >
          <v-slide-x-reverse-transition :group="true">
            <div v-for="i in editorRows" :key="i">{{ i }}</div>
          </v-slide-x-reverse-transition>
        </v-col>
        <v-col class="edit" cols="5">
          <v-textarea
            v-model="text"
            hide-details
            flat
            solo
            type="text"
            auto-grow
          ></v-textarea>
        </v-col>
        <v-col
          v-if="editCount"
          class="result markdown-body"
          cols="6"
          v-html="$md.render(text)"
          >{{ text }}
        </v-col>
        <v-col v-else class="fill-height result" cols="6">
          <v-row justify="center" class="fill-height" align="center">
            <v-col cols="auto">
              sfaf
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'nuxt-composition-api'
export default defineComponent({
  setup() {
    const text = ref('')
    const div = ref<HTMLDivElement>()

    onMounted(() => {
      console.log(
        div.value.clientHeight,
        div.value.offsetHeight,
        div.value.scrollHeight
      )
    })

    const editorRows = computed(() => {
      return Math.floor(text.value.split('\n').length)
    })

    const editCount = computed(() => {
      return !!text.value.split('').length
    })

    return { text, div, editorRows, editCount }
  },
})
</script>

<style scoped lang="scss">
.edit {
  border-bottom-left-radius: 30px;
}
.result {
  padding-left: 12px;
  margin-top: 10px;
  line-height: 1.75rem;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom-right-radius: 30px;
}
</style>
