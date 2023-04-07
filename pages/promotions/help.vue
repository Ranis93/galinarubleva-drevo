<template>
  <div>
    <TheBredcrumbs />
    <AppHelp />
    <AppUseful />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppHelp from '~/components/promotions/AppHelp.vue'
import AppUseful from '~/components/AppUseful.vue'

export default {
  name: 'Promotion',
  components: {
    TheBredcrumbs, AppHelp, AppUseful
  },
  head () {
    return {
      title: 'Исследование фамилии на заказ | ГалинаРублеваДрево',
      meta: [
        {
          name: 'description',
          content: 'Центр семейной родословной Галины Рублевой проводит исследования фамилии, составление фамильного древа(дерева) по заказу клиента. Поможем составить фамильный диплом и разработать фамильный герб⭐Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
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
