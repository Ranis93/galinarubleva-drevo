<template>
  <section class="photogallery">
    <div class="container">
      <div class="photogallery__inner">
        <h1 class="photogallery__title">Фотогалерея</h1>
        <div class="photogallery__albums">
          <nuxt-link
            v-for="(album, index) in getAllAlbums"
            :key="album.id"
            @click="$store.commit('gallery/setCurrentAlbumNum', { num: index })"
            :to="'/about_company/photo_gallery/' + album.id"
            class="photogallery__album"
          >
            <img :src="album.src" loading="lazy" decoding="async" />
            <span class="mask">
              <p class="photogallery__desc">{{ album.title }}</p>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters('gallery', ['getAllAlbums'])
}
</script>

<style scoped>
.photogallery {
  margin-top: 5px;
}
.photogallery__inner {
  min-height: 50vh;
}

.photogallery__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  margin-bottom: 20px;
  flex: 1;
}
.photogallery__albums {
  display: flex;
  gap: 20px;
  padding-bottom: 80px;
}

.photogallery__album {
  display: block;
  position: relative;
  width: 280px;
}

/* Это центровка текста и иконки */
/* Вынес в отдельный блок, что-бы не путаться */
.mask {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(125, 78, 36, 0.75);
  opacity: 0;
  transition: opacity 0.4s linear;
}
.photogallery__desc {
  max-width: 229px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
}
span:hover {
  opacity: 1;
}

@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
@media (max-width: 360px) {
}
</style>
