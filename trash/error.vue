<template>
  <div class="container">
    <div class="not-found__inner">
      <div class="not-found__img">
        <img src="../assets/img/not_found.jpg" alt="NotFound">
      </div>
      <div class="not-found__link">
        <nuxt-link to="/">
          <button class="not-found__btn">
            Перейти на главную
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.not-found__inner {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;
}
.not-found__img {
  width: 100%;
  position: relative;
  border-radius: 20px;
}
.not-found__img > img {
  width: 50vh;
  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  border-radius: 20px;
}
.not-found__inner > img {
  width: 30vh;
  height: auto;
}
.not-found__btn {
  margin-top: 50px;
  padding: 15px 20px;
  font-family: "Noto", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  border-radius: 50px;
  border: 1px solid #007632;
  background: #007632;
  box-shadow: 0px 4px 10px rgb(38 91 61 / 34%);
}
.not-found__btn:hover {
  cursor: pointer;
  color: #007632;
  background: #ffffff;
  border-radius: 50px;
}
@media (max-width: 480px) {
  .not-found__img > img {
    width: 100%;
  }
}
</style>
