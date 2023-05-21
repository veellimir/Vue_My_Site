<template>
    <div class="container_item">
        <div class="item">
            <img src="@/assets/itemone.png" alt="">
            <h3>Футболка USA  Ⴜ</h3>
            <p>1222  Ⴜ</p>
        </div>
        <div class="item">
            <img src="@/assets/itemtwo.png" alt="">
            <h3>Купальник Glow</h3>
            <p>2222 Ⴜ</p>
        </div>
        <div class="item">
            <img src="@/assets/itemtree.png" alt="">
            <h3>Свитшот Sweet Shot</h3>
            <p>3422  Ⴜ</p>
        </div>
        <div class="item">
            <img src="@/assets/itemtwo.png" alt="">
            <h3>Купальник Glow</h3>
            <p>2222 Ⴜ</p>
        </div>
        <div class="item">
            <img src="@/assets/itemone.png" alt="">
            <h3>Футболка USA  Ⴜ</h3>
            <p>1222  Ⴜ</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {

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
.container_item {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
}

.item {
    margin-right: 50px;
    margin-bottom: 50px;
}

.item h3 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000000;
    text-align: center;
    margin-top: 30px;
}

.item p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #9C9C9C;
    text-align: center;
    margin-top: 20px;
}
</style>