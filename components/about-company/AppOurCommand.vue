<template>
  <section class="command">
    <div class="command__inner">
      <div class="container">
        <h1 class="command__head">Команда нашего генеалогического центра</h1>
        <div class="command__cards">
          <div class="command__card">
            <div class="command__pic">
              <img
                src="../../assets/img/our_command/avatar_1.png"
                alt="avatar"
              />
            </div>
            <div class="command__name">Галина Рублева</div>
            <div class="command__position">основатель</div>
            <div class="command__phone"></div>
            <div class="command__mail only_mail">rublleva@yandex.ru</div>
          </div>
          <div class="command__card">
            <div class="command__pic">
              <img
                src="../../assets/img/our_command/avatar_2.png"
                alt="avatar"
              />
            </div>
            <div class="command__name">Наталья Мещерякова</div>
            <div class="command__position">
              управляющий компании
              <a href="https://edu-partner.ru/">EduPartner</a>
            </div>
            <div class="command__phone">+7 987 622-17-00</div>
            <div class="command__mail">naedu@inbox.ru</div>
          </div>
        </div>
        <div class="command__boxes">
          <div class="command__box">
            <div class="command__title">Отдел продаж</div>
            <div class="command__card">
              <div class="command__pic">
                <img
                  src="../../assets/img/our_command/avatar_3.png"
                  alt="avatar"
                />
              </div>
              <div class="command__name">Ангелина Медведева</div>
              <div class="command__position">менеджер по продажам</div>
              <div class="command__phone">+7 347 224-28-99</div>
              <div class="command__mail">drevo@ufaritual.com</div>
            </div>
          </div>
          <div class="command__box">
            <div class="command__title">Отдел сервиса</div>
            <div class="command__card">
              <div class="command__pic">
                <img
                  src="../../assets/img/our_command/avatar_4.png"
                  alt="avatar"
                />
              </div>
              <div class="command__name">Наркас Фазуллина</div>
              <div class="command__position">
                Специалист отдела клиентского сервиса
              </div>
              <div class="command__phone">+7 347 224-28-99</div>
              <div class="command__mail">drevo@ufaritual.com</div>
            </div>
          </div>
          <div class="command__box">
            <div class="command__title">Отдел разработки</div>
            <div class="command__card">
              <div class="command__pic">
                <img
                  src="../../assets/img/our_command/avatar_5.png"
                  alt="avatar"
                />
              </div>
              <div class="command__name">Ранис Исхаков</div>
              <div class="command__position">
                программист компании
                <a href="https://edu-partner.ru/">EduPartner</a>
              </div>
              <div class="command__phone">+7 962 860-01-34</div>
              <div class="command__mail">ranis.krd@gmail.com</div>
            </div>
          </div>
        </div>
        <div class="command__title">Отдел маркетинга</div>
        <div class="command__cards">
          <div class="command__card">
            <div class="command__pic">
              <img
                src="../../assets/img/our_command/avatar_6.png"
                alt="avatar"
              />
            </div>
            <div class="command__name">Ангелина Степанова</div>
            <div class="command__position">
              маркетолог компаний
              <a href="https://edu-partner.ru/">EduPartner</a>
            </div>
            <div class="command__phone"></div>
            <div class="command__mail only_mail">stepanovagelyaa@yandex.ru</div>
          </div>
          <div class="command__card">
            <div class="command__pic">
              <img
                src="../../assets/img/our_command/avatar_7.png"
                alt="avatar"
              />
            </div>
            <div class="command__name">Роман Шишкин</div>
            <div class="command__position">
              интернет-маркетолог компаний
              <a href="https://edu-partner.ru/">EduPartner</a>
            </div>
            <div class="command__phone"></div>
            <div class="command__mail"></div>
          </div>
          <div class="command__card">
            <div class="command__pic">
              <img
                src="../../assets/img/our_command/avatar_8.png"
                alt="avatar"
              />
            </div>
            <div class="command__name">Алина Акбалыкова</div>
            <div class="command__position">графический дизайнер</div>
            <div class="command__phone"></div>
            <div class="command__mail"></div>
          </div>
        </div>
        <div class="command__title">Отдел исследования</div>
        <div class="command__desc">
          В составе нашей команды опытные историки-генеалоги со всей России. Мы
          работаем с кандидатами наук, историческими кафедрами ВУЗов и
          профессиональными переводчиками.
        </div>
        <div class="command__title">
          Хочешь к нам в команду? Ознакомься с вакансиями!
        </div>
        <nuxt-link to="/about_company/vacancies"
          ><button class="command__btn">Вакансии</button></nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.command {
  margin-top: 13px;
  background: no-repeat right bottom
    url("../../assets/img/our_command/command_bg.png");
}
.command__head {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #7d4e24;
  padding-bottom: 25px;
}
.command__cards,
.command__boxes {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 35px;
  flex-wrap: wrap;
  align-items: stretch;
}

.command__card {
  width: 380px;
  min-height: 250px;
  padding: 20px 15px 15px 15px;
  box-sizing: border-box;

  background: #e6e7e9;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}
.command__pic {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
}
.command__pic > img {
  border-radius: 50%;
}
.command__name {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #007632;
  text-align: center;
}
.command__position {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #7d4e24;
}
.command__position > a {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #7d4e24;
}
.command__phone,
.command__mail {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;

  color: rgba(0, 0, 0, 0.34);
}
.command__phone {
  margin-top: 14px;
  height: 19px;
}
.command__title {
  font-family: "Noto", serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #7d4e24;
  margin-bottom: 25px;
}
.command__desc {
  max-width: 780px;
  margin-bottom: 35px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.command__btn {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #7d4e24;

  padding: 10px 35px;
  border: 1px solid #7d4e24;
  box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
  border-radius: 50px;
  cursor: pointer;
  margin: 0 0 80px 0;
}
.command__btn:hover {
  color: #ffffff;

  background: #7d4e24;
  border: 1px solid #7d4e24;
  box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
}

@media (max-width: 1024px) {
  .command {
    margin-top: 5px;
  }
  .command__head {
    font-size: 24px;
    line-height: 33px;
  }
  .command__card {
    max-width: 307px;
    min-height: auto;
    padding: 15px 8px 8px 8px;
  }
  .command__pic {
    width: 80px;
    height: 80px;
  }
  .command__position,
  .command__position > a {
    font-size: 14px;
    line-height: 17px;
  }
  .command__phone {
    margin-top: 6px;
  }
  .command__title {
    font-size: 22px;
    line-height: 30px;
  }
}
@media (max-width: 768px) {
  .command__box > .command__card {
    min-height: 206px;
  }
  .command__card {
    width: 291px;
    max-width: 291px;
    padding: 15px 20px 8px 20px;
  }
  .command__pic {
    width: 67px;
    height: 67px;
  }
  .command__name {
    font-size: 16px;
    line-height: 40px;
  }
  .command__phone,
  .command__mail {
    font-size: 14px;
    line-height: 17px;
  }
  .command__phone {
    height: 17px;
  }
  .command__desc {
    max-width: 686px;
  }
}
@media (max-width: 480px) {
  .command__cards,
  .command__boxes {
    gap: 5px;
    row-gap: 25px;
    justify-content: space-between;
  }
  .command__card,
  .command__box {
    width: 49%;
    min-height: 170px;
  }
  .command__card {
    padding: 10px;
    position: relative;
  }
  .command__box > .command__card {
    width: 100%;
    min-height: 180px;
  }
  .command__pic {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
  }
  .command__name {
    line-height: 20px;
  }
  .command__position {
    margin-top: 10px;
  }
  .command__phone,
  .command__mail {
    font-size: 12px;
    line-height: 14px;
  }
  .command__phone {
    height: 14px;
  }
  .command__mail.only_mail {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  .command__desc {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 395px) {
    .command__box > .command__card {
      min-height: 195px;
    }
  }
  @media (max-width: 356px) {
    .command__box > .command__card {
      min-height: 215px;
    }
  }
  @media (max-width: 340px) {
    .command__box > .command__card {
      min-height: 232px;
    }
  }
}
</style>
