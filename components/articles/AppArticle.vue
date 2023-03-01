<template>
  <section class="news">
    <div class="container">
      <div class="news__inner">
        <h1 class="news__title">
          {{ getNews.title }}
        </h1>
        <div class="news__image">
          <img :src="getNews.src" alt="news__image">
        </div>
        <div
          class="news__desc"
          @click="$store.commit('artic/closeLinks')"
          v-html="getNews.desc"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head () {
    return {
      title: `${this.getNews.title} | ГалинаРублеваДрево`,
      meta: [
        {
          hid: 'Новости',
          name: 'description',
          content: `Статьи по генеалогии, родословному и семейному древу (дереву) - ${this.getNews.title} ⭐Бесплатная консультация. Звоните!☎ 8(347)244-28-99`
        }
      ]
    }
  },
  computed: {
    ...mapGetters('artic', ['getAllArticles']),
    getNews () {
      const news = this.getAllArticles.find((article) =>
        article.url.trim() == '/articles/' + this.$route.params.articleSrc.trim()
      )
      this.$store.commit('artic/setCurrentArticle', { value: news.id})
      this.$store.commit('bredcrumbs/changeBredcrumbs', {
        values: ['Статьи', news.title],
        paths: ['/articles', news.url]
      })
      return news
    }
  },
  unmounted () {
    this.$store.commit('artic/closeLinks')
  }
}
</script>

<style scoped>
.news {
  margin: 5px 0 30px 0;
}
.news__title {
  font-family: "Noto", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;

  margin-bottom: 30px;
}
.news__image {
  max-width: 580px;
  max-height: 303px;
  border-radius: 30px;
}
.news__desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72) !important;

  margin-top: 30px;
  max-width: 780px;
}
.news__desc > ul {
  margin-left: 25px;
}
.news__desc > a {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72) !important;
}
@media (max-width: 768px) {
  .news {
    margin-top: 10px;
  }
}
@media (max-width: 480px) {
  .news {
    margin-top: 0;
  }
  .news__title {
    font-size: 24px;
    line-height: 33px;
  }
  .news__image {
    max-width: none;
    max-height: none;
    width: 100%;
  }
  .news__desc {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
