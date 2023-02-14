<template>
  <div>
    <TheBredcrumbs />
    <AppArticles />
    <AppBeginning />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs'
import AppArticles from '~/components/articles/AppArticles'
import AppBeginning from '~/components/AppBeginning'
export default {
  name: 'Articles',
  components: { TheBredcrumbs, AppArticles, AppBeginning },
  head () {
    return {
      title: 'Статьи о генеалогии и составлении родословной семьи | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Статьи',
          name: 'description',
          content: 'Статьи по генеалогии, родословному и семейному древу (дереву). Советы начинающим для составления родословной и построения семейного (родословного) дерева (древа). Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Статьи'], paths: ['/articles'] })
  }
}
</script>

<style>

</style>
