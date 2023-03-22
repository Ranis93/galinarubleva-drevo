<template>
  <section class="useful">
    <div class="container">
      <div class="useful__inner">
        <div class="useful__head">
          <div class="useful__title">Полезно и интересно</div>
          <nuxt-link to="/articles" class="useful__text">Статьи</nuxt-link>
        </div>
        <carousel
          class="useful-carousel"
          :autoplay="true"
          :autoplayTimeout="3500"
          :autoplaySpeed="1500"
          :autoplayHoverPause="true"
          :loop="true"
          :nav="false"
          :dots="false"
          :items="1"
          :center="false"
          :margin="15"
          :stagePadding="30"
          :lazyLoad="true"
          :lazyLoadEager="3"
          :responsive="{365:{margin:20},485:{items:2,stagePadding:0},769:{items:3,stagePadding:0}}"
        >
          <nuxt-link
            v-for="(usefulCard, idx) in this.usefulCards"            
            :to="usefulCard.url"
            :key="usefulCard.id"
            class="useful__link"
          >
            <div
              class="useful__card"
              @click="$store.commit('artic/setCurrentArticle', { value: idx })"
            >
              <div class="useful__pic">
                <img
                  class="owl-lazy"
                  :data-src="usefulCard.src"
                  :data-src-retina="usefulCard.src"
                  alt="useful__pic"
                />
              </div>
              <div class="useful__desc">{{ usefulCard.title }}</div>
              <div class="useful__date">{{ usefulCard.date }}</div>
            </div>
          </nuxt-link>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      usefulCards: []
    }
  },
  computed: {
    ...mapGetters('artic', ['getAllArticles'])
  },
  beforeMount () {
    this.usefulCards = this.getAllArticles
  }
}
</script>

<style>
.useful {
  background-color: rgba(209, 199, 180, 0.84);

  background-image: url("../assets/img/useful_bg.png");
  background-repeat: no-repeat;
  background-position: right center;
}
.useful__inner {
  padding: 100px 0 90px 0;
}
.useful__head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.useful__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #007632;
}
.useful__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #007632;
  text-decoration: none;
}
.useful__text:hover {
  text-decoration: underline;
}
.useful__link{
  text-decoration: none;
}
.useful__card{
  padding-top: 5px;
  transition: all .25s;
}
.useful__card:hover{
  transform: scale(1.01);
}
.useful__desc{
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #673800;
  padding: 20px 0 15px 0;
}
.useful__date{
	font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.34);
}
@media (max-width: 768px) {
  .useful__inner {
    padding: 100px 0;
  }
  .useful__desc{
    padding-top: 30px;
  }
}
@media (max-width: 480px) {
  .useful__inner {
    padding: 60px 0;
  }
  .useful__title {
    font-size: 26px;
    line-height: 35px;
  }
  .useful__head {
    margin-bottom: 44px;
    align-items: center;
  }
  .useful__desc {
    font-size: 18px;
    line-height: 25px;
  }
}
@media (max-width: 360px) {
  .useful__inner {
    padding: 60px 0 75px 0;
  }
  .useful__head {
    flex-wrap: wrap;
    margin-bottom: 22px;
  }
  .useful__title {
    font-size: 24px;
    line-height: 33px;
  }
}
</style>
