import { mount } from "@vue/test-utils";
import RecipeList from "@/components/RecipeList.vue";

test("component defition", () => {
  expect(RecipeList.emits).toStrictEqual(["select"]);
});

test("has a `selected` model", () => {
  const wrapper = mount(RecipeList);

  expect(wrapper.vm.selected).toBe(null);
});
