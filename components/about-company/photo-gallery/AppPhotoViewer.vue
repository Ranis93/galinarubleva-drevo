<template>
  <div class="galleryalbum__modal">
    <div class="galleryalbum__btns">
      <div class="galleryalbum__btn" @click="zoom()">
        <img
          src="../../../assets/img/gallery_zoom_btn.svg"
          alt="gallery_zoom_btn"
        />
      </div>
      <div
        class="galleryalbum__btn"
        @click.prevent="closeModal(), $store.commit('main/showFooter')"
      >
        <img
          src="../../../assets/img/gallery_close_btn.svg"
          alt="gallery_zoom_btn"
        />
      </div>
    </div>
    <div class="gallery__slider">
      <button
        type="button"
        class="slider_prev-btn prev disabled"
        @click.prevent="noZoom()"
      ></button>
      <div class="slider-window">
        <div class="slider-list">
          <div class="slider-track">
            <div
              class="slide"
              v-for="(photoSrc, index) in getCurrentAlbum.photo"
              :key="index"
            >
              <div class="slider-img">
                <label>
                  <input
                    type="checkbox"
                    :checked="getZoomState && index == getCurrentSlide.Num"
                  />
                  <img
                    :src="photoSrc"
                    loading="lazy"
                    decoding="async"
                    @click.prevent="zoom()"
                    alt="gallery-image"
                    class="gallery-image"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="slider_next-btn next"
        @click="noZoom()"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { dragDropSliderWI } from '../../../assets/js/slider.js'

export default {
  data() {
    return{
      currentSlide: 0
    }
  },
  computed: {
    ...mapState('gallery', ['isZoomed']),
    ...mapGetters('gallery', [
      'getCurrentAlbum',
      'getModalState',
      'getZoomState',
      'getCurrentSlide'
    ])
  },
  methods: {
    openModal () {
      this.$store.commit('gallery/setModalState', { value: true })
    },
    closeModal () {
      this.$store.commit('gallery/setModalState', { value: false })
      this.$store.commit('gallery/setZoomState', { value: false })
    },
    zoom () {
      if (this.getZoomState === false) {
        this.$store.commit('gallery/setZoomState', { value: true })
      } else {
        this.$store.commit('gallery/setZoomState', { value: false })
      }
    },
    noZoom () {
      this.$store.commit('gallery/setZoomState', { value: false })
    }
  },
  mounted () {
    try {
      dragDropSliderWI(
        '.slider-window',
        '.slider-list',
        '.slider-track',
        '.slide',
        '.gallery__slider',
        this.getCurrentAlbum.photo.length,
        this.getCurrentSlide,
        this
      )
    } catch (error) {
      console.log('Slider is hidden')
    }
  },
  unmounted () {
    this.$store.commit('gallery/setModalState', { value: false })
    this.$store.commit('gallery/setZoomState', { value: false })
    this.$store.commit('main/showFooter')
  }
}
</script>

<style scoped>
.galleryalbum__modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.galleryalbum__btns {
  position: absolute;
  top: 60px;
  right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 34px;
}
.galleryalbum__btn {
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.galleryalbum__btn:last-child {
  width: 21px;
  height: 21px;
}
.gallery__slider {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 35px;
  height: 100%;
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
}
.slider_prev-btn {
  background-image: url("../../../assets/img/btn_slider_left.svg");
  margin-left: 50px;
}
.slider_next-btn {
  background-image: url("../../../assets/img/btn_slider_right.svg");
  margin-right: 50px;
}
.slider_next-btn:hover {
  background-image: url("../../../assets/img/btn_slider_right_hover.svg");
}
.slider_prev-btn:hover {
  background-image: url("../../../assets/img/btn_slider_left-hover.svg");
}
.slider-window {
  vertical-align: middle;
  position: relative;
  display: inline-block;
  width: 100%;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */
/* .slider img {
  pointer-events: none;
}
.slider-img {
  pointer-events: none;
} */
.slider-list {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slider-list::-webkit-scrollbar {
  width: 0;
  height: 0;
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
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.slider-img input[type="checkbox"] {
  display: none;
}
.slider-img img {
  transition: transform 0.25s ease;
  cursor: zoom-in;
  object-fit: contain;
}
.slider-img input[type="checkbox"]:checked ~ img {
  transform: scale(1.5);
  cursor: zoom-out;
}
.slider-img {
  height: 100%;
  max-width: 99%;
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

@media (max-width: 1024px) {
  .galleryalbum__btns {
    right: 30px;
    column-gap: 20px;
  }
}
@media (max-width: 768px) {
  .slider-img {
    height: auto;
  }
  .slider_prev-btn,
  .slider_next-btn {
    display: none;
  }
  .slider-img,
  .slide,
  .slider-list {
    height: 80vh;
  }
  .galleryalbum__btns {
    top: 50px;
  }
}
@media (max-width: 480px) {
  .gallery__slider {
    margin-top: 10vh;
    align-items: flex-start;
    height: 90vh;
  }
  .slide,
  .slider-img,
  .slider-list {
    height: 90vh;
  }
  .galleryalbum__btns {
    top: 0;
    right: 0;
    left: 0;
    height: 10vh;
    justify-content: space-between;
  }
  .galleryalbum__btn {
    width: 30%;
    height: 100%;
    display: flex;
    align-content: center;
  }
  .galleryalbum__btn:last-child {
    width: 30%;
    height: 100%;
  }
  .galleryalbum__btn > img {
    width: 30px;
    margin: 0 auto;
  }
}
</style>
