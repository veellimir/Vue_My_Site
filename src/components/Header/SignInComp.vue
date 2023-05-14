<template>
    <!-- Окно регистрации -->
    <div class="sign_in_popup" >
            <div>
                <img src="@/assets/rect_block_name_main.png" alt="Ошибка изображение">
            </div>
            <div class="sign_in_popup_options">
                <h3 style="font-size: 20px;">войти</h3>
                <button>Войти через Google</button>
                <button>Войти через Yandex</button>
                <button>Войти с помощью электронной почты</button>
            </div>
            <div class="no_user">
                <p>Нет учётной записи ?</p>
                <button>Зарегистрироваться</button>
            </div>
        </div>
        <!-- Конец окна регистрации -->
</template>
<style>
.sign_in_popup {
    position: fixed;
    right: 0;
    width: 400px;
    height: 100%;
    z-index: 1;
    background-color: #29343E;
    text-align: center;
    padding-top: 60px;
}
.sign_in_popup_options button {
    width: 231px; height: 50px; 
    margin-top: 20px;  
    color: #ffff;
    border: 1px solid #FFBD4E;
    padding: 10px;
}
.no_user {margin-top: 5vh;}
.no_user button {background-color: transparent; border: none; color: #FFBD4E; }
</style>