import Ingredients from "@/components/Ingredients.vue";

test("component defition", () => {
  expect(Ingredients.props.ingredients.required).toBe(true);
});
