export class Ingredient {
  constructor(readonly name: string, public amount: number) {}

  scale(parts: number) {
    return new Ingredient(this.name, Math.round(parts * this.amount));
  }
}

export class IngredientList extends Array<Ingredient> {
  total(): number {
    return this.reduce((p, c) => p + c.amount, 0);
  }
}

export class Recipe {
  constructor(public name: string, public ingredients: IngredientList) {}

  static sourdough(name: string, water: number, starter: number, salt: number) {
    return new Recipe(
      name,
      new IngredientList(
        new Ingredient("Flour", 100),
        new Ingredient("Water", water),
        new Ingredient("Starter", starter),
        new Ingredient("Salt", salt)
      )
    );
  }

  build(weight: number): IngredientList {
    const total = this.ingredients.total();
    const flour = weight / total;
    const items = new IngredientList(
      ...this.ingredients.map((it) => it.scale(flour))
    );
    items[0].amount += weight - items.total();
    return items;
  }
}

export const recipes: Recipe[] = [
  Recipe.sourdough("Sourdough Bread with All-Purpose Flour", 74, 20, 1.9),
  Recipe.sourdough("Beginner’s Sourdough Bread Formula", 72, 3.75, 1.8),
  Recipe.sourdough("Fifty - Fifty Whole Wheat Sourdough Bread", 81, 15.8, 1.9),
  Recipe.sourdough("My Best Sourdough Recipe", 87, 3.2, 2),
];
