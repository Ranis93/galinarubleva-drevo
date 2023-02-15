<template>
  <div class="appMain">
    <TheHeaderHat />
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <ThePolicy />
    <TheOverlay />
  </div>
</template>

<script>
import TheHeaderHat from '~/components/TheHeaderHat.vue'
import TheHeader from '~/components/TheHeader.vue'
import ThePolicy from '~/components/ThePolicy.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheOverlay from '~/components/TheOverlay.vue'

export default {
  components: {
    TheHeaderHat, TheHeader, ThePolicy, TheFooter, TheOverlay
  },
  created () {
    this.$store.commit('artic/setUrl')
  }
}
</script>
<style>
.appMain {
  position: relative;
  min-height: 100vh;
}
</style>
