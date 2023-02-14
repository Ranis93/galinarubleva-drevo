<template>
  <div>
    <TheBredcrumbs />
    <AppServicePackages />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppServicePackages from '~/components/services-page/AppServicePackages.vue'

export default {
  name: 'ServicePackages',
  components: {
    TheBredcrumbs, AppServicePackages
  },
  head () {
    return {
      title: 'Заказать генеалогическое древо семьи цена в Уфе | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Пакеты Услуг',
          name: 'description',
          content: 'Исследование родословной по фамилии ⭐ - составление родословной, генеалогических деревьев, архивный поиск и др. ⭐Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Услуги', 'Пакеты услуг'], paths: ['/our_services', '/our_services/packages'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
