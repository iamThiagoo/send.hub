<template>
  <section>
    <UBreadcrumb :items="items" class="mb-7" />

    <h1 class="text-3xl font-bold dark:text-violet-400">Notificar Clientes</h1>

    <div class="mt-6 gap-4">
      <UForm :schema="schema" :state="state" class="space-y-5" @submit="onSubmit">
        <div class="flex gap-x-4 w-full">
          <div class="flex-1">
            <UFormField label="Contatos" name="contacts">
              <UInputTags
                class="w-full"
                color="neutral"
                size="lg"
                variant="subtle"
                placeholder="Digite os contatos..."
              />
            </UFormField>

            <UFormField>
              <USwitch class="mt-5" label="Notificar todos os contatos" />
            </UFormField>
          </div>

          <UFormField class="w-auto shrink-0" label="Plataformas" name="platforms" required>
            <UCheckboxGroup
              class="w-full"
              :default-value="['whatsapp']"
              orientation="horizontal"
              color="primary"
              variant="table"
              size="xs"
              :items="radioItems"
            />
          </UFormField>
        </div>

        <USeparator icon="lucide:message-circle" color="primary" />

        <UFormField label="Mensagem" name="message" required>
          <UTextarea
            color="neutral"
            variant="subtle"
            class="w-full"
            placeholder="Escreva a mensagem..."
          />
        </UFormField>

        <UFormField label="Arquivos" name="files">
          <UFileUpload
            color="neutral"
            position="inside"
            layout="list"
            multiple
            label="Arraste e solte os arquivos aqui"
            variant="area"
            description="SVG, PNG, JPG or GIF"
            class="w-full"
            :ui="{
              base: 'min-h-48 bg-elevated border-1 border-gray-300 dark:border-slate-600',
            }"
          />
        </UFormField>

        <div class="w-full justify-end flex gap-x-5">
          <UButton
            icon="i-lucide-eraser"
            size="lg"
            color="ghost"
            variant="solid"
            class="px-3 py-2 cursor-pointer hover:opacity-80 transition-all"
            >Limpar</UButton
          >
          <UButton
            icon="i-lucide-send"
            size="lg"
            color="primary"
            variant="solid"
            class="px-5 py-2 cursor-pointer transition-all"
            >Enviar</UButton
          >
        </div>
      </UForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';
import { reactive, ref } from 'vue';
import { useToast } from '@nuxt/ui/runtime/composables/useToast.js';
import type { BreadcrumbItem } from '@nuxt/ui';
import type { CheckboxGroupItem } from '@nuxt/ui';

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Notificar Clientes',
    icon: 'i-lucide-message-circle',
    to: '/notification',
  },
]);

const radioItems = ref<CheckboxGroupItem[]>([
  {
    label: 'Whatsapp',
    value: 'whatsapp',
  },
  {
    label: 'Telegram',
    value: 'telegram',
  },
  {
    label: 'E-mail',
    value: 'email',
  },
]);

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  console.log(event.data);
}
</script>
