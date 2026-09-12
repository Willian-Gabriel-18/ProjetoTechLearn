<script setup>
definePageMeta({ middleware: 'logado' })

const { usuario, carregar } = useAuth()
const nome = ref('')
const email = ref('')
const senhaAtual = ref('')
const senhaNova = ref('')
const erro = ref('')
const ok = ref('')
const enviando = ref(false)

onMounted(async () => {
  if (!usuario.value) await carregar()
  if (usuario.value) {
    nome.value = usuario.value.nome || ''
    email.value = usuario.value.email || ''
  }
})

watch(usuario, (u) => {
  if (!u) return
  if (!nome.value) nome.value = u.nome || ''
  if (!email.value) email.value = u.email || ''
})

async function salvar() {
  erro.value = ''
  ok.value = ''
  enviando.value = true
  try {
    const r = await $fetch('/api/auth/conta', {
      method: 'PATCH',
      body: {
        nome: nome.value,
        email: email.value,
        senhaAtual: senhaAtual.value,
        senhaNova: senhaNova.value,
      },
    })
    usuario.value = r.usuario
    senhaAtual.value = ''
    senhaNova.value = ''
    ok.value = 'Dados guardados.'
  } catch (e) {
    erro.value = e?.data?.statusMessage || e?.statusMessage || 'Não foi possível salvar.'
  } finally {
    enviando.value = false
  }
}

useHead({ title: 'Conta — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-md px-4 py-12">
    <h1 class="font-display text-3xl">Sua conta</h1>
    <p class="mt-2">Mude nome, e-mail ou senha. A senha nova pede a senha de agora.</p>
    <form class="mt-6 space-y-4" @submit.prevent="salvar">
      <label class="block">
        Nome
        <input v-model="nome" required class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <label class="block">
        E-mail
        <input v-model="email" type="email" required class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <label class="block">
        Senha atual (só se for trocar a senha)
        <input v-model="senhaAtual" type="password" class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <label class="block">
        Senha nova (mínimo 8)
        <input v-model="senhaNova" type="password" minlength="8" class="mt-1 w-full border border-linha rounded-md px-3 py-2 bg-white" />
      </label>
      <p v-if="erro" class="text-cerrado">{{ erro }}</p>
      <p v-if="ok" class="text-mata">{{ ok }}</p>
      <button class="bg-mata text-papel font-bold px-4 py-2 rounded-md disabled:opacity-60" :disabled="enviando">
        Guardar
      </button>
    </form>
  </section>
</template>
