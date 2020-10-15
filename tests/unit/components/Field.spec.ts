import { mount } from "@vue/test-utils";
import Field from "@/components/Field.vue";

test("has a `value` model", () => {
  const wrapper = mount(Field, {
    props: {
      label: "Test",
      modelValue: 1,
    },
  });

  expect(wrapper.vm.value).toBe(1);
});

test("renders the initial value", () => {
  const wrapper = mount(Field, {
    props: {
      label: "Test",
      modelValue: 1,
    },
  });

  expect(wrapper.get("input").element.value).toBe("1");
});
