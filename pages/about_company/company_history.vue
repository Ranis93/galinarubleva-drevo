<template>
  <div>
    <TheBredcrumbs />
    <AppHistoryCorp />
    <AppWorkingMap />
    <AppWhyWe />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppHistoryCorp from '~/components/about-company/company-history/AppHistoryCorp.vue'
import AppWorkingMap from '~/components/about-company/company-history/AppWorkingMap.vue'
import AppWhyWe from '~/components/about-company/company-history/AppWhyWe.vue'

export default {
  name: 'OurCommand',
  components: {
    TheBredcrumbs, AppHistoryCorp, AppWorkingMap, AppWhyWe
  },
  head () {
    return {
      title: 'О компании ГалинаРублеваДрево',
      meta: [
        {
          hid: 'История компании',
          name: 'description',
          content: '⭐ Центр семейной родословной "ГалинаРублеваДрево" ⭐ - объединение профессионалов историков-генеалогов, геральдистов, архивоведов и практикующих юристов, способных воссоздать духовные ценности семьи, восстановить историю рода и помочь решить уникальные задачи, с которыми Вы можете столкнуться при формировании династии и оформлении преемственности. Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['О компании', 'История компании'], paths: ['/about_company/company_history', '/about_company/company_history'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: [''], paths: [''] })
  }
}
</script>
