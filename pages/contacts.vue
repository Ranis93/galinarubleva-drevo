<template>
  <div>
    <TheBredcrumbs />
    <section class="contacts">
      <div class="container">
        <div class="contacts__inner">
          <div class="contacts__cards">
            <div class="contacts__card left-side">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A83beb0ea878824298624fd4a3311b572104084f50d31457890d2ec47a99144d8&amp;source=constructor" width="478" height="523" frameborder="0" />
            </div>
            <div class="contacts__card right-side">
              <h1 class="contacts__title">
                Контакты
              </h1>
              <div class="contacts__text">
                Общая информация
              </div>
              <div class="contacts__address">
                ул. Достоевского, 100, 1 этаж <br>
                Вход сто сороны ул. Крупская
              </div>
              <div class="contacts__phone">
                Тел.: +7 (347) 224-28-99
              </div>
              <div class="contacts__mail">
                E-mail: drevo@ufaritual.com
              </div>
              <div class="contacts__text edu">
                Управляющая компания EduPartner
              </div>
              <a href="https://edu-partner.ru/" class="contacts__link">
                <button class="contacts__btn">
                  <img src="../assets/img/contacts_btn.png" alt="contacts_btn">
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheBredcrumbs from '~/components/TheBredcrumbs'
export default {
  name: 'Contacts',
  components: { TheBredcrumbs },
  head () {
    return {
      title: 'Контакты центра генеалогии ГалинаРублеваДрево',
      meta: [
        {
          hid: 'Контакты',
          name: 'description',
          content: '⭐ Центр семейной родословной "ГалинаРублеваДрево" ⭐ - Предлагает составление родословной, генеалогических деревьев, архивный поиск. ⭐Бесплатная консультация. Наши контакты - Звоните!☎ 8(347)244-28-99 '
        }
      ]
    }
  },
  mounted () {
    // this.$store.getters.scrollPageToTop
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Контакты'],
      paths: ['/contacts']
    })
  }
}
</script>

<style scoped>
.contacts {
  margin: 5px 0 80px 0;
}
.contacts__cards {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 120px;
}
.contacts__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  margin-bottom: 15px;
}
.contacts__text {
  font-family: "Noto", serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
  margin-bottom: 10px;
}
.contacts__text.edu {
  margin-top: 30px;
}
.contacts__address,
.contacts__phone,
.contacts__mail {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.72);
  margin-bottom: 5px;
}
.contacts__btn {
  width: 100%;
  height: auto;
  border: 0;
  padding: 0;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .contacts__cards {
    column-gap: 10px;
    justify-content: space-between;
  }
  .contacts__card.left-side,
  .contacts__card.left-side > iframe {
    width: 469px;
    height: 513px;
  }
  .contacts__card.right-side {
    max-width: 388px;
  }
}
@media (max-width: 768px) {
  .contacts__card.left-side,
  .contacts__card.left-side > iframe {
    width: 354px;
    height: 387px;
  }
  .contacts__card.right-side {
    max-width: 288px;
  }
  .contacts__title {
    font-size: 24px;
    line-height: 33px;
  }
  .contacts__text {
    font-size: 20px;
    line-height: 27px;
  }
}
@media (max-width: 480px) {
  .contacts {
    margin: 5px 0 58px 0;
  }
  .contacts__cards {
    flex-wrap: wrap;
    column-gap: normal;
    row-gap: 30px;
  }
  .contacts__card.left-side,
  .contacts__card.left-side > iframe {
    width: 100%;
    height: 481px;
  }
  .contacts__card.right-side {
    max-width: 100%;
  }
}
@media (max-width: 360px) {
  .contacts {
    margin: 5px 0 87px 0;
  }
  .contacts__card.left-side,
  .contacts__card.left-side > iframe {
    height: 350px;
  }
}
</style>
