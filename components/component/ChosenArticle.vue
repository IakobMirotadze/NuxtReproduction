<template>
  <div className="article-container">
    <img :src="article.feature_image" class="article-image">
    <h1 className="title">{{ article.title }}</h1>
    <span v-html="article.html"></span>
  </div>
</template>

<script>
export default {
  name: "ChosenArticle",
  props: ['article'],
  mounted() {
    document.querySelector('#__nuxt > .container').classList.add('article-page')
    this.title = document.head.querySelector('title').innerText;
    console.log(this.article)
    document.head.querySelector('title').innerText = this.article.title;
  },
  watch: {
    '$route': function () {
      if (this.$route.name.includes('SingleArticle')) {
        document.querySelector('#__nuxt > .container').classList.add('article-page')
        if (!this.title) this.title = document.head.querySelector('title').innerText;

        document.head.querySelector('title').innerText = this.article.title;
      } else {

        document.head.querySelector('title').innerText = this.title;
        document.querySelector('#__nuxt > .container').classList.remove('article-page')

      }
    }
  }
}
</script>

<style lang="scss">
.article-container {
  display: flex;
  align-self: center;

  h2, h3, h4 {
    padding-top: 100px;
    margin-top: -100px;
  }

  blockquote {
    border-left: 0.25rem solid #00d369;
    padding-left: 2rem;
    font-style: italic;
  }

  ul > li::marker {
    color: var(--font-color-secondary)
  }

  img {
    max-width: 100%;
    height: unset;
  }

  li {
    padding-bottom: 12px;
  }

  a:not(.blog-button) {
    color: var(--font-color-secondary)
  }
}
</style>
<style scoped>
.article-container > *:not(span) {
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
}

.article-container > span, .article-container > h1, .article-container > .article-image {
  box-sizing: border-box;
  max-width: 100%;
  padding-left: 320px;
  padding-right: 320px;
}

.article-image {
  max-height: 400px;
  align-self: baseline;
  border-radius: 6px;
}


@media (max-width: 1024px) {
  .article-container > span, .article-container > h1, .article-container > .article-image {
    padding-left: 120px;
    padding-right: 120px;
  }
}

@media (max-width: 738px) {
  .article-container > span, .article-container > h1, .article-container > .article-image {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media (max-width: 425px) {
  .article-container > span, .article-container > h1, .article-container > .article-image {
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
