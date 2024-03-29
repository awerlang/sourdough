import { computed, ref } from "vue";
import { Recipe } from "@/utils/Recipe";

export function useRecipeBuilder(initialWeight: number, initialRecipe: Recipe) {
  const recipe = ref(initialRecipe);
  const weight = ref(initialWeight);
  const ingredients = computed(() => recipe.value.build(weight.value));
  const replaceRecipe = (newRecipe: Recipe) => {
    recipe.value = newRecipe.clone();
  };

  return {
    weight,
    recipe,
    ingredients,
    replaceRecipe,
  };
}
