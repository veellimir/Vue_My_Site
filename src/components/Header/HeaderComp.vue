<template>
  <div class="header_main" >
    <div>
        <span className='logo'>Womagazin</span>
        <img src="@/assets/menu_bar.png" alt="Ошибка изображения" id="icon_mobile">
        <ul className='nav'>
          <a href="/main"><li>Главная</li></a>
          <a href="/shop"><li>Магазин</li></a>
          <a href="/about"><li>О бренде</li></a>
          <a href="/contacts"><li>Контакты</li></a>
        </ul>
      </div>
      <div>
        <ul className='call_string'>
          <a href="tel:8-937-186-51-62"><li>+7 (495) 823-54-12</li></a>
        </ul>
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
a {color: #000000;}
.header_main {
  width: 100%;
  margin: auto;
  position: relative;
  padding-top: 50px;
}
.logo {
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.1em;
  position: absolute;
  text-transform: uppercase;
  background: url('@/assets/Vector.png') no-repeat;
  background-position: none center;
  padding-left: 30px;
  margin-left: 20px;
}
#icon_mobile {
  margin-left: 40px;
  width: 30px;
  height: 30px;
  display: none;
  background-color: transparent;
}
.nav {
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 0.02em;
  text-align: center;
  list-style-type: none; 
} 
.nav li {
  display: inline;
  margin-right: 100px;
  cursor: pointer;
  opacity: 0.5;
  transition: color, transform 500ms ease;
  flex-wrap: wrap;
}
.nav li:hover {
  transform: scale(1.5);
  color: #6E9C9F;
}
.call_string {
    float: right;
    margin: -20px 20px;
    background: url('@/assets/Vector_2.png') no-repeat;
    background-size: 30px 30px;
    width: 200px;
    height: 200px;
    white-space: nowrap;
    padding-left: 50px;
    list-style: none;
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
    main {
        top: 950px;
        left: 19%;
    }
}
@media(max-width: 1066px) {
    .nav{
        text-align: left;
        margin-top: 30px;
        padding-left: 30px;
    }
    .logo {
        top: 10px;
        left: 50%;
        transform: translate(-50%);
    }
}
@media(max-width: 845px) {
    .nav, .call_string {
        display: none;
    }
    .content_right {
        height: 352px;  
    }
    #icon_mobile {
        display: block;
        cursor: pointer;
        margin-top: -30px;
    }
    .logo {
        margin: 10px;
        right: 40%;
        transform: translate(-40%);
    }
}
@media(max-width: 833px) {
    .logo {
        position: absolute;
        left: 35%;
        transform: translate(-40%);
        margin-left: 0;
    }
}
/* миним экран */
@media(max-width: 373px) {
    .logo {
        left: 150px;
        width: 200px;
        font-size: 20px;
        background-image: none;
    }
}
</style>
