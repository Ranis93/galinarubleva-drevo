<template>
  <div>
    <TheBredcrumbs />
    <AppMainServices />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppMainServices from '~/components/services-page/AppMainServices.vue'

export default {
  name: 'ServicesPage',
  components: {
    TheBredcrumbs, AppMainServices
  },
  head () {
    return {
      title: 'Услуги генеалогического исследования - составления генеалогического древа семьи | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Услуги',
          name: 'description',
          content: 'Центр генеалогических исследований ГалинаРублеваДрево предлагает составление родословной, генеалогического древа, архивный поиск, военный поиск, разработку герба, дизайн фамильного древа. Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Услуги'], paths: ['/our_services'] })
  }
}
</script>
