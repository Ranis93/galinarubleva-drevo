<template>
  <div>
    <TheBredcrumbs />
    <AppGenResearch />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppGenResearch from '~/components/services-page/AppGenResearch.vue'
export default {
  name: 'GenResearch',
  components: {
    TheBredcrumbs, AppGenResearch
  },
  head () {
    return {
      title: 'Генеалогическое исследование семьи, рода | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Генеалогическое исследование',
          name: 'description',
          content: 'Центр генеалогических исследований предлагает заказать исследование родословной семьи, поиск Ваших предков на 100 и более лет от последнего известного родственника. Бесплатная консультация. Звоните! ☏8(347)224-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Услуги', 'Генеалогическое исследование'], paths: ['/our_services', '/our_services/genealogical_research'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
