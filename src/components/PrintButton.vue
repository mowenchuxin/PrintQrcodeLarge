<template>
  <button
    class="text-primary font-bold hover:underline"
    type="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'PrintButton',

  props: {
    text: {
      type: String,
      required: true,
    }
  },
  emits: ['click'],
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
