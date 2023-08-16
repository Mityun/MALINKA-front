<template>
  <section>
    <Navbar />
    <div class="flex justify-center">
      <img src="@/assets/Ellipse20.svg" width="100%" alt="" class="pic1 max-w-[1419px]" />
    </div>
    <div class="flex justify-center mt-24">
      <div class="container flex flex-row h-96 w-5/6 max-w-[1024px]">
        <div class="basis-[27%] flex flex-col">
          <div class="w-full h-full p-2">
            <div class="w-full h-full bg-[#D9D9D9] backdrop-opacity-100"></div>
          </div>
          <NuxtLink to="/rasb" class="z-10">
            <div
              class="but flex flex-row justify-around rounded-3xl border w-2/3 border-[#BC1142] items-center ml-[8px]"
            >
              <div class="text-[#BC1142] p-2 font-semibold text-lg">Raspberry Pi</div>
              <img src="@/assets/Arrow1.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
        <div class="basis-[27%] flex flex-col">
          <div class="w-full h-full p-2">
            <div class="w-full h-full bg-[#D9D9D9] backdrop-opacity-100"></div>
          </div>
          <NuxtLink to="/orange" class="z-10">
            <div
              class="but flex flex-row justify-around rounded-3xl border w-2/3 border-[#EA7102] items-center ml-[8px]"
            >
              <div class="text-[#EA7102] p-2 font-semibold text-lg">Orange Pi</div>
              <img src="@/assets/Arrow2.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
        <div class="basis-[46%] text flex flex-col">
          <div class="text-3xl font-semibold mt-2">DEFAULT это -</div>
          <div class="flex items-center h-2/3 text-lg flex-col justify-between">
            <div>
              <b>Регулярные поставки!</b> <br>
              Мы получаем новые микросхемы <b>каждую неделю,</b> поэтому вы сможете <b>быстрее всех</b> получать новинки! <br>
            </div>
            <div class="mt-[40px]">
              <b>Низкие цены!</b> <br>
              Мы занимаемся прямым импортом <b>с официального завода Raspberry Pi.</b> Такой метод позволяет вести самую прилекательную ценовую политику для наших клиентов!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-52">
      <div class="container flex flex-row h-96 w-5/6 max-w-[1024px]">
        <div class="basis-1/2 flex flex-col justify-between">
          <div class="text-3xl font-semibold mt-2">
            Я нахожусь не в России, возможна ли доставка?
          </div>
          <div class="text-xl w-5/6">
            <b>Не проблема!</b> <br>
            Наша логистика обеспечивает поставки <b>более чем в 40 стран! </b>

          </div>
          <div class="text-xl w-5/6">
              А поскольку наш склад работает <b>круглосуточно,</b> ваш заказ незамедлительно будет собран, чтобы вы как можно скорее получили товар!
          </div>
          <div class="flex flex-col">
            <NuxtLink to="/rasb" class="z-10">
              <div
                class="but flex flex-row justify-around rounded-3xl border w-1/2 border-black items-center"
              >
                <div class="text-black p-2 font-semibold text-xl">К каталогу</div>
                <img src="@/assets/Arrow3.svg" alt="" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="basis-1/2 flex flex-col">
          <div class="w-full h-full p-2">
            <div class="w-full h-full bg-[#D9D9D9] backdrop-opacity-100"></div>
          </div>
          <NuxtLink to="/about" class="z-10">
            <div
              class="but flex flex-row justify-around rounded-3xl border w-1/2 border-black items-center ml-2"
            >
              <div class="text-black p-2 font-semibold text-xl ">Больше о нас</div>
              <img src="@/assets/Arrow3.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex mt-36 justify-center">
      <div class="text-5xl w-5/6 font-semibold mt-2 max-w-[1024px]">
        Немного <br />
        статистики
      </div>
    </div>
    <div class="flex justify-center -z-50">
      <img src="@/assets/Ellipse19.svg" width="100%" alt="" class="pic1 max-w-[1419px]" />
    </div>

    <div class="flex justify-center mt-36 z-30">
      <div class="container flex flex-row h-96 w-5/6 max-w-[821px]">
        <div class="basis-1/3 flex flex-col justify-start">
          <div
            class="card w-[91%] h-1/3 rounded-3xl border-2 border-[#BC1142] bg-[#D2D2D2] backdrop-opacity-100 flex flex-row justify-around items-center p-3"
          >
            <div class="text-7xl font-semibold w-1/2">281</div>
            <div class="text-xs w-1/3">
              <div class="font-semibold"><b>Электронных плат мы отправили клиентам!</b></div>
            </div>
          </div>
        </div>
        <div class="basis-1/3 flex flex-col justify-center">
          <div
            class="card w-[91%] h-1/3 rounded-3xl border-2 border-[#EA7102] bg-[#D2D2D2] backdrop-opacity-100 flex flex-row justify-around items-center p-3"
          >
            <div class="text-7xl font-semibold w-1/2 text-center">37</div>
            <div class="text-xs w-1/2">
              <div class="font-semibold"><b>Клиентов уже выбрали нас!</b></div>
            </div>
          </div>
        </div>
        <div class="basis-1/3 text flex flex-col justify-end z-50">
          <div
            class="card w-[91%] h-1/3 flex flex-row justify-center items-center"
          >
            <div class="text-8xl font-semibold">1</div>
            <div class="text-xs">
              <div class="text-5xl font-semibold">Ты</div>
              <br />
              еще не заказал!
            </div>
          </div>
          <div>
            <NuxtLink to="/rasb" class="z-50">
              <div
                class="but flex flex-row justify-between rounded-3xl border w-full border-black items-center pl-2 pr-2"
              >
                <div class="text-black p-2 font-semibold text-xs text-center w-5/6">Отбросить <br> сомнения</div>
                <div class="w-1/6"><img src="@/assets/Arrow3.svg" alt="" class="ml-[11px]"></div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[499px]">
      <Under />
    </div>
  </section>
</template>

<script>
import Under from "@/components/Under.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar, Under
  },

  mounted(){
    if (window.innerWidth < 1211) {
      this.$router.push('/hah')
    } else {
      console.log('stanislav');
    }
  }
}

</script>

<style>
html {
  font-family: "Montserrat", sans-serif;
}
body {
  width: 100%;
  height: 100%;
  background-color: #d2d2d2;
  font-family: "Montserrat", sans-serif;
}
.pic1 {
  position: absolute;
  z-index: 0;
}
.but{
  white-space: nowrap;
}
</style>
