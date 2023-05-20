<template>
    <div class='content'>
        <HeaderComp />
        <div class='content_right'>
            <img src='@/assets/dmitriy-7.png' id='girl_img' />
            <img src='@/assets/girl_1.png' id='girl_img2_end' />
            <img src='@/assets/girl_2.png' id='girl_img3' />
        </div>
        <div class='content_left'>
            <h1>Новые поступления <br /> в этом сезоне</h1>
            <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
            <div>
                <img src='@/assets/Frame_9.png' />
                <button>Открыть магазин</button>
            </div>
            <div class="block_services">
                <h2>Услуги</h2>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from '../Header/HeaderComp.vue';

export default {
    data() {
        return {};
    },
    components: {
        HeaderComp
    },
    methods: {},
};
</script>

<style scoped>
/* контент */
.content_right {
    width: 705px;
    height: 826px;
    background: #F1EADC;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}

#girl_img {
    width: 434px;
    height: 652px;
    position: absolute;
    top: 120px;
    left: 40px;
}

#girl_img2_end {
    position: relative;
    top: 550px;
    right: 80px;
}

#girl_img3 {
    position: relative;
    left: 200px;
    top: 100px;
}

.content_left {
    float: left;
    position: relative;
    top: 200px;
    left: 20%;
    transform: translate(-20%);
}

.content_left h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 110%;
    letter-spacing: 0.02em;
    color: #000000;
}

.content_left p {
    width: 385px;
    height: 84px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: right;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top: 40px;
}

.content_left button {
    display: flex;
    padding: 22px 50px;
    width: 243px;
    height: 68px;
    background: #6E9C9F;
    border: none;
    margin: 50px 140px;
    position: relative;
    cursor: pointer;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 17px;
    line-height: 138.9%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    transition: color, transform 500ms ease;

}

.content_left button:hover {
    transform: scale(1.01);
    background: #509498;
}

.content_left img {
    width: 68px;
    height: 68px;
    position: absolute;
    left: 80px;
    cursor: pointer;
}
.block_services {
   position: relative;
   top: 270px; 
}
@media(max-width: 1434px) {
    .content_right {
        width: 550px;
        height: 730px;
    }

    #girl_img {
        width: 334px;
        height: 552px;
    }

    #girl_img2 {
        position: relative;
        top: 450px;
        right: 70px;

    }

    #girl_img3 {
        position: relative;
        left: 100px;
        top: 60px;
        width: 150px;
    }
}

@media(max-width: 1256px) {
    .nav li {
        margin-right: 50px;
    }

    #girl_img2_end {
        position: relative;
        top: 450px;
        right: 70px;
        width: 200px;
    }

    .content_right {
        width: 500px;
    }

    #new-collection_it {
        top: 850px;
    }
}

@media(max-width: 1170px) {
    .content_left h1 {
        font-size: 45px;
    }

    .content_left button {
        margin: 50px 50px;
    }

    .content_left img {
        left: -10px;
    }

    .content_left p {
        text-align: left;
    }
}

@media(max-width: 1066px) {
    .content_right {
        width: 350px;
        height: 530px;
    }

    #girl_img {
        width: 234px;
        height: 352px;
        margin: 20px;
    }

    #girl_img3 {
        position: relative;
        left: 80px;
        top: 70px;
        width: 100px;
    }

    #girl_img2_end {
        position: relative;
        top: 350px;
        right: 50px;
        height: 200px;
        width: 150px;
    }

    .content_left {
        top: 150px;
    }

    #new-collection_it {
        top: 750px;
    }
}

@media(max-width: 889px) {
    .content_left {
        left: 15%;
    }

    .content_left h1 {
        font-size: 35px;
    }

    .content_left p {
        font-size: 15px;
    }

    #new-collection_it {
        top: 750px;
    }
}

@media(max-width: 833px) {

    #girl_img,
    #girl_img2_end,
    #girl_img3 {
        display: none;
    }

    .content_right {
        left: 0;
        width: 100%;
        height: 470px;
    }

    .content_left {
        top: 70px;
        left: 50%;
        transform: translate(-50%);
    }

    #new-collection_it {
        left: 35%;
        text-align: center;
        top: 600px;
    }
}

@media(max-width: 443px) {
    .content_left p {
        width: 285px;
    }

    .content_left h1 {
        font-size: 20px;
    }

    .content_left p {
        font-size: 15px;
    }

    .content_left button {
        width: 173px;
        height: 48px;
        padding: 13px 13px;
    }

    .content_left img {
        display: none;
    }
}

/* миним экран */
@media(max-width: 373px) {
    .content_left {
        left: 180px;
    }

    .content_right {
        width: 375px;
    }

    #new-collection_it {
        left: 110px;
    }
}
</style>
