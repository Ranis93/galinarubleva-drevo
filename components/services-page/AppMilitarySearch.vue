<template>
  <section class="militsearch">
    <div class="militsearch__head">
      <div class="container">
        <div class="militsearch__inner">
          <h1 class="militsearch__title">Поиск участников ВОВ</h1>
          <div class="militsearch__desc">
            Военный поиск — это возможность восстановить боевой путь! Проследить
            в каких боях участвовал Ваш предок, где это происходило, какие
            звания и награды были присвоены в ходе военных событий!
          </div>
        </div>
      </div>
    </div>
    <div class="militsearch-why">
      <div class="container">
        <div class="militsearch-why__inner">
          <div class="militsearch-why__title">
            Что можно узнать в результате исследования?
          </div>
          <div class="militsearch-why__items">
            <div class="militsearch-why__item">
              <div class="militsearch-why__num">1</div>
              <div class="militsearch-why__text">
                <span>Воинское звание. </span>
                Вы узнаете какое воинское звание присвоили предку, кем он был в
                системе иерархических отношений внутри вооруженных сил.
              </div>
            </div>
            <div class="militsearch-why__item">
              <div class="militsearch-why__num">2</div>
              <div class="militsearch-why__text">
                <span>Дату призыва и выбытия. </span>
                Узнайте в каком году и в каком возрасте призвали Вашего
                родственника. Мы так же поможем узнать дату и причину выбытия.
              </div>
            </div>
            <div class="militsearch-why__item">
              <div class="militsearch-why__num">3</div>
              <div class="militsearch-why__text">
                <span>Место захоронения. </span>
                В некоторых случаях нам удается узнать места захоронения
                погибших в ходе Великой Отечественной войны. Это действительно
                ценная информация для родственников.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="militsearch-how">
      <div class="container">
        <div class="militsearch-how__inner">
          <div class="militsearch-how__title">
            Предоставляем архивные документы
          </div>
          <div class="militsearch-how__img">
            <img
              src="../../assets/img/services_img/military_docs.png"
              alt="military_docs"
            />
          </div>
        </div>
      </div>
    </div>

    <app-services></app-services>

    <div class="militsearch-rectification">
      <div class="container">*Военный поиск входит во все пакеты услуг.</div>
    </div>

    <app-useful></app-useful>

    <div class="militsearch-gift">
      <div class="container">
        <div class="militsearch-gift__inner">
          <div class="militsearch-gift__left-side">
            <div class="militsearch-gift__title">
              Хотите сделать ценный подарок? Подарите сертификат на
              восстановление родословной!
            </div>
            <div class="militsearch-gift__text">
              Подарите сертификат на восстановление родословной в «Центре
              семейной родословной Галины Рублёвой!». Генеалогическое
              исследование — это возможность восстановить историю вашего рода!
            </div>
            <button class="militsearch-gift__btn">Купить</button>
          </div>
          <div class="militsearch-gift__right-side">
            <div class="militsearch-gift__image"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppServices from '../../components/AppServices.vue'
import AppUseful from '../../components/AppUseful.vue'
import { insertBitrix } from '../../assets/js/bitrix-window.js'
export default {
  components: { AppServices, AppUseful },
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix('.militsearch-gift__left-side', '.militsearch-gift__btn')
    } catch (error) {}
  }
}
</script>

<style scoped>
.militsearch {
  margin-top: 15px;
}
.militsearch__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.militsearch__desc {
  margin: 25px 0 50px 0;
  max-width: 680px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
}
.militsearch-why {
  background-color: rgba(209, 199, 180, 0.84);
}
.militsearch-why__inner {
  padding: 50px 0;
}
.militsearch-why__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
}
.militsearch-why__items {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
}
.militsearch-why__item {
  width: 100%;
}
.militsearch-why__left-block {
  width: 330px;
  white-space: nowrap;
  flex-shrink: 0;
}
.militsearch-why__num {
  display: inline-block;
  background: #673800;
  width: 37px;
  height: 38px;
  text-align: center;
  border-radius: 50px;
  margin-right: 20px;
  vertical-align: top;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
}
.militsearch-why__text {
  display: inline-block;
  max-width: 823px;
  font-family: "Noto", serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.72);
}
.militsearch-why__text > span {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #673800;
}
.militsearch-how {
  margin: 50px 0;
}
.militsearch-how__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
}
.militsearch-how__img {
  padding: 50px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.militsearch-how__img > img {
  max-width: 1035px;
  max-height: 640px;
}
.militsearch-rectification {
  padding: 50px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
}
.militsearch-gift {
  padding: 50px 0;
}
.militsearch-gift__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.militsearch-gift__left-side {
  max-width: 680px;
}
.militsearch-gift__right-side {
  max-width: 380px;
  padding-top: 17px;
}
.militsearch-gift__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
  margin-bottom: 25px;
}
.militsearch-gift__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
  margin-bottom: 25px;
}
.militsearch-gift__text > span {
  color: rgba(0, 118, 50, 1);
  font-weight: 700;
}
.militsearch-gift__btn {
  font-family: "Noto", serif;
  font-weight: 700;
  filter: drop-shadow(0px 4px 10px rgba(195, 218, 204, 0.39));
  border-radius: 50px;
}
.militsearch-gift__btn {
  color: #007632;
  border: 1px solid #007632;
  font-size: 20px;
  line-height: 27px;
  padding: 10px 35px;
}
.militsearch-gift__btn:hover {
  color: #ffffff;
  cursor: pointer;
}
.militsearch-gift__btn:hover {
  background-color: #007632;
}
.militsearch-gift__image {
  width: 380px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: contain;
}
.militsearch-gift__image {
  background-image: url("../../assets/img/services_img/gift_certificate.png");
}
@media (max-width: 1024px) {
  .militsearch {
    margin-top: 30px;
  }
  .militsearch-gift__left-side {
    max-width: 470px;
  }
}
@media (max-width: 768px) {
  .militsearch-why__text {
    max-width: 660px;
  }
  .militsearch-gift__title {
    max-width: 415px;
  }
  .militsearch-gift__text {
    max-width: 354px;
  }
  .militsearch-gift__right-side {
    max-width: 353px;
    padding: 0;
  }
  .militsearch-gift__right-side {
    padding-top: 59px;
  }
  .militsearch-gift__image {
    max-width: 304px;
    max-height: 219px;
    background-size: contain;
  }
}
@media (max-width: 480px) {
  .militsearch {
    margin-top: 5px;
  }
  .militsearch__title {
    font-size: 24px;
    line-height: 33px;
  }
  .militsearch__desc {
    font-size: 18px;
    line-height: 22px;
  }
  .militsearch-why__text {
    max-width: 80%;
    font-size: 16px;
    line-height: 19px;
  }
  .militsearch-gift {
    padding: 50px 0;
  }
  .militsearch-gift__inner {
    flex-wrap: wrap;
    padding: 0;
    position: relative;
  }
  .militsearch-gift__title {
    position: static;
  }
  .militsearch-gift__text {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 250px;
  }
  .militsearch-gift__btn {
    margin-bottom: 0;
  }
  .militsearch-gift__right-side {
    width: 100%;
    height: 232px;
    max-height: 289px;
    position: absolute;
    bottom: 75px;
    left: 0;
    padding: 0;
  }
  .militsearch-gift__right-side,
  .militsearch-gift__image {
    max-width: 325px;
    max-height: 210px;
  }
}
@media (max-width: 360px) {
  .militsearch__desc {
    font-size: 16px;
    line-height: 19px;
  }
  .militsearch-gift {
    padding: 48px 0 50px 0;
  }
  .militsearch-gift__text {
    font-size: 16px;
    line-height: 19px;
  }
  .militsearch-gift__btn {
    font-size: 16px;
    line-height: 22px;
  }
  .militsearch-gift__right-side {
    max-height: 212px;
    bottom: 65px;
  }
  .militsearch-rectification {
    padding-right: 20px;
  }
}
</style>
