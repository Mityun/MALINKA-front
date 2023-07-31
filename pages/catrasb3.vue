<template>
  <section>
      <Navbar />
      <div class="flex justify-center">
        <div class="main2 flex flex-col justify-center mt-28 text-2xl w-5/6">
            <div class="w-5/6 ">
                <div class="fl flex flex-row">Каталог &nbsp;/ <div class="text-[#BC1142]"> &nbsp; Raspberry pi </div> &nbsp; / &nbsp; <div class="text-[#BC1142]"> Raspberry pi3 </div></div>
            </div>
        </div>
      </div>
      <img src="@/assets/Ellipse21.svg" width="100%" alt="" class="pic1">
      <div class="flex justify-center">
        <div class="w-5/6 justify-center items-center mt-6">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="item in arrar" :key="item.id" class="w-full card flex flex-col justify-between bg-white p-3 rounded-3xl backdrop-opacity-100">
            <div :style="{'background-image': 'url(' + require('/assets/' + item.photo) + ')'}" class="w-full h-64 lll"></div>
            <div class="flex flex-row justify-between">
              <div>
                <div class="text-xs text-[#D2D2D2] line-through">{{item.priceC}} ₽</div>
                <div class="text-2xl text-black">{{item.price}} ₽</div>
                <div class="text-2xl text-black">{{item.name}}</div>
              </div>
              <div class="skidka text-2xl text-black border border-[#BC1142] rounded-3xl h-8 pl-4 pr-4 pb-2">{{item.discount}}</div>
            </div>
            <div class="flex justify-center items-center h-16">
              <NuxtLink to="/main" class="z-10">
                <div class="but flex flex-row justify-center rounded-3xl border border-[#BC1142] items-center">
                  <div class="text-[#BC1142] p-2 pl-11 pr-11">Купить</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/main" class="z-10" style="display:none" @click.prevent="openUser(item)">
                <div class="but flex flex-row justify-center rounded-3xl border border-black items-center ">
                  <div class="text-black p-2 pl-11 pr-11">Предзакать</div>
                </div>
              </NuxtLink>
            </div>
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
import raspData from '@/components/raspData.js'

export default {
  components: {
    Navbar, Under
  },
  data(){
    return{
      arrar: raspData,
    }
  }
}
</script>

<style>
.pic1{
  position: absolute;
  z-index: 0;
}
.lll{
  background-size: cover;
}

</style>