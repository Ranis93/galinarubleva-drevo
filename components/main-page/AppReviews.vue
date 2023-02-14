<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__inner">
        <div class="reviews__left-box">
          <div class="reviews__title">Клиенты о нас</div>
          <div class="reviews__desc">
            Мы любим свою работу и своих клиентов, поэтому нам очень важно ваше
            мнение. Мы внимательно изучаем отзывы и предложения! Спасибо за
            добрые слова и пожелания!
          </div>
        </div>
        <div class="reviews__right-box">
          <div class="reviews__arrows">
            <button type="button" class="reviews__arrow prev disabled">
              <img
                class="prev"
                src="../../assets/img/reviews/reviews_arrow-left.svg"
                alt="reviews_arrow-left"
              />
            </button>
            <div class="reviews__center"></div>
            <button type="button" class="reviews__arrow next">
              <img
                class="next"
                src="../../assets/img/reviews/reviews_arrow-right.svg"
                alt="reviews_arrow-right"
              />
            </button>
          </div>
          <div class="reviews__slider">
            <div class="reviews__slider-list">
              <div class="reviews__slider-track">
                <div class="reviews__slide">
                  <div class="reviews__card">
                    <div class="reviews__comment">
                      Мужу оооочень понравилось! Много ценной информации
                      накопали, о которой мы не знали) Огромный повод гордиться
                      своими предками, благодаря таким данным. Он до сих пор
                      вспоминает и всем делится о том, какой у него сильный род.
                    </div>
                    <div class="reviews__avatar">
                      <div class="reviews__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-1.png"
                          alt="reviews__img-1"
                        />
                      </div>
                      <div class="reviews__name">Марич З.</div>
                    </div>
                  </div>
                </div>
                <div class="reviews__slide">
                  <div class="reviews__card">
                    <div class="reviews__comment">
                      Благодаря работе центра теперь я знаю своих предков до
                      середины XVIII века, получилось отследить целых семь
                      поколений. Больше всего меня поразило, что наша семья
                      оказывается, относится к башкирскому племени Кар-Танып, у
                      которого даже был свой боевой клич, своё родовое древо
                      (лиственница), родовая птица (коршун).
                    </div>
                    <div class="reviews__avatar">
                      <div class="reviews__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-2.png"
                          alt="reviews__img-1"
                        />
                      </div>
                      <div class="reviews__name">Яна Ц.</div>
                    </div>
                  </div>
                </div>
                <div class="reviews__slide">
                  <div class="reviews__card">
                    <div class="reviews__comment">
                      Обратились в центр семейной родословной для того, чтобы
                      узнать больше о своих предках. Мы занимались поисками
                      самостоятельно, но обратившись в центр, поняли что
                      пропускаем много информации, документов. Составленную
                      родословную подарили на юбилей дедушке — для него очень
                      ценно получить такой подарок.
                    </div>
                    <div class="reviews__avatar">
                      <div class="reviews__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-3.png"
                          alt="reviews__img-1"
                        />
                      </div>
                      <div class="reviews__name">Эльмира Х.</div>
                    </div>
                  </div>
                </div>
                <div class="reviews__slide">
                  <div class="reviews__card">
                    <div class="reviews__comment">
                      Я обратилась в центр семейной родословной после работы с
                      психологом для проработки своего рода. Благодаря найденным
                      документам я узнала чем занимались мои предки и поняла
                      откуда у меня тяга к написанию стихов — моя пробабушка
                      писала рассказы для детей! В наше время очень важно иметь
                      связь со своим родом.
                    </div>
                    <div class="reviews__avatar">
                      <div class="reviews__photo">
                        <img
                          src="../../assets/img/reviews/comment_photo-4.png"
                          alt="reviews__img-1"
                        />
                      </div>
                      <div class="reviews__name">Лилия Б.</div>
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
        '.reviews__slider',
        '.reviews__slider-list',
        '.reviews__slider-track',
        '.reviews__slide',
        '.reviews__arrows',
        4
      )
    } catch (error) {
      console.log(error)
    }
  }
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
}
.reviews__left-box {
  display: inline-block;
  max-width: 380px;
  vertical-align: top;
  margin-right: 20px;
}
.reviews__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #007632;
  margin-bottom: 25px;
}
.reviews__desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.reviews__right-box {
  display: inline-block;
  vertical-align: top;
  max-width: 900px;
}
.reviews__card {
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 5px rgba(228, 228, 228, 0.8);
  padding: 20px;
  height: 84%;
  position: relative;
}
.reviews__comment {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #2c1909;
}
.reviews__avatar {
  position: absolute;
  bottom: 20px;
}
.reviews__photo {
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.reviews__name {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #007632;
  display: inline-block;
  vertical-align: middle;
}
.reviews__arrow {
  width: 80px;
  height: 42px;
  background-color: #f5f5f5;
  border: 0;
}
.reviews__center {
  display: inline-block;
}
.reviews__arrow:last-child {
  margin-left: 20px;
}
.reviews__slider {
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

.reviews__slider img {
  pointer-events: none;
}

.reviews__slider-list {
  width: 900px;
  height: 270px;
  overflow: hidden;
}

.reviews__slider-list.grab {
  cursor: grab;
}

.reviews__slider-list.grabbing {
  cursor: grabbing;
}

.reviews__slider-track {
  display: flex;
}

.reviews__slide {
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

.reviews__slide img {
  width: 100%;
  height: 100%;
}

.reviews__arrows {
  margin-top: 27px;
  margin-bottom: 20px;
  text-align: center;
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
  .reviews__slider {
    width: 576px;
  }
  .reviews__slider-list {
    width: 576px;
  }
  .reviews__slide {
    padding: 0 4px;
  }
  .reviews > .container {
    width: 100%;
    left: 0;
    transform: translate(0, 0);
  }
}
@media (max-width: 768px) {
  .reviews__inner {
    padding: 100px 0;
  }
  .reviews__left-box {
    max-width: 521px;
  }
  .reviews__arrows {
    margin-top: -40px;
    text-align: right;
  }
  .reviews__right-box,
  .reviews__slider,
  .reviews__slider-list {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .reviews__inner {
    padding: 60px 0;
  }
  .reviews__title {
    font-size: 26px;
    line-height: 35px;
  }
  .reviews__desc {
    font-size: 18px;
    line-height: 22px;
  }
  .reviews__arrows {
    display: none;
  }
  .reviews > .container {
    max-width: 480px;
  }
  .reviews__left-box {
    max-width: 100%;
  }
  .reviews__right-box {
    margin-top: 38px;
  }
}
@media (max-width: 360px) {
  .reviews > .container {
    max-width: 320px;
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
