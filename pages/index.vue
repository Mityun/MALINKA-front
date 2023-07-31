<template>
  <section>
    <Navbar />
    <img src="@/assets/Ellipse20.svg" width="100%" alt="" class="pic1">
    <div class="flex justify-center mt-24">
      <div class="container flex flex-row h-96 w-5/6">
        <div class="basis-1/3 flex flex-col">
          <div class="w-full h-full p-2">
            <div class="w-full h-full bg-[#D9D9D9] backdrop-opacity-100"></div>
          </div>
          <NuxtLink to="/main" class="z-10">
          <div class="but flex flex-row justify-around rounded-3xl border w-1/2 border-[#BC1142] items-center">
            <div class="text-[#BC1142] p-2">Raspberry Pi</div>
            <img src="@/assets/Arrow1.svg" alt="">
          </div>
          </NuxtLink>
        </div>
        <div class="basis-1/3 flex flex-col">
          <div class="w-full h-full p-2">
            <div class="w-full h-full bg-[#D9D9D9] backdrop-opacity-100"></div>
          </div>
          <NuxtLink to="/main" class="z-10">
            <div class="but flex flex-row justify-around rounded-3xl border w-1/2 border-[#EA7102] items-center">
              <div class="text-[#EA7102] p-2">Orange Pi</div>
              <img src="@/assets/Arrow2.svg" alt="">
            </div>
          </NuxtLink>
        </div>
        <div class=" basis-1/3 text flex flex-col">
          <div class="text-3xl font-semibold mt-2">Кто мы?</div>
          <div class="flex items-center h-2/3 text-xl"> 
            <div>
              Да я ебу что ли? Мы ахуенные короче, это да. Ебашим тут как шлюхи, пиздец конечно. Короче да, давайте прям щас 100500 тыщ денег нам всем ;]
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-52">
      <div class="container flex flex-row h-96 w-5/6">
        <div class="basis-1/2 flex flex-col justify-between">
          <div class="text-3xl font-semibold mt-2">А я в залупе живу, ко мне доставите?</div>
          <div class="flex flex-col">
           <div class="text-xl w-5/6">
             Нихуя ты выдал! Конечно доставим, мужик! Ведь мы доставляем по <b>всему СНГ! Ты только выбери!</b> 
             </div>
            <NuxtLink to="/main" class="z-10">
              <div class="but flex flex-row justify-around rounded-3xl border w-1/2 border-black items-center">
                <div class="text-black p-2">К каталогу</div>
                <img src="@/assets/Arrow3.svg" alt="">
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="basis-1/2 flex flex-col">
          <div class="w-full h-full p-2">
            <div class="w-full h-full bg-[#D9D9D9] backdrop-opacity-100"></div>
          </div>
          <NuxtLink to="/main" class="z-10">
            <div class="but flex flex-row justify-around rounded-3xl border w-1/2 border-black items-center">
              <div class="text-black p-2">Больше о нас</div>
              <img src="@/assets/Arrow3.svg" alt="">
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex mt-36 justify-center">
      <div class="text-5xl w-5/6 font-semibold mt-2">
        Немного <br> статистики
      </div>
    </div>
    <img src="@/assets/Ellipse19.svg" width="100%" alt="" class="pic1">

    <div class="flex justify-center mt-36">
      <div class="container flex flex-row h-96 w-2/3">
        <div class="basis-1/3 flex flex-col justify-start">
          <div class="card w-full h-1/3 rounded-3xl border-2 border-[#BC1142] bg-[#D2D2D2] backdrop-opacity-100 flex flex-row justify-around items-center p-3">
            <div class="text-8xl font-semibold w-1/2">
              281
            </div>
            <div class="text-xs w-1/3"> Столько людей уже получили свои заказы! </div>
          </div>
        </div>
        <div class="basis-1/3 flex flex-col justify-center">
          <div class="card w-full h-1/3 rounded-3xl border-2 border-[#EA7102] bg-[#D2D2D2] backdrop-opacity-100 flex flex-row justify-around items-center p-3">
            <div class="text-8xl font-semibold w-1/2">
              37
            </div>
            <div class="text-xs w-1/3"> Заказов было составлено за последний месяц! </div>
          </div>
        </div>
        <div class=" basis-1/3 text flex flex-col justify-end">
          <div class="card w-full h-1/3 flex flex-row justify-center items-center">
            <div class="text-8xl font-semibold">
              1
            </div>
            <div class="text-xs "> 
            <div class="text-5xl font-semibold"> Ты </div> <br> еще не заказалы! 
            </div>
          </div>
          <div class="flex justify-center">
            <NuxtLink to="/main" class="z-10">
              <div class="but flex flex-row justify-around rounded-3xl border w-full border-black items-center">
                <div class="text-black p-2">Отбросить сомнения</div>
                <img src="@/assets/Arrow3.svg" alt="">
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Under />
  </section>
</template>

<script>
import Under from '@/components/Under.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar, Under
  }
}
</script>

<style>
html{
  font-family: 'Montserrat', sans-serif;
}
body{
  width: 100%;
  height: 100%;
  background-color: #D2D2D2;
  font-family: 'Montserrat', sans-serif;
}
.pic1{
  position: absolute;
  z-index: 0;
}
</style>
