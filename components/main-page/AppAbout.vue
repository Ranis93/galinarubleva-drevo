<template>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__up-content">
          <div class="about__left-side">
            <div class="about__img">
              <img src="../../assets/img/photo_galina.png" alt="" />
            </div>
            <div class="about__name">Галина Рублева,</div>
            <div class="about__text">основатель</div>
          </div>
          <div class="about__center">
            <div class="about__title">О центре семейной родословной</div>
            <div class="about__text">
              Наш Центр семейной родословной уникален тем, что находит настоящие
              семейные реликвии и тайны. То, как мы работаем, позволяет
              восстанавливать родословную вплоть до XVII века. Родословные,
              которые мы восстанавливаем, могут стать подарком с глубоким
              смыслом. А обрамлённые и красиво оформленные они украсят гостиную.
              Родословная книга будет символизировать связь времён, ценность
              семьи и создавать совершенно особую атмосферу дома.
            </div>
          </div>
          <div class="about__right">
            <div class="about__video" data-url="FpSUKzyAOyQ">
              <div class="play__circle">
                <img src="../../assets/img/youtube.svg" alt="youtube" />
              </div>
            </div>
          </div>
        </div>
        <div class="about__down-content">
          <div class="about__foot-item">
            <div class="about__foot-title">XVII века</div>
            <div class="about__foot-desc">родословная до</div>
          </div>
          <div class="about__foot-item">
            <div class="about__foot-title">от 1 мес.</div>
            <div class="about__foot-desc">сроки выполнения</div>
          </div>
          <div class="about__foot-item">
            <div class="about__foot-title">554</div>
            <div class="about__foot-desc">семьи узнали свою родословную</div>
          </div>
          <div class="about__foot-item">
            <div class="about__foot-title">10 стран</div>
            <div class="about__foot-desc">работаем на территории</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoPlayer from '../../assets/js/playVideo'
export default {
  mounted () {
    try {
      new VideoPlayer('.about__video', '.overlay').init()
    } catch (error) {
      console.log('error')
    }
  }
}
</script>

<style scoped>
.about__inner {
  margin: 100px 0;
}
.about__up-content {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
}
.about__left-side {
  width: 225px;
}
.about__img {
  max-width: 180px;
  max-height: 225px;
}
.about__name {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #007632;
}
.about__center {
  max-width: 380px;
}
.about__title {
  font-family: "Noto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #007632;
  margin-bottom: 25px;
}
.about__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2c1909;
}
.about__right-side {
  width: 380px;
}
.about__video {
  width: 380px;
  height: 250px;
  background: url("../../assets/img/video.png");
  background-repeat: no-repeat;
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
.about__down-content {
  display: flex;
  justify-content: space-between;
  max-width: 880px;
  margin-left: auto;
  margin-right: 0;
  margin-top: 50px;
}
.about__foot-item {
  max-width: 230px;
}
.about__foot-title {
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #007632;
}
.about__foot-desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #007632;
}
@media (max-width: 1024px) {
  .about__inner {
    margin-bottom: 76px;
  }
  .about__img {
    max-width: 176px;
    max-height: 220px;
  }
  .about__center {
    max-width: 372px;
  }
  .about__video {
    max-width: 372px;
    max-height: 245px;
    padding-right: 10px;
  }
  .play__circle {
    max-width: 98px;
    max-height: 98px;
  }
  .about__down-content {
    margin-top: 40px;
  }
  .about__foot-item {
    max-width: 176px;
  }
}
@media (max-width: 768px) {
  .about__inner {
    margin: 100px 0;
    position: relative;
  }
  .about__up-content {
    flex-wrap: wrap;
    row-gap: 60px;
    width: fit-content;
  }
  .about__left-side {
    width: 176px;
  }
  .about__center {
    max-width: 532px;
  }
  .about__right {
    max-width: 354px;
    max-height: 235px;
  }
  .about__video {
    max-width: 354px;
    max-height: 235px;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0;
  }
  .play__circle {
    max-width: 94px;
    max-height: 92px;
  }
  .about__down-content {
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .about__down-content {
    max-width: 360px;
    row-gap: 30px;
    margin: 0;
  }
  .about__foot-item {
    width: 172px;
    max-width: 172px;
  }
}
@media (max-width: 480px) {
  .about__inner {
    margin: 60px 0 60px 0;
  }
  .about__img {
    max-width: 122px;
    max-height: 152px;
  }
  .about__name {
    font-size: 20px;
    line-height: 20px;
  }
  .about__text {
    font-size: 16px;
    line-height: 20px;
  }
  .about__title {
    font-size: 26px;
    line-height: 35px;
    position: absolute;
    top: 0;
    right: 5px;
    max-width: 257px;
    margin-left: 160px;
  }
  .about__up-content {
    position: relative;
    row-gap: 20px;
  }
  .about__text {
    font-size: 18px;
    line-height: 22px;
  }
  .about__down-content {
    position: static;
    margin-top: 82px;
  }
  .about__foot-item{
    width: 45%;
  }
  .about__foot-title {
    font-size: 26px;
  }
}
@media (max-width: 360px) {
  .about__inner {
    margin: 57px 0 75px 0;
  }
  .about__up-content {
    row-gap: 22px;
  }
  .about__title {
    font-size: 24px;
    line-height: 30px;
  }
  .about__text {
    font-size: 16px;
    line-height: 19px;
  }
  .about__right {
    max-width: 100%;
    max-height: 165px;
  }
  .about__video {
    max-width: 100%;
    max-height: 165px;
    background-size: 100% 100%;
  }
  .play__circle {
    max-width: 70px;
    max-height: 67px;
  }
  .about__down-content {
    margin-top: 50px;
    row-gap: 25px;
    column-gap: 20px;
  }
  .about__foot-title {
    font-size: 24px;
  }
  .about__foot-desc {
    font-size: 16px;
  }
}
</style>
