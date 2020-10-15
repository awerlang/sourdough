import { mount } from "@vue/test-utils";
import MainForm from "@/components/MainForm.vue";

test("renders initial value", () => {
  const wrapper = mount(MainForm);

  expect(wrapper.html()).toMatchInlineSnapshot(`
    <h1>Sourdough Expert</h1>
    <form>
      <fieldset>
        <legend>Formula</legend>
        <div><label>Total dough weight <input type="number" modelmodifiers="[object Object]" required="" min="1"></label></div>
        <div><label>Flour (%) <input type="number" modelmodifiers="[object Object]" required="" min="1" max="100" step="0.1"></label></div>
        <div><label>Water (%) <input type="number" modelmodifiers="[object Object]" required="" min="1" max="100" step="0.1"></label></div>
        <div><label>Starter (%) <input type="number" modelmodifiers="[object Object]" required="" min="1" max="100" step="0.1"></label></div>
        <div><label>Salt (%) <input type="number" modelmodifiers="[object Object]" required="" min="1" max="100" step="0.1"></label></div>
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
