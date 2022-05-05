<script setup>
const { $ce } = useNuxtApp();
</script>

<template>
  <div class="nav-content">
    <div class="container nav-container">
    <ComponentKernelIcons icon="burger" class="burger" @click="openDrawer"/>
    <NuxtLink to="/" style="position: relative">
      <ComponentKernelImage
        class="logo"
        image="Kernel_logo_main.svg"
      />
      <ComponentKernelIcons icon="ind" class="icon" style="width: 32px; margin-left: 12px"/>
      <div class="overlay"/>
    </NuxtLink>
      <div class="navigations">
        <div class="navigation"
          v-for="navigation in navigations"
           :key="navigation.name"
        >
          <div class="navigation" @click="(event)=> onButtonClick(navigation, event)">
            <h5>
              <a v-if="navigation.redirect"
                  :href="navigation.to+ '?lang=' + $i18n.locale">
                {{$t(`navigation.${navigation.name}`)}}
              </a>
              <span v-else-if="navigation.dropDown">{{$t(`navigation.${navigation.name}`)}}</span>
              <router-link v-else :to="navigation.to">{{$t(`navigation.${navigation.name}`)}}</router-link>
            </h5>
            <span class="icon"
                  v-if="navigation.dropDown">
            <ComponentKernelIcons
                style="cursor: pointer"
                icon="arrow-down"
                :class="{'opened': dropdownOpened}"
            />
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
      <div class="buttons">
        <a :href="`https://kernel.tools/sign-in?lang=${$i18n.locale}`" class="sign-up-button">
          <ComponentKernelButton :text="$t(`navigation.log_in`)"/>
        </a>
        <a
            v-if="$ce?.engine?.book_demo"
            target="_blank"
            href="https://calendly.com/abdul-60/30min?month=2022-04" class="registration-button">
          <ComponentKernelButton :text="$t(`navigation.book_a_demo`)" :filled="true"/>
        </a>
        <a v-else
           :href="`https://kernel.tools/sign-up?lang=${$i18n.locale}`"
           class="registration-button">
          <ComponentKernelButton
              :text="$t(`navigation.sign_up`)"
              :filled="true"
              :dense="$i18n.locale === 'ka'"
          />
        </a>
      </div>
    </div>
    <KernelNavDrawer
        :class="{'drawer-open': drawerOpen}"
        @click="closeDrawer"
        @close="closeDrawer"
        :navigations="navigations"></KernelNavDrawer>
  </div>
</template>

<script>
import KernelImage from "./KernelImage";
import KernelButton from "./KernelButton";
import KernelIcons from "./KernelIcons";
import KernelNavDrawer from "./KernelNavDrawer";
export default {
  name: "KernelNav",
  components: {KernelNavDrawer, KernelIcons, KernelButton, KernelImage},
  data () {
    return {
      dropdownOpened: false,
      drawerOpen: false,
    }
  },
  methods : {
    openDrawer(){
      this.drawerOpen = true;
      // document.getElementById('app').classList.add('no-scroll') //tODO find alternative
    },
    closeDrawer(){
      this.drawerOpen = false;
      // document.getElementById('app').classList.remove('no-scroll') //tODO find alternative
    },
    onButtonClick(navigation, event){
      event.stopPropagation();
      if(navigation.dropDown){
        this.dropdownOpened = !this.dropdownOpened;
      }else {
        this.dropdownOpened = false;
      }
    },
    hideDropdown() {
      this.dropdownOpened = false;
    }
  },
  computed: {
    navigations(){
      return this.$ce?.engine?.navigations;
    },
    showFlag(){
      return this.$ce?.engine?.showFlag;
    },
  },
  created() {
    // document.addEventListener("click", this.hideDropdown) //tODO find alternative
  }
}
</script>

<style scoped>
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .icon {
    margin-left:6px;
    width: 12px;
    cursor:pointer;
    position: relative;
    display: flex;
    align-items: center;
  }

  .opened {
    transform: rotate(270deg);
  }

  .nav-container {
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    max-height: 40px;
  }
  .nav-content {
    width: 100%;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    z-index: 1;
  }

  .logo {
    width: 120px;
    cursor: pointer;
  }

  .buttons {
    display: flex;
  }

  .buttons > :last-child{
    margin-left: 16px;
  }

  .burger {
    display: none;
  }

  .navigations {
    display: flex;
    font-size: 18px;
    white-space: nowrap;
    color: var(--font-color-primary);
  }

  .navigations > *:not(:last-child) {
    margin-right: 24px
  }

  .navigation{
    display: flex;
    position: relative;
  }

  .navigation h5 {
    cursor: pointer;
  }

  .additions {
    position: absolute;
    top: 42px;
    left: 12px;
    padding: 12px 24px;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .addition {
    display: flex;
    padding: 20px 0;
    border-bottom: 0.5px solid var(--font-color-secondary);
  }

  .addition:last-child {
    border-bottom: none;
  }

  .addition span {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .registration-button{
      display: none !important;
    }

    .navigations {
      padding: 0 24px;
      justify-content: space-between;
      flex-grow: 1;
    }
    .navigations > *:not(:last-child) {
      margin-right: 0;
    }

    .logo {
      width: 100px
    }
  }
  @media (max-width: 900px) {
    .navigations {
      display: none;
    }

    .burger {
      display: flex;
      height: 16px;
    }
  }



</style>
