import en from "./en";
import kh from "./kh";
import { Locales } from "./local-types";

export default {
  [Locales.EN]: en,
  [Locales.KH]: kh,
};

export const defaultLocale = Locales.KH;
