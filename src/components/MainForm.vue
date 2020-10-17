<template>
  <h1>Sourdough Expert</h1>
  <form>
    <Field
      v-model.number="weight"
      label="Total dough weight"
      required
      min="1"
    />
    <div>
      <label>
        Recipe
        <RecipeList @select="recipeSelected" />
      </label>
    </div>

    <fieldset>
      <legend>Formula</legend>
      <Formula :recipe="recipe" />
    </fieldset>
  </form>

  <h2>Ingredient List</h2>
  <Ingredients :ingredients="ingredients" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "@/utils/Recipe.ts";
import { useRecipeBuilder } from "@/composables/useRecipeBuilder";
import RecipeList from "./RecipeList.vue";
import Field from "./Field.vue";
import Formula from "./Formula.vue";
import Ingredients from "./Ingredients.vue";

export default defineComponent({
  components: {
    RecipeList,
    Field,
    Formula,
    Ingredients
  },
  setup() {
    const initialRecipe = Recipe.sourdough("Sample", 72, 15, 2);
    return useRecipeBuilder(1000, initialRecipe);
  },
  methods: {
    recipeSelected(val: Recipe) {
      this.replaceRecipe(val);
    }
  }
});
</script>

<style lang="scss" scoped></style>
