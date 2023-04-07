<template>
  <div>
    <section class="Hmain">
      <div class="container">
        <div class="Hmain__inner">
          <div class="Hmain__about">
            <div class="Hmain__title">
              Поможем узнать историю и значение фамилии!
            </div>
            <div class="Hmain__desc">Значение и происхождение фамилии может помочь вам больше узнать об истории собственной семьи

            </div>
            <div class="Hmain__btn">Хочу узнать</div>
          </div>
          <div class="Hmain__img">
            <img src="../../assets/img/promotions/help/bloodline-tree.png" alt="tree">
          </div>
        </div>
      </div>
    </section>
    <section class="Hwhy">
      <div class="container">
        <div class="Hwhy__inner">
          <div class="Hwhy__title">
            Почему нужно знать историю своей фамилии?
          </div>
          <div class="Hwhy__card">
            <div class="Hwhy__img">
              <img src="../../assets/img/promotions/help/the-slder-scrolls.png" alt="the-slder-scrolls">
            </div>
            <div class="Hwhy__col">
              <div class="Hwhy__desc">
                <strong>Фамилия</strong> — это наследственное имя семьи, семейное наименование.
              </div>
              <div class="Hwhy__desc">
                Она нередко скрывает загадки генеалогического древа. Это живая история, которая доносит до нас множество забытых, никем не записанных слов и многие утраченные живой речью формы.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="Hpresent">
      <div class="container">
        <div class="Hpresent__inner">
          <div class="Hpresent__window">
            <div class="Hpresent__about">
              <div class="Hpresent__title">
                Хороший подарок для близкого человека
              </div>
              <div class="Hpresent__desc">
                В стоимость входит:
              </div>
              <ul class="Hpresent__list">
                <li>
                  - работа специалиста с историческим образованием
                </li>
                <li>
                  - фирменный дизайн 
                </li>
                <li>                  
                  - возможность добавить фотографию 
                </li>
                <li>
                  - бумажный и электронный вариант работы
                </li>
              </ul>
              <div class="Hpresent__prices">
                <div class="Hpresent__new-price">
                  3 500 ₽
                </div>
                <div class="Hpresent__old-price">
                  5 000 ₽
                </div>
              </div>
              <div class="Hpresent__btn">
                Заказать подарок
              </div>
            </div>
            <div class="Hpresent__img">
              <img src="../../assets/img/promotions/help/decor-present.png" alt="decor-present">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('service-packages', ['setCurrentPackage'])
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Акции', 'Поможем узнать историю и значение фамилии!'],
      paths: ['/promotions', '/promotions/help']
    })
    
  }
}
</script>

<style lang="scss" scoped>
.Hmain {
  margin-top: -75px;
  background-color: #FFFFFF;
  position: relative;
  z-index: 0;
  .Hmain__inner {
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    .Hmain__about{
      max-width: 580px;
      margin-top: 65px;
      .Hmain__title{
        font-family: "Noto", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #673800;
        padding-bottom: 20px;
      }
      .Hmain__desc{
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #1D1D1D;
        padding-bottom: 45px;
        max-width: 393px;
      }
      .Hmain__btn{
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 27px;
        background: #7D4E24;
        border: 1px solid #7D4E24;
        box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
        border-radius: 50px;
        padding: 10px 35px;
        width: fit-content;
        &:hover{
          cursor: pointer;
        }
      }
    }
    .Hmain__img{
      max-width: 591px;
      height: auto;
    }
  }
}
.Hwhy{
  background: #E6E7E9;
  .Hwhy__inner{
    padding: 100px 0;
    .Hwhy__title{
      font-family: "Noto", serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      color: #007632;
      margin-bottom: 30px;
    }
    .Hwhy__card{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      column-gap: 20px;
      .Hwhy__img{
        max-width: 507px;
        height: auto;
        border-radius: 50px;
        img{
          border-radius: 50px;
        }
      }
      .Hwhy__col{
        .Hwhy__desc{
          font-weight: 400;
          font-size: 22px;
          line-height: 26px;
          color: #1D1D1D;
          max-width: 580px;
          &:last-child{
            padding-top: 15px;
          }
        }
      }
    }
  }
}
.Hpresent{
  background: rgba(227, 222, 180, 0.84);
  .Hpresent__inner{
    padding: 100px 0 179px 0;
    .Hpresent__window{
      background: #FFFFFF;
      border-radius: 50px;
      display: flex;
      justify-content: space-between;
      column-gap: 30px;
      align-items: center;
      padding: 30px 0 30px 40px;
      .Hpresent__about{
        max-width: 620px;
        .Hpresent__title{
          font-family: "Noto", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 38px;
          color: #007632;
          padding-bottom: 20px;
        }
        .Hpresent__desc{
          font-weight: 600;
          font-size: 22px;
          line-height: 26px;
          color: #000000;
          padding-bottom: 11px;
        }
        .Hpresent__list{
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #000000;
          li {
            display: block;
          }
        }
        .Hpresent__prices{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 5px 0 15px 0;
          .Hpresent__new-price{
            font-family: "Noto", serif;
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 38px;
            color: #B70A08;
            padding-top: 19px;
          }
          .Hpresent__old-price{
            font-family: "Noto", serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            text-decoration: line-through;
            color: rgba(45, 45, 45, 0.8);
          }
        }
        .Hpresent__btn{
          font-weight: 700;
          font-size: 20px;
          line-height: 27px;
          color: #FFFFFF;
          padding: 10px 35px;
          width: fit-content;
          background: #7D4E24;
          border: 1px solid #7D4E24;
          box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
          border-radius: 50px;
          &:hover{
            cursor: pointer;
          }
        }
      }
      .Hpresent__img{
        max-width: 480px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Hmain{
    .Hmain__inner{
      padding-top: 96px;
      .Hmain__about{
        max-width: 442px;
        margin-top: 3px;
        .Hmain__title{
          font-size: 28px;
          line-height: 38px;
        }
        .Hmain__desc{
          max-width: none;
        }
        .Hmain__btn{
          padding: 7px 35px;
        }
      }
      .Hmain__img{
        max-width: 459px;
      }
    }
  }
  .Hwhy{
    .Hwhy__inner{
      padding: 70px 0;
      .Hwhy__title{
        font-size: 28px;
        line-height: 38px;
      }
      .Hwhy__card{
        .Hwhy__img{
          max-width: none;
          width: 49%;
        }
        .Hwhy__col{
          width: 49%;
          .Hwhy__desc{
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
  .Hpresent{
    .Hpresent__inner{
      padding: 70px 0;
      .Hpresent__window{
        padding-left: 27px;
        column-gap: normal;
        .Hpresent__about{
          max-width: 480px;
          .Hpresent__list{
            font-size: 18px;
            line-height: 22px;
          }
          .Hpresent__prices{
            .Hpresent__new-price{
              font-size: 26px;
              line-height: 35px;
              padding-top: 15px;
            }
          }
          .Hpresent__btn{
            padding: 5px 17.5px 6px 17.5px;
          }
        }
        .Hpresent__img{
          max-width: 470px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .Hmain{
    .Hmain__inner{
      padding-top: 95px;
      flex-wrap: wrap;
      flex-direction: column;
      .Hmain__img{
        align-self: flex-end;
      }
    }
  }
  .Hwhy{
    .Hwhy__inner{
      .Hwhy__card{
        .Hwhy__col{
          .Hwhy__desc{
            &:last-child{
              padding-top: 10px;
            }
          }
        }
      }
    }
  }
  .Hpresent{
    .Hpresent__inner{
      .Hpresent__window{
        column-gap: 10px;
        .Hpresent__about{
          max-width: 337px;
        }
        .Hpresent__img{
          max-width: 354px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Hmain{
    .Hmain__inner{
      padding-top: 72px;
      row-gap: 35px;
      .Hmain__about{
        margin-top: 0;
        .Hmain__title{
          font-size: 32px;
          line-height: 44px;
        }
        .Hmain__desc{
          padding-bottom: 20px;
        }
        .Hmain__btn{
          font-size: 16px;
          line-height: 22px;
          padding: 7.5px 22.5px;
        }
      }
      .Hmain__img{
        align-self: flex-start;
        max-width: 379px;
      }
    }
  }
  .Hwhy{
    .Hwhy__inner{
      .Hwhy__title{
        font-size: 26px;
        line-height: 35px;
      }
      .Hwhy__card{
        flex-wrap: wrap;
        row-gap: 30px;
        .Hwhy__img{
          width: 100%;
        }
        .Hwhy__col{
          width: 100%;
          .Hwhy__desc{
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
    }
  }
  .Hpresent{
    .Hpresent__inner{
      .Hpresent__window{
        padding: 30px 23px;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        column-gap: normal;
        row-gap: 30px;
        position: relative;
        .Hpresent__about{
          width: 100%;
          .Hpresent__title{
            position: absolute;
            top: 0;
            left: 0;
            font-size: 26px;
            line-height: 35px;
            padding: 30px 23px 0 23px;
          }
          .Hpresent__desc{
            font-size: 18px;
            line-height: 22px;
            padding-bottom: 22px;
          }
          .Hpresent__list{
            font-size: 16px;
            line-height: 19px;
          }
          .Hpresent__prices{
            margin-top: 8px;
            .Hpresent__new-price{
              font-size: 24px;
              line-height: 33px;
              padding-top: 17px;
              padding-right: 6px;
            }
            .Hpresent__old-price{
              font-size: 16px;
              line-height: 22px;
            }
          }
          .Hpresent__btn{
            font-size: 18px;
            line-height: 25px;
            padding: 6px 26px;
          }
        }
        .Hpresent__img{
          margin-top: 100px;
          max-width: none;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .Hmain{
    .Hmain__inner{
      .Hmain__about{
        .Hmain__title{
          font-size: 24px;
          line-height: 33px;
        }
        .Hmain__desc{
          font-size: 18px;
          line-height: 22px;
          padding-bottom: 40px;
        }
        .Hmain__btn{
          font-size: 14px;
          line-height: 19px;
        }
      }
      .Hmain__img{
        max-width: 100%;
      }
    }
  }
  .Hwhy{
    .Hwhy__inner{
      .Hwhy__title{
        font-size: 24px;
        line-height: 29px;
      }
      .Hwhy__card{
        .Hwhy__img{
          border-radius: 30px;
          img{
            border-radius: 30px;
          }
        }
        .Hwhy__col{
          .Hwhy__desc{
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }
  }
  .Hpresent{
    .Hpresent__inner{
      .Hpresent__window{
        padding: 30px 20px;
        row-gap: 20px;
        .Hpresent__about{
          .Hpresent__title{
            padding: 30px 20px 0 20px;
            font-size: 24px;
            line-height: 29px;
          }
          .Hpresent__desc{
            padding-bottom: 15px;
          }
          .Hpresent__prices{
            margin-top: 0;
          }
          .Hpresent__btn{
            font-size: 16px;
            line-height: 22px;
            padding: 7.5px 25px;
          }
        }
        .Hpresent__img{
          margin-top: 80px;
        }
      }
    }
  }
}
</style>
