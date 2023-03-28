<template>
  <section class="promotions">
    <div class="container">
      <div class="promotions__inner">
        <h1 class="promotions__title">Акции</h1>
        <div class="promotions__types">
          <div
            class="promotions__type"
            :class="{active : activeType == 1}"
            @click="selectActiveType(1)"
          >Активные Акции</div>
          <div
            class="promotions__type"
            :class="{active : activeType == 2}"
            @click="selectActiveType(2)"
          >Завершенные Акции</div>
        </div>
        <div
          v-if="activeType == 1"
          class="promotions__cards"
        >
          <nuxt-link to="/promotions/3-for-price-of-2" class="promotions__card">
            <div class="card__img">
              <img
                loading="lazy"
                decoding="async"
                src="../../assets/img/promotions/3for2/3for2min.png"
                alt="promotion_card"
              />
            </div>
            <div class="card__title">
              Специальное предложение по исследованию по Республике Башкортостан
            </div>
            <div class="card__desc">
              Уникальная возможность от Центра семейной родословной Галины Рублевой весь март <strong>3 исследования по цене 2!</strong>
            </div>
          </nuxt-link>
        </div>
        <div
        v-if="activeType == 2"
        class="promotions__cards"
        >
          <nuxt-link to="/promotions/23-february" class="promotions__card">
            <div class="card__img">
              <img
                loading="lazy"
                decoding="async"
                src="../../assets/img/promotions/cards/prom_23feb.png"
                alt="promotion_card"
              />
            </div>
            <div class="card__title">
              Узнайте о Защитниках Отечества из вашего Рода
            </div>
            <div class="card__desc">
              Мы хотим поздравить всех с одним из самых важных праздников —
              <strong>23 Февраля</strong>
            </div>
          </nuxt-link>
          <a href="#!" class="promotions__card">
            <div class="card__img">
              <img
                loading="lazy"
                decoding="async"
                src="../../assets/img/promotions/cards/prom_know_history.png"
                alt="promotion_card"
              />
            </div>
            <div class="card__title">
              Поможем узнать историю и значение фамилии!
            </div>
            <div class="card__desc">
              Значение и происхождение фамилии может помочь вам больше узнать об
              истории собственной семьи
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data : () => ({
    activeType: 1
  }),
  methods: {
    selectActiveType(num) {
      this.activeType = num
    }
  }
}
</script>

<style lang="scss" scoped>
.promotions__inner {
  padding: 5px 0 295px 0;
}
.promotions__title {
  margin-bottom: 10px;
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.promotions__types{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 204px;
  margin-bottom: 45px;
  .promotions__type{
    font-family: "Noto", serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #7D4E24;
    &:hover {
      cursor: pointer;
    }
    &.active{
      text-decoration: underline;
    }
  }
}
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.promotions__cards {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 35px;
  
  opacity: 0;
  animation: ani 2.5s forwards;
  .promotions__card {
    max-width: 380px;
    text-decoration: none;
  }
  .promotions__card:hover > .card__img {
    border: 0.5px solid #7d4e24;
    filter: drop-shadow(0px 0px 10px rgba(90, 60, 34, 0.56));
  }
  .promotions__card:hover {
    cursor: pointer;
  }
  .card__img {
    height: auto;
    border-radius: 30px;
    border: 0.5px solid #f5f5f5;
  }
  .card__img > img {
    height: auto;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  .card__title {
    margin: 20px 0 15px 0;
    font-family: "Noto", serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #673800;
  }
  .card__desc {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.75);
  }
}
@media (max-width: 1024px) {
  .promotions__inner {
    padding-bottom: 178px;
  }
  .promotions__types{
    margin-bottom: 35px;
    column-gap: 132px;
  }
  .promotions__cards {
    .promotions__card {
      max-width: 280px;
    }
    .card__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
    }
    .card__desc {
      font-size: 18px;
      line-height: 23px;
    }
  }
}
@media (max-width: 768px) {
  .promotions__types{
    column-gap: 48px;
  }
  .promotions__cards {
    .promotions__card {
      max-width: 229px;
    }
    .card__img,
    .card__img > img {
      width: 100%;
    }
  }  
}
@media (max-width: 480px) {
  .promotions__types{
    column-gap: 10px;
    justify-content: space-between;
    margin-bottom: 40px;
    .promotions__type{
      font-size: 18px;
      line-height: 25px;
    }
  }
  .promotions__cards {
    flex-wrap: nowrap;
    column-gap: normal;
    justify-content: space-between;
    .promotions__card {
      max-width: none;
      width: 48%;
    }
    .card__desc {
      font-size: 16px;
    }
  }  
}
@media (max-width: 360px) {
  .promotions__title{
    margin-bottom: 0;
  }
  .promotions__types{
    margin-bottom: 17px;
    .promotions__type{
      font-size: 13px;
      line-height: 18px;
    }
  }
  .promotions__cards {
    .card__title {
      margin: 15px 0 10px 0;
      font-size: 14px;
      line-height: 19px;
    }
    .card__img, .card__img > img {
      height: 90px;
      border-radius: 15px;
    }
  }  
}
</style>
