<template>
  <article class="py-4">
    <PageContainer>
      <PageTitle icon="mdi:mail">Fale conosco</PageTitle>

      <form class="flex flex-col max-w-3xl gap-4 mx-auto" @submit="onSubmit">
        <TextField
          label="Nome"
          v-bind="name"
          placeholder="Digite seu nome."
          :error="errors.name"
          :touched="submited"
        />

        <TextField
          label="E-mail"
          v-bind="email"
          placeholder="Digite um e-mail para entrarmos em contato."
          :error="errors.email"
          :touched="submited"
        />

        <TextAreaField
          label="Mensagem"
          placeholder="Digite sua mensagem."
          v-bind="message"
          :error="errors.message"
          :touched="submited"
        />

        <div class="flex justify-end">
          <Button type="submit">
            <Icon name="mdi:send" />

            Enviar
          </Button>
        </div>
      </form>
    </PageContainer>
  </article>
</template>

<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().nonempty("Preencha o campo obrigatório."),
    email: z
      .string()
      .nonempty("Preencha o campo obrigatório.")
      .email("Preencha o campo com um e-mail válido."),
    message: z.string().nonempty("Preencha o campo obrigatório."),
  }),
);

const { handleSubmit, errors, defineComponentBinds } = useForm({
  validationSchema,
  initialValues: {
    name: "",
    email: "",
    message: "",
  },
});

const submited = ref(false);

const name = defineComponentBinds("name");
const email = defineComponentBinds("email");
const message = defineComponentBinds("message");

const onSubmit = handleSubmit(
  (values) => {
    console.group("valid");
    console.log("values", values);
    console.groupEnd();
  },
  ({ values, errors }) => {
    submited.value = true;

    console.group("invalid");
    console.log("values", values);
    console.log("errors", errors);
    console.groupEnd();
  },
);
</script>
