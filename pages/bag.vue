<template>
  <section>
      <Navbar />
      <div class="flex justify-center">
          <div class="w-5/6">
            <div class="text-5xl font-semibold mt-28">
                Корзина
            </div>
            <div class="w-full line mt-12"></div>
                <div v-for="item in hor" :key="item.id" class="grid grid-cols-3 gap-2 h-80 mt-9 block">
                    <div class="card flex flex-col justify-between">
                        <div class="text-5xl font-semibold">
                            {{item.name}}
                        </div>
                        <div class="max-w-[77%] rounded-2xl border border-black grid grid-cols-3">
                            <div style="cursor:pointer;border-right: 1px solid black;" @click="minus(item)" class="flex justify-center items-center p-2" ><img src="@/assets/Line10.svg" alt=""></div>
                            <div class="p-auto w-auto flex justify-center items-center text-5xl font-bold" v-bind:id="item.id">{{item.count}}</div>
                            <div style="cursor:pointer;border-left: 1px solid black;" @click="plus(item)" class="flex justify-center items-center p-2"><img src="@/assets/Group30.svg" alt=""></div>
                        </div>
                    </div>
                    <div class="card flex flex-col justify-end text-5xl font-semibold">
                        {{item.price}} ₽
                    </div>
                    <div class="card rounded-2xl flex justify-end items-baseline" :style="{'background-image': 'url(' + require('/assets/' + item.photo) + ')'}">
                        <div style="cursor:pointer;" @click="openUser(item)" ><img src="@/assets/Group29.svg" width="40px" alt=""></div>
                    </div>
                </div>
                <div class="flex justify-between mt-28">
                    <div class="text-5xl font-semibold">
                        Итого
                    </div>
                    <div class="text-5xl font-semibold">
                        <div>{{sum}} ₽</div>
                    </div>
                </div>
                <div style="cursor:pointer;border: 2px solid black;border-radius:100px;" class="flex justify-center items-center p-4 mt-16">
                     <div class="text-5xl font-semibold">
                        Оформить заказ
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
      hor: [],
      sum: 0,
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
            this.sum = this.sum + Number(this.hor[n].price)*Number(this.hor[n].count)
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
      this.sum = this.sum + Number(item.price)
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
            this.sum = this.sum - Number(item.price)
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
.block{
    border-bottom: 1px black solid;
    padding-bottom: 36px;
}
.card{
    background-size:cover;
    background-position: center;
}
</style>