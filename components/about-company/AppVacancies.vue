<template>
  <section class="vacancies">
    <div class="vacancies__inner">
      <div class="container">
        <h1 class="vacancies__head">Вакансии</h1>
        <div class="vacancies__desc">
          Все наши открытые вакансии, вы можете посмотреть на этой странице. Наш
          Центр семеной родословной всегда рад принять в свои ряды
          добросоветных, активных и трудолюбивых. <br>
          <br>
          Вы можете откликнуться на вакансию воспользовавшись формой обратной
          связи или отправьте свое резюме на почту: drevo@ufaritual.com <br>
          Контактный телефон: +7 (987) 622-17-00 <br>
          <br>
          О других активных вакансиях: в отдел продаж, отдел сервиса, и т.д. можно узнать по указанному номеру
        </div>
        <div class="vacancies__cards">
          <div class="vacancies__card">
            <div class="vacancies__hat" @click="toggleList()">
              <div class="vacancies__title">Историк-генеалог</div>
              <div class="vacancies__indicator">
                <img
                  v-if="vacancyIsOpened"
                  src="../../assets/img/vacancies/indicator_minus.svg"
                  alt="indicator"
                />
                <img
                  v-if="!vacancyIsOpened"
                  src="../../assets/img/vacancies/indicator_plus.svg"
                  alt="indicator"
                />
              </div>
            </div>
            <div
              class="vacancies__more animated fadeIn faster"
              v-show="vacancyIsOpened"
            >
              <div class="vacancies__caption">Задачи:</div>
              <div class="vacancies__list">
                <ul>
                  <li>
                    самостоятельная работа в архивах с документам,
                    поиск/исследование по всем источникам;
                  </li>
                  <li>
                    выездной и дистанционный поиск документов, взаимодействие с
                    архивными учреждениями, ЗАГСами, МФЦ, библиотеками, музеями
                    и другими государственными органами;
                  </li>
                  <li>
                    работа со всеми типами архивных документов: текстовой,
                    цифровой информации с отсканированных изображений;
                  </li>
                  <li>
                    перевод данных в электронный вид, систематизация документов,
                    ведение базы оцифрованных документов в компании;
                  </li>
                  <li>
                    составление выписок из исследованных материалов - по образцу
                    и стандарту компании;
                  </li>
                  <li>чтение рукописных текстов;</li>
                  <li>
                    выполнение необходимого количества исследовательский работ
                    за месяц.
                  </li>
                </ul>
              </div>
              <div class="vacancies__caption">Требования:</div>
              <div class="vacancies__list">
                <ul>
                  <li>
                    высшее историческое, бакалавр/магистратура/аспирантура, опыт
                    работы с архивом;
                  </li>
                  <li>
                    знание мусульманских языков: чтение, перевод - будет Вашим
                    преимуществом перед другими кандидатами;
                  </li>
                  <li>навыки работы MS Office: Word, Excel.</li>
                </ul>
              </div>
              <a href="#!">
                <button class="vacancies__btn">Откликнуться на вакансию</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      vacancyIsOpened: true
    }
  },
  methods: {
    toggleList () {
      this.vacancyIsOpened = !this.vacancyIsOpened
    }
  }
}
</script>

<style scoped>
.vacancies {
  margin: 5px 0 80px 0;
  min-height: 50vh;
}
.vacancies__head {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  padding-bottom: 25px;
}
.vacancies__desc {
  max-width: 780px;
  padding-bottom: 35px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.vacancies__card {
  border: 1px solid #7d4e24;
  border-radius: 30px;
  box-sizing: border-box;
}
.vacancies__hat {
  padding: 34px 35px 34px 20px;
  border: 1px solid #7d4e24;
  border-radius: 30px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vacancies__more {
  padding: 0 45px 40px 20px;
}
.vacancies__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
}
.vacancies__indicator {
  width: 21px;
}
.vacancies__caption {
  padding: 20px 0;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.vacancies__list {
  padding: 0 0 5px 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.vacancies__list > ul > li {
  list-style-type: " – ";
  padding-bottom: 10px;
}
.vacancies__btn {
  margin-top: 15px;
  padding: 15px 22px;

  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;

  background: #007632;
  border: 0;
  box-shadow: 0px 4px 10px rgba(38, 91, 61, 0.34);
  border-radius: 50px;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .vacancies__head {
    font-size: 24px;
    line-height: 33px;
  }
}
@media (max-width: 768px) {
  .vacancies__hat {
    padding-left: 25px;
  }
}
@media (max-width: 480px) {
  .vacancies__desc {
    padding-bottom: 25px;
  }
  .vacancies__hat {
    padding: 34px 18px 33px 20px;
  }
  .vacancies__more {
    padding-right: 20px;
  }
  .vacancies__caption {
    padding-top: 25px;
  }
  .vacancies__list {
    font-size: 18px;
    line-height: 22px;
  }
  .vacancies__list > ul > li {
    padding-bottom: 5px;
  }
}
@media (max-width: 360px) {
  .vacancies__desc {
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 20px;
  }
  .vacancies__hat {
    padding: 24px 15px 24px 9px;
  }
  .vacancies__btn {
    font-size: 16px;
    line-height: 22px;
    width: 100%;
  }
}
</style>
