<template>
  <div>
    <TheBredcrumbs />
    <AppPhotoGallery />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppPhotoGallery from '~/components/about-company/photo-gallery/AppPhotoGallery.vue'

export default {
  name: 'PhotoGallery',
  components: {
    TheBredcrumbs, AppPhotoGallery
  },
  head () {
    return {
      title: 'Фотогалерея центра генеалогии ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Фотогалерея',
          name: 'description',
          content: 'Здесь мы покажем вам как живет Генеалогический Центр ГалинаРублеваДрево (центр генеалогических исследований) предлагаем вам посмотреть примеры составление родословной, генеалогических деревьев, архивный поиск и др. Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['О компании', 'Фотогалерея'], paths: ['/about_company/company_history', '/about_company/photo_gallery'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
