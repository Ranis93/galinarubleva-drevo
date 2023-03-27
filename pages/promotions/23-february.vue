<template>
  <div>
    <TheBredcrumbs />
    <AppFebruary23 />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppFebruary23 from '~/components/promotions/AppFebruary23.vue'

export default {
  name: 'Promotion',
  components: {
    TheBredcrumbs, AppFebruary23
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
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
