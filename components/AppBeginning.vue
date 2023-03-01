<template>
  <section class="beginning">
    <div class="container">
      <div class="beginning__inner">
        <div class="beginning__box">
          <div class="beginning__left-side">
            <div class="beginning__title">
              С чего начать?
            </div>
            <div class="beginning__text">
              Запишитесь на <span>бесплатную консультацию</span> к нашему
              эксперту по поиску родословной!
            </div>
            <button class="beginning_btn">
              Записаться
            </button>
          </div>
          <div class="beginning__right-side">
            <img src="../assets/img/family.jpg" alt="family">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix } from '../assets/js/bitrix-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix('.beginning__left-side', '.beginning_btn')
    } catch (error) {}
  }
}
</script>

<style scoped>
.beginning {
  background-color: #e6e7e9;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  background-image: url("../assets/img/beginning_bg.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 50% 100%;
}
.beginning__inner {
  padding: 100px 0;
}
.beginning__box {
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  overflow: hidden;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
.beginning__left-side {
  padding: 0 80px 0 100px;
  width: 50%;
  box-sizing: border-box;
  flex-shrink: 0;
}
.beginning__right-side {
  width: 578px;
  max-height: 299px;
  box-sizing: border-box;
}
.beginning__right-side > img {
  object-fit: contain;
}
.beginning__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #007632;
  margin-bottom: 25px;
}
.beginning__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
  max-width: 410px;
  margin-bottom: 32px;
}
.beginning__text > span {
  font-weight: 700;
  color: #007632;
}
.beginning_btn {
  border: 1px solid #007632;
  box-shadow: 0px 4px 10px rgba(195, 218, 204, 0.39);
  border-radius: 50px;
  padding: 10px 35px;
  width: fit-content;
  background-color: #ffffff;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #007632;
}
.beginning_btn:hover {
  cursor: pointer;
  color: #ffffff;
  background: #007632;
}
@media (max-width: 1024px) {
  .beginning__left-side {
    padding: 0 58px 0 25px;
    width: 52%;
  }
  .beginning__right-side {
    width: 48%;
  }
}
@media (max-width: 768px) {
  .beginning__left-side {
    padding-right: 22px;
  }
}
@media (max-width: 480px) {
  .beginning {
    background-size: auto;
  }
  .beginning__inner {
    padding: 60px 0;
  }
  .beginning__box {
    flex-wrap: wrap;
  }
  .beginning__left-side,
  .beginning__right-side {
    width: 100%;
  }
  .beginning__title {
    margin: 33px 0 15px 0;
    font-size: 26px;
    line-height: 35px;
  }
  .beginning__text {
    margin-bottom: 21px;
    font-size: 18px;
    line-height: 22px;
  }
  .beginning_btn {
    padding: 10px 30px;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 25px;
  }
  .beginning__right-side > img {
    width: 100%;
  }
}
@media (max-width: 360px) {
  .beginning__title {
    font-size: 24px;
    line-height: 33px;
  }
  .beginning__text {
    font-size: 16px;
    line-height: 19px;
  }
  .beginning_btn {
    font-size: 16px;
    line-height: 22px;
  }
  .beginning__right-side {
    max-height: 167px;
  }
}
</style>
