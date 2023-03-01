<template>
  <section class="why">
    <div class="container">
      <div class="why__inner">
        <div class="why__title">Почему это важно?</div>
        <div class="why__desc">
          Когда мы видим счастливые глаза людей, которые нашли целые новые ветви
          своего рода, о которых раньше даже не подозревали, то понимаем, какая
          это важная и нужная работа. Зная историю своих предков понимаете,
          почему судьба Вашего рода сложилась именно так, какие в Вашей семье
          были таланты, родовые занятия, болезни и прочие важные факты. Все это
          помогает глубже заглянуть внутрь себя. Именно Вы можете стать в семье
          тем человеком, который найдёт информацию о предках и передаст внукам
          фундамент для дальнейшей счастливой жизни!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.why {
  background-image: url("../../assets/img/why_bg.png");
  background-repeat: no-repeat;
  background-position: right center;
}
.why__inner {
  padding: 100px 0;
}
.why__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #007632;
}
.why__desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
  max-width: 881px;
  margin-top: 25px;
}
@media (max-width: 1024px) {
  .why__inner {
    padding: 100px 0 68px 0;
  }
}
@media (max-width: 768px) {
  .why__inner {
    padding: 100px 0;
  }
}
@media (max-width: 480px) {
  .why__inner {
    padding: 60px 0;
  }
  .why__title {
    font-size: 26px;
    line-height: 40px;
  }
  .why__desc {
    margin-top: 20px;
    font-size: 18px;
    line-height: 22px;
  }
}
@media (max-width: 360px) {
  .why__title {
    font-size: 24px;
  }
  .why__desc {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
