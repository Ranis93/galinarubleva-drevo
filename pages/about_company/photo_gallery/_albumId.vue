<template>
  <div>
    <TheBredcrumbs />
    <AppGalleryAlbum />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppGalleryAlbum from '~/components/about-company/photo-gallery/AppGalleryAlbum.vue'

export default {
  name: 'PhotoGalleryAlbum',
  components: {
    TheBredcrumbs, AppGalleryAlbum
  },
  validate ({ params, store }) {
    return +store.getters['gallery/getAllAlbums'].length >= +params.albumId
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 3 })
  }
}
</script>
