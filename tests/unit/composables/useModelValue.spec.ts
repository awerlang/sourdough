import { ref, SetupContext } from "vue";
import { useModelValue } from "@/composables/useModelValue";

function mockContext(): SetupContext<"update:modelValue"[]> {
  return {
    emit: jest.fn(),
    attrs: {},
    slots: {}
  };
}

test("returns current value", () => {
  const ctx = mockContext();
  const modelValue = ref(1000);
  const comp = useModelValue(modelValue, ctx);

  expect(comp.value.value).toBe(1000);
});

test("emits 'update:modelValue'", () => {
  const ctx = mockContext();
  const modelValue = ref(1000);
  const comp = useModelValue(modelValue, ctx);

  comp.value.value = 500;
  expect(ctx.emit).toHaveBeenCalledWith("update:modelValue", 500);
});
