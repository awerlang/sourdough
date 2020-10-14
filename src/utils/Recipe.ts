export class Ingredient {
  constructor(readonly name: string, readonly amount: number) {}
}

export class IngredientList implements Iterable<Ingredient> {
  constructor(...items: Ingredient[]) {
    this.items = items;
  }

  readonly items: Ingredient[];

  *[Symbol.iterator](): Iterator<Ingredient> {
    for (const item of this.items) {
      yield item;
    }
  }

  total(): number {
    return this.items.reduce((p, c) => p + c.amount, 0);
  }

  sum(other: IngredientList): IngredientList {
    return new IngredientList(...this, ...other);
  }
}

export class Recipe {
  constructor(
    public name: string,
    public water: number,
    public starter: number,
    public salt: number
  ) {}

  build(weight: number): IngredientList {
    const total = 100 + this.water + this.starter + this.salt;
    const flour = weight / total;
    const make = (name: string, perc: number) =>
      new Ingredient(name, Math.round(flour * perc));
    const items = new IngredientList(
      make("Water", this.water),
      make("Starter", this.starter),
      make("Salt", this.salt)
    );
    return new IngredientList(
      new Ingredient("Flour", weight - items.total())
    ).sum(items);
  }
}

export const recipes: Recipe[] = [
  new Recipe("Sourdough Bread with All-Purpose Flour", 74, 20, 1.9),
  new Recipe("Beginner’s Sourdough Bread Formula", 72, 3.75, 1.8),
  new Recipe("Fifty - Fifty Whole Wheat Sourdough Bread", 81, 15.8, 1.9),
  new Recipe("My Best Sourdough Recipe", 87, 3.2, 2),
];
