<template>
  <h1>Book Detail {{ $t("auth.success") }}</h1>
  <p>{{ book.title }}</p>
  <p>{{ book.author }}</p>
  <p>{{ book.year }}</p>
  <v-btn>Hello</v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import TestService from "@/services/test.service";

interface IBook {
  title: string;
  author: string;
  year: number;
}
interface ITest {
  text: string;
  source: string;
}
export default defineComponent({
  name: "ChildComponent",
  props: {
    book: {
      type: Object as PropType<IBook>,
      required: true,
    },
    callback: Function as PropType<(id: number) => number>,
  },
  async mounted() {
    try {
      this.callback?.(123);
      const t: Array<ITest> = await TestService.getUsers();
      console.log(">>mouted::", t);
    } catch (err) {
      console.log("ERRR::", err);
    }
  },
  methods: {},
});
</script>
