<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      К сожаления такой страницы не сущесвует...<strong>(404)</strong>
    </p>
    <q-btn
      color="green"
      style="width:200px;"
      to="/"
      label="Вернуться назад"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
