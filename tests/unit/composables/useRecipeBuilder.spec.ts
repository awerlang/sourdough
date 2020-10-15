import { useRecipeBuilder } from "@/composables/useRecipeBuilder";
import { Recipe, IngredientList } from "@/utils/Recipe";

function getRecipe() {
  const recipe = Recipe.sourdough("Sample", 70, 20, 2);
  jest.spyOn(recipe, "build").mockImplementation(() => new IngredientList());
  return recipe;
}

test("creates recipe builder", () => {
  const recipe = getRecipe();
  const comp = useRecipeBuilder(1000, recipe);

  expect(comp.weight.value).toBe(1000);
  expect(comp.recipe.value).toStrictEqual(recipe);
  expect(comp.ingredients.value).toStrictEqual(new IngredientList());
  expect(recipe.build).toHaveBeenCalledTimes(1);
});

test("updates ingredients on weigth change", () => {
  const recipe = getRecipe();
  const comp = useRecipeBuilder(1000, recipe);

  comp.weight.value = 500;

  expect(comp.weight.value).toBe(500);
  expect(comp.recipe.value).toStrictEqual(recipe);
  expect(comp.ingredients.value).toStrictEqual(new IngredientList());
  expect(recipe.build).toHaveBeenCalledTimes(1);
});
