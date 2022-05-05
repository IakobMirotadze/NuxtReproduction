<script setup>
   const ghost = useGhost()
   const { data, error, refresh } = await useAsyncData("posts", async () => {
     return ghost.getPosts("ph")
   })
   const pagination = data._value.meta.pagination;
   const articles = data._value.posts;
</script>

<template>
  <div class="articles-main-page">
    <span class="title">{{$t('article.title')}}</span>
    <div class="articles">
      <div
          class="article"
          v-for="(article, index) in articles"
          :key="index"
          @click="goToArticle(article)"
      >
        <div class="image" :style="{backgroundImage: `url(${article.feature_image}`}"></div>
        <span v-html="article.title" class="article-text"></span>
        <span v-if="article.excerpt" v-html="article.excerpt" class="article-subtitle"></span>
      </div>
    </div>
    <div class="read-more" v-if="pagination.page < pagination.pages">
      <span @click="pagination.page++; loadArticles(pagination.page)">{{$t('article.read_more')}}</span>
    </div>
  </div>
</template>
<style scoped>
.articles-main-page {
  color: var(--font-color-primary);
  display: flex;
  padding: 116px 0;
  flex-direction: column;
  flex-grow: 1;
}

* {
  font-family: "Times New Roman" !important;
}

.title {
  font-size: 34px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding-bottom: 32px;
  text-align: center;
}

.articles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 64px;
  gap: 64px;
  font-size: 24px;
}

.input-container {
  position: relative;
}

.article{
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.article-text {
  padding: 16px 0;
  font-weight: 600;
}
.article-subtitle {
  font-size: 16px;
  color: var(--font-color-light)
}

.image {
  height: 250px;
  background-size: cover;
  border-radius: 6px;
}


input[type=text]{
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid #E0E0E0;
  color: #a0d18c;
  width: 250px;
  height: 30px;
  padding-left: 36px;
  padding-top: 2px;
}

input[type=text]:focus {
  outline: none;
  border: 1px solid #E0E0E0;
  color: #2d9fd9;
}

.read-more {
  display: flex;
  font-size: 18px;
  font-weight: 500;
  padding-top: 124px;
  justify-content: center;
}

.read-more > span {
  padding: 24px 48px;
  background: #DAE0EF;
  border-radius: 100px;
  cursor: pointer;
}

.input-icons {
  position: absolute;
  left: 10px;
  top: 6px;
}

@media (max-width: 900px) {
  .articles {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 400px) {
  .articles {
    grid-template-columns: 1fr
  }

  .title {
    font-size: 24px;
  }
}
</style>
