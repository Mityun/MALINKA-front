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
                        <NuxtLink class="text-[#BC1142]" to="/catrasb4card/catrasb4"> Raspberry Pi 4</NuxtLink>
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
                <img class="w-36 h-36 mt-4 rounded-xl border-2 border-black"
                  v-for="pic in pictures"
                  :key="pic.id"
                  :src="pic"
                  :id="pic"
                  @click.prevent="photo(pic)"
                >
              </div>
              <div :style="{'background-image':'url(' + picture + ')',}" class="h-[471px] w-[471px] ml-4 rounded-xl border-2 border-black bg-cover"></div>
            </div>
            <div class="flex flex-col ml-4 basis-[45%]">
              <p class="text-4xl font-medium black " style="white-space:nowrap"> {{base.name}}</p>
              <div class="mt-10 flex flex-row">
                <div class="text-5xl text-black flex flex-row items-end font-semibold" v-if="base.discount != 0">{{Number(base.priceDiscounted).toLocaleString('ru-RU')}} <p class="text-xl ml-1">₽</p></div>
                <div class="text-5xl text-black flex flex-row items-end font-semibold" v-else>{{Number(base.price).toLocaleString('ru-RU')}} <p class="text-xl ml-1">₽</p></div>

                <div class="text-2xl text-black flex flex-row items-end font-semibold ml-3 opacity-40 line-through" v-if="base.discount != 0">{{Number(base.price).toLocaleString('ru-RU')}} <p class="text-xl ml-1">₽</p></div>
              </div>
              <div v-if="okey" style="cursor:pointer;" class="h-[60px] mt-10 flex w-full items-center justify-center rounded-[100px] border-2 border-[#BC1142] bg-[#BC1142] px-8 py-3 text-2xl font-medium text-white stasik" @click.prevent="cartAdd(base)">Купить</div>
              <div v-else class="h-[60px] mt-10 flex w-full items-center justify-center rounded-[100px] border-2 border-[#BC1142] bg-white px-8 py-3 text-2xl font-medium text-[#BC1142] " >В корзине</div>

              <div class="rounded-full border-2 border-[#BC1142] grid grid-cols-3 mt-10">
                  <div style="cursor:pointer;" @click="minus(base)" class="flex justify-center items-center p-2" ><img src="@/assets/Line10red.svg" alt=""></div>
                  <div class="p-auto w-auto flex justify-center items-center text-xl font-bold text-[#BC1142]" v-bind:id="base.id">{{base.count}}</div>
                  <div style="cursor:pointer;" @click="plus(base)" class="flex justify-center items-center p-2"><img src="@/assets/Group30red.svg" alt=""></div>
              </div>
            </div>
          </div>
          <div class="text-4xl text-black flex flex-row items-end font-semibold mt-10">Описание</div>
          <div class="text-xl text-black flex flex-row items-end font-[400] mt-10">{{base.description}} </div>
          <div class="text-4xl text-black flex flex-row items-end font-semibold mt-10">Характеристики</div>
          <div class="flex mt-10 text-3xl font-[400]">
            <div class="basis-1/2 flex flex-col">
              <div class="flex flex-row items-center"
                 v-for="one in name_technical_specifications"
                :key="one.id"
              >{{one}} <div class="w-full ml-2 bor"></div> </div>
            </div>
            <div class="basis-1/2 flex flex-col justify-start opacity-80">
              <div class="ml-2 text-2xl mt-[4px]"
                 v-for="two in technical_specifications"
                :key="two.id"
              >{{two}}</div>
              
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
            pictures:[],
            prome: [],
            technical_specifications: [],
            name_technical_specifications: [],
            picture: "",
            hor:[],
            okey: true,
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
                    this.base = this.arrar[Number(this.$route.params.id) - 1];

                    if (localStorage.getItem(i) != null) {
                      this.hor.push(JSON.parse(localStorage.getItem(i)))     
                    } 

                }
                
                if (localStorage.getItem(this.base.id) == null) {
                  this.base.count = 1;
                } 
                else{
                  this.base.count = JSON.parse(localStorage.getItem(this.base.id)).count
                }
                this.picture = this.arrar[Number(this.$route.params.id) - 1].photo_url.split(";")[0]
                this.pictures = this.base.photo_url.split(';')
                
                this.prome = this.base.technical_specifications.split(';');

                for (let v = 0; v < this.prome.length; v++) {
                  let ladnoOkey = this.prome[v].split(':');
                  this.name_technical_specifications.push(ladnoOkey[0])
                  this.technical_specifications.push(ladnoOkey[1])
                }

                if (localStorage.getItem(this.base.id) != null) {
                  this.okey = false
                }
               
            })
            .catch(error => console.error(error));
        },
        cartAdd(base) {
            console.log(this.base);
            this.base.main_photo_url = this.pictures[0]
            localStorage.setItem(base.id, JSON.stringify(base));
            this.okey = false
        },
        plus(base){
          this.base.main_photo_url = this.pictures[0]
          let k = Number(document.getElementById(base.id).innerHTML)
          if (Number(k) < 99) {
            document.getElementById(base.id).innerHTML = k + 1
            this.base.count = this.base.count + 1
            if (localStorage.getItem(this.base.id) != null) {
      
                localStorage.removeItem(base.id)
                localStorage.setItem(base.id, JSON.stringify(base));
            }
          }
        },
        minus(base){
          this.base.main_photo_url = this.pictures[0]
          let k = Number(document.getElementById(base.id).innerHTML)
          if (k <= 1) {
            console.log("Pon");
          } else {
            document.getElementById(base.id).innerHTML = k - 1
            this.base.count = this.base.count - 1   
            if (localStorage.getItem(this.base.id) != null) {
                localStorage.removeItem(base.id)
                localStorage.setItem(base.id, JSON.stringify(base));
            }
          }
        },
        photo(pic){
          this.picture = pic
         console.log(document.getElementById(this.base.id+'a'))
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