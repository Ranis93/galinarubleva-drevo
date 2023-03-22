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
        <AppServicesSlider />
      </div>
    </div>
  </section>
</template>

<script>
import AppServicesSlider from './main-page/sub-components/AppServicesSlider.vue';
export default {
  components: { AppServicesSlider }
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
  margin-bottom: 41px;
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
@media (max-width: 1024px) {
  .services__inner {
    margin: 100px 0 50px 0;
  }
  .services__desc {
    max-width: 680px;
  }
}
@media (max-width: 768px) {
  .services__head {
    margin-bottom: 95px;
  }
  .services__desc {
    font-size: 18px;
    line-height: 22px;
    max-width: 471px;
  }
}
@media (max-width: 480px) {
  .services__inner {
    margin-top: 60px;
  }
  .services__head {
    flex-wrap: wrap;
    row-gap: 20px;
    margin-bottom: 58px;
  }
  .services__title {
    font-size: 26px;
    line-height: 35px;
  }
}
@media (max-width: 360px) {
  .services__inner {
    margin: 60px 0;
  }
  .services__head {
    row-gap: 22px;
    margin-bottom: 35px;
  }
  .services__title {
    font-size: 24px;
    line-height: 33px;
  }
  .services__desc {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
