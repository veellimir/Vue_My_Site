<template>
  <div class="header_main" >
    
    <ul>
      <li>ИНДИВИДУАЛЬНЫЕ ТУРЫ</li>
      <li>ГРУППОВЫЕ ТУРЫ</li>
      <li>КРУИЗЫ</li>
      <img
        src="@/assets/sign_in.png"
        alt="Ошибка изображение"
        id="sign_in"
        @click="openSignIn"
      />
      <div class="menu_bar_block" @click="openMenuBar">
        <img
          src="@/assets/menu_bar.png"
          alt="Ошибка изображение"
          id="menu_bar"
        />
      </div>
    </ul>
    <div class="modal" v-if="menu_popup" @click.self="closeModal">
        <MenuBar v-if="menu_popup" />
    </div>
    <div class="modal" v-if="signin_window" @click.self="closeModal">
        <SignInComp v-if="signin_window" />
    </div>
  </div>
</template>

<script>
import MenuBar from "@/components/Header/MenuBar.vue";
import SignInComp from "@/components/Header/SignInComp.vue";

export default {
    components: {
      MenuBar,
      SignInComp,
    },
  data() {
    return {
      menu_popup: false,
      signin_window: false,
    };
  },
  methods: {
    openMenuBar() {
      this.menu_popup = true;
    },
    openSignIn() {
      this.signin_window = true
    },
    closeModal() {
        console.log('bbb')
      this.menu_popup = false;
      this.signin_window = false;
    },
  },
};
</script>

<style scoped>
* {
  background-color: transparent;
}

.header_main{
    position: absolute;
  right: 200px;
  top: 30px;
}
.header_main ul {
  display: flex;
  align-items: center;
  list-style: none;
}
#sign_in {
  width: 35px;
  margin-left: 40px;
  cursor: pointer;
}
.header_main li {
  margin-left: 5%;
  width: auto;
  white-space: nowrap;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-family: "Wix Madefor Display";
}
.menu_bar_block {
  margin-left: 40px;
}
#menu_bar {
  width: 50px;
  height: 40px;
  filter: hue-rotate(180deg);
  fill: #ffbd4e;
  cursor: pointer;
  margin-top: 10px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
