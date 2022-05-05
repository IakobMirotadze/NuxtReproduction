<template>
  <div class="landing-info" :class="{'reverse': reverse, 'hide-small': hideSmall, 'noGradient': noGradient}">
    <div class="texts" >
      <h2 class="main-text"
        :class="{'large': large}"
      >
        {{mainText}}
        <span
            v-if="additionalText"
            class="additional main-text"
            :class="{'large': large}" v-html="additionalText"></span>
        {{mainLast}}
      </h2>
      <span class="secondary-text" v-html="secondaryText"></span>
      <slot></slot>
    </div>
    <ComponentKernelImage
        class="illustration"
        v-if="illustration"
        :image="illustration"/>
    </div>
</template>

<script>
import KernelImage from "./KernelImage";
export default {
name: "LandingInfo",
  // props: ['illustration', 'mainText', 'secondaryText'],
  props: {
    illustration: {
      default: ''
    },
    mainText: {
      default: ''
    },
    mainLast: {
      default: ''
    },
    secondaryText: {
      default: ''
    },
    noGradient: {
      default: false
    },
    additionalText: {
      default: ''
    },
    large: {
      default: false,
    },
    hideSmall: {
      default: false,
    },
    reverse: {
      default: false,
    },
  },
  components: {KernelImage}
}
</script>

<style scoped>
  .landing-info {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr;
    grid-gap: 32px;
  }

  .noGradient {
    background: none;
  }

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .texts > *:not(:last-child){
    margin-bottom: 56px;
  }

  .main-text {
    color: var(--font-color-primary);
    font-size: 34px;
  }

  .main-text.large {
    font-size: 45px;
    font-family: FiraGo_SemiBold;
  }

  .additional {
    color: var(--font-color-secondary);
    font-size: inherit;
  }

  .secondary-text{
    color: var(--font-color-light);
    font-size: 24px;
    margin-top: 56px;
    line-height: 1.2;
  }

  .reverse {
    grid-template-columns: 3fr 2fr;
    justify-items: end;
  }
  .reverse > .texts{
    grid-column: 2;
  }

  .illustration {
    width: 100%;
    margin: -5% 0 -40px 5%;
  }

  .reverse > .illustration {
    grid-row: 1;
    margin-left: 0;
    margin-right: 5%;
  }

  @media (max-width: 1024px) {
    .main-text, .main-text.large{
      font-size: 24px;
    }

    .landing-info {
      grid-template-columns: 1fr 1fr;
    }

    .texts > *:not(:last-child){
      margin-bottom: 32px;
    }
  }

  @media (max-width: 800px) {
    .landing-info{
      display: flex;
      flex-direction: column;
    }

    .reverse > .illustration {
      margin: 0;
      width: 112%;
    }
    .illustration {
      width: 112%;
      margin: 0;
    }

    .texts {
      width: 100%;
    }

    .texts > *:not(:last-child){
      margin-bottom: 24px;
    }

    .main-text, .main-text.large{
      font-size: 24px;
    }

    .secondary-text {
      font-size: 18px;
    }

  }
  @media (max-width: 560px) {
    .landing-info {
      padding: 0;
    }
    .hide-small .illustration{
      display: none;
    }
  }
</style>
