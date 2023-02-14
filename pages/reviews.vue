<template>
  <div>
    <TheBredcrumbs />
    <AppReviewsHat />
    <AppReviewsVideos />
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import AppReviewsHat from '~/components/reviews/ReviewsHat.vue'
import AppReviewsVideos from '~/components/reviews/ReviewsVideos.vue'

export default {
  name: 'Reviews',
  components: {
    TheBredcrumbs, AppReviewsHat, AppReviewsVideos
  },
  head () {
    return {
      title: 'Отзывы о семейной родословной ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Отзывы',
          name: 'description',
          content: '⭐ Центр семейной родословной "ГалинаРублеваДрево" ⭐ - Отзывы о составлении родословной, генеалогических деревьев, архивном поиске, древо семьи, родословных книгах, семейных гербов итд. Бесплатная консультация. Звоните!☎ 8(347)244-28-99'
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop;
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', { values: ['Отзывы'], paths: ['/reviews'] })
  }
}
</script>
