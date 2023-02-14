<template>
  <section class="main">
        <div class="container">
            <div class="main__inner">
                <h1 class="main__title">Услуги по семейной родословной</h1>
                <div class="main__cards">
                    <nuxt-link to="/our_services/family_trees" class="main__card">
                        <div class="card__img">
                            <img loading="lazy" decoding="async" src="../../assets/img/services_img/main_card_1.png" alt="main_card_1">
                        </div>
                        <div class="card__title">Родословные древа</div>
                        <div class="card__desc">Родословным древом называют схему, которая описывается родственные связи семьи в нескольких поколениях. Важной особенностью становится возможность расположения в его корне как родоначальника, так и последнего потомка рода</div>
                    </nuxt-link>
                    <nuxt-link to="/our_services/books" class="main__card">
                        <div class="card__img">
                            <img loading="lazy" decoding="async" src="../../assets/img/services_img/main_card_2.png" alt="main_card_2">
                        </div>
                        <div class="card__title">Родословные книги</div>
                        <div class="card__desc">Родословная книга — отличный вариант необычного и ценного подарка, который объединит семью и даст толчок для дальнейшего изучения истории своего Рода.</div>
                    </nuxt-link>
                    <nuxt-link to="/our_services/genealogical_research" class="main__card">
                        <div class="card__img">
                            <img loading="lazy" decoding="async" src="../../assets/img/services_img/main_card_3.png" alt="main_card_3">
                        </div>
                        <div class="card__title">Генеалогическое исследование</div>
                        <div class="card__desc">Наши специалисты найдут исторические документы, которые позволят восстановить многовековую цепочку Вашего рода и сделать достоверные выводы о жизни Ваших предков.</div>
                    </nuxt-link>
                    <nuxt-link to="/our_services/military_search" class="main__card">
                        <div class="card__img">
                            <img loading="lazy" decoding="async" src="../../assets/img/services_img/main_card_4.png" alt="main_card_4">
                        </div>
                        <div class="card__title">Военный поиск</div>
                        <div class="card__desc">Военный поиск — это возможность восстановить боевой путь! Проследить в каких боях участвовал Ваш предок, где это происходило, какие звания и награды были присвоены в ходе военных событий.</div>
                    </nuxt-link>
                    <nuxt-link to="/our_services/packages" class="main__card">
                        <div class="card__img">
                            <img loading="lazy" decoding="async" src="../../assets/img/services_img/main_card_5.png" alt="main_card_5">
                        </div>
                        <div class="card__title">Пакеты услуг</div>
                        <div class="card__desc">Ознакомьтесь с нашими пакетами услуг и обновленными ценами! Узнайте, что в них входит!</div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.main__inner{
  padding: 5px 0 100px 0;
}
.main__title{
  margin-bottom: 35px;
  font-family: 'Noto', serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7D4E24;
}
.main__cards{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 35px;
}
.main__card{
  max-width: 280px;
  text-decoration: none;
}
.main__card:hover>.card__img{
  border: 0.5px solid #673800;
  filter: drop-shadow(0px 0px 10px rgba(90, 60, 34, 0.56));
}
.main__card:hover{
  cursor: pointer;
}
.card__img{
  height: 146px;
  border-radius: 30px;
  border: 0.5px solid #F5F5F5;
}
.card__img>img{
  object-fit: cover;
  border-radius: 30px;
}
.card__title{
  margin-top: 10px;
  font-family: 'Noto', serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #7D4E24;
  height: 50px;
}
.card__desc{
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.72);
}
@media (max-width: 1024px) {
  .main__title{
    font-size: 24px;
    line-height: 33px;
  }
}
@media (max-width: 768px) {
  .main__card{
    max-width: 229px;
  }
  .card__img{
    height: 119px;
  }
}
@media (max-width: 480px) {
    .main__cards{
    column-gap: 15px;
  }
  .main__card{
    max-width: 45%;
  }
  .card__title{
    height: auto;
  }
  .card__img{
    height: 109px;
  }
}
@media (max-width: 360px) {
  .main__card{
    max-width: 150px;
  }
  .card__img{
    height: 90px;
  }
  .card__title{
    font-size: 16px;
    line-height: 22px;
    height: 66px;
  }
  .card__desc{
    margin-top: 5px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
