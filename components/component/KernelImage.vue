<template>
    <embed :src="src"  alt="" :style="`height: ${height}; width: ${width}`"/>
</template>

<script>
export default {
  name: "KernelImage",
  props: ['image', 'common', 'height', 'width'],
  computed: {
    src() {
      const folder = this.common ? 'common': this.$i18n.locale === 'ka' ? 'ka' : 'en';
      return `/assets/images/${folder}/${this.image}`;
    }
  }
}
</script>

<style scoped>

</style>
