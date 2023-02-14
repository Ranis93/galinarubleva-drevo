<template>
  <section class="sharebtn">
    <div class="container">
      <div class="sharebtn__inner">
        <div
          class="sharebtn__overlay"
          :class="{ active: getShareBtnStatus }"
          @mouseleave="closeLinks"
        >
          <div class="sharebtn__box">
            <div class="sharebtn__links">
              <a
                :href="`https://vk.com/share.php?url=${myUrl}`"
                class="sharebtn__link"
              >
                <img
                  src="../../assets/img/share_vk.svg"
                  alt="share_vk"
                >
              </a>
              <a
                :href="`https://t.me/share/url?url=${myUrl}`"
                class="sharebtn__link"
              >
                <img
                  src="../../assets/img/share_tg.svg"
                  alt="share_tg"
                >
              </a>
              <a
                :href="`https://connect.ok.ru/offer?url=${myUrl}+''`"
                class="sharebtn__link"
              >
                <img
                  src="../../assets/img/share_ok.svg"
                  alt="share_twitter"
                >
              </a>
            </div>
            <div class="sharebtn__copy" @click="copyURL(myUrl)">
              Скопировать ссылку
            </div>
          </div>
        </div>
        <button class="sharebtn__self" @click="toggleLinks">
          <div class="sharebtn__img" :class="{ active: getShareBtnStatus }">
            <img
              src="../../assets/img/share_btn.svg"
              alt="share_btn"
            >
          </div>
          <div class="sharebtn__text">
            Поделиться
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      myUrl: 'http://galinarubleva-drevo.ru' + this.$route.fullPath
    }
  },
  computed: mapGetters('artic', ['getShareBtnStatus']),
  methods: {
    ...mapMutations('artic', ['toggleLinks', 'closeLinks']),
    // Ниже метод работает только по протоколу https
    // copyURL(mytext) {
    // try {
    // navigator.clipboard.writeText(mytext);
    // alert('Ссылка скопирована!');
    // } catch(e) {
    // alert('Ошибка копирования ссылки(((');
    // console.log(e);
    // }
    // this.$store.commit('closeLinks');
    // }

    copyURL (mytext) {
      // Метод для протокола http
      const textArea = document.createElement('textarea')
      textArea.value = mytext
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        alert('Ссылка скопирована!')
      } catch (err) {
        console.error('Unable to copy to clipboard', err)
        alert('Ошибка копирования ссылки(((')
      }
      document.body.removeChild(textArea)
    }
  }
}
</script>

<style scoped>
.sharebtn {
  margin-top: 30px;
}
.sharebtn__inner {
  position: relative;
}
.sharebtn__overlay {
  position: absolute;
  top: -112px;
  left: 0;
  z-index: 0;

  width: 200px;
  height: 200px;
  display: none;
}
.sharebtn__box {
  margin-top: 10px;
  width: 170px;
  height: 91px;
  max-width: 170px;
  max-height: 91px;
  box-sizing: border-box;
  padding-top: 12px;
  background: #f5f5f5;
  border-radius: 20px;
}
.sharebtn__overlay.active {
  display: block;
}
.sharebtn__links {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}
.sharebtn__link {
  width: 34px;
  height: 34px;
  cursor: pointer;
}
.sharebtn__copy {
  margin-top: 2px;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 33px;
  text-decoration: underline;
  color: #1d1d1d;
  text-align: center;
}
.sharebtn__self {
  width: fit-content;
  border: medium none;
  background-color: transparent;
  position: relative;
  z-index: 1;
}
.sharebtn__self:hover {
  cursor: pointer;
}
.sharebtn__img {
  max-width: 39px;
  max-height: 39px;
  display: inline-block;
  vertical-align: middle;
}
.sharebtn__img {
  background: rgba(0, 0, 0, 0.28);
  border-radius: 10px;
}
.sharebtn__img.active {
  background: #007632;
}
.sharebtn__text {
  display: inline-block;
  margin-left: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  color: #1d1d1d;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
@media (max-width: 360px) {
}
</style>
