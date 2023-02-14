<template>
  <div>
    <TheBredcrumbs />
    <AppOurProgress />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppOurProgress from '~/components/about-company/AppOurProgress.vue'

export default {
  name: 'ProgressPage',
  components: {
    TheBredcrumbs, AppOurProgress
  },
  head () {
    return {
      title: 'Достижения нашего генеалогического центра ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Достижения',
          name: 'description',
          content: 'Здесь мы расскажем о наших успехах и заслугах как генеалогического центра, а также покажем вам подборку упешных проектов института генеалогических исследований.'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['О компании', 'Наши достижения'], paths: ['/about_company/company_history', '/about_company/progress'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
