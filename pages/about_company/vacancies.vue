<template>
  <div>
    <TheBredcrumbs />
    <AppVacancies />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppVacancies from '~/components/about-company/AppVacancies.vue'

export default {
  name: 'Vacancies',
  components: {
    TheBredcrumbs, AppVacancies
  },
  head () {
    return {
      title: 'Актуальные Вакансии',
      meta: [
        {
          hid: 'Вакансии',
          name: 'description',
          content: 'Здесь мы размещаем актуальные вакансии официального центра генеалогии ГалинаРублеваДрево и предложения о сотрудничестве. Здесь мы размещаем актуальные вакансии центра генеалогии и предложения о сотрудничестве'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['О компании', 'Вакансии'], paths: ['/about_company/company_history', '/about_company/vacancies'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
