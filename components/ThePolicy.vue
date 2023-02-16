<template>
  <section v-if="getFooterIsShow" class="policy">
    <div class="container">
      <div class="policy__inner">
        <div class="policy__text text-one">
          © 2022 Все права защищены
        </div>
        <div class="policy__text text-two">
          <a href="https://edu-partner.ru/">
            Сайт разработан EDUPARTNER
          </a>
        </div>
        <div class="policy__text text-three">
          <nuxt-link to="/policy">Политика конфиденциальности</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('main', ['getFooterIsShow'])
  }
}
</script>

<style scoped>
.policy {
  background-color: #131313;
}
.policy__inner {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  column-gap: 20px;
}
.policy__text,
.policy__text > a {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  text-decoration: none;
}
.policy__text > a {
  text-decoration: none;
  cursor: pointer;
}
.text-one {
  width: 340px;
  flex-shrink: 0;
}
.text-two {
  width: 280px;
}
.text-three {
  width: 380px;
}
.text-one,
.text-two,
.text-three {
  vertical-align: top;
}
@media (max-width: 1024px) {
  .text-one {
    width: 336px;
  }
  .text-two {
    width: 190px;
  }
  .text-three {
    width: 380px;
  }
}
@media (max-width: 768px) {
  .text-one {
    width: 327px;
  }
  .text-two {
    width: 190px;
  }
  .text-three {
    width: 176px;
  }
}
@media (max-width: 655px) {
  .policy__inner {
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .policy__inner {
    column-gap: normal;
  }
  .text-one {
    width: 198px;
  }
  .text-two {
    width: 190px;
  }
  .text-three {
    width: 176px;
  }
  .policy__text {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.025em;
  }
}
@media (max-width: 427px) {
  .text-one {
    flex-shrink: 1;
    width: 150px;
  }
  .text-two {
    width: 167px;
  }
}
@media (max-width: 360px) {
  .text-one {
    width: 122px;
  }
  .text-two {
    width: 150px;
  }
  .text-three {
    width: 176px;
  }
}
</style>
