<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <ThePolicy />
    <TheOverlay />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import ThePolicy from '~/components/ThePolicy.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheOverlay from '~/components/TheOverlay.vue'

export default {
  components: {
    TheHeader, ThePolicy, TheFooter, TheOverlay
  },
  created () {
    this.$store.commit('artic/setUrl')
  }
}
</script>
