import { mount } from "@vue/test-utils";
import Field from "@/components/Field.vue";

test("component defition", () => {
  expect(Field.props.label.required).toBe(true);
  expect(Field.props.modelValue.required).toBe(true);
  expect(Field.props.modelValue.type).toStrictEqual([Number, String]);
  expect(Field.emits).toStrictEqual(["update:modelValue"]);
});

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
