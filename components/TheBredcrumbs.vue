<template>
  <section class="bredcrumbs" :class="{ gray: getBgColor }">
    <div class="container">
      <table class="bredcrumbs__list">
        <tr>
          <td>
            <nuxt-link exact to="/" class="bredcrumb">Главная</nuxt-link>
          </td>
          <td>
            <div class="bredcrumb__pointer"></div>
          </td>
          <td>
            <nuxt-link exact
              :to="getCurrentPathForBredcrumb_1"
              class="bredcrumb"
              :class="{ current: $store.state.bredcrumbs.bredcrumbAmount == 1 }"
              >{{ getCurrentBredcrumb_1 }}</nuxt-link
            >
          </td>
          <td>
            <div
              class="bredcrumb__pointer"
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 2"
            ></div>
          </td>
          <td>
            <nuxt-link exact
              :to="getCurrentPathForBredcrumb_2"
              class="bredcrumb"
              :class="{ current: $store.state.bredcrumbs.bredcrumbAmount == 2 }"
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 2"
              >{{ getCurrentBredcrumb_2 }}
            </nuxt-link>
          </td>
          <td>
            <div
              class="bredcrumb__pointer"
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 3"
            ></div>
          </td>
          <td>
            <nuxt-link exact
              :to="getCurrentPathForBredcrumb_3"
              class="bredcrumb"
              :class="{ current: $store.state.bredcrumbs.bredcrumbAmount == 3 }"
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 3"
              >{{ getCurrentBredcrumb_3 }}
            </nuxt-link>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters('bredcrumbs', [
    'getCurrentBredcrumb_1',
    'getCurrentBredcrumb_2',
    'getCurrentBredcrumb_3',
    'getBgColor',
    'getCurrentPathForBredcrumb_1',
    'getCurrentPathForBredcrumb_2',
    'getCurrentPathForBredcrumb_3'
  ])
}
</script>

<style scoped>
.bredcrumbs {
  padding: 20px 0;
  overflow-x: scroll;
  position: relative;
  z-index: 1;
}
.bredcrumbs::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.bredcrumbs.gray {
  background-color: rgba(209, 199, 180, 0.84);
}
.bredcrumbs__list {
  width: fit-content;
  border: none;
  border-collapse: separate;
  border-spacing: 7px;
}
.bredcrumbs__list td {
  width: fit-content;
  vertical-align: top;
}
.bredcrumb {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.72);
  text-decoration: none;
  white-space: nowrap;
}
.bredcrumb__pointer {
  width: 14px;
  height: 20px;
  background-image: url("../assets/img/bredcrumbs_pointer.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  position: relative;
}
.bredcrumb.current {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #7d4e24;
}
@media (max-width: 480px) {
  .bredcrumbs__list {
    align-items: flex-start;
  }
}
</style>
