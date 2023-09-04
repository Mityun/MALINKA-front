<template>
  <section>
      <div class="main grid grid-cols-12 bg-[#D2D2D2] ">
        <div class="photo_navbar">
          <NuxtLink to="/" class="logo"><img src="@/assets/BlackLogo1.svg" width="80%" alt=""></NuxtLink>
        </div>
        <div class="lan">
          <div class="main_navbar max-w-4xl">
            <NuxtLink to="/" class="text-nav">Главная</NuxtLink>
            <div class="text-nav cat1 flex flex-col justify-center z-20">
              <div>Каталог</div>
              <div class="one z-10 flex flex-col duration-100 bg-[#D2D2D2]">
                <NuxtLink to="/rasb" class="cat mt-[20px]"> &#62; Rasberry Pi</NuxtLink>
                <NuxtLink to="/orange" class="cat"> &#62; Orange Pi</NuxtLink>
                <NuxtLink to="/" class="cat"> &#62; Прочее</NuxtLink>
                <div class="flex justify-center mt-4"><img src="@/assets/Line14.svg" alt=""></div>
              </div>
            </div>
            <NuxtLink to="/about" class="text-nav">О нас</NuxtLink>
            <NuxtLink to="/reviews" class="text-nav">Отзывы</NuxtLink>
            <NuxtLink to="/contacts" class="text-nav">Контакты</NuxtLink>
            <NuxtLink to="/" class="search"></NuxtLink>
            <NuxtLink to="/bag" class="bag"><img src="@/assets/bag.svg" alt=""></NuxtLink>
          </div>  
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
section{
    width: 100%;
}
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.main_navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 60px;
    border: 1px solid black;
    border-radius: 100px;
    margin-top: 19px;
}
.photo_navbar{
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
}
.text-nav{
   
    text-decoration: none;
    color: black;
    font-size:20px ;
    font-weight: 100;
}
.lan{
    display: flex;
    justify-content: center;
}
.search{
    height: 85%;
    background-color: #D9D9D9;
    width: 20%;
    border-radius: 100px;
}
.logo{
    display: flex;
    justify-content: center;
}
.bag{
    width: 10%;
}
.cat1{
  height: 60px;
}
.one{
  visibility: hidden;
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: -45px;
  height: 0px;
  overflow: hidden;
  margin-top: 60px;
  border: 1px solid black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.cat1:hover .one{
  visibility: visible;
  height: 150px;
  margin-top: 208px;
}
.one:hover{
  visibility: visible;
}

</style>