<template>
  <header class="header" id="header">
    <nav class="header__nav" @mouseleave="listHide">
      <div class="container">
        <ul class="header__list">
          <li
            class="header__item"
            :class="{ active: activeList === 1 }"
            @mouseover="[listShow(), (activeList = 1)]"
          >
            <nuxt-link exact to="/our_services/" class="header__link">
              <img src="../assets/img/burger_min.svg" alt="burger_min">
              Услуги
            </nuxt-link>
            <ul
              class="header__nav-list"
              :class="{ show: menuIsHide == false && activeList == 1 }"
              @mouseleave="listHide"
            >
              <li>
                <nuxt-link exact to="/our_services/family_trees">
                  Родословные древа
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact to="/our_services/books">
                  Родословные книги
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact to="/our_services/genealogical_research">
                  Генеалогическое исследование
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact to="/our_services/military_search">
                  Военный поиск
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact to="/our_services/packages">Пакеты услуг</nuxt-link>
              </li>
            </ul>
          </li>
          <li
            class="header__item"
            @mouseover="[listShow(), (activeList = 2)]"
            :class="{ active: activeList === 2 }"
          >
            <nuxt-link exact
              to="/about_company/company_history"
              class="header__link"
              >О компании</nuxt-link
            >
            <ul
              class="header__nav-list"
              @mouseleave="listHide"
              :class="{ show: menuIsHide == false && activeList == 2 }"
            >
              <li>
                <nuxt-link
                  exact
                    to="/about_company/company_history"
                  >История компании</nuxt-link>
              </li>
              <li>
                <nuxt-link exact
                to="/about_company/progress"
                  >Наши достижения</nuxt-link
                >
              </li>
              <li>
                <nuxt-link exact
                to="/about_company/photo_gallery"
                  >Фотогалерея</nuxt-link
                >
              </li>
              <li>
                <nuxt-link exact
                to="/about_company/command">Команда</nuxt-link>
              </li>
              <li>
                <nuxt-link exact
                to="/about_company/vacancies"
                  >Вакансии</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="header__item" @mouseover="listHide">
            <nuxt-link exact
            to="/articles"
            class="header__link"
              >Статьи</nuxt-link
            >
          </li>
          <li class="header__item" @mouseover="listHide">
            <nuxt-link
            exact
            to="/contacts"
            class="header__link"
              >Контакты</nuxt-link>
          </li>
          <li class="header__item" @mouseover="listHide">
            <nuxt-link exact to="/reviews" class="header__link">Отзывы</nuxt-link>
          </li>
          <li class="header__item" @mouseover="listHide">
            <nuxt-link exact
            to="/promotions"
            class="header__link"
              >Акции</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div
      class="header__burger-menu"
      :class="{ header__nav_active: burgerHide === false }"
    >
      <ul class="header__burger-list">
        <li class="header__burger-item">
          <div
            class="header__burger-link list"
            @click="[burgerListShow(), (activeBurgerList = 1)]"
          >
            Услуги
          </div>
          <ul
            class="burger-link__ul animated fadeInRight"
            :class="{
              link_show: burgerMenuIsHide == false && activeBurgerList == 1,
            }"
          >
            <li class="burger-link__li"
              @click="burgerMenuHide">
              <nuxt-link exact
              to="/our_services/family_trees"
                >Родословные древа</nuxt-link
              >
            </li>
            <li class="burger-link__li"
              @click="burgerMenuHide">
              <nuxt-link exact
              to="/our_services/books"
                >Родословные книги</nuxt-link
              >
            </li>
            <li class="burger-link__li"
                @click="burgerMenuHide">
              <nuxt-link exact
                to="/our_services/genealogical_research"
                >Генеалогическое исследование</nuxt-link
              >
            </li>
            <li class="burger-link__li"
                @click="burgerMenuHide">
              <nuxt-link exact
                to="/our_services/military_search"
                >Военный поиск</nuxt-link
              >
            </li>
            <li class="burger-link__li"
              @click="burgerMenuHide">
              <nuxt-link exact
              to="/our_services/packages"
                >Пакеты услуг</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="header__burger-item">
          <div
            class="header__burger-link list"
            @click="[burgerListShow(), (activeBurgerList = 2)]"
          >
            О компании
          </div>
          <ul
            class="burger-link__ul animated fadeInRight"
            :class="{
              link_show: burgerMenuIsHide == false && activeBurgerList == 2,
            }"
          >
            <li class="burger-link__li"
                @click="burgerMenuHide">
              <nuxt-link exact
                to="/about_company/company_history"
                >История компании</nuxt-link
              >
            </li>
            <li class="burger-link__li"
              @click="burgerMenuHide">
              <nuxt-link exact
              to="/about_company/progress"
                >Наши достижения</nuxt-link
              >
            </li>
            <li class="burger-link__li"
              @click="burgerMenuHide">
              <nuxt-link exact
                to="/about_company/photo_gallery"
                >Фотогалерея</nuxt-link
              >
            </li>
            <li class="burger-link__li"
              @click="burgerMenuHide">
              <nuxt-link exact
              to="/about_company/command"
                >Команда</nuxt-link
              >
            </li>
            <li class="burger-link__li"
              @click="burgerMenuHide"
            >
              <nuxt-link exact
              to="/about_company/vacancies"
                >Вакансии</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="header__burger-item"
        @click="burgerMenuHide">
          <nuxt-link exact
            to="/articles"
            class="header__burger-link"
            >Статьи</nuxt-link
          >
        </li>
        <li class="header__burger-item" @click="burgerMenuHide">
          <nuxt-link exact
            to="/contacts"
            class="header__burger-link"
            >Контакты</nuxt-link
          >
        </li>
        <li class="header__burger-item" @click="burgerMenuHide">
          <nuxt-link exact
            to="/reviews"
            class="header__burger-link"
            >Отзывы</nuxt-link
          >
        </li>
        <li class="header__burger-item" @click="burgerMenuHide">
          <nuxt-link exact
            to="/promotions"
            class="header__burger-link"
            >Акции</nuxt-link
          >
        </li>
      </ul>
      <div class="header__nav-close" @click="burgerMenuHide"></div>
      <div class="header__down-block">
        <div class="header__nav-img">
          <img src="../assets/img/footer_logo.png" alt="footer_logo" />
        </div>
        <div class="header__nav-txt">
          г. Уфа,<br />ул. Достоевского, 100<br />
        </div>
      </div>
    </div>    
    <button
      class="header__burger burger"
      @click="burgerMenuShow"
    />
  </header>
</template>

<script>
import '../assets/css/reset.css'
import '../assets/css/animate.css'
import '../assets/css/header_styles.css'
import { insertBitrix } from '../assets/js/bitrix-window.js'
export default {
  data () {
    return {
      activeList: 0,
      activeBurgerList: 0,
      menuIsHide: true,
      burgerHide: true,
      burgerMenuIsHide: true
    }
  },
  methods: {
    listShow () {
      this.menuIsHide = false
    },
    listHide () {
      this.activeList = 0
      this.menuIsHide = true
    },
    burgerListShow () {
      this.burgerMenuIsHide = !this.burgerMenuIsHide
    },
    burgerListHide () {
      this.activeBurgerList = 0
      this.burgerMenuIsHide = true
    },
    burgerMenuShow () {
      this.burgerHide = false
    },
    burgerMenuHide () {
      this.burgerHide = true
      this.activeBurgerList = 0
      this.burgerMenuIsHide = true
    }
  },
  mounted () { // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix('.header__contacts-second', '.header__button')
    } catch (error) {}
  }
}
</script>
