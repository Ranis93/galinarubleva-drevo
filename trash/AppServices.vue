<template>
  <section class="services">
    <div class="container">
      <div class="services__inner">
        <div class="services__head">
          <div class="services__title">Пакеты услуг</div>
          <div class="services__desc">
            Вы можете стать Хранителем своего рода - человеком, который
            объединит отрывочные сведения, найдёт своих предков и передаст
            будущему поколению многовековую историю вашего Рода.
          </div>
        </div>
        <div class="services__slider">
          <div class="services__list">
            <div class="services__track">
              <div class="services__slide">
                <div class="services__card first">
                  <div class="cards__title">Эконом</div>
                  <div class="cards__desc">
                    Составление родословного древа
                    <strong>до конца 18 века</strong>
                  </div>
                  <div class="cards__desc">
                    Поиск в органах ЗАГС за советский период с 1920-х гг.
                    записей
                  </div>
                  <div class="cards__desc">
                    Составление схемы родословной линии и пояснительной записке
                  </div>
                  <div class="cards__price">
                    {{parseInt(packages[0].price).toLocaleString("ru-RU")}} руб. <span>по Башкирии</span>
                  </div>
                  <nuxt-link to="/our_services/packages">
                    <button
                      class="cards__btn"
                      @click="setCurrentPackage({ value: 0 })"
                    >
                      Подробнее
                    </button>
                  </nuxt-link>
                  <div class="cards__price">
                    {{parseInt(packages[3].price).toLocaleString("ru-RU")}} руб. <span>по России</span>
                  </div>
                  <nuxt-link to="/our_services/packages">
                    <button
                      class="cards__btn"
                      @click="setCurrentPackage({ value: 3 })"
                    >
                      Подробнее
                    </button>
                  </nuxt-link>
                </div>
              </div>
              <div class="services__slide">
                <div class="services__card second">
                  <div class="cards__title">Стандарт</div>
                  <div class="cards__desc">
                    Составление родословного древа
                    <strong>до конца 18 века</strong>
                  </div>
                  <div class="cards__desc">
                    Поиск доп. информации о предках в историчниских сборниках
                  </div>
                  <div class="cards__desc">
                    Дизайн и оформление исследовательской работы
                  </div>
                  <div class="cards__price">
                    {{parseInt(packages[1].price).toLocaleString("ru-RU")}} руб. <span>по Башкирии</span>
                  </div>
                  <nuxt-link to="/our_services/packages">
                    <button
                      class="cards__btn"
                      @click="setCurrentPackage({ value: 1 })"
                    >
                      Подробнее
                    </button>
                  </nuxt-link>
                  <div class="cards__price">
                    {{parseInt(packages[4].price).toLocaleString("ru-RU")}} руб. <span>по России</span>
                  </div>
                  <nuxt-link to="/our_services/packages">
                    <button
                      class="cards__btn"
                      @click="setCurrentPackage({ value: 4 })"
                    >
                      Подробнее
                    </button>
                  </nuxt-link>
                </div>
              </div>
              <div class="services__slide">
                <div class="services__card last">
                  <div class="cards__title">VIP</div>
                  <div class="cards__desc">
                    Составление родословного древа
                    <strong>до конца 17 века</strong>
                  </div>
                  <div class="cards__desc">
                    Поиск доп. информации о предках в исторических сборниках
                  </div>
                  <div class="cards__desc">
                    Оформление и презентация исследовательской работы
                  </div>
                  <div class="cards__price">
                    {{parseInt(packages[2].price).toLocaleString("ru-RU")}} руб. <span>по Башкирии</span>
                  </div>
                  <nuxt-link to="/our_services/packages">
                    <button
                      class="cards__btn"
                      @click="setCurrentPackage({ value: 2 })"
                    >
                      Подробнее
                    </button>
                  </nuxt-link>
                  <div class="cards__price">
                    {{parseInt(packages[5].price).toLocaleString("ru-RU")}} руб. <span>по России</span>
                  </div>
                  <nuxt-link to="/our_services/packages">
                    <button
                      class="cards__btn"
                      @click="setCurrentPackage({ value: 5 })"
                    >
                      Подробнее
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="services__arrows">
          <button
            type="button"
            class="services__arrow-prev prev disabled"
          ></button>
          <div class="services__center"></div>
          <button type="button" class="services__arrow-next next"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { dragDropSlider } from '../assets/js/slider.js'
export default {
  computed: {
    ...mapState('service-packages', ['packages'])
  },
  mounted () {
    try {
      dragDropSlider(
        '.services__slider',
        '.services__list',
        '.services__track',
        '.services__slide',
        '.services__arrows',
        3
      )
    } catch (error) {}
  },
  methods: {
    ...mapMutations('service-packages', ['setCurrentPackage'])
  }
}
</script>

<style scoped>
.services {
  background: #e6e7e9;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}
.services__inner {
  margin: 100px 0;
}
.services__head {
  display: flex;
  justify-content: space-between;
  column-gap: 27px;
}
.services__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #007632;
  flex-shrink: 0;
}
.services__desc {
  max-width: 880px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.services__slider {
  margin-top: 41px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}

/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */

.services__slider img {
  pointer-events: none;
}
.services__list {
  width: 100%;
  height: 425px;
  overflow: hidden;
}
.services__list.grab {
  cursor: grab;
}
.services__list.grabbing {
  cursor: grabbing;
}
.services__slider-track {
  display: flex;
}
.services__slide {
  width: 372px;
  height: 425px;
  padding-right: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.services__track {
  display: flex;
}
.services__arrows {
  display: none;
  margin: 0 auto;
  width: fit-content;
  margin-top: 50px;
}
.services__arrow-prev,
.services__arrow-next {
  width: 78px;
  height: 42px;

  background-color: #e6e7e9;
  background-position: center center;
  background-size: 130%;
  border: 0;
}
.services__arrow-prev {
  background-image: url("../assets/img/services_arrow-left.svg");
}
.services__arrow-next {
  background-image: url("../assets/img/services_arrow-right.svg");
  margin-left: 20px;
}
.services__arrow-next.disabled,
.services__arrow-prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
.services__center {
  display: inline-block;
}
.services__card {
  width: 372px;
  height: 425px;
  flex-shrink: 0;
  box-sizing: border-box;
  background-position: right center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px #e4e4e4;
  border-radius: 30px;
  padding: 20px 100px 30px 25px;
}
.services__card.first {
  background-image: url("../assets/img/card_first_bg.png");
  background-size: contain;
}
.services__card.second {
  background-image: url("../assets/img/card_second_bg.png");
  background-size: contain;
}
.services__card.last {
  background-image: url("../assets/img/card_last_bg.png");
  background-size: contain;
}
.cards__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #673800;
}
.cards__desc {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c1909;
  max-width: 255px;
  padding-top: 3px;
}
.cards__price {
  margin-top: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #2c1909;
}
.cards__price > span {
  color: #007632;
}
.cards__btn {
  margin-top: 15px;
  padding: 6px 20px;
  background: #ffffff;
  border: 1px solid #7d4e24;
  border-radius: 50px;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #7d4e24;
}
.cards__btn:hover {
  cursor: pointer;
  color: #ffffff;
  background: #7d4e24;
  box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
}
@media (max-width: 1024px) {
  .services__inner {
    margin: 100px 0 50px 0;
  }
  .services__desc {
    max-width: 680px;
  }
  .services__arrows {
    display: block;
  }
}
@media (max-width: 768px) {
  .services__desc {
    font-size: 18px;
    line-height: 22px;
    max-width: 471px;
  }
  .services__slider {
    margin-top: 95px;
  }
  .services__card {
    width: 355px;
    height: 405px;
    padding: 20px 80px 0 23px;
  }
  .services__slide {
    width: 355px;
    height: 405px;
  }
}
@media (max-width: 480px) {
  .services__inner {
    margin-top: 60px;
  }
  .services__head {
    flex-wrap: wrap;
    row-gap: 20px;
  }
  .services__title {
    font-size: 26px;
    line-height: 35px;
  }
  .services__slider {
    margin-top: 58px;
  }
}
@media (max-width: 360px) {
  .services__inner {
    margin: 60px 0;
  }
  .services__head {
    row-gap: 22px;
  }
  .services__title {
    font-size: 24px;
    line-height: 33px;
  }
  .services__desc {
    font-size: 16px;
    line-height: 19px;
  }
  .services__slider {
    margin-top: 35px;
  }
  .services__slide {
    width: 320px;
    height: 399px;
    justify-content: flex-start;
  }
  .services__card {
    width: 320px;
    height: 399px;
  }
  .cards__title {
    font-size: 20px;
    line-height: 40px;
  }
  .cards__desc {
    font-size: 14px;
    line-height: 17px;
  }
  .cards__price {
    font-size: 16px;
    line-height: 19px;
  }
  .cards__btn {
    font-size: 14px;
    line-height: 19px;
  }
  .services__arrows {
    margin-top: 30px;
  }
}
</style>
