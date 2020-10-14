<template>
  <h1>Sourdough Expert</h1>
  <form>
    <fieldset>
      <legend>Formula</legend>
      <Field
        v-model.number="weight"
        label="Total dough weight"
        required
        min="1"
      />
      <Field
        v-model.number="recipe.water"
        label="Water (%)"
        required
        min="1"
        max="100"
        step="0.1"
      />
      <Field
        v-model.number="recipe.starter"
        label="Starter (%)"
        required
        min="1"
        max="100"
        step="0.1"
      />
      <Field
        v-model.number="recipe.salt"
        label="Salt (%)"
        min="0"
        max="100"
        step="0.1"
      />
    </fieldset>
  </form>

  <h2>Ingredient List</h2>
  <Ingredients :ingredients="ingredients" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "@/utils/Recipe.ts";
import { useRecipeBuilder } from "@/composables/useRecipeBuilder";
import Field from "./Field.vue";
import Ingredients from "./Ingredients.vue";

const sampleRecipe = new Recipe("Sample", 72, 15, 2);

export default defineComponent({
  components: {
    Field,
    Ingredients
  },
  setup() {
    return useRecipeBuilder(1000, sampleRecipe);
  }
});
</script>

<style lang="scss" scoped></style>
