<template>
  <div>
    <TheBredcrumbs />
    <AppPromo />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppPromo from '~/components/promotions/AppPromo.vue'

export default {
  name: 'Promotion',
  components: {
    TheBredcrumbs, AppPromo
  },
  head () {
    return {
      title: 'Акция в честь 23 февраля на услуги военного поиска и родословной | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Акция',
          name: 'description',
          content: 'Поздравляем с 23 Февраля — и дарим вам скидку до 23 % на услуги военного поиска и восстановление родословной в нашем центре до 28 февраля ⭐Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
