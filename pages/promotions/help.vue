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
      title: '',
      meta: [
        {
          name: 'description',
          content: ''
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
