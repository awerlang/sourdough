<template>
  <select v-model="selected" class="block" @change="$emit('select', selected)">
    <option v-for="item in recipes" :key="item.name" :value="item">
      {{ item.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { recipes } from "@/utils/Recipe.ts";

export default defineComponent({
  emits: ["select"],
  data() {
    return {
      selected: null
    };
  },
  computed: {
    recipes: () => recipes
  }
});
</script>

<style lang="scss" scoped></style>
