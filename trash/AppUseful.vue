<template>
  <section class="useful">
    <div class="container">
      <div class="useful__inner">
        <div class="useful__head">
          <div class="useful__title">Полезно и интересно</div>
          <nuxt-link to="/articles" class="useful__text">Статьи</nuxt-link>
        </div>
        <div class="useful__slider">
          <div class="useful__list">
            <div class="useful__cards">
              <div
                class="useful__card"
                v-for="(usefulCard, idx) in this.usefulCards"
                :key="usefulCard.id"
              >
                <div class="useful__card-inner">
                  <div class="useful__pic">
                    <img
                      loading="lazy"
                      decoding="async"
                      :src="usefulCard.src"
                      alt="useful__pic"
                    />
                  </div>
                  <nuxt-link
                    @click="$store.commit('artic/setCurrentArticle', { value: idx })"
                    :to="usefulCard.url"
                    class="useful__link"
                  >
                    <div class="useful__desc">{{ usefulCard.title }}</div>
                    <div class="useful__date">{{ usefulCard.date }}</div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="useful__arrows" style="display: none">
          <button
            type="button"
            class="useful__arrow-prev prev disabled"
          ></button>
          <div class="useful__center"></div>
          <button type="button" class="useful__arrow-next next"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { dragDropSlider } from '../assets/js/slider.js'
export default {
  data () {
    return {
      usefulCards: [],
      obj: []
    }
  },
  computed: {
    ...mapGetters('artic', ['getAllArticles'])
  },
  beforeMount () {
    this.usefulCards = this.getAllArticles
  },
  mounted () {
    try {
      const lengthUsefulCards = this.usefulCards.length
      dragDropSlider(
        '.useful__slider',
        '.useful__list',
        '.useful__cards',
        '.useful__card',
        '.useful__arrows',
        lengthUsefulCards
      )
    } catch (error) {}
  }
}
</script>

<style scoped>
.useful {
  background-color: rgba(209, 199, 180, 0.84);

  background-image: url("../assets/img/useful_bg.png");
  background-repeat: no-repeat;
  background-position: right center;
}
.useful__inner {
  padding: 100px 0 90px 0;
}
.useful__head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
}
.useful__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #007632;
}
.useful__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #007632;
  text-decoration: none;
}
.useful__text:hover {
  text-decoration: underline;
}
.useful__cards {
  display: flex;
}
.useful__slider {
  vertical-align: middle;
  position: relative;
  display: inline-block;
  width: 100%;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}

/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */

.useful__slider img {
  pointer-events: none;
}
.useful__list {
  width: 100%;
  height: 323px;
  overflow: hidden;
}

.useful__list.grab {
  cursor: grab;
}
.useful__list.grabbing {
  cursor: grabbing;
}
.useful__card {
  width: 400px;
  /* Чтобы слайды не сжимались */
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  box-sizing: content-box;
}

.slide img {
  width: 100%;
  height: 100%;
}

.slider-arrows {
  margin-top: 50px;
  text-align: center;
}
.useful__card-inner {
  padding: 0 10px;
}
.useful__link {
  text-decoration: none;
}
.useful__pic {
  max-width: 400px;
  height: 200px;
}
.useful__desc {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #673800;

  max-width: 100%;
  margin: 20px 0 15px 0;
}
.useful__date {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.34);
}
@media (max-width: 1024px) {
  .useful__card,
  .useful__pic {
    max-width: 392px;
  }
}
@media (max-width: 768px) {
  .useful__inner {
    padding: 100px 0;
  }
  .useful__text {
    display: none;
  }
  .useful__card-inner {
    padding: 0 20px 0 0;
  }
  .useful__card-inner {
    max-width: 354px;
    max-height: 187px;
  }
  .useful__card,
  .useful__pic {
    max-width: 374px;
  }
}
@media (max-width: 480px) {
  .useful__inner {
    padding: 60px 0;
  }
  .useful__title {
    font-size: 26px;
    line-height: 35px;
  }
  .useful__head {
    margin-bottom: 44px;
  }
  .useful__cards,
  .useful__card {
    justify-content: flex-start;
  }
  .useful__pic {
    max-height: 163px;
  }
  .useful__card,
  .useful__pic {
    max-width: 329px;
  }
  .useful__desc {
    font-size: 18px;
    line-height: 25px;
    margin-top: 30px;
  }
}
@media (max-width: 360px) {
  .useful__inner {
    padding: 60px 0 75px 0;
  }
  .useful__head {
    margin-bottom: 46px;
  }
  .useful__title {
    font-size: 24px;
    line-height: 33px;
  }
  .useful__pic,
  .useful__link {
    max-width: 280px;
    max-height: 147px;
  }
  .useful__card,
  .useful__pic {
    max-width: 295px;
  }
  .useful__card-inner {
    padding-right: 15px;
  }
  .useful__pic {
    max-height: 147px;
  }
}
</style>
