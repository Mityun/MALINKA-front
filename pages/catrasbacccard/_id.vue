<template>
  <section>
    <Navbar />
   
<div class="mt-28">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
                class="main2 flex flex-col justify-center text-2xl w-2/3 max-w-[1066px]"
            >
                <div class="max-w-[1066px]">
                    <div class="fl flex flex-row">
                        <NuxtLink to="/rasb"> Каталог &nbsp;/ </NuxtLink>
                        <NuxtLink to="/rasb" class="text-[#BC1142]">&nbsp; Raspberry Pi</NuxtLink>
                        &nbsp; / &nbsp;
                        <NuxtLink class="text-[#BC1142]" to="/catrasbacccard/catrasbacc"> Аксессуары</NuxtLink>
                        &nbsp; / &nbsp;
                        <div class="text-[#BC1142]" >{{base.name}}</div>
                    </div>
                </div>
            </div>
      </ol>
    </nav>
      <div class="w-full bg-white min-h-[133px] mt-28 pt-16 pb-16 flex flex-col justify-center items-center">
        <div class="max-w-[1112px] w-auto">
          <div class="flex flex-row justify-start max-w-[1112px]">
            <div class="flex flex-row h-[471px]">
              <div class="-mt-4 w-40" style="overflow-y: scroll;">
                <div class=" w-36 h-36 bg-black mt-4"></div>
                <div class=" w-36 h-36 bg-black mt-4"></div>
                <div class=" w-36 h-36 bg-black mt-4"></div>
                <div class=" w-36 h-36 bg-black mt-4"></div>
                <div class=" w-36 h-36 bg-black mt-4"></div>
              </div>
              <img :src="base.photo_url" class="h-[471px] w-[471px] ml-4" >
            </div>
            <div class="flex flex-col ml-4 basis-[45%]">
              <p class="text-4xl font-medium black " style="white-space:nowrap"> {{base.name}}</p>
              <div class="mt-10">
                <div class="text-5xl text-black flex flex-row items-end font-semibold" v-if="base.discount != 0">{{Number(base.priceDiscounted).toLocaleString('ru-RU')}} <p class="text-xl ml-1">₽</p></div>
                <div class="text-5xl text-black flex flex-row items-end font-semibold" v-else>{{Number(base.price).toLocaleString('ru-RU')}} <p class="text-xl ml-1">₽</p></div>
              </div>
              <button type="submit" class="h-[60px] mt-10 flex w-full items-center justify-center rounded-[100px] border-2 border-[#BC1142] bg-[#BC1142] px-8 py-3 text-2xl font-medium text-white" @click.prevent="cartAdd(base)">Купить</button>
              <div class="rounded-full border-2 border-[#BC1142] grid grid-cols-3 mt-10">
                  <div style="cursor:pointer;" @click="minus(base)" class="flex justify-center items-center p-2" ><img src="@/assets/Line10red.svg" alt=""></div>
                  <div class="p-auto w-auto flex justify-center items-center text-xl font-bold text-[#BC1142]" v-bind:id="base.id">{{base.count}}</div>
                  <div style="cursor:pointer;" @click="plus(base)" class="flex justify-center items-center p-2"><img src="@/assets/Group30red.svg" alt=""></div>
              </div>
            </div>
          </div>
          <div class="text-4xl text-black flex flex-row items-end font-semibold mt-10">Описание</div>
          <div class="text-xl text-black flex flex-row items-end font-[400] mt-10">{{base.description}} Raspberry Pi 4 Model B новая модель из линейки популярных микрокомпьютеров Raspberry Pi. Это компактный одноплатный компьютер на базе процессора Broadcom BCM2711, Cortex-A72 @В 1.5GHz с 2Гб оперативной памяти. Разработчики добавили в Raspberry Pi 4 такие востребованные интерфейсы как USB 3.0, Gigabit Ethernet, Bluetooth 5.0, micro HDMI и реализовали поддержку видео 4К. Также появился новый разъем питания USB Type-C вместо старого разъема micro USB. Вместо полноразмерного разъема HDMI в Raspberry Pi 4 реализованы 2 порта micro HDMI, что дает возможность подключить 2 монитора с разрешением 4K. В В В В Разъем GPIO 40 pin позволяет подключать к микрокомпьютеру разнообразные датчики, индикацию, элементы управления, программируемые микроконтроллеры, исполняющие устройства и использовать Raspberry Pi 4 в самых различных сферах, таких как «умный дом», автоматизация процессов, робототехника и т.п. </div>
          <div class="text-4xl text-black flex flex-row items-end font-semibold mt-10">Характеристики</div>
          <div class="flex mt-10 text-3xl font-[400]">
            <div class="basis-1/2 flex flex-col">
              <div class="flex flex-row items-center">Цвет <div class="w-full ml-2 bor"></div> </div>
              <div class="flex flex-row items-center">Длина <div class="w-full ml-2 bor"></div> </div>
              <div class="flex flex-row items-center">Цвет <div class="w-full ml-2 bor"></div> </div>
              <div class="flex flex-row items-center">Длина <div class="w-full ml-2 bor"></div> </div>
              <div class="flex flex-row items-center">Цвет <div class="w-full ml-2 bor"></div> </div>
              <div class="flex flex-row items-center">Длина <div class="w-full ml-2 bor"></div> </div>
            </div>
            <div class="basis-1/2 flex flex-col justify-start opacity-80">
              <div class="ml-2 text-2xl mt-[4px]">Черный</div>
              <div class="ml-2 text-2xl mt-[4px]">7-8 метров</div>
              <div class="ml-2 text-2xl mt-[4px]">Черный</div>
              <div class="ml-2 text-2xl mt-[4px]">7-8 метров</div>
              <div class="ml-2 text-2xl mt-[4px]">Черный</div>
              <div class="ml-2 text-2xl mt-[4px]">7-8 метров</div>
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
import Under from "@/components/Under.vue";
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar,
        Under,
    },
    data() {
        return {
            arrar: [],
            base: {},
            
        };
    },
    methods: {
        fetchProducts() {
            fetch(`${process.env.BASE_URL}/products`)
            .then(response => response.json())
            .then(products => {
                for (let i = 0; i < products.length; i++) {
                    this.arrar.push(products[i]);

                    // calculate discount and save if in priceC atrtibute
                    if (products[i].discount != 0) {
                        let priceDiscounted = products[i].price * (100 - products[i].discount) / 100;
                        priceDiscounted = Math.round(priceDiscounted);
                        this.arrar[i].priceDiscounted = priceDiscounted;
                    }



                    console.log(this.arrar);
                    this.base = this.arrar[Number(this.$route.params.id) - 1];
                }
                this.base.count = 1;
                console.log(this.base);
            })
            .catch(error => console.error(error));
        },
        cartAdd(base) {
            console.log(this.base);
            localStorage.setItem(base.id, JSON.stringify(base));
        },
        plus(base){
        let k = Number(document.getElementById(base.id).innerHTML)
        if (Number(k) < 99) {
          document.getElementById(base.id).innerHTML = k + 1
          this.base.count = this.base.count + 1
        }
      },
      minus(base){
        let k = Number(document.getElementById(base.id).innerHTML)
        if (k <= 1) {
            console.log("Pon");
        } else {
          document.getElementById(base.id).innerHTML = k - 1
          this.base.count = this.base.count - 1   
        }
    }
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>

<style>
.ladnobut{
    user-select: none
}
.bor{
  border-bottom: 1px black dashed;
}
</style>