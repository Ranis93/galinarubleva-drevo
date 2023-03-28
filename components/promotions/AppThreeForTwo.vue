<template>
  <div>
    <section class="hat">
      <div class="hat__inner">
        <h1 class="hat__title">3 исследования по цене 2</h1>
      </div>
    </section>
    <section class="chance">
      <div class="container">
        <div class="chance__inner">
          <div class="chance__title">
            Не упустите возможность создать семейный фотоальбом, уходящий корнями в старину по выгодной цене
          </div>
          <div class="chance__desc">
            Знание истории собственного происхождения всегда считалось похвальным. В старину представители знати всегда гордились тем, что знают своих предков на несколько веков вглубь истории – это лишний раз подтверждало, что никто из предшественников не был простолюдином.  И напротив, простые люди, не умеющие читать и писать, в большинстве случаев помнили только тех предков, кого застали живыми. 
            В наше время не считается постыдным не знать своих предков, но понимать свое происхождение – это и увлекательно, и интересно. <br> <br>
            Книги для ведения родословной позволяют оформить все это максимально красиво, нарисовав собственное семейное дерево и «оживив» предков известными фактами о них. Подобный артефакт может стать настоящей семейной реликвией, передаваемой из поколения в поколение, а у кого-то пробудит дополнительный интерес к истории, отправив в архив на поиски прапрабабушек и прапрадедушек. <br> <br>
            Иными словами, это практически семейный фотоальбом, но уходящий корнями в старину – настолько далеко, что вписанные в книгу люди могли жить раньше, чем в принципе появилась фотография.
          </div>
        </div>
      </div>
      <div class="hands" />
    </section>
    <section class="packages">
      <div class="container">
        <div class="packages__inner">
          <div class="packages__hat">
            <div class="packages__title">
              Пакеты услуг
            </div>
            <div class="packages__desc">
              Вы можете стать Хранителем своего рода — человеком, который объединит отрывочные сведения, найдёт своих предкови и передаст будущему поколению многовековую историю вашего Рода.
            </div>
          </div>
          <div class="packages__columns">
            <div class="packages__cards one">
            </div>
            <div class="packages__equal">
              =
            </div>
            <div class="packages__cards two">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="beginning3f2">
      <div class="container">
        <div class="beginning3f2__inner">
          <div class="beginning3f2__box">
            <div class="beginning3f2__left-side">
              <div class="beginning3f2__title">С чего начать?</div>
              <div class="beginning3f2__text">
                Запишитесь на <span>бесплатную консультацию</span> к нашему
                эксперту по поиску родословной!
              </div>
              <button class="beginning3f2_btn">Записаться</button>
            </div>
            <div class="beginning3f2__right-side">
              <img src="../../assets/img/family.jpg" alt="family" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { insertBitrix } from '~/assets/js/bitrix-window'
export default {
  methods: {
    ...mapMutations('service-packages', ['setCurrentPackage'])
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Акции', '3 по цене 2'],
      paths: ['/promotions', '/promotions/3-for-price-of-2']
    })
    try {
      insertBitrix('.beginning3f2__left-side', '.beginning3f2_btn')
    } catch (error) {
    }
  }
}
</script>

<style lang="scss" scoped>
$ff1 : "Noto", serif;
.hat{
  margin-top: -75px;
  background-image: url('../../assets/img/promotions/3for2/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(103, 56, 0, 0.1), rgba(103, 56, 0, 0.1));
  }
  .hat__inner{
    padding: 206px 0 201px 0;
    .hat__title{
      font-family: $ff1;
      font-weight: 600;
      font-size: 80px;
      line-height: 109px;
      text-align: center;
      padding: 10px 20px;
      color: #673800;

      background: linear-gradient(270deg, rgba(255, 255, 255, 0.136) 0%, rgba(255, 255, 255, 0.8) 20.11%, rgba(255, 255, 255, 0.8) 48.42%, rgba(255, 255, 255, 0.8) 77.3%, rgba(255, 255, 255, 0.136) 99.27%);
      box-shadow: 8px 4px 9px rgba(0, 0, 0, 0.25);
    }
  }
}
.chance {
  background: #D9D0C0;
  position: relative;
  .chance__inner{
    padding: 93px 0 330px 0;
    max-width: 1180px;
    margin: auto;
    .chance__title{
      font-family: $ff1;
      font-weight: 700;
      font-size: 40px;
      line-height: 40px;
      color: #7D4E24;
      max-width: 1100px;
      margin-bottom: 50px;
    }
    .chance__desc{
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 33px;
      color: #584C41;
    }
  }
  .hands{
    width: 100%;
    height: 766px;
    background: {
      image: url('../../assets/img/promotions/3for2/hands.png');
      size: 100% 100%;
      position: center;
      repeat: no-repeat;
    };
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
  }
}
.packages{
  background: #472906;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 20px 20px;
  .packages__inner{
    padding: 485px 0 134px 0;
    overflow: hidden;
    .packages__hat{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      column-gap: 20px;
      margin-bottom: 79px;
      .packages__title{
        font-family: $ff1;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #FFFFFF;
        flex-shrink: 0;
      }
      .packages__desc{
        font-weight: 400;
        max-width: 859px;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }
    .packages__columns{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 35px;
      .packages__equal{
        font-family: $ff1;
        font-style: normal;
        font-weight: 700;
        font-size: 140px;
        line-height: 191px;
        color: #FFFFFF;
      }
      .packages__cards{
        height: 346px;
        background: {
          size: contain;
          position: center;
          repeat: no-repeat;
        };
        &.one{
          width: 518px;
          height: 394px;
          background: {
            image: url('../../assets/img/promotions/3for2/cards/cards-col1-l.png')
          };
        }
        &.two{
          width: 518px;
          height: 450px;
          background: {
            image: url('../../assets/img/promotions/3for2/cards/cards-col2-l.png')
          };
        }
      }
    }
  }
}

.beginning3f2 {
  background-color: #D9D0C0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  background-repeat: no-repeat;
  background-position: left center;
  background-size: 50% 100%;
}
.beginning3f2__inner {
  padding: 100px 0;
}
.beginning3f2__box {
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  overflow: hidden;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
.beginning3f2__left-side {
  padding: 0 80px 0 100px;
  width: 50%;
  box-sizing: border-box;
  flex-shrink: 0;
}
.beginning3f2__right-side {
  width: 578px;
  max-height: 299px;
  box-sizing: border-box;
}
.beginning3f2__right-side > img {
  object-fit: contain;
}
.beginning3f2__title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  margin-bottom: 25px;
}
.beginning3f2__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
  max-width: 410px;
  margin-bottom: 32px;
}
.beginning3f2__text > span {
  font-weight: 700;
  color: #007632;
}
.beginning3f2_btn {
  border: 1px solid #007632;
  box-shadow: 0px 4px 10px rgba(195, 218, 204, 0.39);
  border-radius: 50px;
  padding: 10px 35px;
  width: fit-content;
  background-color: #ffffff;

  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #007632;
}
.beginning3f2_btn:hover {
  cursor: pointer;
  color: #ffffff;
  background: #007632;
}
@media (max-width: 1024px) {
  .hat{
    .hat__inner{
      padding-bottom: 228px;
      .hat__title{
        font-size: 60px;
        line-height: 82px;
      }
    }
  }
  .chance{
    .chance__inner{
      padding: 100px 0 322px 0;
      .chance__title{
        margin-bottom: 58px;
      }
    }
    .hands{
      height: 401px;
    }
  }
  .packages{
    .packages__inner{
      padding: 243px 0 136px 0;
      .packages__hat{
        column-gap: 31px;
        margin-bottom: 12px;
        .packages__desc{
          max-width: 680px;
        }
      }
      .packages__columns{
        column-gap: 26px;
        justify-content: space-between;
        .packages__cards{
          height: auto;
          &.one{
            width: 371px;
            height: 359px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col1-ml.png');
          }
          &.two{
            width: 397px;
            height: 467px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col2-ml.png');
          }
        }
      }
    }
  }
  .beginning3f2__left-side {
    padding: 0 58px 0 25px;
    width: 52%;
  }
  .beginning3f2__right-side {
    width: 48%;
  }
}
@media (max-width: 768px) {
  .hat{
    .hat__inner{
      padding-bottom: 242px;
      .hat__title{
        font-size: 50px;
        line-height: 68px;
      }
    }
  }
  .chance{
    .chance__inner{
      padding: 39px 0 275px 0;
      .chance__title{
        margin-bottom: 46px;
      }
      .chance__desc{
        font-size: 20px;
        line-height: 33px;
      }
    }
    .hands{
      height: 307px;
    }
  }
  .packages{
    .packages__inner{
      .packages__hat{
        column-gap: 40px;
        margin-bottom: 42px;
        .packages__desc{
          max-width: 453px;
        }
      }
      .packages__columns{
        .packages__cards{
          &.one{
            width: 280px;
            height: 359px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col1-m.png');
          }
          &.two{
            width: 325px;
            height: 437px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col2-m.png');
          }
        }
      }
    }
  }
  .beginning3f2__left-side {
    padding-right: 22px;
  }
}
@media (max-width: 480px) {
  .hat{
    .hat__inner{
      padding: 354px 0 178px 0;
      .hat__title{
        font-size: 30px;
        line-height: 41px;
        padding: 13px 30px;
      }
    }
  }
  .chance{
    .chance__inner{
      padding: 49px 0 200px 0;
      .chance__title{
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 26px;
      }
      .chance__desc{
        line-height: 30px;
      }
    }
    .hands{
      height: 192px;
    }
  }
  .packages{
    .packages__inner{
      padding: 132px 0 88px 0;
      .packages__hat{
        flex-wrap: wrap;
        row-gap: 17px;
        margin-bottom: 47px;
      }
      .packages__columns{
        column-gap: 12px;
        .packages__equal{
          font-size: 60px;
          line-height: 82px;
        }
        .packages__cards{
          &.one{
            width: 178px;
            height: 225px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col1-ms.png');
          }
          &.two{
            width: 210px;
            height: 284px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col2-ms.png');
          }
        }
      }
    }
  }
  .beginning3f2 {
    background-size: auto;
  }
  .beginning3f2__inner {
    padding: 60px 0;
  }
  .beginning3f2__box {
    flex-wrap: wrap;
  }
  .beginning3f2__left-side,
  .beginning3f2__right-side {
    width: 100%;
  }
  .beginning3f2__title {
    margin: 33px 0 15px 0;
    font-size: 26px;
    line-height: 35px;
  }
  .beginning3f2__text {
    margin-bottom: 21px;
    font-size: 18px;
    line-height: 22px;
  }
  .beginning3f2_btn {
    padding: 10px 30px;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 25px;
  }
  .beginning3f2__right-side > img {
    width: 100%;
  }
}
@media (max-width: 360px) {
  .hat{
    .hat__inner{
      .hat__title{
        font-size: 20px;
        line-height: 27px;
        padding: 21px 20px;
      }
    }
  }
  .chance{
    .chance__inner{
      padding: 46px 0 100px 0;
      .chance__title{
        font-size: 24px;
        line-height: 35px;
        margin-bottom: 24px;
      }
      .chance__desc{
        font-size: 18px;
        line-height: 24px;
      }
    }
    .hands{
      height: 142px;
    }
  }
  .packages{
    .packages__inner{
      padding: 76px 0 77px 0;
      .packages__hat{
        row-gap: 24px;
        margin-bottom: 30px;
        .packages__title{
          font-size: 24px;
          line-height: 33px;
        }
        .packages__desc{
          font-size: 18px;
          line-height: 22px;
        }
      }
      .packages__columns{
        column-gap: 3px;
        .packages__equal{
          font-size: 36px;
          line-height: 49px;
        }
        .packages__cards{
          &.one{
            width: 141px;
            height: 197px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col1-s.png');
          }
          &.two{
            width: 153px;
            height: 240px;
            background-image: url('../../assets/img/promotions/3for2/cards/cards-col2-s.png');
          }
        }
      }
    }
  }
  .beginning3f2__title {
    font-size: 24px;
    line-height: 33px;
  }
  .beginning3f2__text {
    font-size: 16px;
    line-height: 19px;
  }
  .beginning3f2_btn {
    font-size: 16px;
    line-height: 22px;
  }
  .beginning3f2__right-side {
    max-height: 167px;
  }
}
</style>
