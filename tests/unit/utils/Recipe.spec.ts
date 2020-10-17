import { Ingredient, IngredientList, recipes, Recipe } from "@/utils/Recipe";

describe("Ingredient:", () => {
  test("clone()", () => {
    const item = new Ingredient("", 0);
    const newItem = item.clone();
    expect(newItem).not.toBe(item);
    expect(newItem).toStrictEqual(item);
  });
});

describe("IngredientList:", () => {
  test("clone()", () => {
    const item = new IngredientList(new Ingredient("", 0));
    const newItem = item.clone();
    expect(newItem).not.toBe(item);
    expect(newItem[0]).not.toBe(item[0]);
    expect(newItem).toStrictEqual(item);
  });
});

describe("Recipe:", () => {
  test("clone()", () => {
    const item = new Recipe("", new IngredientList(new Ingredient("", 0)));
    const newItem = item.clone();
    expect(newItem).not.toBe(item);
    expect(newItem.ingredients).not.toBe(item.ingredients);
    expect(newItem).toStrictEqual(item);
  });
});

test("sourdough Bread with All-Purpose Flour", () => {
  const recipe = recipes[0];
  const list = recipe.build(900);

  expect(recipe.name).toBe("Sourdough Bread with All-Purpose Flour");
  expect(list.total()).toBe(900);
  expect(list).toStrictEqual(
    new IngredientList(
      new Ingredient("All-purpose white Flour", 459),
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
      new Ingredient("Bread Flour", 811),
      new Ingredient("Whole Wheat Flour", 152),
      new Ingredient("Rye Flour", 51),
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
      new Ingredient("Bread Flour", 453),
      new Ingredient("Whole Wheat Flour", 453),
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
      new Ingredient("Bread Flour", 842),
      new Ingredient("Whole Wheat Flour", 94),
      new Ingredient("Water", 815),
      new Ingredient("Starter", 30),
      new Ingredient("Salt", 19)
    )
  );
});
