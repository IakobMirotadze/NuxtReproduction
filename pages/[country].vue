<script setup>
const route = useRoute();
const country = route.params.country;
console.log(country);
</script>

<template>
  <div>
    {{country}}
  </div>
</template>
