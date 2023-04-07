<template>
  <section class="examples">
    <div class="container">
      <div class="examples__inner">
        <div class="examples__title">Примеры работ</div>
        <div class="examples__slider">
          <button type="button" class="slider_prev-btn prev disabled"></button>
          <div class="slider">
            <div class="slider-list">
              <div class="slider-track">
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/img/examples_slider/slide_1.png"
                        alt="examples-image"
                        class="examples-image"
                      />
                    </div>
                    <div class="examples__text">
                      Родословное древо <br />
                      <nuxt-link to="/our_services/packages"
                        >(VIP-пакет)</nuxt-link
                      >
                    </div>
                  </div>
                </div>
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/img/examples_slider/slide_2.png"
                        alt="examples-image"
                        class="examples-image"
                      />
                    </div>
                    <div class="examples__text">
                      Родословное древо <br />
                      холст
                    </div>
                  </div>
                </div>
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/img/examples_slider/slide_3.png"
                        alt="examples-image"
                        class="examples-image"
                      />
                    </div>
                    <div class="examples__text">
                      <span>Схема (эконом пакет)</span> <br />
                      <span>*Исследование входит в стоимость пакета</span>
                    </div>
                  </div>
                </div>
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/img/examples_slider/slide_4.png"
                        alt="examples-image"
                        class="examples-image"
                      />
                      <div
                        class="slide-inner__play-circle"
                        data-url="FuU8HM2wZow"
                      >
                        <img src="../../assets/img/youtube.svg" alt="youtube" />
                      </div>
                    </div>
                    <div class="examples__text">Пример работы клиента</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="slider_next-btn next"></button>
        </div>
        <button class="examples__btn">Заказать</button>
      </div>
    </div>
  </section>
</template>

<script>
import VideoPlayer from '../../assets/js/playVideo'
import { dragDropSlider } from '../../assets/js/slider.js'
import { insertBitrix } from '../../assets/js/bitrix-window.js'
export default {
  mounted () {
    try {
      insertBitrix('.examples__inner', '.examples__btn')
    } catch (error) {}
    try {
      new VideoPlayer('.slide-inner__play-circle', '.overlay').init()
      dragDropSlider(
        '.slider',
        '.slider-list',
        '.slider-track',
        '.slide',
        '.examples__slider',
        4
      )
    } catch (error) {}
  }
}
</script>

<style scoped>
.expamples {
  background-color: rgba(209, 199, 180, 0.84);
}
.examples__inner {
  padding: 100px 0;
}
.examples__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #007632;
}
.examples__slider {
  margin: 70px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider_prev-btn,
.slider_next-btn {
  background: inherit;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: 120% 120%;
  background-position: center center;
  width: 60px;
  height: 60px;
  margin-bottom: 108px;
}
.slider_prev-btn {
  background-image: url("../../assets/img/btn_slider_left.svg");
}
.slider_next-btn {
  background-image: url("../../assets/img/btn_slider_right.svg");
}
.slider_next-btn:hover {
  background-image: url("../../assets/img/btn_slider_right_hover.svg");
}
.slider_prev-btn:hover {
  background-image: url("../../assets/img/btn_slider_left-hover.svg");
}
.slider {
  vertical-align: middle;
  margin-left: 55px;
  margin-right: 55px;
  position: relative;
  display: inline-block;
  width: 730px;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */
.slider img {
  pointer-events: none;
}
.slider-list {
  width: 730px;
  height: 601px;
  overflow: hidden;
}
.slider-list.grab {
  cursor: grab;
}
.slider-list.grabbing {
  cursor: grabbing;
}
.slider-track {
  display: flex;
}
.slide {
  width: 730px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.slide-inner {
  height: 601px;
}
.slide-inner__img {
  height: 493px;
  position: relative;
}
.slide-inner__play-circle {
  width: 135px;
  height: 135px;
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}
.slide img {
  width: 100%;
  height: 100%;
}
.slider-arrows {
  margin-top: 50px;
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
.examples__text,
.examples__text > a {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #2c1909;
  margin: 40px auto;
}
.examples__text > span:first-child {
  text-decoration: underline;
}
.examples__text > span:last-child {
  color: rgba(0, 0, 0, 0.28);
}
.examples__btn {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #7d4e24;
  background-color: #ffffff;

  border: 1px solid #7d4e24;
  box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
  border-radius: 50px;
  padding: 10px 35px;
}
.examples__btn:hover {
  color: #ffffff;
  background: #7d4e24;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .examples__slider {
    margin-bottom: 0;
  }
  .slider {
    margin: 0 46px;
    width: 678px;
  }
  .slider-list,
  .slide,
  .slide-inner {
    width: 678px;
  }
  .slide-inner__img {
    height: 458px;
  }
  .slide-inner__play-circle {
    width: 100px;
    height: 100px;
  }
}
@media (max-width: 768px) {
  .slide,
  .slider-list,
  .slider,
  .slide-inner {
    width: 521px;
    height: 495px;
  }
  .slider {
    margin: 0 30px;
  }
  .slide-inner__img {
    height: 352px;
  }
  .examples__text {
    margin-top: 55px;
  }
}
@media (max-width: 480px) {
  .slider {
    margin: 0;
  }
  .slider_prev-btn,
  .slider_next-btn {
    display: none;
  }
  .examples__inner {
    padding-top: 60px;
  }
  .examples__title {
    font-size: 26px;
    line-height: 40px;
  }
  .examples__slider {
    margin-bottom: 0;
  }
  .slider {
    margin: 0;
  }
  .slide,
  .slider,
  .slider-list,
  .slide-inner {
    max-width: 100%;
    height: 363px;
  }
  .slide-inner__img {
    max-height: 250px;
  }
  .examples__text {
    margin: 35px auto 30px auto;
  }
}
@media (max-width: 360px) {
  .examples__inner {
    padding: 60px 0;
  }
  .examples__title {
    font-size: 24px;
  }
  .examples__slider {
    margin-top: 50px;
  }
  .slide,
  .slider-list,
  .slider {
    max-width: 320px;
    max-height: 319px;
  }
  .slide-inner__img {
    max-height: 216px;
  }
  .slide-inner__play-circle {
    width: 80px;
    height: 80px;
  }
  .examples__text {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 22px;
  }
  .examples__btn {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
