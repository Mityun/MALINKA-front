<template>
  <section>
    <Navbar />
    <div class="ml-10 flex justify-center md:mx-auto md:w-5/6">
      <div
        class="main2 mt-28 flex flex-col items-center justify-center text-2xl md:mt-16 md:w-full"
      >
        <div class="w-full">
          <div class="fl flex flex-row">
            Каталог &nbsp;/ &nbsp;
            <div class="text-[#BC1142]">Raspberry pi</div>
          </div>
        </div>
        <div
          class="lana hhh z-10 font-extrabold text-[#D2D2D2] xl:text-[255px] lg:text-[220px] md:w-full md:text-6xl"
        >
          Raspberry
          <br class="md:hidden" />
          pi
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <img
        src="@/assets/Raspberry_Pi_Logo 1.svg"
        style="position: absolute"
        class="z-0 -mt-56 w-1/3"
        alt=""
      />
    </div>
    <div class="mt-20 flex justify-center">
      <div
        class="mmm grid w-5/6 max-w-[1336px] grid-cols-2 items-start gap-4 md:grid-cols-1"
      >
        <NuxtLink
          to="/catrasb3card/catrasb3"
          class="flex flex-col justify-center rounded-3xl bg-white p-3 backdrop-opacity-100"
        >
          <img src="@/assets/image2.svg" alt="" />
          <div class="ml-3 flex h-28 items-center text-2xl text-[#BC1142]">
            <div class="rounded-3xl border-2 border-[#D2D2D2] p-2 pl-5 pr-5">
              Raspberry Pi 3
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/catrasbacccard/catrasbacc"
          class="flex flex-col justify-center rounded-3xl bg-white p-3 backdrop-opacity-100"
        >
          <div class="flex items-center justify-center">
            <img src="@/assets/image3.svg" alt="" class="w-2/3" />
          </div>
          <div class="ml-3 flex h-28 items-center text-2xl text-[#BC1142]">
            <div class="rounded-3xl border-2 border-[#D2D2D2] p-2 pl-5 pr-5">
              Аксессуары
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/catrasb4card/catrasb4"
          class="flex flex-col justify-center rounded-3xl bg-white p-3 backdrop-opacity-100"
        >
          <img src="@/assets/image2.svg" alt="" />
          <div class="ml-3 flex h-28 items-center text-2xl text-[#BC1142]">
            <div class="rounded-3xl border-2 border-[#D2D2D2] p-2 pl-5 pr-5">
              Raspberry Pi 4
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <Under />
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Under from '@/components/Under.vue'

export default {
  components: {
    Navbar,
    Under
  }
}
</script>

<style>
.lana {
  line-height: 1;
}
.mmm {
  grid-auto-rows: minmax(100px, auto);
}
.hhh {
  text-shadow:
    -0 -5px 0 #bc1142,
    0 -5px 0 #bc1142,
    -0 5px 0 #bc1142,
    0 5px 0 #bc1142,
    -5px -0 0 #bc1142,
    5px -0 0 #bc1142,
    -5px 0 0 #bc1142,
    5px 0 0 #bc1142,
    -1px -5px 0 #bc1142,
    1px -5px 0 #bc1142,
    -1px 5px 0 #bc1142,
    1px 5px 0 #bc1142,
    -5px -1px 0 #bc1142,
    5px -1px 0 #bc1142,
    -5px 1px 0 #bc1142,
    5px 1px 0 #bc1142,
    -2px -5px 0 #bc1142,
    2px -5px 0 #bc1142,
    -2px 5px 0 #bc1142,
    2px 5px 0 #bc1142,
    -5px -2px 0 #bc1142,
    5px -2px 0 #bc1142,
    -5px 2px 0 #bc1142,
    5px 2px 0 #bc1142,
    -3px -5px 0 #bc1142,
    3px -5px 0 #bc1142,
    -3px 5px 0 #bc1142,
    3px 5px 0 #bc1142,
    -5px -3px 0 #bc1142,
    5px -3px 0 #bc1142,
    -5px 3px 0 #bc1142,
    5px 3px 0 #bc1142,
    -4px -5px 0 #bc1142,
    4px -5px 0 #bc1142,
    -4px 5px 0 #bc1142,
    4px 5px 0 #bc1142,
    -5px -4px 0 #bc1142,
    5px -4px 0 #bc1142,
    -5px 4px 0 #bc1142,
    5px 4px 0 #bc1142,
    -5px -5px 0 #bc1142,
    5px -5px 0 #bc1142,
    -5px 5px 0 #bc1142,
    5px 5px 0 #bc1142,
    -5px -5px 0 #bc1142,
    5px -5px 0 #bc1142,
    -5px 5px 0 #bc1142,
    5px 5px 0 #bc1142;
}
</style>
