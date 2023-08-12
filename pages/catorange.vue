<template>
  <section>
      <Navbar />
      <div class="flex justify-center">
        <div class="main2 flex flex-col justify-center mt-28 text-2xl w-2/3 max-w-[1196px]">
            <div class="w-2/3 max-w-[1066px]">
                <div class="fl flex flex-row">Каталог &nbsp;/ <div class="text-[#EA7102]"> &nbsp; Orange pi </div> &nbsp; / &nbsp; <div class="text-[#EA7102]"> Orange Pi 16 </div></div>
            </div>
        </div>
      </div>
      <img src="@/assets/Ellipse22.svg" width="100%" alt="" class="pic1">
      <div class="flex justify-center">
        <div class="w-2/3 justify-center items-center mt-6 max-w-[1066px]">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="item in arrar" :key="item.id" class="w-full card flex flex-col justify-between bg-white p-3 rounded-3xl backdrop-opacity-100 max-w-[350px]">
            <div :style="{'background-image': 'url(' + require('/assets/' + item.photo) + ')'}" class="w-full h-64 lll"></div>
            <div class="flex flex-row justify-between p-1">
              <div class="ml-[13px]">
                <div class="text-lg text-[#D2D2D2] line-through" v-bind:id="item.id + 'b'">{{Number(item.priceC).toLocaleString('ru-RU')}} ₽</div>
                <div class="flex flex-row">
                  <div class="text-4xl text-black font-semibold">{{Number(item.price).toLocaleString('ru-RU')}}</div>
                  <div class="text-4xl text-black ml-1">₽</div>
                </div>
                <div class="text-2xl text-black">{{item.name}}</div>
              </div>
              <div class="skidka text-2xl text-black border-[#EA7102] border-[2px] rounded-2xl h-12 pl-4 pr-4 flex flex-row justify-center items-center" v-bind:id="item.id + 'a' ">
                <div>{{item.discount}}</div>
              </div>
            </div>
            <div class="flex justify-center items-center h-16">
              <div class="z-10 hov" @click.prevent="openUser(item)">
                <div class="but flex flex-row justify-center border-[2px] border-[#EA7102] items-center rounded-full">
                  <div class="text-[#EA7102] p-3 pl-[71px] pr-[71px] font-semibold">Купить</div>
                </div>
              </div>
              <div to="/main" class="z-10 hov" style="display:none" @click="openUser(item)">
                <div class="but flex flex-row justify-center rounded-3xl border border-black items-center ">
                  <div class="text-black p-2 pl-11 pr-11">Предзакать</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <Under />
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Under from '@/components/Under.vue'
import raspData from '@/components/raspData.js'

export default {
  components: {
    Navbar, Under
  },
  data(){
    return{
      arrar: raspData,
    }
  },
  methods: {
    openUser(item) {
      localStorage.setItem(item.id, JSON.stringify(item));
    },
  },
  mounted() {
    
    for (let n = 1; n < this.arrar.length + 1 ; n++) {
      if (this.arrar[n-1].priceC == '') {
        document.getElementById(n + 'b').style.display = 'none'
        document.getElementById(n + 'a').style.display = 'none'
      } else {
        console.log('stas');
      }
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
.hov:hover{
  cursor: pointer;
}
.dis{
  display: none;
}
</style>