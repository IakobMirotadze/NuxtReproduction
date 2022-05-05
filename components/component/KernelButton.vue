<template>
  <div class="button" :class="{'filled': filled, 'dense': dense}">
    <h5 class="button-text">{{text}}</h5>
  </div>
</template>

<script>
export default {
  name: "KernelButton",
  props: ['text', 'filled','dense']
}
</script>

<style scoped>
.button {
  display: flex;
  padding: 8px 32px;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid var(--font-color-primary);
  color: var(--font-color-primary);
}

.dense {
  padding: 8px 18px;
}

.filled {
  color: white;
  background: var(--font-color-primary);
}

.button-text {
  font-size: 18px;
  white-space: nowrap;
}

@media (max-width: 900px){
  .button-text {
    font-size: 14px;
  }
}
</style>
