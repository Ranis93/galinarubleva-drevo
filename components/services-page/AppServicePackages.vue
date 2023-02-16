<template>
  <div class="container">
    <div class="packages__inner">
      <aside class="nav__main">
        <div class="nav__title">По Республике Башкортостан</div>
        <div class="nav__btns">
          <button
            class="nav__btn first"
            :class="{ active: getCurrentPackageNum == 0 }"
            @click="setCurrentPackage({ value: 0 })"
          >
            Эконом
          </button>
          <button
            class="nav__btn"
            :class="{ active: getCurrentPackageNum == 1 }"
            @click="setCurrentPackage({ value: 1 })"
          >
            Стандарт
          </button>
          <button
            class="nav__btn last"
            :class="{ active: getCurrentPackageNum == 2 }"
            @click="setCurrentPackage({ value: 2 })"
          >
            VIP
          </button>
        </div>
        <div class="nav__title">По Российской Федерации</div>
        <div class="nav__btns">
          <button
            class="nav__btn first"
            :class="{ active: getCurrentPackageNum == 3 }"
            @click="setCurrentPackage({ value: 3 })"
          >
            Эконом
          </button>
          <button
            class="nav__btn"
            :class="{ active: getCurrentPackageNum == 4 }"
            @click="setCurrentPackage({ value: 4 })"
          >
            Стандарт
          </button>
          <button
            class="nav__btn last"
            :class="{ active: getCurrentPackageNum == 5 }"
            @click="setCurrentPackage({ value: 5 })"
          >
            VIP
          </button>
        </div>
      </aside>
      <section class="packages">
        <div class="packages__image">
          <img :src="getCurrentPackage.src" alt="packages__image" />
        </div>
        <h1 class="packages__title">
          {{ getCurrentPackage.title }}
        </h1>
        <div class="packages__desc" v-html="getCurrentPackage.desc"></div>
        <div class="packages__additions" v-if="getCurrentPackage.viptext">
          <div class="packages__cards">
            <div class="packages__card big">
              <img
                src="http://galinarubleva-drevo.ru/files/img/service_packages/vip/vip-card-img-big-01.png"
                alt="img-big"
              />
            </div>
            <div class="packages__card big">
              <img
                src="http://galinarubleva-drevo.ru/files/img/service_packages/vip/vip-card-img-big-02.png"
                alt="img-big"
              />
            </div>
          </div>
          <div
            class="packages__vip-text"
            v-html="getCurrentPackage.viptext"
          ></div>
          <div class="packages__cards">
            <div class="packages__card middle">
              <img
                src="http://galinarubleva-drevo.ru/files/img/service_packages/vip/vip-card-img-01.png"
                alt="img-middle"
              />
            </div>
            <div class="packages__card middle">
              <img
                src="http://galinarubleva-drevo.ru/files/img/service_packages/vip/vip-card-img-02.png"
                alt="img-middle"
              />
            </div>
            <div class="packages__card middle">
              <img
                src="http://galinarubleva-drevo.ru/files/img/service_packages/vip/vip-card-img-03.png"
                alt="img-middle"
              />
            </div>
          </div>
        </div>
        <div class="packages__prices">
          <div class="packages__price">
            {{ parseInt(getCurrentPackage.price).toLocaleString("ru-RU") }} ₽
          </div>
          <div class="packages__oldprice">
            {{ parseInt(getCurrentPackage.oldprice).toLocaleString("ru-RU") }} ₽
          </div>
        </div>
        <button class="packages__btn">Хочу заказать</button>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { insertBitrix } from '../../assets/js/bitrix-window.js'
export default {
  computed: mapGetters('service-packages', ['getCurrentPackage', 'getCurrentPackageNum']),
  methods: {
    ...mapMutations('service-packages', ['setCurrentPackage'])
  },
  mounted () {
    try {
      insertBitrix('.packages', '.packages__btn')
    } catch (error) {}
  }
}
</script>

<style scoped>
.packages__inner {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 120px;
  margin: 10px 0 80px 0;
}
.nav__main {
  width: 284px;
  flex-shrink: 0;
}
.packages {
  max-width: 780px;
  margin-top: 60px;
}
.nav__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #673800;
  margin-bottom: 20px;
}
.nav__btns {
  margin-bottom: 35px;
}
.nav__btn {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #7d4e24;

  width: 100%;
  height: 50px;
  border: 1px solid #7d4e24;
  cursor: pointer;
}
.nav__btn.first {
  border-radius: 20px 20px 0px 0px;
}
.nav__btn.last {
  border-radius: 0px 0px 20px 20px;
}
.nav__btn.active {
  background: #7d4e24;
  color: #ffffff;
}
.packages__image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.packages__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #673800;
  margin: 25px 0 20px 0;
}
.packages__desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.packages__prices {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-top: 20px;
  height: 60px;
}
.packages__price {
  align-self: flex-end;
  background: #007632;
  border: 1px solid #007632;
  box-shadow: 0px 4px 10px rgba(195, 218, 204, 0.39);
  border-radius: 50px;
  padding: 5px 16px;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
}
.packages__oldprice {
  font-family: "Noto", serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.28);
}
.packages__btn {
  margin-top: 20px;
  padding: 5px 15px;
  border: 1px solid #7d4e24;
  filter: drop-shadow(0px 4px 10px rgba(195, 218, 204, 0.39));
  border-radius: 50px;
  cursor: pointer;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #7d4e24;
}
.packages__btn:hover {
  background: #7d4e24;
  color: #ffffff;
}
.packages__additions {
  margin-top: 20px;
}
.packages__cards {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.packages__card {
  border-radius: 30px;
  height: auto;
}
.packages__card.big {
  max-width: 380px;
}
.packages__card.middle {
  max-width: 180px;
}
.packages__card > img {
  object-fit: cover;
}
.packages__vip-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
  margin: 35px 0 20px 0;
}

@media (max-width: 1024px) {
  .packages__inner {
    column-gap: 118px;
  }
  .nav__main {
    width: 274px;
  }
  .packages {
    max-width: 568px;
  }
  .packages__cards {
    justify-content: space-between;
    gap: 5px;
  }
  .packages__card.big {
    max-width: none;
    width: 48%;
    height: 146px;
  }
  .packages__card.middle {
    max-width: none;
    width: 32%;
    height: 158px;
  }
  .packages__card > img {
    border-radius: 20px;
  }
}
@media (max-width: 768px) {
  .packages__inner {
    column-gap: 95px;
  }
  .nav__main {
    width: 204px;
  }
  .nav__title {
    line-height: 25px;
  }
  .packages {
    max-width: 429px;
    margin-top: 70px;
  }
  .packages__image {
    height: 132px;
  }
  .packages__image > img {
    object-fit: cover;
    border-radius: 20px;
  }
  .packages__card.big {
    height: 110px;
  }
  .packages__card.middle {
    height: 116px;
  }
  .packages__card,
  .packages__card > img {
    border-radius: 20px;
  }
}
@media (max-width: 480px) {
  .packages__inner {
    column-gap: 20px;
  }
  .nav__main {
    width: 133px;
  }
  .nav__title {
    font-size: 16px;
  }
  .packages {
    max-width: 287px;
  }
  .packages__cards {
    gap: 15px;
  }
  .packages__card.big {
    height: 100px;
    width: 45%;
  }
  .packages__card.middle {
    height: 119px;
    width: 45%;
  }
}
@media (max-width: 360px) {
  .packages__inner {
    flex-wrap: wrap;
    column-gap: normal;
  }
  .nav__main {
    width: 100%;
  }
  .packages {
    max-width: 100%;
    margin-top: 0;
  }
  .nav__btn {
    font-size: 18px;
    line-height: 22px;
  }
  .packages__cards {
    row-gap: 20px;
  }
  .packages__card.big {
    height: 111px;
  }
  .packages__card.middle {
    height: 119px;
    width: 46%;
  }
}
</style>
