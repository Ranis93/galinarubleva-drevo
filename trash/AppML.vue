<template>
  <section class="might-like">
    <div class="container">
      <div class="might-like__inner">
        <div class="might-like__title">Вам также может понравиться:</div>
        <div
          class="might-like__cards"
          @click="
              this.$store.commit('artic/closeLinks')
          "
        >
          <nuxt-link
            :to="this.getAllArticles[this.cardsNum[0]].url"
            @click="
              $store.commit('artic/setCurrentArticle', { value: cardsNum[0] }),
                getRandomCards()
            "
            class="might-like__card"
          >
            <div class="might-like__img">
              <img
                :src="this.getAllArticles[this.cardsNum[0]].src"
                alt="might-like__img"
              />
            </div>
            <div class="might-like__text">
              {{ this.getAllArticles[this.cardsNum[0]].title }}
            </div>
          </nuxt-link>
          <nuxt-link
            :to="this.getAllArticles[this.cardsNum[1]].url"
            @click="
              $store.commit('artic/setCurrentArticle', { value: cardsNum[1] }),
                getRandomCards()
            "
            class="might-like__card"
          >
            <div class="might-like__img">
              <img
                :src="this.getAllArticles[this.cardsNum[1]].src"
                alt="might-like__img"
              />
            </div>
            <div class="might-like__text">
              {{ this.getAllArticles[this.cardsNum[1]].title }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      cardsNum: []
    }
  },
  computed: mapGetters('artic', ['getAllArticles']),
  methods: {
    getRandomCards () {
      const lengthArr = this.getAllArticles.length
      const rndNum1 = Math.floor(Math.random() * lengthArr)
      let rndNum2
      if (this.getAllArticles.length > 1) {
        do {
          rndNum2 = Math.floor(Math.random() * lengthArr)
        } while (rndNum1 === rndNum2)
      }
      this.cardsNum = [rndNum1, rndNum2]
    }
  },
  beforeMount () {
    this.getRandomCards()
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
