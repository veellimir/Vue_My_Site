<template>
    <main class="main_content">
        <div class="block_main_content">
            <div class="main_content_descript">
                <h2>Экскурсии и туры</h2>
                <span> на Камчатку</span>
            </div>
            <img src="@/assets/main_img.jpg" id="img_main" alt="Ошибка изображение">
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
            <button style="background-color: #FFBD4E;">КТО МЫ?</button>
            <button><h3>ЧТО МЫ</h3><h4>ДЕЛАЕМ?</h4></button>
            <button><h3>КТО наши</h3><h4>клиенты?</h4></button>
        </div>
    </div>
    <div class="block_about">
        <div class="block_about_name">
            <p>О компании</p>
            <div id="block_about_name">
                <h3>БЛИЖАЙШИЕ<h4>ТУРЫ</h4>
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
    </div>
    <div class="block_about">
        <div class="block_about_name">
            <p>Публикации</p>
            <div id="block_about_name">
                <h3>ИДЕИ </h3>
                <h4>ПУТЕШЕСТВИЙ</h4>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
           
        }
    },
    methods: {
        
    }
}
</script>
  
<style scoped>
* {
    background-color: transparent;
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
    color: #29343E;
    font-size: 25px;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.14);
    border: 1px solid #FFBD4E;
    border-radius: 16px;
    cursor: pointer;
}
</style>
  