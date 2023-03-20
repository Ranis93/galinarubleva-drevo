<template>
  <section class="why-we">
    <div class="container">
      <div class="why-we__scroll">
        <div class="why-we__inner">
          <div class="why-we__title">Почему выбирают нас?</div>
          <div class="why-we__cards">
            <div class="why-we__card">
              <div class="why-we__text">Особый подход к каждому клиенту</div>
              <div class="why-we__desc">
                Подбор сформированного пакета услуг в зависимости от
                первоначальных данных и объёма интересующей информации заказчика
              </div>
            </div>
            <div class="why-we__card">
              <div class="why-we__text">Бесплатная первичная консультация</div>
              <div class="why-we__desc">
                Разбор каждой ветки, описание хода работы, документы архивов,
                заполнение анкеты и обсуждение объема интересующей информации
              </div>
            </div>
            <div class="why-we__card">
              <div class="why-we__text">Краткие сроки работы</div>
              <div class="why-we__desc">
                Генеалогическое исследование длится от 1 до 6 месяцев по РБ, от
                3 до 12 месяцев по РФ
              </div>
            </div>
            <div class="why-we__card">
              <div class="why-we__text">Стоимость услуг</div>
              <div class="why-we__desc">
                Стоимость пакетов услуг по восстановлению родословной значительно меньше от коллег в других регионах
              </div>
            </div>
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
.why-we {
  background-color: rgba(209, 199, 180, 0.84);
  padding: 50px 0 80px 0;
}
.why-we__scroll {
  background-image: url("../../../assets/img/company-history/the_elder_scroll.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 136px;
}
.why-we__inner {
  padding: 106px 0 0 75px;
}
.why-we__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.why-we__cards {
  padding-top: 40px;
  max-width: 880px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
}
.why-we__card {
  max-width: 380px;
}

.why-we__text {
  max-width: 275px;
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #007632;
}
.why-we__desc {
  padding-top: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 118%;
  color: rgba(0, 0, 0, 0.72);
}
@media (max-width: 1024px) {
  .why-we__inner {
    padding: 79px 0 0 60px;
  }
  .why-we__scroll {
    padding-bottom: 109px;
  }
  .why-we__cards {
    padding-right: 98px;
  }
  .why-we__title {
    font-size: 24px;
    line-height: 33px;
  }
}
@media (max-width: 768px) {
  .why-we {
    padding-bottom: 35px;
  }
  .why-we__scroll {
    padding-bottom: 94px;
  }
  .why-we__cards {
    padding-right: 54px;
  }
  .why-we__card {
    max-width: 294px;
  }
}
@media (max-width: 480px) {
  .why-we {
    padding-bottom: 50px;
  }
  .why-we__scroll {
    height: auto;
    padding-bottom: 92px;
  }
  .why-we__inner {
    padding-left: 43px;
    padding-right: 23px;
  }
  .why-we__cards {
    padding-right: 10px;
    row-gap: 20px;
  }
  .why-we__card {
    max-width: 47%;
  }
  .why-we__text {
    font-size: 16px;
    line-height: 22px;
  }
  .why-we__desc {
    font-size: 14px;
  }
}
@media (max-width: 360px) {
  .why-we__inner {
    padding: 86px 26px 0 25px;
  }
  .why-we__scroll {
    padding-bottom: 135px;
  }
  .why-we__cards {
    padding-top: 20px;
    padding-right: 3px;
  }
  .why-we__text {
    font-size: 14px;
    line-height: 19px;
  }
  .why-we__desc {
    font-size: 12px;
  }
}
</style>
