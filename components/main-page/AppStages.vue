<template>
  <section class="stages">
    <div class="container">
      <div class="stages__inner">
        <div class="stages__title">Этапы генеалогического исследования</div>
        <div class="stages__items">
          <div class="stages__item">
            <div class="stages__left-block">
              <div class="stages__num">1</div>
              <div class="stages__text">Сбор информации</div>
            </div>
            <div class="stages__desc">
              Для начала исследования нам необходимо узнать известную на данный
              момент информацию о Ваших предках. Это поможет ускорить поиск и
              быстрее предоставить результаты исследования.
            </div>
          </div>
          <div class="stages__item">
            <div class="stages__left-block">
              <div class="stages__num">2</div>
              <div class="stages__text">Работа в архивах</div>
            </div>
            <div class="stages__desc">
              Затем наступает этап выявления и исследования документов в
              различных архивах. Историки изучают писцовые, переписные и
              метрические книги, исповедные ведомости, ревизские сказки, брачные
              обыски, клировые ведомости, посемейные списки.
            </div>
          </div>
          <div class="stages__item">
            <div class="stages__left-block">
              <div class="stages__num">3</div>
              <div class="stages__text">Оформление<br />и презентация</div>
            </div>
            <div class="stages__desc">
              Часто люди обращаются к нам с архивными документами за
              расшифровковой. В нашем Центре каждая работа тщательно
              подготавливается к выдаче, и наш специалист презентует
              родословную, детально рассказывая историю семьи и хронологию
              событий.
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
.stages {
  background-color: rgba(209, 199, 180, 0.84);
}
.stages__inner {
  padding: 100px 0;
}
.stages__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #007632;
}
.stages__items {
  margin-top: 55px;
}
.stages__item {
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
}
.stages__item:last-child {
  padding-bottom: 0;
}
.stages__left-block {
  width: 330px;
  white-space: nowrap;
  flex-shrink: 0;
}
.stages__num {
  display: inline-block;
  background: #673800;
  width: 41px;
  height: 42px;
  text-align: center;
  border-radius: 50px;
  margin-right: 45px;
  vertical-align: top;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
}
.stages__text {
  display: inline-block;
  max-width: 242px;
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #7d4e24;
}

.stages__item:last-child > .stages__desc {
  width: 777px;
}
.stages__desc {
  max-width: 778px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
@media (max-width: 1024px) {
  .stages__num {
    margin-right: 20px;
  }
  .stages__desc {
    max-width: 622px;
  }
}
@media (max-width: 768px) {
  .stages__left-block {
    width: 270px;
  }
  .stages__num {
    margin-right: 15px;
  }
  .stages__text {
    font-size: 20px;
  }
  .stages__desc {
    font-size: 18px;
    line-height: 22px;
  }
}
@media (max-width: 480px) {
  .stages__inner {
    padding: 60px 0;
  }
  .stages__item {
    flex-wrap: wrap;
    row-gap: 20px;
  }
  .stages__title {
    font-size: 26px;
    line-height: 35px;
  }
  .stages__items {
    margin-top: 26px;
  }
}
@media (max-width: 360px) {
  .stages__item {
    row-gap: 16px;
    padding-top: 20px;
  }
  .stages__item:first-child {
    padding-top: 0;
  }
  .stages__title {
    font-size: 24px;
    line-height: 35px;
  }
  .stages__text {
    font-size: 18px;
    line-height: 30px;
  }
  .stages__desc {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
