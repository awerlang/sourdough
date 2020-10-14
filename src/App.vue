<template>
  <main-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainForm from "@/components/MainForm.vue";

export default defineComponent({
  name: "App",
  components: {
    MainForm
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
