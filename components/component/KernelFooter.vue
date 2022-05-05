<template>
  <div class="landing-footer" >
    <div class="container footer-content" :class="$i18n.locale">
      <span class="logo">
      <ComponentKernelImage
        :common="true"
        image="Kernel_icon_outlined.svg"
        width="44px"
        height="70px"
      />
        <div class="app-logos">
        <a
            class="android"
            href="https://play.google.com/store/apps/details?id=kerneltools.gb.webview"
            target="_blank">
            <span class="overlay"/>
              <ComponentKernelImage
                  :common="true"
                  :image="`android.svg`"/>
        </a>
          <div style="display: grid; opacity: 0.4">
            <ComponentKernelImage
                :common="true"
                class="ios"
                :image="`ios.svg`"/>
            <span>Coming soon...</span>
          </div>
      </div>
      </span>
      <div class="info" v-for="item of Object.keys(infos?.navigations || {})" :key="item">
        <h4 class="info-title">{{$t(`footer.${item}`)}}</h4>
          <span v-for="info of infos.navigations[item]" :key="info" class="description">
              <a
                  v-if="info.redirect"
                  :href="info.to+ '?lang=' + $i18n.locale">
                {{$t(`footer.${info.name}`)}}</a>
              <router-link v-else :to="info.to">{{$t(`footer.${info.name}`)}}</router-link>
          </span>
      </div>
      <div class="contacts info">
        <h4 class="info-title">{{$t('footer.contact_us')}}</h4>
        <div class="socials">
          <div style="position: relative;">
          <a :href="$ce.engine.facebook" target="_blank" class="social-link"></a>
          <ComponentKernelImage
              class="social-icon"
              :common="true"
              image="facebook.svg"
          />
            </div>
          <div style="position: relative;">
            <a :href="$ce.engine.instagram" target="_blank" class="social-link"></a>
          <ComponentKernelImage
              class="social-icon"
              :common="true"
              image="instagram.svg"
          />
            </div>
            <div style="position: relative;">
              <a :href="$ce.engine.linkedIn" target="_blank" class="social-link"></a>
          <ComponentKernelImage
              class="social-icon"
              :common="true"
              image="linkedin.svg"
          />
              </div>

          <div style="position: relative;">
            <a :href="$ce.engine.twitter" target="_blank" class="social-link"></a>
          <ComponentKernelImage
              class="social-icon"
              :common="true"
              image="twitter.svg"
          />
            </div>
        </div>
        <div class="additional-infos" v-if="infos.whatsApp">
          <div style="width: 18px">
            <ComponentKernelIcons
                icon="whatsApp"/>
          </div>
          <a class="additional-descriptions" :href="`https://wa.me/${infos?.tel}`">
            {{infos?.telTitle || infos.tel}}
          </a>
        </div>
        <div class="additional-infos" v-else>
          <div style="width: 18px">
            <ComponentKernelIcons
                icon="phone"/>
          </div>
          <a class="additional-descriptions" :href="`tel:${infos?.tel}`">
            {{infos?.telTitle || infos.tel}}
          </a>
        </div>
        <div class="country-selector">
          <span @click="dropdownOpened = !dropdownOpened">

          <ComponentKernelIcons
              class="flag-icon"
              :icon="countryObj.icon"
              :class="{'opened': dropdownOpened}"
          />
            {{countryObj.name}}
          <ComponentKernelIcons
              style="cursor: pointer"
              icon="arrow-down"
              :class="{'opened': dropdownOpened}"
          />
          </span>
          <div class="additions" v-if="dropdownOpened">
            <div
                class="addition"
                v-for="addition in countries"
                :key="addition.name"
                @click="()=> $emit('change-country', addition.value)"
            >

              <ComponentKernelIcons
                  class="flag-icon in-drop-down"
                  :icon="addition.icon"
                  :class="{'opened': dropdownOpened}"
              />
              {{addition.name}}
            </div>
          </div>
        </div>
        <div
            class="additional-infos locale"
            v-if="country === 'Georgia'"
            @click="changeLocale()"
        >
          <span :class="{'light': $i18n.locale === 'en'}">En</span>/<span :class="{'light': $i18n.locale === 'ka'}">Ka</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container privacy-additions">
    &#169; 2021 Kernel JSC.
    <ComponentKernelLinkButton
        url="terms"
        class="footer-buttons first"
        :text="$t('footer.terms_and_conditions')"
        mini="true"/>
    <ComponentKernelLinkButton
        url="policy"
        class="footer-buttons"
        :text="$t('footer.privacy_policy')"
        mini="true"/>
  </div>
</template>

<script>
import KernelImage from "./KernelImage";
import KernelIcons from "./KernelIcons";
import KernelLinkButton from "./KernelLinkButton";
export default {
  name: "KernelFooter",
  components: {KernelLinkButton, KernelIcons, KernelImage},
  data() {
    return {
      countries: [
          {name:'Georgia', value: 'Georgia', icon: 'ka'},
          {name:'Philippines', value: 'Philippines', icon: 'phil'},
          {name:'India', value: 'India', icon: 'ind'},
          {name:'International', value: 'Default', icon: 'int'}],
      dropdownOpened: false
    }
  },
  methods: {
    changeLocale(){
      const lang = this.$i18n.locale === 'ka' ? 'en': 'ka'
      console.log(lang)
      this.$i18n.locale = lang;
      // window.localStorage.setItem('locale', lang);
      this.$emit('change-locale', lang === 'ka' ? 'ka': 'ge')
    }
  },
  computed: {
    infos() {
      return this.$ce?.engine?.footer;
    },
    country() {
      return this.$ce?.country;
    },
    countryObj() {
      return (this.countries.filter((item)=> item.value === this.$ce.country)[0])||this.countries[3];
    }
  },
  mounted() {
    console.log('bluh')
    // document.body.addEventListener('click',()=> {this.dropdownOpened = false})
  }
}
</script>

<style scoped>

  .privacy-additions {
    flex-wrap: wrap;
  }
  .landing-footer {
    display: flex;
    border-top: 3px solid var(--background-color-secondary-08);
    border-bottom: 1px solid var(--background-color-secondary-08);
    margin-bottom: 24px;
  }

  .social-link {
    height: 25px;
    width: 25px;
    z-index: 1
  }

  .social-icon {
    position:absolute;
    left: 0;
    top: 0;
    z-index: -1
  }

  .footer-buttons {
    padding-left: 32px;
    padding-bottom: 24px;
  }

  .footer-buttons.first {
    margin-left: 64px;
  }

  .footer-content {
    display: grid;
    column-gap: 64px;
    grid-template-columns: 2fr repeat(4, auto);
    padding: 56px 0;
  }
  .footer-content.ka {
    grid-template-columns: 1fr repeat(4, auto);
  }

  .flag-icon {
    cursor: pointer;
    max-width: 18px;
    min-width: 18px;
    max-height: 18px;
    min-height: 18px;
    border-radius: 50%
  }

  .in-drop-down.in-drop-down {
    margin-right: 24px;
  }

  .country-selector {
    position: relative;
  }

  .country-selector > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #00D369;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 12px;
    width: 100%;
  }
  .additions {
    position: absolute;
    bottom: 24px;
    left: 0px;
    width: 100%;
    padding: 12px 24px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .addition {
    display: flex;
    padding: 20px 0;
    border-bottom: 0.5px solid var(--font-color-secondary);
    cursor: pointer;
  }
  .addition:hover {
    opacity: 0.8;
  }

  .addition:last-child {
    border-bottom: none;
  }

  .addition span {
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    color: var(--font-color-primary);
  }
  .info-title {
    padding-bottom: 28px;
    font-size: 24px;
  }

  .opened {
    transform: rotate(180deg);
  }

  .description {
    font-size: 16px;
    padding-bottom: 32px;
  }

  .socials {
    display: flex;
    justify-content: space-between;
    padding-bottom: 28px;
  }

  .additional-infos {
    display: flex;
    align-items: center;
    padding-bottom: 28px;
    font-size: 16px;
    cursor: pointer;
  }

  .additional-infos > *:not(:last-child){
    margin-right: 14px;
  }

  .app-logos {
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .android {
    margin-bottom: 12px;
    position: relative;
  }
  .ios {
    margin-bottom: 6px;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .additional-infos.locale{
    font-weight: bold;
    color: var(--font-color-primary);
    padding-bottom: 0px;
    padding-top: 28px;
    align-self: baseline;
  }

  .additional-infos.locale > *:not(:last-child){
    margin-right: 2px;
  }
  .additional-infos.locale > .light{
      color: var(--font-color-light);
  }

  @media (max-width: 1290px) {

    .footer-content {
      column-gap: 32px;
    }
  }
  @media (max-width: 1024px) {
    .footer-content {
      column-gap: 24px;
      grid-template-columns: repeat(5, auto);
    }
  }

  @media (max-width: 900px) {

    .footer-content, .footer-content.ka {
      row-gap: 32px;
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }

    .description {
      display: flex;
      justify-content: center;
    }

    .additional-infos {
      justify-content: center;
    }
    .footer-buttons.first {
      margin: 0;
    }
    .footer-buttons {
       padding-left: 16px;
       padding-bottom: 16px;
     }
  }

</style>
