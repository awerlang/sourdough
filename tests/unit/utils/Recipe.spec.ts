import { Ingredient, IngredientList, recipes } from "@/utils/Recipe";

test("sourdough Bread with All-Purpose Flour", () => {
  const recipe = recipes[0];
  const list = recipe.build(900);

  expect(recipe.name).toBe("Sourdough Bread with All-Purpose Flour");
  expect(list.total()).toBe(900);
  expect(list).toStrictEqual(
    new IngredientList(
      new Ingredient("Flour", 459),
      new Ingredient("Water", 340),
      new Ingredient("Starter", 92),
      new Ingredient("Salt", 9)
    )
  );
});

test("beginner’s Sourdough Bread Formula", () => {
  const recipe = recipes[1];
  const list = recipe.build(1800);

  expect(recipe.name).toBe("Beginner’s Sourdough Bread Formula");
  expect(list.total()).toBe(1800);
  expect(list).toStrictEqual(
    new IngredientList(
      new Ingredient("Flour", 1014),
      new Ingredient("Water", 730),
      new Ingredient("Starter", 38),
      new Ingredient("Salt", 18)
    )
  );
});

test("fifty - Fifty Whole Wheat Sourdough Bread", () => {
  const recipe = recipes[2];
  const list = recipe.build(1800);

  expect(recipe.name).toBe("Fifty - Fifty Whole Wheat Sourdough Bread");
  expect(list.total()).toBe(1800);
  expect(list).toStrictEqual(
    new IngredientList(
      new Ingredient("Flour", 906),
      new Ingredient("Water", 734),
      new Ingredient("Starter", 143),
      new Ingredient("Salt", 17)
    )
  );
});

test("my Best Sourdough Recipe", () => {
  const recipe = recipes[3];
  const list = recipe.build(1800);

  expect(recipe.name).toBe("My Best Sourdough Recipe");
  expect(list.total()).toBe(1800);
  expect(list).toStrictEqual(
    new IngredientList(
      new Ingredient("Flour", 936),
      new Ingredient("Water", 815),
      new Ingredient("Starter", 30),
      new Ingredient("Salt", 19)
    )
  );
});
