<template>
  <div class="host">
    <div class="drawer-container" @click.stop="dropdownOpened = false">
      <div class="header">
        <ComponentKernelIcons icon="logo_small"/>
        <ComponentKernelIcons icon="close" @click="$emit('close')"/>
      </div>

      <div class="navigations">
        <div
            class="navigation"
            v-for="navigation in navigations"
             :key="navigation.name"
        >
          <span @click.stop="(event)=> dropdownOpen(event, navigation)">
            <h5>
              <a
                  v-if="navigation.redirect"
                  :href="navigation.to+ '?lang=' + $i18n.locale">
                {{$t(`navigation.${navigation.name}`)}}</a>
              <span v-else-if="navigation.dropDown">{{$t(`navigation.${navigation.name}`)}}</span>
              <router-link v-else :to="navigation.to">{{$t(`navigation.${navigation.name}`)}}</router-link>
            </h5>
            <span class="icon"
                  :class="{'opened': dropdownOpened}"
                  v-if="navigation.dropDown">
            <ComponentKernelIcons
                style="cursor: pointer"
                icon="arrow-down"
            />
            </span>
          </span>
          <div class="additions" v-if="navigation.dropDown && dropdownOpened">
            <div
                class="addition"
                v-for="addition in navigation.additions"
                :key="addition"
            >
              <a
                  v-if="addition.redirect"
                  :href="addition.to+ '?lang=' + $i18n.locale">
                {{$t(`navigation.${addition.name}`)}}</a>
              <router-link v-else :to="addition.to">{{$t(`navigation.${addition.name}`)}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KernelIcons from "./KernelIcons";
export default {
name: "KernelNavDrawer",
  props: ['navigations'],
  components: {KernelIcons},
  data() {
    return  {
      dropdownOpened:false,
    }
  },
  methods: {
    dropdownOpen(event, navigation) {
      if(navigation.dropDown) {
        this.dropdownOpened = !this.dropdownOpened;
        event.stopPropagation();
      }else {
        this.dropdownOpened = false
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.host {
  color: var(--font-color-primary);
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  transition: visibility 0.5s ease-in-out;
  overflow-y: auto;
}
.drawer-open {
  visibility: visible;
}

.navigation > span, .navigation > span h5{
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-top: 0;
}

.icon {
  display: flex;
  margin-left: 6px;
}

.icon.opened {
  transform: rotate(180deg);
}
.drawer-container {
  position: absolute;
  padding: 36px 42px;
  left: 0;
  border: unset;
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px 0.5px;
  width: 50%;
  top: 0;
  min-height: 100%;
}
.drawer-open .drawer-container {
  transform: translateX(0);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigations {
  display: flex;
  flex-direction: column;
}

.navigation {
  display: flex;
  padding: 20px 0;
  border-bottom: 0.5px solid var(--border-color-dark);
  flex-direction: column;
}

.additions {
  padding: 20px 0 0 24px;
}

.addition {
  padding: 16px 0;
}

@media (max-width: 600px) {
  .drawer-container {
    width: 100%;
    padding: 24px 32px;
  }

}

</style>
