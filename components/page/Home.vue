<template>
  <div class="landing-main-page">
    <div style="padding-bottom: 0; display: flex">
      <div class="safe-secure">

        <ComponentKernelIcons icon="check" class="icon"/>
        100% Safe & Secure
      </div>
    </div>
    <ComponentLandingInfo
        v-if="!!infos"
        :no-gradient="true"
        :illustration="infos[0].name + '.svg'"
        :main-text="$t(`landing.infos.${infos[0].name}.${country}_first`)"
        :additional-text="$t(`landing.infos.${infos[0].name}.${country}_second`)"
        :main-last="$t(`landing.infos.${infos[0].name}.${country}_third`)"
        :large="true"
        :hide-small="true"
        :secondary-text="$t(`landing.infos.${infos[0].name}.${country}_secondary`)"
    >
      <ComponentKernelInput :placeholder="$t('landing.email')" :button-text="$t('landing.create_free_account')"
                   @btn-click="btnClick"
      />
      <!--      TODO change prodSocials-->
      <a class="social" :href="`https://dev.kernel.tools/sign-in?lang=${$i18n.locale}&social=google`" >
        <ComponentKernelIcons icon="google" class="icon"/>
        {{$t('landing.sign_google')}}
      </a>
      <a class="social facebook" :href="`https://dev.kernel.tools/sign-in?lang=${$i18n.locale}&social=facebook`">

        <ComponentKernelImage
            class="icon"
            :common="true"
            image="facebook.svg"
        />
        {{$t('landing.sign_facebook')}}
      </a>
      <div class="app-logos" v-if="app_download">
        <a
            class="android"
            href="https://play.google.com/store/apps/details?id=kerneltools.gb.webview"
            target="_blank">
          <span class="overlay"/>
          <ComponentKernelImage
              :common="true"
              :image="`android.svg`"/>
        </a>
        <div>
          <ComponentKernelImage
              :common="true"
              class="ios"
              :image="`ios.svg`"/>
          <span>Coming soon...</span>
        </div>

      </div>
    </ComponentLandingInfo>

    <div class="global-info">
      <h2 class="global-info-title">{{$t(`landing.global_info_${country}`)}}</h2>
      <span class="global-info-description">
        {{$t(`landing.global_description_first_${country}`)}} <span>{{$t(`landing.global_description_second_${country}`)}} </span> {{$t(`landing.global_description_third_${country}`)}}
      </span>
    </div>

    <div class="landing-partners">
      <ComponentKernelImage
          v-for="partner in partners" :key="partner.image"
          class="partner"
          height="100%"
          :common="true"
          :image="`${partner.image}.png`"
          @click="()=> onPartnerClick(partner)"
      ></ComponentKernelImage>
    </div>

    <div class="landing-benefits">
      <div class="benefits" v-for="benefit in benefits" :key="benefit">
        <ComponentKernelIcons :icon="benefit"/>
        <h4 class="title">{{$t(`landing.benefits.${benefit+benefitCountry}.title`)}}</h4>
        <span class="description">{{$t(`landing.benefits.${benefit+benefitCountry}.description`)}}</span>
      </div>
    </div>

    <ComponentLandingInfo
        v-for="info in (infos || []).slice(1)" :key="info.name"
        class="info"
        :illustration="info.name + '.svg'"
        :main-text="$t(`landing.infos.${info.name}.main`)"
        :reverse="info.reverse"
        :secondary-text="$t(`landing.infos.${info.name}.secondary`)"
    >
      <div style=" display: flex; flex-direction: column">
        <ComponentKernelLinkButton
            :text="$t(`landing.infos.${info.name}.slot_text`)"
            :url="info.slot_href"
            :country="conf.country"
        />
      </div>
    </ComponentLandingInfo>
    <ComponentKernelCarousel class="carousel" :conf="conf"/>
    <div class="register-input">
      <h3 class="register-input-title">{{$t('landing.register_input_title')}}</h3>
      <ComponentKernelInput
          :placeholder="$t('landing.email')"
          :button-text="$t('landing.create_free_account')"
          :two-lines="true"
          @btn-click="btnClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return  {
      partners: [
        {image: '500', href: 'https://500.co/'},
        {image: 'nexia', href: 'https://nexia.com/'},
        {image: 'bog', href: 'https://bankofgeorgia.ge/'},
        {image: 'gita', href: 'https://gita.gov.ge/'},
        {image: 'revup', href: 'https://www.revup.vc/'},
        {image: 'digital_area', href: 'https://www.entrepreneur.com/'}
      ],
      benefits: ['invoice','automate','receivables']
    }
  },
  computed : {
    conf() {
      return this.$ce;
    },
    infos() {
      return this.$ce?.engine?.landingInfos;
    },
    app_download() {
      return this.$ce?.engine?.app_download;
    },
    country() {
      return this.$ce?.country || 'Default';
    },
    benefitCountry() {
      return this.country === 'India' ? '_india': ''
    }
  },
  methods: {
    btnClick(value){
      window.location.href = `https://kernel.tools/sign-up?lang=${this.$i18n.locale}&email=${value}&amp_device_id=${analytics.GetAmplitudeDeviceID()}`;
    },
    onPartnerClick({href}){
      window.open(href, '_blank');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.safe-secure {
  border-radius: 24px;
  font-size: 13px;
  padding: 2px 12px;
  color: var(--font-color-primary);
  align-items: center;
  display: flex;
  background: var(--background-color-light-primary);
}

.safe-secure > .icon {
  width: 14px;
  margin-right: 4px;
  height: 14px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.google-test {
  padding: 16px 12px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  background: #FFFFFF;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  border-radius: 10px;
}

.landing-main-page {
  display: flex;
  padding-top: 172px;
  flex-direction: column;
}

.landing-main-page > * {
  padding-bottom: 220px;
}

.landing-main-page > *:last-child {
  padding-bottom: 0;
}

.global-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}

.register-input-title {
  font-size: 45px;
  color: var(--font-color-primary);
}

.global-info-title {
  text-align: center;
  text-transform: capitalize;
  font-size: 36px;
  color: var(--font-color-primary)
}

.global-info-description {
  font-size: 24px;
  font-weight: 400;
  padding: 0 10vw;
  margin-bottom: 0;
  margin-top: 20px;
  text-align: center;
  color: var(--font-color-primary)
}

.global-info-description > span {
  color: var(--font-color-secondary)
}
.landing-partners {
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  column-gap: 24px;
}


.landing-partners > .partner {
  opacity: 0.5;
  max-height: 72px;
  display: flex;
}

.landing-partners > .partner:hover {
  opacity: 1;
  cursor: pointer;
}

.landing-partners > .partner:last-child {
  justify-content: flex-end;
}


.landing-benefits {
  display: grid;
  grid-gap: 64px;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: space-between;
  color: var(--font-color-primary);
  text-align: center;
}

.landing-benefits > .benefits > .description{
  font-size: 18px;
  color: var(--font-color-light);
}
.landing-benefits > .benefits > .title{
  font-size: 24px;
  padding: 18px 0 ;
  white-space: nowrap;
}
.landing-benefits > .benefits {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-logos {
  display: flex;
  align-items: flex-end;
  padding: 24px 12px 24px 0;
}

.app-logos .android {
  padding-right: 44px;
  position: relative;
}

.social {
  display: flex;
  margin-top: 24px;
  padding: 13px 0 ;
  padding-left: 30%;

  font-size: 16px;
  align-items: center;
  cursor: pointer;
  background: #FFFFFF;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  border-radius: 10px;
}

.social > .icon {
  margin-right: 16px;
}

.social.facebook {
  margin-top: 12px;
}

.social.facebook > .icon {
  height: 24px;
  width: 24px;
}

.app-logos .ios {
  padding-right: 12px;
}

.app-logos span {
  font-size: 14px;
  align-items: flex-end;
  display: flex;
  opacity: 0.5;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}

@media (max-width: 1440px) {
  .landing-partners > .partner {
    max-height: 72px;
  }
}

@media (max-width: 1124px) {

  .landing-main-page > * {
    padding-bottom: 144px;
  }
  .landing-main-page {
    padding-top: 116px;
  }

  .landing-partners {
    column-gap: 64px;
    display: flex;
    row-gap: 32px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .landing-benefits {
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .landing-benefits > .benefits:last-child {
    grid-column: 1/3;
    align-items: center;
  }


  .landing-benefits > .benefits:last-child > .description {
    width: 40%;
  }

  .landing-partners > .partner {
    max-width: 80vw;
    max-height: 44px;
  }

  .landing-partners > .partner:last-child {
    justify-content: unset;
  }

  .register-input-title {
    font-size: 24px;
  }
}

@media (max-width: 900px) {

  .landing-benefits > .benefits {
    max-width: unset;
  }

  .global-info-description {
    padding: 0;
  }

  .social {
    font-size: 14px;
  }

}
@media (max-width: 700px) {
  .landing-main-page > * {
    padding-bottom: 64px;
  }
  .landing-partners > .partner {
    max-width: 40vw;
  }
  .global-info-title {
    font-size: 24px;
  }

  .global-info-description {
    font-size: 14px;
  }
}

@media (max-width: 700px) {


  .landing-benefits > .benefits:last-child {
    grid-column: unset;
    align-items: center;
  }


  .landing-benefits > .benefits:last-child > .description {
    width: unset;
  }

  .landing-partners > .partner {
    max-width: 100vw;
    max-height: 33px;
    justify-content: space-between;
  }
  .global-info-title, .global-info-description {
    text-align: start;
  }

  .app-logos {
    flex-direction: column;
    align-items: baseline;
  }

  .android {
    margin-bottom: 12px;
  }
}
</style>
