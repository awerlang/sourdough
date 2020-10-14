import { useModelValue } from "@/composables/useModelValue";

function mockContext() {
  return {
    emit: jest.fn(),
    attrs: jest.fn() as any,
    slots: jest.fn() as any,
  };
}

test("returns current value", () => {
  const ctx = mockContext();
  const comp = useModelValue(1000, ctx);

  expect(comp.value.value).toBe(1000);
});

test("emits 'update:modelValue'", () => {
  const ctx = mockContext();
  const comp = useModelValue(1000, ctx);

  comp.value.value = 500;
  expect(ctx.emit).toHaveBeenCalledWith("update:modelValue", 500);
});
