<template>
  <footer v-if="getFooterIsShow" class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__right">
          <nuxt-link exact
            to="/"
            class="footer__logo"
          >
            <img
              src="../assets/img/footer_logo.png"
              alt="footer_logo"
            >
          </nuxt-link>
          <div class="footer__column col-1">
            <nuxt-link exact
              to="/about_company/company_history"
              class="footer__title"
            >
              О компании
            </nuxt-link>
            <ul class="footer__links">
              <li>
                <nuxt-link exact
                  to="/about_company/company_history"
                  class="footer__link"
                >
                  История компании
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact
                  to="/about_company/progress"
                  class="footer__link"
                >
                  Достижения
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact
                  to="/about_company/photo_gallery"
                  class="footer__link"
                >
                  Фотогалерея
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact
                  to="/about_company/command"
                  class="footer__link"
                >
                  Команда
                </nuxt-link>
              </li>
              <li>
                <nuxt-link exact
                  to="/about_company/vacancies"
                  class="footer__link"
                >
                  Вакансии
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__column col-2">
          <nuxt-link exact
            to="/our_services"
            class="footer__title"
          >
            Услуги
          </nuxt-link>
          <ul class="footer__links">
            <li>
              <nuxt-link exact
                to="/our_services/family_trees"
                class="footer__link"
              >
                Родословные древа
              </nuxt-link>
            </li>
            <li>
              <nuxt-link exact
                to="/our_services/books"
                class="footer__link"
              >
                Родословные книги
              </nuxt-link>
            </li>
            <li>
              <nuxt-link exact
                to="/our_services/genealogical_research"
                class="footer__link"
              >
                Генеалогическое исследование
              </nuxt-link>
            </li>
            <li>
              <nuxt-link exact
                to="/our_services/military_search"
                class="footer__link"
              >
                Военный поиск
              </nuxt-link>
            </li>
            <li>
              <nuxt-link exact
                to="/our_services/packages"
                class="footer__link"
              >
                Пакеты услуг
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__column col-3">
          <nuxt-link exact to="/contacts" class="footer__title">
            Контакты
          </nuxt-link>
          <ul class="footer__links">
            <li>
              <div class="footer__link">
                Email: drevo@ufaritual.com
              </div>
            </li>
            <li>
              <div class="footer__link">
                <a href="tel:+73472242899">Тел: +7 (347) 224-28-99</a>
              </div>
            </li>
            <li>
              <div class="footer__link">
                ул. Достоевского, 100, 1 этаж<br>
                Вход со стороны ул. Крупская
              </div>
            </li>
            <li>
              <a
                href="https://t.me/galinarublevadrevo"
                class="footer__link"
              >
                <img src="../assets/img/tg.svg" alt="telegram">
              </a>
              <a
                href="https://vk.com/public210915689"
                class="footer__link"
              >
                <img src="../assets/img/vk.svg" alt="vk">
              </a>
              <a
                href="https://www.youtube.com/@user-sg7sl5xb6n"
                class="footer__link"
              >
                <img src="../assets/img/youtube2.svg" alt="youtube2">
              </a>
              <a
                style="display: none"
                href="#!"
                class="footer__link"
              >
                <img src="../assets/img/yadzen.svg" alt="yadzen">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
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
.footer {
  background-color: #472906;
}
.footer__inner {
  padding: 50px 0 68px 0;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  flex-shrink: 1;
}
.footer__right {
  display: flex;
  gap: 50px;
  width: 340px;
  flex-shrink: 0;
}
.footer__logo {
  max-width: 150px;
  height: fit-content;
}
.footer__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  text-decoration: none;
}
.footer__links {
  list-style-type: none;
  display: table;
  margin-top: 20px;
}
.footer__links > li {
  padding-bottom: 10px;
}
.footer__link, .footer__link>a {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(228, 228, 228, 0.8);
  text-decoration: none;
}
.footer__link > img {
  padding-top: 10px;
  padding-right: 19px;
  max-width: 29px;
  max-height: 23px;
  vertical-align: middle;
}
.col-1 > a {
  white-space: nowrap;
}
.col-2 {
  width: 280px;
}
.col-3 {
  width: 380px;
}
@media (max-width: 1024px) {
  .footer__right {
    width: 336px;
  }
  .col-2 {
    width: 190px;
  }
  .col-3 {
    width: 380px;
  }
}
@media (max-width: 768px) {
  .footer__inner {
    padding: 50px 0 40px 0;
  }
  .footer__right {
    width: 327px;
  }
  .col-2 {
    width: 190px;
  }
  .col-3 {
    width: 176px;
  }
}
@media (max-width: 655px) {
  .footer__inner {
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .footer__inner {
    padding: 20px 0 54px 0;
  }
  .footer__inner {
    position: relative;
    padding-top: 121px;
    column-gap: normal;
  }
  .footer__logo {
    position: absolute;
    top: 20px;
    left: 0;
    width: 89px;
    height: 84px;
  }
  .footer__title {
    font-size: 18px;
    line-height: 25px;
  }
  .footer__link, .footer__link>a {
    font-size: 14px;
    line-height: 17px;
  }
  .footer__right {
    width: 198px;
  }
  .col-2 {
    width: 190px;
  }
  .col-3 {
    width: 176px;
  }
}
@media (max-width: 427px) {
  .footer__right {
    flex-shrink: 1;
    display: block;
    width: auto;
  }
  .col-2 {
    width: 167px;
  }
}
@media (max-width: 360px) {
  .footer__inner {
    padding-bottom: 51px;
  }
  .col-1 {
    width: 122px;
  }
  .col-2 {
    width: 150px;
  }
  .col-3 {
    width: 176px;
  }
}
</style>
