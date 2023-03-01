<template>
  <section class="genresearch">
    <div class="genresearch__head">
      <div class="container">
        <div class="genresearch__inner">
          <h1 class="genresearch__title">Генеалогическое исследование</h1>
          <div class="genresearch__desc">
            Генеалогическое исследование — это процесс поиска архивных
            документов, содержащих информацию о ваших предках, направленный на
            определение самого «древнего» из них (которого возможно установить
            по архивным документам), а также на восстановление этапов
            существования рода.
          </div>
        </div>
      </div>
    </div>
    <div class="genresearch-why">
      <div class="container">
        <div class="genresearch-why__inner">
          <div class="genresearch-why__title">
            Почему стоит узнать свою родословную?
          </div>
          <div class="genresearch-why__items">
            <div class="genresearch-why__item">
              <div class="genresearch-why__num">1</div>
              <div class="genresearch-why__text">
                <span>Знание своих корней помогает разобраться в себе. </span
                >Узнавая предков, вы открываете для себя множество информации об
                их характере, увлечениях, работе. Возможно, вы даже не
                подозреваете, что обладаете талантом писать поэмы, как ваша
                бабушка
              </div>
            </div>
            <div class="genresearch-why__item">
              <div class="genresearch-why__num">2</div>
              <div class="genresearch-why__text">
                <span>Сохранение истории семьи. </span>Именно вы можете стать в
                семье тем человеком, который сохранит всю информацию о своём
                роде. Восстановить и систематизировать информацию о предках
                большой труд!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="genresearch-how">
      <div class="container">
        <div class="genresearch-how__inner">
          <div class="genresearch-how__title">Как составить родословную?</div>
          <div class="genresearch-how__text">
            <strong>Шаг 1. </strong>Организация хранения информации<br /><br />У
            нас для этого есть своя программа, но если вы начинаете
            самостоятельно, то вот неплохие сайты: familyspace.ru, pomnirod.ri
            <br /><br />
            <strong>Шаг 2. </strong>Поиск и разбор старых семейных фотографий<br /><br />Нужно
            обращать внимание на даты и подписи с обратной стороны фотокарточек.
            Откладывайте фото родственников в военной форме. По обмундированию
            можно многое узнать — и год, и род войск, и чин военного.
            <br /><br />Здесь, чаще всего, становятся видны пробелы в семейной
            истории. Например, появляется незнакомый человек на фото или нет ни
            одной фотографии прадеда.<br /><br />
            <strong>Шаг 3. </strong>Общение с родственниками<br /><br />Хорошо
            помогает восстановить часть тех самых пробелов! <br /><br />
            <strong>Шаг 4. </strong>Поиск информации на интернет-ресурсах<br /><br />
            <strong>Шаг 5. </strong>Работа с архивными документами<br /><br />Это
            самый важный этап, на базе которого и строятся все наши родословные.
            Мы делаем запрос и получаем архивную справку с нужными данными.
            <br /><br />Здесь важно понимать, что для поиска обязательно
            понадобится ФИО, год и место рождения человека.<br /><br />
          </div>
          <div class="genresearch-how__appeal">
            Запишитесь на <span>бесплатную консультацию </span>к нашему эксперту
            по поиску родословной!
          </div>
          <button class="genresearch-how__btn">Записаться</button>
        </div>
      </div>
    </div>

    <app-services></app-services>

    <div class="genresearch-request">
      <div class="container">
        <div class="genresearch-request__inner">
          <div class="genresearch-request__left-side">
            <div class="genresearch-request__title">
              Что Вы получите в результате исследования?
            </div>
            <div class="genresearch-request__text">
              По окончании работы Вы получите родословное дерво и пояснительную
              записку, где историки подробно расписывают ход исследования.
              Начиная от исходных данных, которые вы дали для начала
              исследования, заканчивая списком использованных документов.<br /><br />
              Так же Вы получите такие важные документы, как метрические записи,
              документы об участии в войнах, ревизские сказки, похозяйственные
              книги.
            </div>
            <button class="genresearch-request__btn">Хочу заказать</button>
          </div>
          <div class="genresearch-request__right-side">
            <div class="genresearch-request__video" data-url="lvKUcILOW_M">
              <div class="genresearch-request__play-circle">
                <img src="../../assets/img/youtube.svg" alt="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-useful></app-useful>

    <div class="genresearch-finished-cover">
      <div class="container">
        <div class="genresearch-finished-cover__inner">
          <div class="genresearch-finished-cover__left-side">
            <div class="genresearch-finished-cover__title">
              Уже есть готовое исследование? Предлагаем выбрать обложку для
              книги!
            </div>
            <div class="genresearch-finished-cover__text">
              Родословная книга — отличный вариант необычного и ценного подарка,
              который объединит семью и даст толчок для дальнейшего изучения
              истории своего Рода.
            </div>
            <nuxt-link to="/our_services/books">
              <button class="genresearch-finished-cover__btn">Выбрать</button>
            </nuxt-link>
          </div>
          <div class="genresearch-finished-cover__right-side">
            <div class="genresearch-finished-cover__image"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoPlayer from '../../assets/js/playVideo'
import AppServices from '../AppServices.vue'
import AppUseful from '../AppUseful.vue'
import { insertBitrix } from '../../assets/js/bitrix-window.js'
export default {
  mounted () {
    try {
      insertBitrix('.genresearch-how__inner', '.genresearch-how__btn')
      insertBitrix(
        '.genresearch-request__left-side',
        '.genresearch-request__btn'
      )
    } catch (error) {
      console.log(error)
    }
    try {
      new VideoPlayer('.genresearch-request__video', '.overlay').init()
    } catch (error) {
      console.log('error')
    }
  },
  components: { AppServices, AppUseful }
}
</script>

<style scoped>
.genresearch {
  margin-top: 15px;
}
.genresearch__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.genresearch__desc {
  margin: 25px 0 50px 0;
  max-width: 680px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
}
.genresearch-why {
  background-color: rgba(209, 199, 180, 0.84);
}
.genresearch-why__inner {
  padding: 50px 0;
}
.genresearch-why__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
}
.genresearch-why__items {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
}
.genresearch-why__item {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
.genresearch-why__left-block {
  width: 330px;
  white-space: nowrap;
  flex-shrink: 0;
}
.genresearch-why__num {
  display: inline-block;
  flex-shrink: 0;
  background: #673800;
  width: 37px;
  height: 38px;
  text-align: center;
  border-radius: 50px;
  margin-right: 20px;
  vertical-align: top;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
}
.genresearch-why__text {
  display: inline-block;
  max-width: 823px;
  font-family: "Noto", serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.72);
}
.genresearch-why__text > span {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #673800;
}
.genresearch-how {
  margin: 50px 0;
}
.genresearch-how__inner {
  max-width: 880px;
}
.genresearch-how__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
}
.genresearch-how__text {
  margin-top: 25px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
}
.genresearch-how__text > span {
  font-weight: 700;
  color: rgba(125, 78, 36, 1);
}
.genresearch-how__appeal {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
  margin: 50px 0 25px 0;
  max-width: 410px;
}
.genresearch-how__appeal > span {
  font-weight: 700;
  color: rgba(0, 118, 50, 1);
}
.genresearch-how__btn {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #007632;
  padding: 10px 35px;

  background: #ffffff;
  border: 1px solid #007632;
  box-shadow: 0px 4px 10px rgba(195, 218, 204, 0.39);
  border-radius: 50px;
}
.genresearch-how__btn:hover {
  color: #ffffff;
  background-color: #007632;
  cursor: pointer;
}
.genresearch-request,
.genresearch-finished-cover {
  padding: 50px 0;
}
.genresearch-request__inner,
.genresearch-finished-cover__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.genresearch-request__left-side,
.genresearch-finished-cover__left-side {
  max-width: 680px;
}
.genresearch-request__right-side,
.genresearch-finished-cover__right-side {
  max-width: 380px;
  padding-top: 17px;
}
.genresearch-request__title,
.genresearch-finished-cover__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
  margin-bottom: 25px;
}
.genresearch-request__text,
.genresearch-finished-cover__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.72);
  margin-bottom: 25px;
}
.genresearch-request__text > span,
.genresearch-finished-cover__text > span {
  color: rgba(0, 118, 50, 1);
  font-weight: 700;
}
.genresearch-request__btn,
.genresearch-finished-cover__btn {
  font-family: "Noto", serif;
  font-weight: 700;
  filter: drop-shadow(0px 4px 10px rgba(195, 218, 204, 0.39));
  border-radius: 50px;
}
.genresearch-request__btn {
  color: #7d4e24;
  border: 1px solid #7d4e24;
  font-size: 18px;
  line-height: 25px;
  padding: 5px 20px;
}
.genresearch-finished-cover__btn {
  color: #007632;
  border: 1px solid #007632;
  font-size: 20px;
  line-height: 27px;
  padding: 10px 35px;
}
.genresearch-request__btn:hover,
.genresearch-finished-cover__btn:hover {
  color: #ffffff;
  cursor: pointer;
}
.genresearch-request__btn:hover {
  background-color: #7d4e24;
}
.genresearch-finished-cover__btn:hover {
  background-color: #007632;
}
.genresearch-request__video,
.genresearch-finished-cover__image {
  width: 380px;
  height: 250px;
  background-repeat: no-repeat;
}
.genresearch-request__video {
  background-image: url("../../assets/img/services_img/services_video1.png");
  cursor: pointer;
}
.genresearch-finished-cover__image {
  background-image: url("../../assets/img/services_img/services-finished_cover.png");
}
.genresearch-request__play-circle {
  max-width: 100px;
  max-height: 100px;
  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, 70%);
}
@media (max-width: 1024px) {
  .genresearch {
    margin-top: 30px;
  }
  .genresearch-request__left-side,
  .genresearch-finished-cover__left-side {
    max-width: 470px;
  }
}
@media (max-width: 768px) {
  .genresearch-why__text {
    max-width: 660px;
  }

  .genresearch-request__inner {
    position: relative;
    padding-top: 58px;
  }
  .genresearch-request__title {
    position: absolute;
    top: 0;
    left: 0;
  }
  .genresearch-finished-cover__title {
    max-width: 415px;
  }
  .genresearch-request__text,
  .genresearch-finished-cover__text {
    max-width: 354px;
  }
  .genresearch-request__right-side,
  .genresearch-finished-cover__right-side {
    max-width: 353px;
    padding: 0;
  }
  .genresearch-finished-cover__right-side {
    padding-top: 59px;
  }
  .genresearch-request__video {
    max-width: 353px;
    max-height: 232px;
    background-size: contain;
  }
  .genresearch-finished-cover__image {
    max-width: 304px;
    max-height: 219px;
    background-size: contain;
  }
  .genresearch-request__play-circle {
    width: 92px;
    height: 92px;
  }
}
@media (max-width: 480px) {
  .genresearch {
    margin-top: 5px;
  }
  .genresearch__title {
    font-size: 24px;
    line-height: 33px;
  }
  .genresearch__desc {
    font-size: 18px;
    line-height: 22px;
  }
  .genresearch-why__text {
    max-width: 80%;
    font-size: 16px;
    line-height: 19px;
  }
  .genresearch-how__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  .genresearch-how__text > span {
    font-weight: 700;
  }
  .genresearch-how__appeal {
    font-size: 18px;
    line-height: 22px;
  }
  .genresearch-request {
    padding: 60px 0;
  }
  .genresearch-finished-cover {
    padding: 50px 0;
  }
  .genresearch-request__inner {
    flex-wrap: wrap;
    padding: 0;
    row-gap: 35px;
  }
  .genresearch-request__left-side,
  .genresearch-finished-cover__left-side {
    max-width: none;
    width: 100%;
  }
  .genresearch-finished-cover__inner {
    flex-wrap: wrap;
    padding: 0;
    position: relative;
  }
  .genresearch-request__title,
  .genresearch-finished-cover__title {
    position: static;
  }
  .genresearch-request__text,
  .genresearch-finished-cover__text {
    font-size: 18px;
    line-height: 22px;
  }
  .genresearch-finished-cover__text {
    margin-bottom: 250px;
  }
  .genresearch-request__btn {
    margin-bottom: 0;
  }
  .genresearch-finished-cover__btn {
    margin: 0;
  }
  .genresearch-request__right-side,
  .genresearch-finished-cover__right-side {
    width: 100%;
    height: 232px;
    max-height: 289px;
  }
  .genresearch-finished-cover__right-side {
    padding: 0;
    position: absolute;
    bottom: 75px;
    left: 0;
    padding: 0;
  }
  .genresearch-finished-cover__right-side,
  .genresearch-finished-cover__image {
    max-width: 325px;
    max-height: 210px;
  }
  .genresearch-request__video {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 360px) {
  .genresearch__desc {
    font-size: 16px;
    line-height: 19px;
  }
  .genresearch-how__text {
    font-size: 16px;
    line-height: 19px;
  }
  .genresearch-how__appeal {
    font-size: 16px;
    line-height: 19px;
  }
  .genresearch-how__btn {
    font-size: 16px;
    line-height: 22px;
    padding: 10px 30px;
  }
  .genresearch-request,
  .genresearch-finished-cover {
    padding: 48px 0 50px 0;
  }
  .genresearch-request__inner {
    row-gap: 30px;
  }
  .genresearch-request__text,
  .genresearch-finished-cover__text {
    font-size: 16px;
    line-height: 19px;
  }
  .genresearch-request__btn,
  .genresearch-finished-cover__btn {
    font-size: 16px;
    line-height: 22px;
  }
  .genresearch-request__right-side,
  .genresearch-finished-cover__right-side {
    max-height: 212px;
  }
  .genresearch-request__play-circle {
    width: 85px;
    height: 85px;
  }
}
</style>
