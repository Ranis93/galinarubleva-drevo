<template>
  <section class="videos">
    <div class="container">
      <div class="videos__title">Спасибо за доверие!</div>
      <div class="videos__arrows" style="display: none">
        <button type="button" class="videos__arrow prev disabled">
          <img
            class="prev"
            src="../../assets/img/reviews/reviews_arrow-left.svg"
            alt="reviews_arrow-left"
          />
        </button>
        <div class="videos__center"></div>
        <button type="button" class="videos__arrow next">
          <img
            class="next"
            src="../../assets/img/reviews/reviews_arrow-right.svg"
            alt="reviews_arrow-right"
          />
        </button>
      </div>
      <div class="videos__slider">
        <div class="videos__slider-list">
          <div class="videos__slider-track">
            <div class="videos__slide">
              <div class="videos__card">
                <div class="videos__ico one">
                  <div class="videos__play-circle" data-url="fYEwx4ovlHM">
                    <img src="../../assets/img/youtube.svg" alt="youtube" />
                  </div>
                </div>
              </div>
            </div>
            <div class="videos__slide">
              <div class="videos__card">
                <div class="videos__ico two">
                  <div class="videos__play-circle" data-url="1hBkuT-YGdA">
                    <img src="../../assets/img/youtube.svg" alt="youtube" />
                  </div>
                </div>
              </div>
            </div>
            <div class="videos__slide">
              <div class="videos__card">
                <div class="videos__ico three">
                  <div class="videos__play-circle" data-url="GVUfci4lRyQ">
                    <img src="../../assets/img/youtube.svg" alt="youtube" />
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
import VideoPlayer from '../../assets/js/playVideo'
import { dragDropSlider } from '../../assets/js/slider.js'
export default {
  mounted () {
    try {
      new VideoPlayer('.videos__play-circle', '.overlay').init()
      dragDropSlider(
        '.videos__slider',
        '.videos__slider-list',
        '.videos__slider-track',
        '.videos__slide',
        '.videos__arrows',
        3
      )
    } catch (error) {
      console.log('error')
    }
  }
}
</script>

<style scoped>
.videos__card {
  padding: 0 10px;
  position: relative;
}
.videos__arrow {
  width: 80px;
  height: 42px;
  background-color: #f5f5f5;
  border: 0;
}
.videos__center {
  display: inline-block;
}
.videos__arrow:last-child {
  margin-left: 20px;
}
.videos__slider {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
  то нужно задать им pointer-events: none,
  чтобы они не перетаскивались мышью */

.videos__slider img {
  pointer-events: none;
}

.videos__slider-list {
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.videos__slider-list.grab {
  cursor: grab;
}
.videos__slider-list.grabbing {
  cursor: grabbing;
}

.videos__slider-track {
  display: flex;
}
.videos__slide {
  width: 380px;
  height: 250px;
  /* Чтобы слайды не сжимались */
  flex-shrink: 0;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.videos__slide img {
  width: 100%;
  height: 100%;
}
.videos__arrows {
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

.videos {
  margin-bottom: 80px;
}
.videos__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  padding-bottom: 30px;
}
.videos__ico.one {
  background-image: url("../../assets/img/reviews/reviews_video_1.png");
}
.videos__ico.two {
  background-image: url("../../assets/img/reviews/reviews_video_2.png");
}
.videos__ico.three {
  background-image: url("../../assets/img/reviews/reviews_video_3.png");
}
.videos__ico {
  background: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 30px;
  width: 380px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.videos__play-circle {
  cursor: pointer;
  max-width: 100px;
  max-height: 100px;
  transition: 1s;
}
.videos__play-circle:hover {
  transform: scale(1.5);
}
@media (max-width: 1024px) {
  .videos__title {
    padding-bottom: 25px;
    font-size: 24px;
    line-height: 33px;
  }
  .videos__slider-list,
  .videos__slide,
  .videos__ico {
    height: 202px;
  }
  .videos__slide,
  .videos__ico {
    width: 307px;
  }
  .videos__play-circle {
    max-width: 80px;
    max-height: 81px;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
  .videos__slider-list,
  .videos__slide,
  .videos__ico {
    height: 139px;
  }
  .videos__slide,
  .videos__ico {
    width: 210px;
  }
  .videos__play-circle {
    max-width: 54px;
    max-height: 55px;
  }
}
@media (max-width: 360px) {
}
</style>
