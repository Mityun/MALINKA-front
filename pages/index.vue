<template>
  <section>
    <Navbar />
    <div class="flex justify-center">
      <img
        src="@/assets/Ellipse20.svg"
        width="100%"
        alt=""
        class="pic1 -z-50 max-w-[1419px]"
      />
    </div>
    <div class="mt-24 flex justify-center md:mt-16">
      <div
        class="container flex h-96 w-5/6 max-w-[1121px] flex-row md:h-auto md:flex-col md:gap-y-10"
      >
        <div class="flex basis-[27%] flex-col md:basis-auto">
          <div class="h-full w-full p-2">
            <div
              class="h-full min-h-[322px] w-full bg-[#D9D9D9] backdrop-opacity-100"
            >
            <img
              src="@/assets/raspberry_pi_background.png"
              class="h-full w-full backdrop-opacity-100"
              alt=""
            />
          </div>
          </div>
          <NuxtLink to="/rasb" class="z-10">
            <div
              class="but ml-[8px] flex w-2/3 flex-row items-center justify-around rounded-3xl border border-[#BC1142]"
            >
              <div class="p-2 text-lg font-semibold text-[#BC1142]">
                Raspberry Pi
              </div>
              <img src="@/assets/Arrow1.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
        <div class="flex basis-[27%] flex-col md:basis-auto">
          <div class="h-full w-full p-2">
            <div
              class="h-full min-h-[322px] w-full bg-[#D9D9D9] backdrop-opacity-100"
            >
            <img
              src="@/assets/orange_pi_background.png"
              class="h-full w-full backdrop-opacity-100"
              alt=""
            />
          </div>
          </div>
          <NuxtLink to="/orange" class="z-10">
            <div
              class="but ml-[8px] flex w-2/3 flex-row items-center justify-around rounded-3xl border border-[#EA7102]"
            >
              <div class="p-2 text-lg font-semibold text-[#EA7102]">
                Orange Pi
              </div>
              <img src="@/assets/Arrow2.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
        <div class="text z-50 flex basis-[46%] flex-col md:basis-auto">
          <div class="mt-2 text-3xl font-semibold">DEFAULT это -</div>
          <div class="flex h-2/3 flex-col items-center justify-between text-xl">
            <div>
              <b>Регулярные поставки!</b>
              <br />
              Мы получаем новые микросхемы
              <b>каждую неделю,</b>
              поэтому вы сможете
              <b>быстрее всех</b>
              получать новинки!
              <br />
            </div>
            <div class="mt-[13px]">
              <b>Низкие цены!</b>
              <br />
              Мы занимаемся прямым импортом
              <b>с официального завода Raspberry Pi.</b>
              Такой метод позволяет вести самую прилекательную ценовую политику
              для наших клиентов!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-52 flex justify-center md:mt-20">
      <div
        class="container flex h-96 w-5/6 max-w-[1121px] flex-row md:h-auto md:flex-col"
      >
        <div class="z-50 flex basis-1/2 flex-col justify-between md:gap-y-2">
          <div class="mt-2 text-3xl font-semibold">
            Я нахожусь не в России, возможна ли доставка?
          </div>
          <div class="w-5/6 text-xl">
            <b>Не проблема!</b>
            <br />
            Наша логистика обеспечивает поставки
            <b>более чем в 40 стран!</b>
          </div>
          <div class="w-5/6 text-xl">
            А поскольку наш склад работает
            <b>круглосуточно,</b>
            ваш заказ незамедлительно будет собран, чтобы вы как можно скорее
            получили товар!
          </div>
          <div class="flex flex-col">
            <NuxtLink to="/rasb" class="z-10">
              <div
                class="but flex w-1/2 flex-row items-center justify-around rounded-3xl border border-black"
              >
                <div class="p-2 text-xl font-semibold text-black">
                  К каталогу
                </div>
                <img src="@/assets/Arrow3.svg" alt="" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="flex basis-1/2 flex-col md:hidden">
          <div class="h-full w-full p-2">
            <img
              src="@/assets/map.jpg"
              class="h-full w-full backdrop-opacity-100"
              alt=""
            />
          </div>
          <NuxtLink to="/about" class="z-10">
            <div
              class="but ml-2 flex w-1/2 flex-row items-center justify-around rounded-3xl border border-black"
            >
              <div class="p-2 text-xl font-semibold text-black">
                Больше о нас
              </div>
              <img src="@/assets/Arrow3.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-36 flex justify-center md:mt-20">
      <div class="mt-2 w-5/6 max-w-[1121px] text-5xl font-semibold">
        Немного
        <br />
        статистики
      </div>
    </div>
    <div class="-z-50 flex justify-center">
      <img
        src="@/assets/Ellipse19.svg"
        width="100%"
        alt=""
        class="pic1 max-w-[1419px]"
      />
    </div>

    <div class="z-30 mt-36 flex justify-center md:mt-10">
      <div
        class="container flex h-96 w-5/6 max-w-[1121px] flex-row xl:h-[450px] md:flex-col"
      >
        <div class="-ml-4 flex basis-1/3 flex-col justify-start p-4 md:p-2">
          <div
            class="card flex h-1/3 w-full flex-row items-center justify-around rounded-3xl border-2 border-[#BC1142] bg-[#D2D2D2] p-3 backdrop-opacity-100 md:h-40 md:p-2"
          >
            <div class="w-1/2 text-8xl font-semibold md:text-6xl">281</div>
            <div class="w-1/3 text-xs xl:w-1/2">
              <div class="font-semibold xl:text-base lg:text-sm">
                <b>Электронных плат мы отправили клиентам!</b>
              </div>
            </div>
          </div>
        </div>
        <div class="-ml-4 flex basis-1/3 flex-col justify-center p-4 md:p-2">
          <div
            class="card flex h-1/3 w-full flex-row items-center justify-around rounded-3xl border-2 border-[#EA7102] bg-[#D2D2D2] p-3 backdrop-opacity-100 md:h-40 md:p-2"
          >
            <div class="w-1/2 text-center text-8xl font-[600] md:text-6xl">
              37
            </div>
            <div class="w-1/2 text-xs">
              <div class="font-[600] xl:text-base lg:text-sm">
                <b>Клиентов уже выбрали нас!</b>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text z-50 -ml-4 flex basis-1/3 flex-col justify-end p-4 md:p-2"
        >
          <div
            class="card flex h-1/3 w-full flex-row items-center justify-center md:h-40 md:p-2"
          >
            <div class="text-8xl font-semibold">1</div>
            <div class="flex h-24 flex-col items-center text-xs">
              <div class="mt-2 text-5xl font-semibold">Ты</div>
              <br />
              <div class="-mt-4 font-[600]">
                Все еще
                <br />
                думаешь!
              </div>
            </div>
          </div>
          <div>
            <NuxtLink to="/rasb" class="z-50 flex justify-center">
              <div
                class="but flex w-1/2 flex-row items-center justify-between rounded-3xl border border-black pl-2 pr-2"
              >
                <div
                  class="w-5/6 p-2 text-center text-xs font-semibold text-black md:w-auto"
                >
                  Отбросить
                  <br />
                  сомнения
                </div>
                <div class="w-1/6">
                  <img src="@/assets/Arrow3.svg" alt="" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[499px] md:mt-40">
      <Under />
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Under from '@/components/Under.vue'

export default {
  components: {
    Navbar,
    Under
  },

  mounted() {
    if (window.innerWidth < 1211) {
      // this.$router.push('/errorScreen')
    }
  }
}
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
}
body {
  width: 100%;
  height: 100%;
  background-color: #d2d2d2;
  font-family: 'Montserrat', sans-serif;
}
.pic1 {
  position: absolute;
  z-index: 0;
}
.but {
  white-space: nowrap;
}
.map {
  background: url('../assets/map.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
