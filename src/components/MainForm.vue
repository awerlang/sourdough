<template>
  <div class="prose">
    <h1>Sourdough Expert</h1>
    <blockquote>
      Start with a recipe from a curated list, and get a weighted ingredient
      list for your needs
    </blockquote>
  </div>
  <form class="max-w-sm my-8">
    <Field
      v-model.number="weight"
      label="Total dough weight"
      required
      min="1"
    />
    <div>
      <label class="block">
        Recipe
        <RecipeList @select="recipeSelected" />
      </label>
    </div>

    <fieldset>
      <legend>Formula</legend>
      <Formula :recipe="recipe" />
    </fieldset>
  </form>

  <Ingredients :ingredients="ingredients" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "@/utils/Recipe";
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
    Ingredients,
  },
  setup() {
    const initialRecipe = Recipe.sourdough("Sample", 72, 15, 2, [
      ["Flour", 100],
    ]);
    return useRecipeBuilder(1000, initialRecipe);
  },
  methods: {
    recipeSelected(val: Recipe) {
      this.replaceRecipe(val);
    },
  },
});
</script>

<style lang="scss" scoped></style>
