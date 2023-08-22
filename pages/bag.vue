<template>
  <section>
      <Navbar />
      <div class="flex justify-center ">
          <div class="w-5/6 max-w-[1196px] flex flex-row justify-between">
            <div class="w-[48%]">

                <div class="text-5xl font-semibold mt-28">
                Корзина
            </div>
            <div class="flex flex-row">
                <div class="allCards w-full">
                    <div v-for="item in hor" :key="item.id" class="flex flex-row justify-between h-44 mt-9 bl w-[96%]" v-bind:id="item.id+'a'">
                        <div class="basis-2/3 flex flex-col justify-between">
                            <div class="text-3xl font-medium relative min-w-full">
                                {{item.name}}
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="card flex flex-row justify-end text-5xl font-semibold items-end" v-if="item.discount != 0">
                                    {{Number(item.priceDiscounted).toLocaleString('ru-RU')}} <div class="text-2xl ml-3">₽</div> 
                                </div>
                                <div class="card flex flex-row justify-end text-5xl font-semibold items-end" v-else>
                                    {{Number(item.price).toLocaleString('ru-RU')}} <div class="text-2xl ml-3">₽</div> 
                                </div>
                                <div>
                                    <div class="max-w-[87%] rounded-full border border-black grid grid-cols-3 ladnobut">
                                        <div style="cursor:pointer;border-right: 1px solid black;" @click="minus(item)" class="flex justify-center items-center p-2" ><img src="@/assets/Line10.svg" alt=""></div>
                                        <div class="p-auto w-auto flex justify-center items-center text-xl font-bold" v-bind:id="item.id">{{item.count}}</div>
                                        <div style="cursor:pointer;border-left: 1px solid black;" @click="plus(item)" class="flex justify-center items-center p-2"><img src="@/assets/Group30.svg" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card rounded-2xl flex justify-end items-baseline basis-1/3" :style="{'background-image':'url(' + item.main_photo_url + ')',}">
                            <div style="cursor:pointer;" @click="openUser(item)" ><img src="@/assets/Group29.svg" width="40px" alt=""></div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            <div class="w-[48%] pri mt-28 flex flex-col items-center">
                <div style="cursor:pointer;border: 2px solid black;border-radius:100px;" class="flex justify-center items-center p-4 mt-6 w-[90%]">
                    <div class="text-5xl font-semibold">
                        Оформить заказ
                    </div>
                </div>
                <div class="w-[80%]">
                    <div class="flex flex-row justify-between mt-12">
                        <div class="text-2xl font-semibold" >Всего товаров: {{ len.toLocaleString('ru-RU') }} </div>
                        <div class="text-2xl font-semibold">
                            <div>{{sum1.toLocaleString('ru-RU')}} ₽</div>
                        </div>
                    </div>
                    <div class="line mt-7"></div>
                    <div class="flex flex-row justify-between mt-7">
                        <div class="text-2xl font-semibold" >Cкидка</div>
                        <div class="text-2xl font-semibold">
                            <div>-{{(sum1 - sum).toLocaleString('ru-RU')}} ₽</div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mt-[131px]">
                        <div class="text-2xl font-semibold" >Итого</div>
                        <div class="text-2xl font-semibold">
                            <div>{{ sum.toLocaleString('ru-RU') }} ₽</div>
                        </div>
                    </div>
                     <input type="text" placeholder="промокод" class="mb-[151px] mt-11 rounded-full h-7 w-full place"> 
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
  },
  data(){
    return{
      arrar: [],
      hor: [],
      sum: 0,
      len: 0,
      sum1: 0,
    }
  },
  mounted(){
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
            fetch(`${process.env.BASE_URL}/products`)
            .then(response => response.json())
            .then(products => {
                for (let i = 0; i < products.length; i++) {
                    this.arrar.push(products[i]);
                    console.log(this.hor[1]);
                    // calculate discount and save if in priceC atrtibute
                    if (products[i].discount != 0) {
                        let priceDiscounted = products[i].price * (100 - products[i].discount) / 100;
                        priceDiscounted = Math.round(priceDiscounted);
                        this.arrar[i].priceDiscounted = priceDiscounted;
                    }

                    console.log(this.arrar);
                    this.base = this.arrar[Number(this.$route.params.id) - 1];
                    if (localStorage.getItem(i) == null) {
                        console.log('ladno');
                    } else {
                        this.hor.push(JSON.parse(localStorage.getItem(i)))
                        
                    }
                    
                }
                for (let m = 0; m < this.hor.length; m++) {
                    this.sum1 = this.sum1 + Number(this.hor[m].price)*Number(this.hor[m].count)
                    this.len = this.len + Number(this.hor[m].count)
                    if (this.hor[m].discount == 0) {
                        this.sum = this.sum + Number(this.hor[m].price)*Number(this.hor[m].count)
                    } else {
                        this.sum = this.sum + Number(this.hor[m].priceDiscounted)*Number(this.hor[m].count)
                    }
                }
            })
            .catch(error => console.error(error));

    },
    openUser(item) {
      localStorage.removeItem(item.id)
      document.getElementById(item.id+'a').style.display = 'none'
      this.len = this.len - item.count
      this.sum1 = this.sum1 - Number(item.count)*Number(item.price)
      if (item.discount == 0) {
            this.sum = this.sum - Number(item.price)*Number(item.count)
      } else {
            this.sum = this.sum - Number(item.priceDiscounted)*Number(item.count)
      }
    },
    plus(item){
      let k = document.getElementById(item.id).innerHTML
      if (Number(k) < 99) {
        let m = Number(k) + 1
        document.getElementById(item.id).innerHTML = m
        this.arrar[item.id - 1].count = m
        localStorage.removeItem(item.id)
        localStorage.setItem(item.id, JSON.stringify(this.arrar[item.id - 1]));
        this.sum1 = this.sum1 + Number(item.price)
        this.len = this.len + 1
        item.count = Number(item.count) + 1
        if (item.discount == 0) {
            this.sum = this.sum + Number(item.price)
        } else {
            this.sum = this.sum + Number(item.priceDiscounted)
        }
      }
    },
    minus(item){
        let k = Number(document.getElementById(item.id).innerHTML)
        if (k <= 1) {
            console.log("Pon");
        } else {
            let m = k - 1
            document.getElementById(item.id).innerHTML = m
            this.arrar[item.id - 1].count = m
            localStorage.removeItem(item.id)
            localStorage.setItem(item.id, JSON.stringify(this.arrar[item.id - 1]));
            this.sum1 = this.sum1 - Number(item.price)
            item.count = Number(item.count) - 1
            if (item.discount == 0) {
                this.sum = this.sum - Number(item.price)
            } else {
                this.sum = this.sum - Number(item.priceDiscounted)
            }
            this.len = this.len - 1     
        }
    }
  },
}
</script>

<style>
.line{
    height: 2px;
    background-color: black;
}
.none{
    display: none;
}
.bl{
    border-bottom: 1px black solid;
    padding-bottom: 36px;
}
.card{
    background-size:cover;
    background-position: center;
}
.pri{
    background: url(@/assets/backbag.svg);
    min-height: 299px;
    border-radius: 70px;
    max-height: 641px;
}
.place{
    background: none;
    border: 2px solid black;
    height: 51px;
    padding: 11px;
    font-size: 25px;
    outline:none;
}
input::-webkit-input-placeholder{
    color: black; 
    font-size: 25px;
    font-weight: 500;
    position: absolute;
    margin-top: -2px;
}
.allCards{
    max-height: 850px;
    overflow-y: scroll;
}
.ladnobut{
    user-select: none
}
</style>