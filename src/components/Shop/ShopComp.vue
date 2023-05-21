<template>
    <HeaderComp />
    <div class="container">
        <h2>Магазин</h2>
        <div class="block_btn">
            <button>Все</button>
            <button>Пальто</button>
            <button>Свитшоты</button>
            <button>Кардиганы</button>
            <button>Толстовки</button>
        </div>
        <div class="block_item">
            <ProductsComp/>
        </div>
    </div>
</template>

<script>
import HeaderComp from '../Header/HeaderComp.vue';
import ProductsComp from './Products/ProductsComp.vue';
export default {
    components: {
        HeaderComp, ProductsComp
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style scoped>
.container {
    position: relative;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    width: 1200px;
    height: auto;
}
.block_btn button {
    margin-top: 200px;
    width: 191px;
    height: 62px;
    cursor: pointer;
    border: 1px solid #000000;
    margin-right: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000000;
    background-color: transparent;
}
.block_btn button:first-child {
    background-color: #000000;
    color: white;
    width: 162px;
}
@media(max-width: 1480px) {
    .block_btn button {margin-top: 100px;}
     .block_btn { width: 1100px;}
}
</style>