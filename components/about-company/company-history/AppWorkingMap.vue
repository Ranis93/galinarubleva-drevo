<template>
  <section class="working-map">
    <div class="container">
      <div class="working-map__inner">
        <div class="working-map__title">Работаем на территории 10 стран</div>
        <div class="working-map__text">Российская Федерация, страны СНГ</div>
        <div class="working-map__image">
          <img
            src="../../../assets/img/company-history/the_map_rf.png"
            alt="the_map_rf"
          />
          <div class="working-map__marker">
            <div class="working-map__dot">
              <img
                src="../../../assets/img/company-history/green_dot.svg"
                alt="green_dot"
              />
            </div>
            <div class="working-map__republic">Республика Башкортостан</div>
          </div>
        </div>

        <div class="working-map__desc">
          Наша компания основана в Республике Башкортостан. История
          Башкортостана также уникальна, как и его природные
          достопримечательности. <br />
          История Башкортостана – это история коренных жителей края башкир, а
          также переселившихся в этот регион в течение 17 – 20 веков русских,
          татар, мишарей, мари, чувашей, удмуртов, мордвы, украинцев и других
          народов. Башкиры представляют собой один из древних народов Евразии,
          сформировавшийся на Южном Урале как самостоятельный этнос в первой
          половине первого тысячелетия нашей эры.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.working-map__inner {
  padding: 50px 0;
}
.working-map__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
}
.working-map__text {
  padding: 25px 0 50px 0;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.72);
}
.working-map__image {
  margin: 0 auto;
  max-width: 1006px;
  max-height: 613px;
  position: relative;
}
.working-map__marker {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  column-gap: 4px;
  flex-wrap: nowrap;

  position: absolute;
  left: 232px;
  bottom: 55px;
}
.working-map__dot {
  width: 6px;
  height: 6px;
}
.working-map__republic {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.72);
}
.working-map__desc {
  padding-top: 30px;
  max-width: 880px;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.72);
}
@media (max-width: 1024px) {
  .working-map__title {
    font-size: 24px;
    line-height: 33px;
  }
  .working-map__image {
    max-width: 960px;
    max-height: 613px;
  }
  .working-map__desc {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .working-map__image {
    max-width: 737px;
    max-height: 471px;
  }
  .working-map__marker {
    column-gap: 3px;
    left: 169px;
    bottom: 41px;
  }
  .working-map__dot {
    width: 4px;
    height: 4px;
  }
}
@media (max-width: 480px) {
  .working-map__image {
    max-width: 440px;
    max-height: 281px;
  }
  .working-map__marker {
    column-gap: 2px;
    left: 90px;
    bottom: 15px;
  }
  .working-map__dot {
    width: 3px;
    height: 3px;
  }
  .working-map__dot > img {
    vertical-align: middle;
  }
  .working-map__republic {
    font-size: 14px;
  }
}
@media (max-width: 360px) {
  .working-map__text {
    padding: 20px 0 10px 0;
  }
  .working-map__image {
    max-width: 320px;
    max-height: 205px;
  }
  .working-map__marker {
    column-gap: 3px;
    position: static;
    justify-content: center;
  }
  .working-map__desc {
    font-size: 16px;
  }
}
</style>
