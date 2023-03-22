<template>
  <carousel
    class="services__slider"
    :loop="true"
    :nav="true"
    :navText="[,]"
    :dots="false"
    :items="1"
    :center="false"
    :margin="20"
    :responsive="{480:{items:1,stagePadding:0},500:{items:1,stagePadding:60},600:{items:2,stagePadding:0},768:{items:2}, 800:{items:2,autoWidth:true}, 1024:{nav:false,items:2,autoWidth:true}, 1026:{items:3}}"
  >
    <div class="services__slide eco">
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
    <div class="services__slide std">
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
    <div class="services__slide vip">
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
  </carousel>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('service-packages', ['packages'])
  },
  methods: {
    ...mapMutations('service-packages', ['setCurrentPackage'])
  },
}
</script>

<style>
.services__slider .owl-stage{
  display: flex;
  align-items: stretch;
}
.services__slide {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  background-position: right center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px #e4e4e4;
  border-radius: 30px;
  padding: 20px 100px 30px 25px;
  background-size: contain;
}
.services__slide.eco {
  background-image: url("../../../assets/img/card_first_bg.png");
}
.services__slide.std {
  background-image: url("../../../assets/img/card_second_bg.png");
}
.services__slide.vip {
  background-image: url("../../../assets/img/card_last_bg.png");
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
.services__slider .owl-prev, .services__slider .owl-next{
  width: 78px;
  height: 42px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.services__slider .owl-nav{
  margin-top: 50px!important;
}
.services__slider .owl-prev {
  background: url("../../../assets/img/services_arrow-left.svg")!important;
  margin: 0 10px 0 0!important;
  padding: 0!important;
}
.services__slider .owl-next {
  background: url("../../../assets/img/services_arrow-right.svg")!important;
  margin: 0 0 0 10px!important;
  padding: 0!important;
}
@media (max-width: 1024px) {
  .services__slide {
    width: 372px;
  }
}
@media (max-width: 900px) {
  .services__slide {
    width: auto;
  }
}
@media (max-width: 768px) {
  .services__slide {
    padding: 19px 78px 28px 23px;
  }
}
@media (max-width: 360px) {
  .services__slider .owl-nav{
    margin-top: 30px!important;
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
}
</style>
