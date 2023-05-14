<template>
    <div class="menu_popup">
        <div class="block_service">
            <ul>
                <li>Услуга</li>
                <li>Услуга</li>
                <li>Услуга</li>
                <li>Услуга</li>
                <li>Услуга</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
  
<style scoped>
* {
    background-color: transparent;
}
.menu_popup {
    position: absolute;
    right: 94px;
    top: 90px;
    width: 40vh;
    height: 30vh;
    background-color: #29343E;
}
.block_service ul {
    list-style: none; 
    color: #ffff;
    font-size: 30px;
    margin: 20px;
}
.block_service li {margin-bottom: 15px; cursor: pointer;}
</style>
  