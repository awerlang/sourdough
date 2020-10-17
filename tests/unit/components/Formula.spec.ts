import Formula from "@/components/Formula.vue";
import { Recipe } from "@/utils/Recipe";

test("component defition", () => {
  expect(Formula.props.recipe.type).toBe(Recipe);
  expect(Formula.props.recipe.required).toBe(true);
});
