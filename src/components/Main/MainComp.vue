<template>
  <main class="main_content">
    <div class="block_name_main">
      <img src="@/assets/rect_block_name_main.png" alt="Ошибка изображение" />
      <div class="block_number">
        <h1>02<span>/08</span></h1>
      </div>
    </div>
    <div class="block_main_content">
      <div class="main_content_descript">
        <h2>Экскурсии и туры</h2>
        <span> на Камчатку</span>
      </div>
      <img src="@/assets/main_img.jpg" id="img_main" alt="Ошибка изображение" />
    </div>
  </main>
  <div class="block_about">
    <div class="block_about_name">
      <p>О компании</p>
      <div>
        <h3>НЕМНОГО</h3>
        <h4>О НАШЕЙ КОМПАНИИ</h4>
      </div>
    </div>
    <div class="block_about_btn">
      <button style="background-color: #ffbd4e">КТО МЫ?</button>
      <button>
        <h3>ЧТО МЫ</h3>
        <h4>ДЕЛАЕМ?</h4>
      </button>
      <button>
        <h3>КТО наши</h3>
        <h4>клиенты?</h4>
      </button>
    </div>
  </div>
  <div class="block_about">
    <div class="block_about_name">
      <p>О компании</p>
      <div id="block_about_name">
        <h3>
          БЛИЖАЙШИЕ
          <h4>ТУРЫ</h4>
        </h3>
      </div>
    </div>
  </div>
  <div class="block_about">
    <div class="block_about_name">
      <p>О компании</p>
      <div id="block_about_name">
        <h3>наши</h3>
        <h4>гиды</h4>
      </div>
    </div>
    <SliderBookComp></SliderBookComp>
  </div>
  <div class="block_about">
    <div class="block_about_name">
      <p>Публикации</p>
      <div id="block_about_name">
        <h3>ИДЕИ</h3>
        <h4>ПУТЕШЕСТВИЙ</h4>
      </div>
    </div>
  </div>
</template>

<script>
import SliderBookComp from '../ComponentComp/SliderBookComp.vue';

export default {
    data() {
        return {};
    },
    methods: {},
    components: { SliderBookComp }
};
</script>

<style scoped>
* {
  background-color: transparent;
}
.block_name_main {
  position: absolute;
  left: 0;
  top: 0;
  width: 310px;
  height: 342px;
  padding-top: 50px;
  background-color: #29343e;
}
.block_name_main {
  padding-right: 50px;
}
.block_name_main span {
  font-size: 42px;
  color: gray;
}
.block_number {
  text-align: right;
  margin-top: 50px;
}
/* .sign_in_popup {
    position: fixed;
    right: 0;
    width: 400px;
    height: 100%;
    z-index: 1;
    background-color: #29343E;
    text-align: center;
    padding-top: 60px;
}
.sign_in_popup_options {
    margin-top: 10vh;
    height: auto;
}
.sign_in_popup_options button {
    width: 231px; height: 50px; 
    margin-top: 20px;  
    color: #ffff;
    border: 1px solid #FFBD4E;
    padding: 10px;
}
.no_user {margin-top: 5vh;}
.no_user button {background-color: transparent; border: none; color: #FFBD4E; } */
span {
  font-size: 70px;
  text-transform: uppercase;
  color: #ffff;
  font-weight: 700;
}

.block_main_content {
  width: 100%;
}

#img_main {
  width: 80%;
  height: 80vh;
  object-fit: cover;
  margin-left: 20%;
}

.main_content_descript {
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: right;
  text-shadow: 0px -32px 3px rgba(1, 3, 6, 0.5);
}

.block_about {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 75%;
  height: auto;
  margin-top: 70px;
}

.block_about_name {
  display: flex;
}

.block_about_name div {
  margin-left: 40px;
}

#block_about_name {
  display: flex;
}

#block_about_name h4 {
  margin-left: 10px;
}

.block_about_btn {
  display: flex;
  position: relative;
  left: 120px;
}

.block_about_btn button {
  text-transform: uppercase;
  text-align: left;
  width: 25%;
  height: 68px;
  padding-left: 20px;
  margin-left: 20px;
  color: #29343e;
  font-size: 25px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.14);
  border: 1px solid #ffbd4e;
  border-radius: 16px;
  cursor: pointer;
}
</style>
