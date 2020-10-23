import { mount } from "@vue/test-utils";
import MainForm from "@/components/MainForm.vue";
import RecipeList from "@/components/RecipeList.vue";
import { recipes } from "@/utils/Recipe";

test("component definition", () => {
  expect(MainForm.components?.Field).toBeDefined();
});

test("selected recipe", async () => {
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
    <div class="prose">
      <h1>Sourdough Expert</h1>
      <blockquote> Start with a recipe from a curated list, and get a weighted ingredient list for your needs </blockquote>
    </div>
    <form class="max-w-sm my-8">
      <div><label class="block">Total dough weight <input class="block w-full h-8 invalid:app-border-error focus:outline-none focus:shadow-outline focus:border-blue-300" type="number" modelmodifiers="[object Object]" required="" min="1"></label></div>
      <div><label class="block"> Recipe <select class="block w-full h-8 bg-white focus:outline-none focus:shadow-outline focus:border-blue-300">
            <option value="[object Object]">Sourdough Bread with All-Purpose Flour</option>
            <option value="[object Object]">Beginner’s Sourdough Bread Formula</option>
            <option value="[object Object]">Fifty - Fifty Whole Wheat Sourdough Bread</option>
            <option value="[object Object]">My Best Sourdough Recipe</option>
            <option value="[object Object]">Pizza</option>
            <option value="[object Object]">Waffles</option>
          </select></label></div>
      <fieldset>
        <legend>Formula</legend>
        <div><label class="block">Flour (%) <input class="block w-full h-8 invalid:app-border-error focus:outline-none focus:shadow-outline focus:border-blue-300" type="number" required="" min="1" max="100" step="0.1"></label></div>
        <div><label class="block">Water (%) <input class="block w-full h-8 invalid:app-border-error focus:outline-none focus:shadow-outline focus:border-blue-300" type="number" required="" min="1" max="100" step="0.1"></label></div>
        <div><label class="block">Starter (%) <input class="block w-full h-8 invalid:app-border-error focus:outline-none focus:shadow-outline focus:border-blue-300" type="number" required="" min="1" max="100" step="0.1"></label></div>
        <div><label class="block">Salt (%) <input class="block w-full h-8 invalid:app-border-error focus:outline-none focus:shadow-outline focus:border-blue-300" type="number" required="" min="1" max="100" step="0.1"></label></div>
      </fieldset>
    </form>
    <div class="relative rounded bg-white shadow p-3">
      <div class="absolute right-0 mt-4 sm:mt-6 rounded-l-full bg-blue-500 text-white py-2 px-8"> Your recipe </div>
      <div class="border border-dashed divide-y border-gray-400 rounded p-4 pt-16 sm:px-8">
        <div class="grid gap-2 text-gray-700 py-1" style="grid-template-columns: 1em 3em auto;"><span class="w-4 h-4 border rounded-sm border-gray-400 self-center"></span><span class="self-center text-right">529</span><span>Flour</span></div>
        <div class="grid gap-2 text-gray-700 py-1" style="grid-template-columns: 1em 3em auto;"><span class="w-4 h-4 border rounded-sm border-gray-400 self-center"></span><span class="self-center text-right">381</span><span>Water</span></div>
        <div class="grid gap-2 text-gray-700 py-1" style="grid-template-columns: 1em 3em auto;"><span class="w-4 h-4 border rounded-sm border-gray-400 self-center"></span><span class="self-center text-right">79</span><span>Starter</span></div>
        <div class="grid gap-2 text-gray-700 py-1" style="grid-template-columns: 1em 3em auto;"><span class="w-4 h-4 border rounded-sm border-gray-400 self-center"></span><span class="self-center text-right">11</span><span>Salt</span></div>
      </div>
    </div>
  `);
});
