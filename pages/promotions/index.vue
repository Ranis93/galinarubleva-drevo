<template>
  <div>
    <TheBredcrumbs />
    <AppPromotions />
    <AppUseful />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppPromotions from '~/components/promotions/AppPromotions.vue'
import AppUseful from '~/components/AppUseful.vue'

export default {
  name: 'Promotions',
  components: {
    TheBredcrumbs, AppPromotions, AppUseful
  },
  head () {
    return {
      title: 'Акции в семейной родословной ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Акции',
          name: 'description',
          content: '⭐ Центр семейной родословной "ГалинаРублеваДрево" ⭐ - проводит акции по составлению родословной, генеалогических деревьев, архивном поиске, древо семьи, родословных книгах, семейных гербов итд. Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Акции'], paths: ['/promotions'] })
  }
}
</script>
