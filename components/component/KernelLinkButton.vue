<template>
  <div class="kernel-link-button" :class="{'mini': mini}">
    <a v-if="isRedirect" :href="url+ '?lang=' + $i18n.locale" class="text"
    >{{text}}</a>
    <router-link v-else :to="{path: url+ '?lang=' + $i18n.locale}" class="text"
    >{{text}}</router-link>
    <ComponentKernelIcons icon="arrow-right" class="icon"/>
  </div>
</template>

<script>
import KernelIcons from "./KernelIcons";
export default {
  name: "KernelLinkButton",
  components: {KernelIcons},
  props: ['url', 'text', 'mini'],
  computed: {
    isRedirect() {
      return this.url.substring(0,4) === 'http'
    }
  }
}
</script>

<style scoped>
.kernel-link-button {
  display: flex;
  align-items: center;
}
.text {
  font-size: 24px;
  align-items: center;
  color: var(--font-color-link-buttons) !important;
  white-space: nowrap;
  border-bottom: 0.5px solid;
  margin-right: 20px;
}

.mini > .icon {
  display: none;
}

.mini > .text {
  font-size: 14px;
}

@media (max-width: 900px) {

  .text {
    margin-right: 16px;
  }
}
@media (max-width: 576px) {
  .text {
    font-size: 18px;
  }
}
</style>
