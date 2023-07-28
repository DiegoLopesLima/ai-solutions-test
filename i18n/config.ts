import enUS from "./locales/en-US.json";
import ptBR from "./locales/pt-BR.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en-US",
  messages: {
    "en-US": enUS,
    "pt-BR": ptBR,
  },
}));
