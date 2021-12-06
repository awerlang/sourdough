<template>
  <Field
    v-for="item in recipe.ingredients"
    :key="item.name"
    v-model="item.amount"
    required
    min="1"
    max="100"
    step="0.1"
    :label="item.name + ' (%)'"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "@/utils/Recipe";
import Field from "@/components/Field.vue";

export default defineComponent({
  components: { Field },
  props: {
    recipe: {
      type: Recipe,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped></style>
