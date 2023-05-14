<template>
    <div class="header_main">
        <SignInComp v-if="signin_window"/>
        <div class="block_name_main">
            <img src="@/assets/rect_block_name_main.png" alt="Ошибка изображение">
            <div class="block_number">
                <h1>02<span>/08</span></h1>
            </div>
        </div>
        <ul>
            <li>ИНДИВИДУАЛЬНЫЕ ТУРЫ</li>
            <li>ГРУППОВЫЕ ТУРЫ</li>
            <li>КРУИЗЫ</li>
            <img src="@/assets/sign_in.png" alt="Ошибка изображение" id="sign_in" @click="openSignIn">
            <div class="menu_bar_block" @click="openMenuBar">
                <img src="@/assets/menu_bar.png" alt="Ошибка изображение" id="menu_bar">
                <MenuBar v-if="menu_popup"/>
            </div>
        </ul>
    </div>
</template>
  
<script>
import MenuBar from '@/components/Header/MenuBar.vue';
import SignInComp from '@/components/Header/SignInComp.vue'

export default {
    data () {
        return {
            menu_popup: false,
            signin_window: false
        }
    },
    components: {
        MenuBar, SignInComp
    },
    methods: {
        openMenuBar () {
            this.menu_popup = !this.menu_popup
        },
        openSignIn () {
            this.signin_window = !this.signin_window
        }
    }
}
</script>
  
<style scoped>
* {
    background-color: transparent;
}
.block_name_main {
    position: absolute;
    left: 10%;
    width: 310px;
    height: 342px;
    padding-top: 50px;
    background-color: #29343E;
}
.block_name_main {padding-right: 50px;}
.block_name_main span {
    font-size: 42px;
    color: gray;
}
.block_number {text-align: right; margin-top: 50px;}
.header_main ul {
    display: flex;
    align-items: center;
    list-style: none;
    position: absolute;
    right: 200px;
    top: 30px;
}
#sign_in {width: 35px; margin-left: 40px; cursor: pointer;}
.header_main li {
    margin-left: 5%;
    width: auto;
    white-space: nowrap;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 20px;
    font-family: 'Wix Madefor Display';
}
.menu_bar_block {
    margin-left: 40px;
}
#menu_bar {
    width: 50px;
    height: 40px;
    filter: hue-rotate(180deg);
    fill: #FFBD4E;
    cursor: pointer;
    margin-top: 10px;
}
</style>
  