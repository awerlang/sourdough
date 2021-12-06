<template>
  <main-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainForm from "@/components/MainForm.vue";

export default defineComponent({
  name: "App",
  components: {
    MainForm,
  },
});
</script>

<style lang="scss"></style>
