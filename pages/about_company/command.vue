<template>
  <div>
    <TheBredcrumbs />
    <AppOurCommand />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppOurCommand from '~/components/about-company/AppOurCommand.vue'

export default {
  name: 'OurCommand',
  components: {
    TheBredcrumbs, AppOurCommand
  },
  head () {
    return {
      title: 'Наша команда | официальный сайт ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Наша команда',
          name: 'description',
          content: 'Сотрудники нашей генеалогической компании - главная ценность и гордость. Все они профессионалы в своем деле, будь то поиск предков или работа с клиентами. Мы любим и ценим каждого из них.'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['О компании', 'Команда нашего генеалогического центра'], paths: ['/about_company/company_history', '/about_company/command'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
