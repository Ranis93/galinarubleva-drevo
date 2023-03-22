<template>
  <carousel
    class="reviews__carousel"
    :autoplay="true"
    :autoplayTimeout="5000"
    :autoplaySpeed="5000"
    :slideTransition="'linear'"
    :autoplayHoverPause="true"
    :loop="true"
    :nav="false"
    :navText="[,]"
    :dots="false"
    :items="1"
    :center="false"
    :margin="8"
    :autoWidth="true"
    :lazyLoad="true"
    :lazyLoadEager="3"
    :responsive="{768:{nav:true},1024:{items:3,stagePadding:0},1025:{margin:20}}"
  >
    <div class="reviews__slide">
      <div class="reviews__comment">
        Мужу оооочень понравилось! Много ценной информации
        накопали, о которой мы не знали) Огромный повод гордиться
        своими предками, благодаря таким данным. Он до сих пор
        вспоминает и всем делится о том, какой у него сильный род.
      </div>
      <div class="reviews__avatar">
        <div class="reviews__photo">
          <img
            src="../../../assets/img/reviews/comment_photo-1.png"
            alt="reviews__img-1"
          />
        </div>
        <div class="reviews__name">Марич З.</div>
      </div>
    </div>
    <div class="reviews__slide">
      <div class="reviews__comment">
        Благодаря работе центра теперь я знаю своих предков до
        середины XVIII века, получилось отследить целых семь
        поколений. Больше всего меня поразило, что наша семья
        оказывается, относится к башкирскому племени Кар-Танып, у
        которого даже был свой боевой клич, своё родовое древо
        (лиственница), родовая птица (коршун).
      </div>
      <div class="reviews__avatar">
        <div class="reviews__photo">
          <img
            src="../../../assets/img/reviews/comment_photo-2.png"
            alt="reviews__img-1"
          />
        </div>
        <div class="reviews__name">Яна Ц.</div>
      </div>
    </div>
    <div class="reviews__slide">
      <div class="reviews__comment">
        Обратились в центр семейной родословной для того, чтобы
        узнать больше о своих предках. Мы занимались поисками
        самостоятельно, но обратившись в центр, поняли что
        пропускаем много информации, документов. Составленную
        родословную подарили на юбилей дедушке — для него очень
        ценно получить такой подарок.
      </div>
      <div class="reviews__avatar">
        <div class="reviews__photo">
          <img
            src="../../../assets/img/reviews/comment_photo-3.png"
            alt="reviews__img-1"
          />
        </div>
        <div class="reviews__name">Эльмира Х.</div>
      </div>
    </div>
    <div class="reviews__slide">
      <div class="reviews__comment">
        Я обратилась в центр семейной родословной после работы с
        психологом для проработки своего рода. Благодаря найденным
        документам я узнала чем занимались мои предки и поняла
        откуда у меня тяга к написанию стихов — моя пробабушка
        писала рассказы для детей! В наше время очень важно иметь
        связь со своим родом.
      </div>
      <div class="reviews__avatar">
        <div class="reviews__photo">
          <img
            src="../../../assets/img/reviews/comment_photo-4.png"
            alt="reviews__img-1"
          />
        </div>
        <div class="reviews__name">Лилия Б.</div>
      </div>
    </div>
  </carousel>
</template>

<script>
export default {
}
</script>

<style>
.reviews__carousel{
  width: 880px;
  padding-top: 89px;
  overflow: hidden;
}
.reviews__carousel .reviews__slide {
  padding: 20px 21px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 5px rgba(228, 228, 228, 0.8);
  border-radius: 30px;
  box-sizing: border-box;
  height: 270px;
  width: 280px;
}
.reviews__comment{
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #2C1909;
}
.reviews__avatar{
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.reviews__photo{
  width: 40px;
  height: 40px;
}
.reviews__name{
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #007632;
}
.reviews__carousel .owl-nav{
  margin: 0;
  position: absolute;
  top: -62px;
  right: 100px;
}
.reviews__carousel .owl-prev, .reviews__carousel .owl-next{
  width: 80px;
  height: 42px;
  margin: 0!important;
  background-position: center;
  background-size: contain;
}
.reviews__carousel .owl-prev{
  background: url('../../../assets/img/reviews/reviews_arrow-left.svg')!important;
  padding: 0 10px 0 0!important;
}
.reviews__carousel .owl-next{
  background: url('../../../assets/img/reviews/reviews_arrow-right.svg')!important;
  padding: 0 0 0 10px!important;
}
@media (max-width: 1024px) {
  .reviews__carousel .owl-nav{
    right: 0;
  }
}
@media (max-width: 480px) {
  .reviews__carousel{
    padding: 0;
  }
}
</style>
