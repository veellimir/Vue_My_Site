<template>
  <div>
    <HeaderComp/>
    <MainComp/>
  </div>
</template>

<script>
import MainComp from "@/components/Main/MainComp.vue";
import HeaderComp from "@/components/Header/HeaderComp.vue"

export default {
  components: {
    HeaderComp, MainComp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #29343E;
  font-family: 'Wix Madefor Display';
}
p {font-size: 16px; color: rgba(255, 255, 255, 0.7);}
h1 {
  color: #FFBD4E;
  font-size: 96px;
}
h2 {color: #ffff; text-transform: uppercase; font-size: 40px; font-weight: 100;}
h3 {text-transform: uppercase; font-size: 26px; color: #ffff;}
h4 {text-transform: uppercase; font-size: 26px; color: #FFBD4E;}
</style>
