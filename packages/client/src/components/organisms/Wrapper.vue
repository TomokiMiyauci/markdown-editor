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
          transition="slide-x-transition"
          :close-on-content-click="false"
        >
          <template #activator="{on: menu, attrs}">
            <v-tooltip bottom>
              <template #activator="{on: tooltip }">
                <v-btn v-bind="attrs" icon v-on="{ ...tooltip, ...menu }">
                  <v-icon> {{ mdiEmoticon }}</v-icon>
                </v-btn>
              </template>
              <span>emoji</span>
            </v-tooltip>
          </template>
          <lazy-emoji-picker @select="menu = false" />
        </v-menu>
      </v-col>
      <v-col style="background-color: grey;" cols="6"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <the-editor @input="text = $event" />
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
export default defineComponent({
  setup() {
    const text = ref('')
    const menu = ref(false)
    return {
      menu,
      text,
      mdiFileImport,
      mdiEmoticon,
    }
  },
})
</script>
