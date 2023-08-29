<template>
  <section>
      <Navbar />
      <div v-if="!payment">
      <div class="flex justify-center ">
          <div class="w-5/6 max-w-[1196px] flex flex-row justify-between">
            
            <div class="w-[48%]">

                <div class="text-5xl font-semibold mt-28">
                Корзина
            </div>
            <div class="flex flex-row">
                <div class="allCards w-full">
                    <div v-for="item in hor" :key="item.id" class="flex flex-row justify-between h-44 mt-9 bl">
                        <div class="basis-2/3 flex flex-col justify-between">
                            <div class="text-3xl font-medium relative min-w-full">
                                {{item.name}}
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="card flex flex-col justify-end text-5xl font-semibold">
                                    {{Number(item.price).toLocaleString('ru-RU')}} ₽
                                </div>
                                <div>
                                    <div class="max-w-[77%] rounded-full border border-black grid grid-cols-3">
                                        <div style="cursor:pointer;border-right: 1px solid black;" @click="minus(item)" class="flex justify-center items-center p-2" ><img src="@/assets/Line10.svg" alt=""></div>
                                        <div class="p-auto w-auto flex justify-center items-center text-2xl font-bold" v-bind:id="item.id">{{item.count}}</div>
                                        <div style="cursor:pointer;border-left: 1px solid black;" @click="plus(item)" class="flex justify-center items-center p-2"><img src="@/assets/Group30.svg" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card rounded-2xl flex justify-end items-baseline basis-1/3" :style="{'background-image': 'url(' + require('/assets/' + item.photo) + ')'}">
                            <div style="cursor:pointer;" @click="openUser(item)" ><img src="@/assets/Group29.svg" width="40px" alt=""></div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            <div class="w-[48%] pri mt-28 flex flex-col items-center">
                <div style="cursor:pointer;border: 2px solid black;border-radius:100px;" class="flex justify-center items-center p-4 mt-6 w-[90%]">
                    <div class="text-5xl font-semibold" @click="order">
                        Оформить заказ
                    </div>
                </div>
                <div class="w-[80%]">
                    <div class="flex flex-row justify-between mt-12">
                        <div class="text-2xl font-semibold" >Всего товаров: {{ len.toLocaleString('ru-RU') }} </div>
                        <div class="text-2xl font-semibold">
                            <div>{{all_sum.toLocaleString('ru-RU')}} ₽</div>
                        </div>
                    </div>
                    <div class="line mt-7"></div>
                    <div class="flex flex-row justify-between mt-7">
                        <div class="text-2xl font-semibold" >Cкидка</div>
                        <div class="text-2xl font-semibold">
                            <div>-{{(all_sum - final_sum).toLocaleString('ru-RU')}} ₽</div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mt-[131px]">
                        <div class="text-2xl font-semibold" >Итого</div>
                        <div class="text-2xl font-semibold">
                            <div>{{ final_sum.toLocaleString('ru-RU') }} ₽</div>
                        </div>
                    </div>
                     <input type="text" id="coupon_input" placeholder="Промокод" class="mb-[151px] mt-11 rounded-full h-7 w-full place coupon"> 
                </div>
            </div>
            </div>
            </div>

      </div>
      <div v-else>
        <div class="flex justify-center ">
                <div class="w-5/6 max-w-[1196px] flex flex-row justify-between">
                    <form name="payform-tinkoff" onsubmit="pay(this); return false;">
                    <input class="payform-tinkoff-row" type="hidden" name="terminalkey" value="TinkoffBankTest">
                    <input class="payform-tinkoff-row" type="hidden" name="frame" value="false">
                    <input class="payform-tinkoff-row" type="hidden" name="language" value="ru"> 

                        <input class="mb-[151px] mt-11 mb-0 rounded-full h-7 w-full place" id="order_sum" type="text" placeholder="Сумма заказа" name="amount" required>
                        <input class="mb-[151px] mt-1 mb-0 rounded-full h-7 w-full place" type="text" placeholder="Номер заказа" name="order">
                        <input class="mb-[151px] mt-1 mb-0 rounded-full h-7 w-full place" type="text" placeholder="Описание заказа" name="description">
                        <input class="mb-[151px] mt-1 mb-0 rounded-full h-7 w-full place" type="text" placeholder="ФИО плательщика" name="name">
                        <input class="mb-[151px] mt-1 mb-0 rounded-full h-7 w-full place" type="text" placeholder="E-mail" name="email">
                        <input class="mb-[151px] mt-1 mb-0 rounded-full h-7 w-full place" type="text" placeholder="Контактный телефон" name="phone">
                        <input class="text-5xl font-semibold mb-[151px] mt-7 mb-0 rounded-full h-7 place" type="submit" value="Оплатить">
                    </form>
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
      hor: [],
      final_sum: 0,
      len: 0,
      all_sum: 0,
      payment: false,
      used_coupon: false
    }
  },
  mounted(){
    for(var i=0; i < this.arrar.length + 1; i++){
        if (localStorage.getItem(i) == null) {
            console.log('ladno');
        } else {
            this.hor.push(JSON.parse(localStorage.getItem(i)))
        }
    }

    console.log(this.hor);

    for(var n=0; n < this.arrar.length + 1; n++){
        if (this.hor[n] == null) {
            console.log('ladno');
        } else {
            this.final_sum = this.final_sum + Number(this.hor[n].price)*Number(this.hor[n].count)
            this.len = this.len + Number(this.hor[n].count)
        }
    }

    for(var z=0; z < this.arrar.length + 1; z++){
        if (this.hor[z] == null) {
            console.log('ladno');
        } else {
            if (this.hor[z].priceC == '') {
                this.all_sum = this.all_sum + Number(this.hor[z].price)*Number(this.hor[z].count)
            } else {
                this.all_sum = this.all_sum + Number(this.hor[z].priceC)*Number(this.hor[z].count)
            }
        }
    }
  },
  methods: {
    openUser(item) {
      localStorage.removeItem(item.id)
      location.reload()
    },
    plus(item){
      let k = document.getElementById(item.id).innerHTML
      let m = Number(k) + 1

      document.getElementById(item.id).innerHTML = m

      this.arrar[item.id - 1].count = m
      localStorage.removeItem(item.id)
      localStorage.setItem(item.id, JSON.stringify(this.arrar[item.id - 1]));

      this.final_sum = this.final_sum + Number(item.price)
      this.len = this.len + 1

      if (item.priceC == '') {
        this.all_sum = this.all_sum + Number(item.price)
      } else {
        this.all_sum = this.all_sum + Number(item.priceC)
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
            this.final_sum = this.final_sum - Number(item.price)
            if (item.priceC == '') {
                this.all_sum = this.all_sum - Number(item.price)
            } else {
                this.all_sum = this.all_sum - Number(item.priceC)
            }
            this.len = this.len - 1     
        }
    },
    order(){
        let coupon_text = document.getElementById('coupon_input').value;

        if(coupon_text != '' && !this.used_coupon){
            fetch(`${process.env.BASE_URL}/coupons/?text=${coupon_text.toUpperCase()}`)
            .then(response => response.json())
            .then(coupons => {
                console.log(coupons);
                if(coupons.length == 0){
                    console.log('no such coupon');
                }
                if(coupons.length > 1){
                    console.log('more than one coupon');
                }
                else{
                    let coupon_info = coupons[0];

                    if(coupon_info.type == 'sum'){
                        this.final_sum -= coupon_info.discount;

                        this.final_sum = Math.max(this.final_sum, 1);
                    }
                    else if(coupon_info.type == 'percent'){
                        this.final_sum -= this.final_sum * coupon_info.discount / 100;
                    }
                    else{
                        console.log('error');
                    }
                }
                this.used_coupon = true;

                this.payment = true;
                // если убрать, то элемент не будет существовать на момент поиска
                setTimeout(() => {
                    document.getElementById('order_sum').value = this.final_sum;
                }, 1);
            })
            .catch(error => console.error(error));
        }
        else{
            this.payment = true;
            // если убрать, то элемент не будет существовать на момент поиска
            setTimeout(() => {
                document.getElementById('order_sum').value = this.final_sum;
            }, 1);
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
}
.allCards{
    max-height: 850px;
    overflow-y: scroll;
}
.coupon{
    text-transform: uppercase;
}
</style>