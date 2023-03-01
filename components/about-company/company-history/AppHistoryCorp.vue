<template>
  <section class="history-corp">
    <div class="container">
      <h1 class="history-corp__title">История компании</h1>
      <div class="history-corp__scroll">
        <div class="history-corp__inner">
          <div class="history-corp__desc">
            «Идея бизнеса пришла ко мне случайно. Мне подарили родословную
            книгу, и я когда я взялась за неё, то поняла, как мало знаю о своих
            родственниках. Я стала искать данные и столкнулась с миллионом
            сложностей и нюансов. Тогда я и создала ЦСР — центр, который
            помогает восстанавливать семейные реликвии».
          </div>
          <div class="history-corp__text">
            Центр семейной родословной это...
          </div>
          <div class="history-corp__cards">
            <div class="history-corp__card">
              <div class="history-corp__num">3</div>
              <div class="history-corp__article">года работы</div>
            </div>
            <div class="history-corp__card right">
              <div class="history-corp__num">25</div>
              <div class="history-corp__article">
                заявок на исследование в других странах
              </div>
            </div>
            <div class="history-corp__card">
              <div class="history-corp__num">194</div>
              <div class="history-corp__article">
                изученных <br />
                фамилий
              </div>
            </div>
            <div class="history-corp__card right">
              <div class="history-corp__num">2715</div>
              <div class="history-corp__article">консультаций</div>
            </div>
          </div>
        </div>
        <div class="history-corp__owner">
          <div class="history-corp__info">
            <div class="history-corp__name">Рублева Галина</div>
            <div class="history-corp__position">
              Владелица группы компаний «Уфаритуал.рф»
            </div>
          </div>
          <div class="history-corp__photo">
            <img
              src="../../../assets/img/company-history/rubleva_g_book.png"
              alt="rubleva_g_book"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.history-corp {
  background-color: rgba(209, 199, 180, 0.84);
  padding: 15px 0 65px 0;
}
.history-corp__title {
  padding-bottom: 35px;
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.history-corp__scroll {
  background-image: url("../../../assets/img/company-history/the_elder_scroll.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  height: 732px;
  position: relative;
  margin: 0 auto;
}
.history-corp__inner {
  padding: 91px 0 0 88px;
}
.history-corp__desc {
  max-width: 580px;

  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.72);
}
.history-corp__text {
  padding: 25px 0;
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
}
.history-corp__cards {
  max-width: 456px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 15px;
}
.history-corp__card {
  max-width: 256px;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;
}
.history-corp__card.right {
  width: 256px;
}
.history-corp__num {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #007632;
}
.history-corp__article {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: #7d4e24;
}
.history-corp__owner {
  position: absolute;
  right: 79px;
  bottom: 62px;
}
.history-corp__photo {
  max-width: 326px;
  max-height: 476px;
}
.history-corp__owner {
  display: flex;
  align-items: flex-end;
}
.history-corp__info {
  padding-bottom: 42px;
  max-width: 237px;
}
.history-corp__name {
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: #007632;
}
.history-corp__position {
  padding-top: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.72);
}
@media (max-width: 1024px) {
  .history-corp {
    padding-top: 5px;
  }
  .history-corp__title {
    font-size: 24px;
    line-height: 33px;
  }
  .history-corp__scroll {
    max-width: 960px;
    max-height: 646px;
  }
  .history-corp__desc {
    font-size: 18px;
  }
  .history-corp__text {
    padding: 20px 0;
    font-size: 22px;
    line-height: 30px;
  }
  .history-corp__cards {
    max-width: 436px;
  }
  .history-corp__num {
    font-size: 36px;
    line-height: 49px;
  }
  .history-corp__article {
    font-size: 18px;
    line-height: 130%;
  }
  .history-corp__owner {
    right: 58px;
    bottom: 55px;
  }
  .history-corp__info {
    padding-bottom: 31px;
  }
  .history-corp__name {
    font-size: 18px;
  }
  .history-corp__position {
    font-size: 16px;
    max-width: 200px;
  }
  .history-corp__photo {
    max-width: 282px;
    max-height: 413px;
  }
}
@media (max-width: 768px) {
  .history-corp__scroll {
    max-width: 728px;
    max-height: 624px;
  }
  .history-corp__inner {
    padding: 83px 0 0 45px;
  }
  .history-corp__desc {
    font-size: 16px;
  }
  .history-corp__text {
    font-size: 18px;
    line-height: 25px;
  }
  .history-corp__card.right {
    max-width: 235px;
  }
  .history-corp__owner {
    right: 45px;
    bottom: 53px;
  }
  .history-corp__info {
    padding-bottom: 19px;
  }
  .history-corp__photo {
    max-width: 214px;
    max-height: 313px;
  }
}
@media (max-width: 480px) {
  .history-corp {
    padding-bottom: 50px;
    margin-top: -3px;
  }
  .history-corp__scroll {
    height: fit-content;
    width: 100%;
    padding-bottom: 205px;
  }
  .history-corp__inner {
    padding-left: 30px;
  }
  .history-corp__desc,
  .history-corp__text {
    padding-right: 42px;
  }
  .history-corp__cards {
    width: 100%;
    justify-content: flex-start;
    column-gap: 10px;
  }
  .history-corp__card {
    max-width: 102px;
  }
  .history-corp__card.right {
    max-width: 180px;
  }
  .history-corp__num {
    font-size: 30px;
    line-height: 41px;
  }
  .history-corp__article {
    font-size: 14px;
  }
  .history-corp__owner {
    right: 24px;
    bottom: 65px;
  }
  .history-corp__photo {
    max-width: 138px;
    max-height: 203px;
  }
  .history-corp__info {
    max-width: 170px;
    padding-bottom: 24px;
  }
  .history-corp__name {
    font-size: 14px;
  }
  .history-corp__position {
    font-size: 12px;
  }
}
@media (max-width: 360px) {
  .history-corp__scroll {
    padding-bottom: 268px;
  }
  .history-corp__inner {
    padding-left: 26px;
  }
  .history-corp__text {
    padding-right: 0;
    max-width: 260px;
  }
  .history-corp__card.right {
    max-width: 146px;
  }
  .history-corp__cards {
    column-gap: 34px;
  }
  .history-corp__owner {
    right: 28px;
    bottom: 73px;
  }
  .history-corp__info {
    max-width: 120px;
    padding-bottom: 57px;
  }
}
</style>
