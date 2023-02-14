<template>
  <div>
    <AppHistory />
    <AppAbout />
    <AppServices />
    <AppWhy />
    <AppStages />
    <AppExamples />
    <AppBeginning />
    <AppReviews />
    <AppUseful />
  </div>
</template>

<script>
import AppHistory from '~/components/main-page/AppHistory.vue'
import AppAbout from '~/components/main-page/AppAbout.vue'
import AppServices from '~/components/AppServices.vue'
import AppWhy from '~/components/main-page/AppWhy.vue'
import AppStages from '~/components/main-page/AppStages.vue'
import AppExamples from '~/components/main-page/AppExamples.vue'
import AppBeginning from '~/components/AppBeginning.vue'
import AppReviews from '~/components/main-page/AppReviews.vue'
import AppUseful from '~/components/AppUseful.vue'

export default {
  name: 'IndexPage',
  components: {
    AppHistory, AppAbout, AppServices, AppWhy, AppStages, AppExamples, AppBeginning, AppReviews, AppUseful
  },
  head () {
    return {
      title: 'Генеалогическое древо семьи | Поиск родословной по фамилии на генеалогическом сайте ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Главная',
          name: 'description',
          content: 'Заказать родословное дерево семьи по фамилии можно на генеалогическом сайте ГалинаРублеваДрево, наш генеалогический институт предлагает составление родословной, поиск предков по фамилии, создание семейного древа, архивный поиск рода по фамилии. Бесплатная консультация. Звоните! ☏8(347)224-28-99'
        }
      ]
    }
  },
  beforeMount () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
