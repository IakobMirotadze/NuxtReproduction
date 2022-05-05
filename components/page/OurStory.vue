<template>
  <div class="our-story-container">
    <div class="title">
      <h3>{{$t('our_story.title')}}</h3>
      <span v-html="$t('')"></span>
    </div>
    <div class="description">
      <span v-html="$t('our_story.description')"></span>
      <div class="image">
        <ComponentKernelImage :common="true" image="our_story.png" width="100%"/>
      </div>
    </div>
    <div class="landing-partners">
      <div class="partner" v-for="partner in partners" :key="partner.image">
        <ComponentKernelImage
            class="image"
            height="inherit"
            :common="true"
            :image="`${partner.image}.png`"
            @click="()=> onPartnerClick(partner)"
        />
        <h5>{{$t('our_story.'+partner.image)}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurStory",
  data () {
    return {
      partners: [
        {image: 'revup', href: 'https://www.revup.vc/'},
        {image: 'digital_area', href: 'https://www.entrepreneur.com/'},
        {image: 'bog', href: 'https://bankofgeorgia.ge/'},
        {image: 'nexia', href: 'https://nexia.com/'},
        {image: '500', href: 'https://500.co/'},
        {image: 'gita', href: 'https://gita.gov.ge/'},
      ],
    }
  },
  methods: {
    onPartnerClick({href}){
      window.open(href, '_blank');
    }
  }
}
</script>

<style scoped>


.landing-partners {
  position: relative;
  padding-top: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-grow: 1;
  justify-items: center;
  column-gap: 128px;
  row-gap: 128px;
}

.landing-partners > .partner > h5 {
  display: flex;
  flex-grow: 1;
  text-align: center;
  width: 100%;
  justify-content: center;
  padding-top: 72px;
  color: var(--font-color-primary);
}

.landing-partners > .partner > .image {
  cursor: pointer;
}

.landing-partners > .partner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 72px;
  align-items: center;
  text-align: center;
}

.our-story-container {
  padding: 164px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title > h3 {
  font-size: 34px;
}
.title > span {
  font-size: 24px;
}

.title > * {
  color: var(--font-color-primary);
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title > *:not(:last-child){
  margin-bottom: 28px;
}

.description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
  justify-content: space-between;
}

.description > span {
  padding-top: 48px;
  line-height: 1.3;
  color: var(--font-color-primary);
}


@media (max-width: 1024px) {
  .landing-partners {
    grid-template-columns: 1fr 1fr;
  }

  .description {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 680px) {

  .description > .image {
    display: none;
  }
  .description {
    grid-template-columns: 1fr;
  }
  .landing-partners {
    grid-template-columns: 1fr;
  }

  .landing-partners > .partner {
    height: 80px;
  }

  .landing-partners > .partner > h5 {
    padding-top: 32px;
  }
}
</style>
