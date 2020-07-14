<template>
  <v-row :class="$style.base" justify="end" no-gutters>
    <v-col class="pa-1 pr-5" cols="auto">
      Ln , Col UTF-8
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({})
</script>

<style lang="scss" module>
$color: rgb(38, 50, 56);
.base {
  color: rgb(82, 102, 120);
  background-color: $color;
}
</style>
