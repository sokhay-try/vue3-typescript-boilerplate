<template>
  <h1>This is Testing Vue3 Typescript</h1>
  <ChildComponent :book="book" :callback="callBack" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue";

interface IBook {
  title: string;
  author: string;
  year: number;
}
export default defineComponent({
  name: "TestView",
  components: {
    ChildComponent,
  },
  mounted() {
    //
  },
  data() {
    return {
      book: {
        title: "Vue3",
        author: "Sokhay",
        year: 2023,
      } as IBook,
    };
  },
  methods: {
    callBack(val: number): number {
      return val;
    },
  },
});
</script>
