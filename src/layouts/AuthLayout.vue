<template>
  <v-app>
    <v-main key="content">
      <v-container fluid>
        <!-- Default slot -->
        <slot>
          <!-- Provides the application the proper gutter -->
          <!-- If using vue-router -->
          <router-view></router-view>
        </slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",

  components: {},
});
</script>
