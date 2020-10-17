export class Ingredient {
  constructor(readonly name: string, public amount: number) {}

  clone() {
    return new Ingredient(this.name, this.amount);
  }

  scale(parts: number) {
    return new Ingredient(this.name, Math.round(parts * this.amount));
  }
}

export class IngredientList extends Array<Ingredient> {
  clone(): IngredientList {
    return new IngredientList(...this.map((it) => it.clone()));
  }

  total(): number {
    return this.reduce((p, c) => p + c.amount, 0);
  }
}

export class Recipe {
  constructor(readonly name: string, readonly ingredients: IngredientList) {}

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

  clone() {
    return new Recipe(this.name, this.ingredients.clone());
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

export const recipes: readonly Recipe[] = [
  Recipe.sourdough("Sourdough Bread with All-Purpose Flour", 74, 20, 1.9),
  Recipe.sourdough("Beginner’s Sourdough Bread Formula", 72, 3.75, 1.8),
  Recipe.sourdough("Fifty - Fifty Whole Wheat Sourdough Bread", 81, 15.8, 1.9),
  Recipe.sourdough("My Best Sourdough Recipe", 87, 3.2, 2),
];
