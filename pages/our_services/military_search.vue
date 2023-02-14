<template>
  <div>
    <TheBredcrumbs />
    <AppMilitarySearch />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppMilitarySearch from '~/components/services-page/AppMilitarySearch.vue'

export default {
  name: 'MilitarySearch',
  components: {
    TheBredcrumbs, AppMilitarySearch
  },
  head () {
    return {
      title: 'Архивный поиск участников ВОВ по фамилии | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Военный поиск',
          name: 'description',
          content: 'Поиск солдат Великой Отечественной войны в архивах, воевавших в ВОВ по фамилии. Узнать боевой путь ветерана ВОВ по фамилии. Поиск военных архивов, ветеранов - цены и сроки заказа исследования в Уфе. Бесплатная консультация. Звоните! ☏8(347)224-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Услуги', 'Военный поиск'], paths: ['/our_services', '/our_services/military_search'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
