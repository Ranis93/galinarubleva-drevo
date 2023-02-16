<template>
  <section class="history">
    <div class="container">
      <div class="history__inner">
        <div class="history__left-side">
          <h1 class="history__title">
            Восстановить генеалогическое древо – сохранить семейную историю
          </h1>
          <div class="history__desc">
            Восстановление родословной — это возможность узнать историю вашего
            рода и сделать это доброй традицией Вашей семьи!
          </div>
          <button class="history__btn">Узнать своих предков</button>
        </div>
        <div class="history__right-side">
          <div class="history__img">
            <img src="../../assets/img/mom_with_kids.png" alt="hisroty_pic" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix } from '../../assets/js/bitrix-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix('.history__left-side', '.history__btn')
    } catch (error) {}
  }
}
</script>
<style scoped>
.history {
  background-color: rgba(209, 199, 180, 0.84);
}
.history__inner {
  display: flex;
  justify-content: space-between;
}
.history__left-side {
  padding: 90px 0 146px 0;
}
.history__title {
  max-width: 581px;
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  background: linear-gradient(
    90.47deg,
    #673800 0.3%,
    #673800 46.05%,
    #673800 94.46%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.history__desc {
  max-width: 444px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
  margin-top: 25px;
}
.history__btn {
  margin-top: 50px;
  padding: 15px 20px;
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  border-radius: 50px;
  border: 1px solid #007632;
  background: #007632;
  box-shadow: 0px 4px 10px rgba(38, 91, 61, 0.34);
}
.history__btn:hover {
  cursor: pointer;
  color: #007632;
  background: #ffffff;
  border: 1px solid #007632;
}
.history__btn:hover {
  cursor: pointer;
}
.history__right-side {
  margin-top: 50px;
  margin-bottom: 50px;
}
.history__img {
  max-width: 465px;
  height: auto;
}
@media (max-width: 1024px) {
  .history__title {
    max-width: 370px;
  }
}
@media (max-width: 768px) {
  .history__inner {
    padding: 69px 0 114px 0;
  }
  .history__left-side {
    padding: 0;
  }
  .history__title,
  .history__desc {
    max-width: 324px;
  }
  .history__btn {
    font-size: 18px;
    line-height: 25px;
    margin-top: 26px;
  }
  .history__right-side {
    margin: 0;
  }
  .history__img {
    max-width: 354px;
  }
}
@media (max-width: 480px) {
  .history__inner {
    flex-wrap: wrap;
    padding: 40px 0 7px 0;
  }
  .history__desc {
    margin-top: 20px;
  }
  .history__btn {
    margin: 20px 0 22px 0;
  }
  .history__img {
    max-width: 303px;
    max-height: 301px;
  }
}
@media (max-width: 360px) {
  .history__inner {
    padding-top: 23px;
  }
  .history__title {
    font-size: 28px;
    line-height: 35px;
  }
  .history__desc {
    font-size: 18px;
    line-height: 22px;
  }
  .history__btn {
    font-size: 16px;
    line-height: 22px;
    padding: 15px 43px;
  }
}
</style>
