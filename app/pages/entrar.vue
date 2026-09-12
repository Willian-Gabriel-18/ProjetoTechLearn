<script setup>
const { usuario } = useAuth()
const email = ref('')
const senha = ref('')
const erro = ref('')
const enviando = ref(false)

async function enviar() {
  erro.value = ''
  enviando.value = true
  try {
    const r = await $fetch('/api/auth/entrar', {
      method: 'POST',
      body: { email: email.value, senha: senha.value },
    })
    usuario.value = r.usuario
    await navigateTo('/aprender')
  } catch (e) {
    erro.value = e?.data?.statusMessage || e?.statusMessage || 'Não foi possível entrar.'
  } finally {
    enviando.value = false
  }
}

useHead({ title: 'Entrar — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-md px-4 py-12">
    <h1 class="font-display text-3xl">Entrar</h1>
    <p class="mt-2">Use a conta para marcar o progresso. As aulas abrem sem login.</p>
    <form class="mt-6 space-y-4" @submit.prevent="enviar">
      <label class="block">
        E-mail
        <input
          v-model="email"
          type="email"
          required
          class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white"
        />
      </label>
      <label class="block">
        Senha
        <input
          v-model="senha"
          type="password"
          required
          class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white"
        />
      </label>
      <p v-if="erro" class="text-cerrado">{{ erro }}</p>
      <button
        class="bg-cerrado text-papel font-bold px-4 py-2 rounded-md disabled:opacity-60"
        :disabled="enviando"
      >
        Entrar
      </button>
    </form>
    <p class="mt-4">
      Ainda não tem conta?
      <NuxtLink to="/cadastrar" class="underline text-cerrado">Cadastre-se</NuxtLink>
    </p>
  </section>
</template>
