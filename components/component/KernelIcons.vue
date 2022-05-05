<template>
  <span style="position: relative;">
    <embed :src="`/assets/icons/${icon}.svg`">
    <span class="overlay"></span>
  </span>
</template>

<script>
export default {
  name: "KernelIcons",
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

embed {
  all: inherit;
  margin:0;
  padding: 0;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
