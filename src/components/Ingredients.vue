<template>
  <div class="relative rounded bg-white shadow p-3">
    <div
      class="absolute right-0 mt-4 sm:mt-6 rounded-l-full bg-blue-500 text-white py-2 px-8"
    >
      Your recipe
    </div>
    <div
      class="border border-dashed divide-y border-gray-400 rounded p-4 pt-16 sm:px-8"
    >
      <div
        v-for="item in ingredients"
        :key="item.name"
        class="grid gap-2 text-gray-700 py-1"
        style="grid-template-columns: 1em 3em auto"
      >
        <span class="w-4 h-4 border rounded-sm border-gray-400 self-center" />
        <span class="self-center text-right">{{ item.amount }}</span>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IngredientList } from "@/utils/Recipe";

export default defineComponent({
  props: {
    ingredients: {
      type: IngredientList,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
