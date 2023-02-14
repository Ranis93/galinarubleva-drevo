<template>
  <section class="articles">
    <div class="container">
      <div class="articles__inner">
        <h1 class="articles__title">
          Статьи по генеалогическому древу семьи и родословной
        </h1>
        <div class="articles__cards">
          <nuxt-link
            v-for="(articleCard, index) in getAllArticles"
            :key="articleCard.id"
            :to="articleCard.url"
            @click="$store.commit('setCurrentArticle', { value: index })"
            class="articles__card"
          >
            <div class="articles-card__img">
              <img
                loading="lazy"
                decoding="async"
                :src="articleCard.src"
                alt="articles_card"
              />
            </div>
            <div class="articles-card__title">{{ articleCard.title }}</div>
            <div class="articles-card__date">{{ articleCard.date }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('artic', ['getAllArticles'])
}
</script>

<style scoped>
.articles__inner {
  padding: 5px 0 50px 0;
}
.articles__title {
  margin-bottom: 35px;
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.articles__cards {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 30px;
}
.articles__card {
  max-width: 280px;
  text-decoration: none;
}
.articles__card:hover > .articles-card__img {
  border: 0.5px solid #673800;
  filter: drop-shadow(0px 0px 10px rgba(90, 60, 34, 0.56));
}
.articles__card:hover {
  cursor: pointer;
}
.articles-card__img {
  max-height: 146px;
  border-radius: 30px;
}
.articles-card__img {
  border: 0.5px solid #f5f5f5;
}
.articles-card__img > img {
  border-radius: 30px;
  object-fit: cover;
}
.articles-card__title {
  margin: 10px 0 15px 0;
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #7d4e24;
}
.articles-card__date {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.34);
}
@media (max-width: 768px) {
  .articles__card {
    max-width: 229px;
  }
  .articles-card__img {
    height: 120px;
  }
}
@media (max-width: 480px) {
  .articles__inner {
    padding-top: 18px;
  }
  .articles__title {
    font-size: 24px;
    line-height: 33px;
  }
  .articles__card {
    max-width: 48%;
  }
  .articles-card__img {
    height: 110px;
  }
}
@media (max-width: 360px) {
  .articles__title {
    margin-bottom: 31px;
  }
  .articles-card__img {
    max-height: 90px;
  }
  .articles-card__title {
    font-size: 14px;
    line-height: 19px;
  }
  .articles-card__date {
    font-size: 12px;
    line-height: 14px;
  }
  .articles-card__img,
  .articles-card__img > img {
    border-radius: 15px;
  }
}
</style>
