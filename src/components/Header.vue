<template>
  <header class="bg-primary text-center px-5 py-2 md:px-16">
    <h1 class="text-4xl font-light mb-2">二维码生成打印</h1>
    <div
      class="p-1 flex justify-end"
    >
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    onClickGenerate() {
      this.$store.commit('setQrCodeContentIndex', 1);
    },
    onClick() {
      this.$store.commit('setQrCodeContentIndex', 2);
    }
  }
};
</script>
