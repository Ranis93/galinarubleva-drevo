<template>
  <section
    class="might-like"
    @click.capture="closeLinks"
  >
    <div class="container">
      <div class="might-like__inner">
        <div class="might-like__title">
          Вам также может понравиться:
        </div>
        <div
          class="might-like__cards"
        >
          <nuxt-link
            :to="getRandomCards[0].url"
            class="might-like__card"
            @click="
              $store.commit('artic/setCurrentArticle', { value: getRandomCards[0] })
            "
          >
            <div class="might-like__img">
              <img
                :src="getRandomCards[0].src"
                alt="might-like__img"
              >
            </div>
            <div class="might-like__text">
              {{ getRandomCards[0].title }}
            </div>
          </nuxt-link>
          <nuxt-link
            :to="getRandomCards[1].url"
            class="might-like__card"
            @click="
              $store.commit('artic/setCurrentArticle', { value: getRandomCards[1] })
            "
          >
            <div class="might-like__img">
              <img
                :src="getRandomCards[1].src"
                alt="might-like__img"
              >
            </div>
            <div class="might-like__text">
              {{ getRandomCards[1].title }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('artic', ['getAllArticles', 'getRandomCards'])
  },
  methods: {
    ...mapMutations('artic', ['closeLinks'])
  }
}
</script>

<style scoped>
.might-like {
  margin: 40px 0 80px 0;
}
.might-like__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #1d1d1d;

  margin-bottom: 30px;
}
.might-like__cards {
  display: flex;
  column-gap: 31px;
}
.might-like__card {
  width: 330px;
  text-decoration: none;
}
.might-like__img {
  max-width: 100%;
  max-height: 172px;
  border-radius: 10px;
}
.might-like__img > img {
  border-radius: 10px;
}
.might-like__text {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
  margin-top: 20px;
}
@media (max-width: 480px) {
  .might-like__cards {
    column-gap: 10px;
    justify-content: space-between;
  }
  .might-like__card {
    width: 48%;
  }
  .might-like__text {
    font-size: 18px;
    line-height: 22px;
  }
}
@media (max-width: 360px) {
  .might-like__cards {
    flex-wrap: wrap;
    row-gap: 30px;
  }
  .might-like__card {
    width: 100%;
  }
}
</style>
