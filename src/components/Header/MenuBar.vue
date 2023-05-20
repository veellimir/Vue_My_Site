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
    left: 0;
    top: 0;
    width: 30vh;
    height: 100vh;
    background-color: #6E9C9F;
}
.block_service ul {
    list-style: none; 
    color: #ffff;
    font-size: 30px;
    margin: 20px;
}
.block_service li {margin-bottom: 15px; cursor: pointer;}
</style>
  