import { mount } from "@vue/test-utils";
import MainForm from "@/components/MainForm.vue";
import RecipeList from "@/components/RecipeList.vue";
import { recipes } from "@/utils/Recipe";

test("component defition", () => {
  expect(MainForm.components?.Field).toBeDefined();
});

test("renders initial value", async () => {
  const wrapper = mount(MainForm);

  const select = wrapper.getComponent(RecipeList);
  select.get("option").element.selected = true;
  await select.trigger("change");
  expect(wrapper.vm.recipe.name).toBe(recipes[0].name);
});

test("renders initial value", () => {
  const wrapper = mount(MainForm);

  expect(wrapper.vm.recipe.name).toBe("Sample");
  expect(wrapper.html()).toMatchInlineSnapshot(`
    <h1>Sourdough Expert</h1>
    <form>
      <div><label class="block">Total dough weight <input class="block invalid:app-border-error" type="number" modelmodifiers="[object Object]" required="" min="1"></label></div>
      <div><label> Recipe <select class="block">
            <option value="[object Object]">Sourdough Bread with All-Purpose Flour</option>
            <option value="[object Object]">Beginner’s Sourdough Bread Formula</option>
            <option value="[object Object]">Fifty - Fifty Whole Wheat Sourdough Bread</option>
            <option value="[object Object]">My Best Sourdough Recipe</option>
            <option value="[object Object]">Pizza</option>
            <option value="[object Object]">Waffles</option>
          </select></label></div>
      <fieldset>
        <legend>Formula</legend>
        <div><label class="block">Flour (%) <input class="block invalid:app-border-error" type="number" required="" min="1" max="100" step="0.1"></label></div>
        <div><label class="block">Water (%) <input class="block invalid:app-border-error" type="number" required="" min="1" max="100" step="0.1"></label></div>
        <div><label class="block">Starter (%) <input class="block invalid:app-border-error" type="number" required="" min="1" max="100" step="0.1"></label></div>
        <div><label class="block">Salt (%) <input class="block invalid:app-border-error" type="number" required="" min="1" max="100" step="0.1"></label></div>
      </fieldset>
    </form>
    <h2>Ingredient List</h2>
    <dl>
      <dt>Flour</dt>
      <dd>529</dd>
      <dt>Water</dt>
      <dd>381</dd>
      <dt>Starter</dt>
      <dd>79</dd>
      <dt>Salt</dt>
      <dd>11</dd>
      <dt>Total</dt>
      <dd>1000</dd>
    </dl>
  `);
});
