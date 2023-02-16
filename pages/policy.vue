<template>
  <div>
    <TheBredcrumbs />
    <AppPolicy />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppPolicy from '~/components/AppPolicy.vue'

export default {
  name: 'FamilyTrees',
  components: {
    TheBredcrumbs, AppPolicy
  },
  head () {
    return {
      title: 'Политика конфиденциальности | Центр семейной родословной ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Политика конфиденциальности',
          name: 'description',
          content: 'Политика конфиденциальности сайта ГалинаРублеваДрево - это заявление, в котором раскрываются все способы, с помощью которых сайт собирает, использует и раскрывает персональные данные (личную информацию) посетителей сайта, а также управляет ими.'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Политика конфиденциальности'], paths: ['/policy'] })
  },
  unmounted () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
