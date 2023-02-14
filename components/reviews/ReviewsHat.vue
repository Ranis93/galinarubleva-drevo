<template>
  <section class="reviewshat">
    <div class="container">
      <div class="reviewshat__inner">
        <div class="reviewshat__left-box">
          <h1 class="reviewshat__title">Отзывы</h1>
          <div class="reviewshat__desc">
            Мы любим свою работу и своих клиентов, поэтому нам очень важно ваше
            мнение. <br />
            Мы внимательно изучаем отзывы и предложения! Спасибо за добрые слова
            и пожелания!
          </div>
        </div>
        <div class="reviewshat__right-box">
          <div class="reviewshat__arrows">
            <button type="button" class="reviewshat__arrow prev disabled">
              <img
                class="prev"
                src="../../assets/img/reviews/reviews_arrow-left.svg"
                alt="reviewshat_arrow-left"
              />
            </button>
            <div class="reviewshat__center"></div>
            <button type="button" class="reviewshat__arrow next">
              <img
                class="next"
                src="../../assets/img/reviews/reviews_arrow-right.svg"
                alt="reviewshat_arrow-right"
              />
            </button>
          </div>
          <div class="reviewshat__slider">
            <div class="reviewshat__slider-list">
              <div class="reviewshat__slider-track">
                <div class="reviewshat__slide">
                  <div class="reviewshat__card">
                    <div class="reviewshat__comment">
                      Мужу оооочень понравилось! Много ценной информации
                      накопали, о которой мы не знали) Огромный повод гордиться
                      своими предками, благодаря таким данным. Он до сих пор
                      вспоминает и всем делится о том, какой у него сильный род.
                    </div>
                    <div class="reviewshat__avatar">
                      <div class="reviewshat__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-1.png"
                          alt="reviewshat__img-1"
                        />
                      </div>
                      <div class="reviewshat__name">Марич З.</div>
                    </div>
                  </div>
                </div>
                <div class="reviewshat__slide">
                  <div class="reviewshat__card">
                    <div class="reviewshat__comment">
                      Благодаря работе центра теперь я знаю своих предков до
                      середины XVIII века, получилось отследить целых семь
                      поколений. Больше всего меня поразило, что наша семья
                      оказывается, относится к башкирскому племени Кар-Танып, у
                      которого даже был свой боевой клич, своё родовое древо
                      (лиственница), родовая птица (коршун).
                    </div>
                    <div class="reviewshat__avatar">
                      <div class="reviewshat__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-2.png"
                          alt="reviewshat__img-1"
                        />
                      </div>
                      <div class="reviewshat__name">Яна Ц.</div>
                    </div>
                  </div>
                </div>
                <div class="reviewshat__slide">
                  <div class="reviewshat__card">
                    <div class="reviewshat__comment">
                      Обратились в центр семейной родословной для того, чтобы
                      узнать больше о своих предках. Мы занимались поисками
                      самостоятельно, но обратившись в центр, поняли что
                      пропускаем много информации, документов. Составленную
                      родословную подарили на юбилей дедушке — для него очень
                      ценно получить такой подарок.
                    </div>
                    <div class="reviewshat__avatar">
                      <div class="reviewshat__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-3.png"
                          alt="reviewshat__img-1"
                        />
                      </div>
                      <div class="reviewshat__name">Эльмира Х.</div>
                    </div>
                  </div>
                </div>
                <div class="reviewshat__slide">
                  <div class="reviewshat__card">
                    <div class="reviewshat__comment">
                      Я обратилась в центр семейной родословной после работы с
                      психологом для проработки своего рода. Благодаря найденным
                      документам я узнала чем занимались мои предки и поняла
                      откуда у меня тяга к написанию стихов — моя пробабушка
                      писала рассказы для детей! В наше время очень важно иметь
                      связь со своим родом.
                    </div>
                    <div class="reviewshat__avatar">
                      <div class="reviewshat__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-4.png"
                          alt="reviewshat__img-1"
                        />
                      </div>
                      <div class="reviewshat__name">Лилия Б.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dragDropSlider } from '../../assets/js/slider.js'
export default {
  mounted () {
    try {
      dragDropSlider(
        '.reviewshat__slider',
        '.reviewshat__slider-list',
        '.reviewshat__slider-track',
        '.reviewshat__slide',
        '.reviewshat__arrows',
        4
      )
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.reviewshat {
  overflow-x: hidden;
  background: inherit;
}
.reviewshat > .container {
  max-width: 1310px;
  margin: 0;

  position: relative;
  left: 50%;
  transform: translate(-46%, 0);
}
.reviewshat__inner {
  padding: 5px 0 80px 0;
}
.reviewshat__left-box {
  display: inline-block;
  max-width: 380px;
  vertical-align: top;
  margin-right: 20px;
}
.reviewshat__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  margin-bottom: 25px;
}
.reviewshat__desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.reviewshat__right-box {
  display: inline-block;
  vertical-align: top;
  max-width: 900px;
}
.reviewshat__card {
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 5px rgba(228, 228, 228, 0.8);
  padding: 20px;
  height: 84%;
  position: relative;
}
.reviewshat__comment {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #2c1909;
}
.reviewshat__avatar {
  position: absolute;
  bottom: 20px;
}
.reviewshat__photo {
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.reviewshat__name {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #007632;
  display: inline-block;
  vertical-align: middle;
}
.reviewshat__arrow {
  width: 80px;
  height: 42px;
  background-color: #f5f5f5;
  border: 0;
}
.reviewshat__center {
  display: inline-block;
}
.reviewshat__arrow:last-child {
  margin-left: 20px;
}
.reviewshat__slider {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
  то нужно задать им pointer-events: none,
  чтобы они не перетаскивались мышью */

.reviewshat__slider img {
  pointer-events: none;
}

.reviewshat__slider-list {
  width: 900px;
  height: 270px;
  overflow: hidden;
}

.reviewshat__slider-list.grab {
  cursor: grab;
}

.reviewshat__slider-list.grabbing {
  cursor: grabbing;
}

.reviewshat__slider-track {
  display: flex;
}

.reviewshat__slide {
  width: 280px;
  height: 270px;
  /* Чтобы слайды не сжимались */
  flex-shrink: 0;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}

.reviewshat__slide img {
  width: 100%;
  height: 100%;
}

.reviewshat__arrows {
  margin-top: 27px;
  margin-bottom: 20px;
  text-align: right;
  padding-right: 122px;
}
.next,
.prev {
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  border: none;
  cursor: pointer;
}
.next.disabled,
.prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
@media (max-width: 1024px) {
  .reviewshat__desc {
    padding-right: 20px;
  }
  .reviewshat__slider {
    width: 576px;
  }
  .reviewshat__slider-list {
    width: 576px;
  }
  .reviewshat__slide {
    padding: 0 4px;
  }
  .reviewshat > .container {
    width: 100%;
    left: 0;
    transform: translate(0, 0);
  }
  .reviewshat__arrows {
    padding-right: 52px;
  }
}
@media (max-width: 768px) {
  .reviewshat__left-box {
    max-width: 521px;
  }
  .reviewshat__arrows {
    margin-top: -40px;
    text-align: right;
  }
  .reviewshat__right-box,
  .reviewshat__slider,
  .reviewshat__slider-list {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .reviewshat__title {
    font-size: 26px;
    line-height: 35px;
  }
  .reviewshat__desc {
    font-size: 18px;
    line-height: 22px;
  }
  .reviewshat__arrows {
    display: none;
  }
  .reviewshat > .container {
    max-width: 480px;
  }
  .reviewshat__left-box {
    max-width: 100%;
  }
  .reviewshat__right-box {
    margin-top: 38px;
  }
}
@media (max-width: 360px) {
  .reviewshat > .container {
    max-width: 320px;
  }
  .reviewshat__title {
    font-size: 24px;
    line-height: 33px;
  }
  .reviewshat__desc {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
