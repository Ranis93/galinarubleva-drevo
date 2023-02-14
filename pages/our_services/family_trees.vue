<template>
  <div>
    <TheBredcrumbs />
    <AppFamilyTrees />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppFamilyTrees from '~/components/services-page/AppFamilyTrees.vue'

export default {
  name: 'FamilyTrees',
  components: {
    TheBredcrumbs, AppFamilyTrees
  },
  head () {
    return {
      title: 'Древо семьи - составление родословного древа семьи | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Генеалогическое дерево',
          name: 'description',
          content: 'Генеалогическое дерево  - погрузитесь в историю своего рода. Услуги по созданию родословного древа жизни - официальный сайт ГалинаРублеваДрево.  Бесплатная консультация. Звоните! ☏8(347)224-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Услуги', 'Родословные древа'], paths: ['/our_services', '/our_services/family_trees'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
