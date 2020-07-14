<template>
  <v-container class="mt-16">
    <v-row
      no-gutters
      align="center"
      style="
        border: 1px solid;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      "
      tag="header"
    >
      <v-col
        class="pa-3"
        style="background-color: rgba(38, 50, 56, 0.8);"
        cols="6"
        ><v-btn aria-label="button-import" icon color="white"
          ><v-icon>{{ mdiFileImport }}</v-icon></v-btn
        >
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          transition="slide-x-transition"
        >
          <template #activator="{on: menu, attrs}">
            <v-tooltip bottom>
              <template #activator="{on: tooltip }">
                <v-btn
                  v-bind="attrs"
                  @click="onClick"
                  v-on="{ ...tooltip, ...menu }"
                  icon
                >
                  <v-icon> {{ mdiEmoticon }}</v-icon>
                </v-btn>
              </template>
              <span>emoji</span>
            </v-tooltip>
          </template>
          <lazy-emoji-picker @select="onSelect" />
        </v-menu>
      </v-col>
      <v-col style="background-color: grey;" cols="6"></v-col>
    </v-row>
    <v-row
      no-gutters
      style="max-height: 700px; border: 1px solid grey; border-radius: 5px;"
    >
      <v-col cols="6">
        <the-editor @input="text = $event" />
        <editor-bottom />
      </v-col>
      <v-col cols="6">
        <markdown-preview :text="text" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { mdiFileImport, mdiEmoticon } from '@mdi/js'
import { defineComponent, ref } from 'nuxt-composition-api'
import { editor } from '@/store'
export default defineComponent({
  setup() {
    const text = ref('')
    const menu = ref(false)
    const onSelect = (a: any) => {
      try {
        console.log(a.native)
        editor.range.insertNode(document.createTextNode(a.native))

        menu.value = false
      } catch (e) {
        console.log(e)
      }
    }

    const onClick = () => {
      const selection = document.getSelection()

      editor.setRange(selection.getRangeAt(0))
      console.log(selection)
    }
    return {
      onClick,
      menu,
      text,
      mdiFileImport,
      mdiEmoticon,
      onSelect,
    }
  },
})
</script>
