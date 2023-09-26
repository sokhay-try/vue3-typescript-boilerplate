<template>
  <TestView />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import TestView from "./test/Test.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TestView,
  },
});
</script>
