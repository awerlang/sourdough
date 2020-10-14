<template>
  <dl>
    <template v-for="item in ingredients" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>{{ item.amount }}</dd>
    </template>
    <dt>Total</dt>
    <dd>{{ ingredients.total() }}</dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IngredientList } from "@/utils/Recipe.ts";

export default defineComponent({
  props: {
    ingredients: {
      type: IngredientList,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped></style>
