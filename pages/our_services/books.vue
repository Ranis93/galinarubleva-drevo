<template>
  <div>
    <TheBredcrumbs />
    <AppBlbooks />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppBlbooks from '~/components/services-page/AppBlbooks.vue'

export default {
  name: 'Books',
  components: {
    TheBredcrumbs, AppBlbooks
  },
  head () {
    return {
      title: 'Купить родословную книгу древо в Уфе в подарок | ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Книги',
          name: 'description',
          content: 'Родословная книга семьи в подарок можно заказать на генеалогическом сайте ГалинаРублеваДрево - большая родословная книга нашей семьи. Бесплатная консультация. Звоните! ☏8(347)224-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Услуги', 'Родословные книги'], paths: ['/our_services', '/our_services/books'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
