<template>
  <span class="kernel-input" :class="{'two-lines': twoLines}">
      <input :placeholder="placeholder" type="text" v-model="inputText">
    <div class="button" v-if="buttonText" @click="$emit('btn-click', inputText)">
      {{buttonText}}
    </div>
  </span>
</template>

<script>
export default {
  name: "KernelInput",
  data() {
    return {
      inputText: ''
    }
  },
  props: ['placeholder', 'buttonText', 'twoLines']
}
</script>

<style scoped>

.kernel-input {
  display: inline-flex;
}

.two-lines {
  flex-direction: column;
  align-items: center;
  padding: 84px;
}
.button {
  background-color: var(--font-color-secondary);
  margin-left: -8px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  display: flex;
  padding: 0 30px;
  white-space: nowrap;
  cursor: pointer;
}

.two-lines .button {
  margin-left: 0;
  padding: 13px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
input {
  outline: none;
  --webkit-appearance: none;
  border-radius: 5px;
  flex-grow: 1;
  color: var(--font-color-light);
  font-size: 16px;
  padding: 12px;
  border: 0.5px solid var(--font-color-secondary);
}

.two-lines input {
  min-width: 324px;
  margin-bottom: 16px;
}


@media (max-width: 1024px) {
  .two-lines {
    padding: 48px 0;
  }
}

@media (max-width: 900px) {

  .button {
    padding: 12px 18px;
    font-size: 14px;
  }
  input {
    font-size: 14px;
  }
}

@media (max-width: 800px) {
  input {
    font-size: 14px;
  }
}
@media (max-width: 576px) {
  .button {
    padding: 16px 16px;
    font-size: 14px;
  }
  input {
    max-width: 100%;
  }
  .two-lines input {
    min-width: 224px;
  }
}

@media (max-width: 400px) {
  input {
    font-size: x-small;
  }
}
</style>
