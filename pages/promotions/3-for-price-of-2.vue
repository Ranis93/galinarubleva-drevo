<template>
  <div>
    <TheBredcrumbs />
    <AppThreeForTwo />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppThreeForTwo from '~/components/promotions/AppThreeForTwo.vue'

export default {
  name: 'Promotion',
  components: {
    TheBredcrumbs, AppThreeForTwo
  },
  head () {
    return {
      title: 'Акция 3 исследования родословной по цене 2 | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Акция 3 по цене 2',
          name: 'description',
          content: 'В преддверии прекрасного праздника специальное предложение по исследованию по Республике Башкортостан: при покупке VIP-пакетов исследования, третье исследование в подарок!  ⭐Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
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
