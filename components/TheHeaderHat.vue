<template>
    <div class="header__hat">
      <div class="container">
        <div class="header__inner">
          <nuxt-link exact to="/" class="header__logo">
            <img src="../assets/img/logo_gr.png" alt="logo" />
          </nuxt-link>
          <div class="header__contacts">
            <div class="header__contacts-first">
              <div class="header__excort">
                <a href="https://уфаритуал.рф/">Проводить близкого</a>
              </div>
              <div class="header__mail">
                drevo@ufaritual.com
              </div>
              <div class="header__phone">
                <a href="tel:+73472242899">+7 (347) 224-28-99</a>
              </div>
              <div class="header__schedule">
                Мы работаем с 9:00 до 18:00
              </div>
            </div>
            <div class="header__contacts-second">
              <div class="header__text">
                г. Уфа, <br>
                Верхнеторговая площадь, 4<br>
                Офис 315
              </div>
              <button class="header__button">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import '../assets/css/reset.css'
// import '../assets/css/animate.css'
// import '../assets/css/header_styles.css'
// import { insertBitrix } from '../assets/js/bitrix-window.js'
export default {
  // data () {
  //   return {
  //     activeList: 0,
  //     activeBurgerList: 0,
  //     menuIsHide: true,
  //     burgerHide: true,
  //     burgerMenuIsHide: true
  //   }
  // },
  // methods: {
  //   listShow () {
  //     this.menuIsHide = false
  //   },
  //   listHide () {
  //     this.activeList = 0
  //     this.menuIsHide = true
  //   },
  //   burgerListShow () {
  //     this.burgerMenuIsHide = !this.burgerMenuIsHide
  //   },
  //   burgerListHide () {
  //     this.activeBurgerList = 0
  //     this.burgerMenuIsHide = true
  //   },
  //   burgerMenuShow () {
  //     this.burgerHide = false
  //   },
  //   burgerMenuHide () {
  //     this.burgerHide = true
  //   }
  // },
  // mounted () { // Вставка popup от Bitrix на кнопку
  //   insertBitrix('.header__contacts-second', '.header__button')
  // }
}
</script>
