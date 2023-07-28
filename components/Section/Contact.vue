<template>
  <article id="contact-section" class="py-4">
    <PageContainer>
      <PageTitle icon="mdi:mail">
        {{ $t("pageIndex.sectionContact.title") }}
      </PageTitle>

      <form class="flex flex-col max-w-3xl gap-4 mx-auto" @submit="onSubmit">
        <TextField
          :label="$t('pageIndex.sectionContact.form.control.name.label')"
          v-bind="name"
          :placeholder="
            $t('pageIndex.sectionContact.form.control.name.placeholder')
          "
          :error="errors.name"
          :touched="submited"
          name="name"
        />

        <TextField
          :label="$t('pageIndex.sectionContact.form.control.email.label')"
          v-bind="email"
          :placeholder="
            $t('pageIndex.sectionContact.form.control.email.placeholder')
          "
          :error="errors.email"
          :touched="submited"
          name="email"
        />

        <TextAreaField
          :label="$t('pageIndex.sectionContact.form.control.message.label')"
          :placeholder="
            $t('pageIndex.sectionContact.form.control.message.placeholder')
          "
          v-bind="message"
          :error="errors.message"
          :touched="submited"
          name="message"
        />

        <div class="flex justify-end">
          <Button type="submit">
            <Icon name="mdi:send" />

            {{ $t("pageIndex.sectionContact.form.button.submit") }}
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
  async (values, { resetForm }) => {
    await useFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });

    resetForm();
  },
  () => {
    submited.value = true;
  },
);
</script>
