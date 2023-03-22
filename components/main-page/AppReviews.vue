<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__inner">
        <div class="reviews__col">
          <div class="reviews__title">Клиенты о нас</div>
          <div class="reviews__desc">
            Мы любим свою работу и своих клиентов, поэтому нам очень важно ваше
            мнение. <br> Мы внимательно изучаем отзывы и предложения! Спасибо за
            добрые слова и пожелания!
          </div>
        </div>
        <AppReviewsSlider />
      </div>
    </div>
  </section>
</template>

<script>
import AppReviewsSlider from './sub-components/AppReviewsSlider.vue'
export default {
  components: { AppReviewsSlider }
}
</script>

<style scoped>
.reviews {
  overflow-x: hidden;
  background: inherit;
}
.reviews > .container {
  max-width: 1310px;
  margin: 0;

  position: relative;
  left: 50%;
  transform: translate(-46%, 0);
}
.reviews__inner {
  padding: 100px 0 80px 0;
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
  align-items: top;
}
.reviews__col{
  max-width: 380px;
  box-sizing: border-box;
}
.reviews__title{
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #007632;
  padding-bottom: 25px;
}
.reviews__desc{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2C1909;
}

@media (max-width: 1024px) {
  .reviews > .container {
    max-width: none;
    transform: none;
    position: static;
  }
}
@media (max-width: 768px) {
  .reviews__inner{
    flex-wrap: wrap;
    padding: 100px 0;
  }
  .reviews__col{
    margin-bottom: -70px;
  }
}
@media (max-width: 480px) {
  .reviews__inner {
    padding: 60px 0;
    row-gap: 38px;
  }
  .reviews__title {
    font-size: 26px;
    line-height: 35px;
  }
  .reviews__desc {
    font-size: 18px;
    line-height: 22px;
  }
  .reviews__col{
    margin-bottom: 0;
  }
}
@media (max-width: 360px) {
  .reviews__inner {
    row-gap: 30px;
  }
  .reviews__title {
    font-size: 24px;
    line-height: 33px;
  }
  .reviews__desc {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
