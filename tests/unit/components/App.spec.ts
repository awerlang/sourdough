import App from "@/App.vue";

test("component defition", () => {
  expect(App.name).toBe("App");
  expect(App.components?.MainForm).toBeDefined();
});
