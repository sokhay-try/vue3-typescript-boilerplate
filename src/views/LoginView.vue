<template>
  <h1 class="text-center">Login Form</h1>
  <div class="text-center">
    <v-btn primary @click="onLogin">Submit</v-btn>
    <span>{{ $t("auth.success") }}</span>
    <v-select
      :items="LOCALES"
      item-value="value"
      item-title="caption"
      label="Switch Langues"
      v-model="defaultLang"
      outlined
      return-object
    ></v-select>
  </div>
</template>

<script lang="ts">
import { RouteName } from "@/constants";
import { defaultLocale } from "@/i18n";
import { LOCALES } from "@/i18n/local-types";
import { IAuth } from "@/store/modules/auth/types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  components: {},
  methods: {
    onLogin() {
      this.$store.dispatch({
        type: "auth/login",
        payload: { username: "admin", password: "123" } as IAuth,
      });
      this.$router.push({ name: RouteName.HOME.INDEX });
    },
  },
  data() {
    return {
      LOCALES,
      defaultLang: defaultLocale,
    };
  },
  watch: {
    defaultLang(v) {
      this.$i18n.locale = v.value;
    },
  },
});
</script>
