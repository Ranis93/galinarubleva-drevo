<template>
  <section class="progress">
    <div class="container">
      <div class="progress__inner">
        <div class="progress__cards">
          <div class="progress__card card-1">
            <div class="progress__left-side">
              <h1 class="progress__title">Достижения</h1>
              <div class="progress__desc">
                6 ноября 2020 года утро нашего «Центра семейной родословной
                началось» с программы «Салям».
              </div>
              <div class="progress__desc">
                Вместе с ведущими обсудили тему, которая интересует сейчас
                большинство — это составление родословной!
              </div>
              <div class="progress__desc">
                С чего начать, к кому обращаться, какие данные о близких нужны
                для составления древа и о том, как важно иметь связь с предками!
              </div>
            </div>
            <div class="progress__right-side">
              <div class="progress__video" data-url="mokY5o-lgcM">
                <div class="play__circle">
                  <img src="../../assets/img/youtube.svg" alt="youtube" />
                </div>
              </div>
            </div>
          </div>
          <div class="progress__card card-2">
            <div class="progress__right-side">
              <div class="progress__image img-1">
                <img
                  src="../../assets/img/progress/progress_pic_1.png"
                  alt="progress_pic_1"
                />
              </div>
            </div>
            <div class="progress__left-side">
              <div class="progress__desc">
                Удивительную историю одной семьи, которая обратилась к нам в
                центр, мы опубликовали в одном из выпусков журнала «СВАДЬБА на
                ура!».
              </div>
              <div class="progress__desc">
                Когда мы только начали исследование, то отталкивались от того,
                что один из предков Яны был священником, которого репрессировали
                в 30-х гг. Мы знали его имя, примерные годы жизни и одно из
                названий поселения, в котором он проживал — на это все.
              </div>
              <div class="progress__desc">
                В процессе поиска нам удалось пыроследить не только его
                жизненный путь, но и понять причины, из-за которых сложилось все
                именно так!
              </div>
              <div class="progress__desc">
                И, особенно удивительно то, что были обнаружены иконы, на
                которых изображён предок Яны!
              </div>
              <div class="progress__desc">
                Эмоции, что были у наших клиентов при выдаче их работы,
                невозможно передать словами!
              </div>
            </div>
          </div>
          <div class="progress__card card-3">
            <div class="progress__left-side">
              <div class="progress__desc">
                Весной 2022 года Центр семейной родословной вышел в полуфинал
                национальной премии «Бизнес-успех»!
              </div>
              <div class="progress__desc">
                А также у нас состоялась первая выставка в Москве!
              </div>
              <div class="progress__desc">
                Очень рады, что нам представилась такая возможность — и новыми
                идеями зарядились, и поближе пообщались с людьми, которые тоже
                хотят найти свои корни.
              </div>
            </div>
            <div class="progress__right-side">
              <div class="progress__image img-2">
                <img
                  src="../../assets/img/progress/progress_pic_2.png"
                  alt="progress_pic_1"
                />
              </div>
            </div>
          </div>
          <div class="progress__card card-4">
            <div class="progress__right-side">
              <div class="progress__image img-3">
                <img
                  src="../../assets/img/progress/progress_pic_3.png"
                  alt="progress_pic_1"
                />
              </div>
            </div>
            <div class="progress__left-side">
              <div class="progress__desc">
                Это нельзя назвать достижением. Мы просто хотим сказать, что с
                радостью посещяем мероприятия, на которые нас приглашают.
              </div>
              <div class="progress__desc">
                Нам было приятно помогать в проводении мероприятия, посвященного
                памяти жителей блокадного Ленинграда.
              </div>
              <div class="progress__desc">
                На нем ветераны рассказывали, как пережили трудное и чудовищное
                время. Дай Бог им только крепкого здоровья!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import VideoPlayer from '../../assets/js/playVideo'
export default {
  mounted () {
    //   try {
    //     new VideoPlayer('.progress__video', '.overlay').init();
    //     } catch (error) {console.log("error")}
  }
}
</script>

<style scoped>
.progress {
  margin-top: 15px;
}
.progress__card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.progress__left-side {
  max-width: 680px;
}
.progress__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  margin-bottom: 20px;
}
.progress__desc {
  max-width: 680px;
  padding-bottom: 0.5em;

  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.72);
}
.progress__video {
  width: 480px;
  height: 242px;
  max-width: 480px;
  max-height: 242px;
  margin-left: 20px;
  border-radius: 30px;

  background-image: url("../../assets/img/progress/progress_video_1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
.play__circle {
  max-width: 100px;
  max-height: 100px;

  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, 70%);
}
.card-1,
.card-4 {
  padding-bottom: 100px;
}
.card-2 {
  padding-bottom: 32px;
}
.card-3 {
  padding-bottom: 65px;
}
.card-3 > .progress__left-side {
  max-width: 580px;
}
.card-4 > .progress__left-side {
  max-width: 480px;
}
.card-3 > .progress__left-side:first-child {
  margin-top: 237px;
}
.card-4 > .progress__left-side:last-child {
  margin-top: 55px;
}
.progress__image.img-1 {
  max-width: 380px;
  max-height: 368px;
  margin-right: 62px;
}
.progress__image.img-2 {
  max-width: 580px;
  max-height: 521px;
  margin-left: 20px;
}
.progress__image.img-3 {
  max-width: 600px;
  max-height: 415px;
  margin-right: 20px;
}

@media (max-width: 1024px) {
  .progress {
    margin-top: 5px;
  }
  .progress__title {
    font-size: 24px;
    line-height: 33px;
  }
  .progress__desc {
    font-size: 18px;
  }
  .progress__video {
    margin-top: 60px;
    max-width: 470px;
    max-height: 237px;
  }
  .play__circle {
    max-width: 98px;
    max-height: 97px;
  }
  .progress__image.img-1 {
    max-width: 307px;
    max-height: 297px;
  }
  .progress__image.img-2 {
    max-width: 471px;
    max-height: 425px;
  }
  .progress__image.img-3 {
    max-width: 470px;
    max-height: 325px;
  }
  .card-1 > .progress__left-side,
  .card-3 > .progress__left-side,
  .card-4 > .progress__left-side {
    max-width: 470px;
  }
  .card-2 > .progress__left-side {
    max-width: 592px;
  }
  .card-2 {
    padding-bottom: 48px;
  }
  .card-3 {
    padding-bottom: 100px;
  }
  .card-3 > .progress__left-side:first-child {
    margin-top: 173px;
  }
  .card-4 > .progress__left-side:last-child {
    margin-top: 49px;
  }
}
@media (max-width: 768px) {
  .progress__video {
    max-width: 354px;
    max-height: 179px;
  }
  .play__circle {
    max-width: 74px;
    max-height: 73px;
  }
  .progress__image.img-1 {
    max-width: 349px;
    max-height: 338px;
  }
  .progress__image.img-2 {
    max-width: 354px;
    max-height: 318px;
  }
  .progress__image.img-3 {
    max-width: 354px;
    max-height: 245px;
  }
  .card-1 > .progress__left-side,
  .card-2 > .progress__left-side,
  .card-3 > .progress__left-side,
  .card-4 > .progress__left-side {
    max-width: 354px;
  }
  .card-1,
  .card-2,
  .card-3,
  .card-4 {
    padding-bottom: 70px;
  }
  .card-3 > .progress__left-side:first-child {
    margin-top: 34px;
  }
  .card-4 > .progress__left-side:last-child {
    margin-top: 0;
  }
}
@media (max-width: 480px) {
  .progress__card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .progress__video {
    width: 100%;
    max-width: 100%;
    min-height: 222px;
    margin: 10px 0 0 0;

    background-size: cover;
  }
  .progress__left-side,
  .progress__right-side {
    flex-basis: 100%;
    margin: 0;
  }
  .card-1 > .progress__left-side,
  .card-2 > .progress__left-side,
  .card-3 > .progress__left-side,
  .card-4 > .progress__left-side {
    max-width: 100%;
  }
  .play__circle {
    max-width: 92px;
    max-height: 91px;
  }
  .progress__image.img-1,
  .progress__image.img-2,
  .progress__image.img-3 {
    margin: 0;
    max-width: 100%;
    max-height: fit-content;
  }
  .progress__image.img-2 {
    padding-top: 10px;
  }

  .card-1 > .progress__left-side,
  .card-2 > .progress__left-side,
  .card-3 > .progress__left-side,
  .card-4 > .progress__left-side {
    width: 100%;
  }
  .card-3 {
    padding-bottom: 100px;
  }
  .card-3 > .progress__left-side:first-child {
    margin-top: 0;
  }
  .card-4 > .progress__left-side:last-child,
  .card-2 > .progress__left-side:last-child {
    margin-top: 25px;
  }
}
@media (max-width: 360px) {
  .progress__desc {
    font-size: 16px;
  }
  .progress__video {
    min-height: 161px;
  }
  .play__circle {
    max-width: 66px;
    max-height: 66px;
  }
}
</style>
