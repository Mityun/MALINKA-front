<template>
  <section class="nnn mt-96">
      <div class="main1 flex flex-row items-end h-80 p-0">
          <div class="bottom h-56 w-full flex flex-row justify-around items-center">
              <NuxtLink to="/" class="flex justify-center items-center basis-1/6"><img src="@/assets/BlackLogo1.svg" width="70%" alt=""></NuxtLink>
              <div class="flex flex-col items-center justify-center basis-1/6 h-2/3">
                  <NuxtLink to="/" class="text-2xl font-extralight">Каталог</NuxtLink>
                  <NuxtLink to="/rasb" class="text-lg mt-1 font-thin">Raspberry Pi</NuxtLink>
                  <NuxtLink to="/orange" class="text-lg font-thin">Orange Pi</NuxtLink>
                  <NuxtLink to="/" class="text-lg font-thin">Прочее</NuxtLink>
              </div>
              <div class="flex flex-col items-center justify-center basis-1/6 h-2/3">
                  <NuxtLink to="/" class="text-2xl font-extralight">Контакты</NuxtLink>
                  <NuxtLink to="/" class="text-lg mt-1 font-thin">Для Юр. лиц</NuxtLink>
                  <NuxtLink to="/" class="text-lg font-thin">Для Физ. лиц</NuxtLink>
                  <NuxtLink to="/" class="text-lg font-thin">мы в vk</NuxtLink>
              </div>
              <NuxtLink to="/" class="flex flex-col items-center justify-start text-2xl font-extralight basis-1/6 h-2/3 mar">О нас</NuxtLink>
              <NuxtLink to="/reviews" class="flex flex-col items-center justify-start text-2xl font-extralight basis-1/6 h-2/3 mar">Отзывы</NuxtLink>
              <NuxtLink to="/" class="flex justify-center items-center basis-1/6"><img src="@/assets/m2dgroup.svg" width="100%" alt=""></NuxtLink>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.nnn{
    position:relative;
}
section{
    width: 100%;
}
.bottom{
    background: #D9D9D9;

}
.mar{
    margin-top:30px;
}
</style>