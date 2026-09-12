<script setup>
const { usuario } = useAuth()
const nome = ref('')
const email = ref('')
const senha = ref('')
const erro = ref('')
const enviando = ref(false)

async function enviar() {
  erro.value = ''
  enviando.value = true
  try {
    const r = await $fetch('/api/auth/cadastrar', {
      method: 'POST',
      body: { nome: nome.value, email: email.value, senha: senha.value },
    })
    usuario.value = r.usuario
    await navigateTo('/aprender')
  } catch (e) {
    erro.value = e?.data?.statusMessage || e?.statusMessage || 'Não foi possível cadastrar.'
  } finally {
    enviando.value = false
  }
}

useHead({ title: 'Criar conta — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-md px-4 py-12">
    <h1 class="font-display text-3xl">Criar conta</h1>
    <p class="mt-2">É de graça. Serve para marcar quais aulas você já fez.</p>
    <form class="mt-6 space-y-4" @submit.prevent="enviar">
      <label class="block">
        Nome
        <input v-model="nome" required class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <label class="block">
        E-mail
        <input v-model="email" type="email" required class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <label class="block">
        Senha (mínimo 8)
        <input v-model="senha" type="password" required minlength="8" class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <p v-if="erro" class="text-cerrado">{{ erro }}</p>
      <button class="bg-mata text-papel font-bold px-4 py-2 rounded-md" :disabled="enviando">
        Cadastrar
      </button>
    </form>
  </section>
</template>
