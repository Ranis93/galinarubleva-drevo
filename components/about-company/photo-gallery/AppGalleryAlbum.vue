<template>
  <section class="galleryalbum">
    <div class="container">
      <div class="galleryalbum__inner" :class="{ modalOpened: getModalState }">
        <h1 class="galleryalbum__title" v-if="!getModalState">
          {{ getAlbums.title }}
        </h1>
        <div class="galleryalbum__photos" v-if="!getModalState">
          <div
            class="galleryalbum__photo"
            v-for="(photoSrc, index) in this.getAlbums.photomin"
            :key="index"
            @click="
              ($store.commit('gallery/setCurrentSlide', { Num: index })),
                openModal(),
                $store.commit('main/hideFooter')
            "
          >
            <img loading="lazy" decoding="async" :src="photoSrc" alt="photo" />
          </div>
        </div>
        <app-photo-viewer v-if="getModalState"></app-photo-viewer>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AppPhotoViewer from './AppPhotoViewer'

export default {
  data () {
    return {
      zoomZoom: { value: false }
    }
  },
  head () {
    return {
      title: `${this.getAlbums.title} | ГалинаРублеваДрево`,
      meta: [
        {
          hid: 'Фотоальбом',
          name: 'description',
          content: `Генеалогический Центр ГалинаРублеваДрево (центр генеалогических исследований) - ${this.getAlbums.title} ⭐Примеры составление родословной, генеалогических деревьев, архивный поиск и др. ⭐Бесплатная консультация. Звоните!☎ 8(347)244-28-99`
        }
      ]
    }
  },
  computed: {
    ...mapGetters('gallery', ['getModalState', 'getCurrentSlide', 'getAllAlbums']),
    getAlbums () {
      const album = this.getAllAlbums.find(
        album => album.id === this.$route.params.albumId
      )
      this.$store.commit('bredcrumbs/changeBredcrumbs', {
        values: ['О компании', 'Фотогалерея', album.title],
        paths: [
          '/about_company/company_history',
          '/about_company/photo_gallery',
          '/about_company/photo_gallery/' + album.id
        ]
      })
      this.setCurrentAlbumNum({ num: album.id - 1 })
      return album
    }
  },
  methods: {
    ...mapMutations('gallery', ['setModalState', 'setZoomState', 'setCurrentAlbumNum']),
    openModal () {
      this.setModalState({ value: true })
    },
    closeModal () {
      this.setModalState({ value: false })
      this.setZoomState({ value: false })
    },
    zoom () {
      if (this.getZoomState === false) {
        this.setZoomState({ value: true })
      } else {
        this.setZoomState({ value: true })
      }
    },
    noZoom () {
      this.setZoomState({ value: false })
    }
  },
  components: { AppPhotoViewer }
}
</script>

<style scoped>
.galleryalbum {
  margin: 5px 0 55px 0;
}
.galleryalbum__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  margin-bottom: 25px;
}
.galleryalbum__photos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 80px;
}
.galleryalbum__photo {
  width: 32%;
  height: 450px;
}
.galleryalbum__photo > img {
  object-fit: cover;
}

@media (max-width: 1024px) {
  .galleryalbum__title {
    font-size: 24px;
    line-height: 33px;
  }
  .galleryalbum__photo {
    max-height: 284px;
    width: 32%;
  }
  .galleryalbum__photo > img {
    object-fit: cover;
  }
  .galleryalbum__inner.modalOpened {
    height: auto;
    max-height: auto;
  }
}
@media (max-width: 768px) {
  .galleryalbum__photo {
    max-height: 211px;
  }
}
@media (max-width: 480px) {
  .galleryalbum__photo {
    max-height: 178px;
    width: 48%;
  }
}
@media (max-width: 360px) {
  .galleryalbum__photo {
    max-height: 149px;
  }
}
</style>
