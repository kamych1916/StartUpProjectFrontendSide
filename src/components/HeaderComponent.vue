<template>
  <q-header reveal elevated class="bg-brown text-white q-pa-sm">
    <q-toolbar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
      </q-avatar>
      <q-toolbar-title to="/" inset>TGF</q-toolbar-title>
      <q-btn flat icon="search" label="Найти" to="/SearchFood" />
      <q-btn flat icon="add_circle_outline" label="Предложить блюдо" />
      <q-btn flat label="Регистрация" to="/Registration" />
      <q-btn flat label="Войти" to="/Authorization" />
    </q-toolbar>
  </q-header>
</template>    

<script>
export default {
  name: "HeaderComponent",
  components: {
    // Map
  },
  data: () => ({}),
  props: {},
  created() {},
  methods: {}
};
</script>  