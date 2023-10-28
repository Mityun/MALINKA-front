<template>
  <section>
    <Navbar />
    <div class="flex justify-center">
      <div
        class="main2 mt-28 flex w-2/3 max-w-[946px] flex-col justify-center text-2xl"
      >
        <div class="w-2/3 max-w-[946px]">
          <div class="fl flex flex-row">
            <NuxtLink id="ok" to="/rasb">Каталог &nbsp;/</NuxtLink>
            <NuxtLink to="/rasb" class="text-[#BC1142]">
              &nbsp; Raspberry Pi
            </NuxtLink>
            &nbsp; / &nbsp;
            <div class="text-[#BC1142]">Аксессуары</div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/Ellipse21.svg"
      width="100%"
      alt=""
      class="pic1 max-w-[1466px]"
    />
    <div class="flex justify-center">
      <div class="mt-6 w-2/3 max-w-[946px] items-center justify-center">
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="item in arrar"
            :key="item.id"
            class="card flex h-[474px] w-full max-w-[306px] flex-col justify-between rounded-3xl bg-white p-3 backdrop-opacity-100"
          >
            <div
              class="absolute z-10 h-full w-full"
              @click.prevent="openUser(item)"
            ></div>
            <div
              :style="{
                'background-image': 'url(' + item.main_photo_url + ')'
              }"
              class="lll h-64 w-full"
            ></div>
            <div class="flex flex-row justify-between p-1">
              <div class="ml-[13px]">
                <div
                  v-if="item.discount != 0"
                  class="text-lg text-[#D2D2D2] line-through"
                >
                  {{ Number(item.price).toLocaleString('ru-RU') }} ₽
                </div>
                <div class="flex flex-row items-end">
                  <div
                    v-if="item.discount != 0"
                    class="text-4xl font-semibold text-black"
                  >
                    {{ Number(item.priceDiscounted).toLocaleString('ru-RU') }}
                  </div>
                  <div v-else class="text-4xl font-semibold text-black">
                    {{ Number(item.price).toLocaleString('ru-RU') }}
                  </div>
                  <div class="ml-1 text-2xl text-black">₽</div>
                </div>
                <div class="text-2xl text-black">{{ item.name }}</div>
              </div>
              <div
                v-if="item.discount != 0"
                class="skidka flex h-12 flex-row items-center justify-center rounded-2xl border-[2px] border-[#BC1142] pl-4 pr-4 text-2xl text-black"
              >
                <div>-{{ item.discount }}%</div>
              </div>
            </div>
            <div class="flex h-16 items-center justify-center">
              <div
                :id="item.id + 'x'"
                class="hov z-50 w-2/3"
                style="display: none"
              >
                <div
                  class="but flex flex-row items-center justify-center rounded-full border-[2px] border-[#BC1142] bg-white pb-4 pt-4"
                >
                  <div class="text-xl font-semibold text-[#BC1142]">
                    В корзине
                  </div>
                </div>
              </div>
              <div
                :id="item.id + 'z'"
                class="hov z-50 w-2/3"
                @click.prevent="cartAdd(item)"
              >
                <div
                  class="but flex flex-row items-center justify-center rounded-full border-[2px] border-[#BC1142] bg-[#BC1142] pb-4 pt-4 opacity-90"
                >
                  <div class="text-xl font-semibold text-[#FFFFFF]">Купить</div>
                </div>
              </div>
              <div
                to="/main"
                class="hov z-10"
                style="display: none"
                @click="openUser(item)"
              >
                <div
                  class="but flex flex-row items-center justify-center rounded-3xl border border-black"
                >
                  <div class="p-2 pl-11 pr-11 text-black">Предзакать</div>
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

export default {
  components: {
    Navbar,
    Under
  },
  data() {
    return {
      ara: [],
      arrar: [],
      hor: []
    }
  },
  mounted() {
    this.fetchProducts()
  },
  created() {
    this.fetchProducts1()
  },
  methods: {
    fetchProducts() {
      fetch(`${process.env.BASE_URL}/products/?subcategory=7`)
        .then(response => response.json())
        .then(products => {
          for (let i = 0; i < products.length; i++) {
            this.arrar.push(products[i])
            this.arrar[i].main_photo_url = this.arrar[i].photo_url.split(';')[0]

            // calculate discount and save if in priceC atrtibute
            if (products[i].discount != 0) {
              let priceDiscounted =
                (products[i].price * (100 - products[i].discount)) / 100
              priceDiscounted = Math.round(priceDiscounted)
              this.arrar[i].priceDiscounted = priceDiscounted
            }
          }
        })
        .catch(error => console.error(error))
    },
    fetchProducts1() {
      fetch(`${process.env.BASE_URL}/products`)
        .then(response => response.json())
        .then(products => {
          for (let i = 0; i < products.length; i++) {
            if (localStorage.getItem(i) == null) {
              /* empty */
            } else {
              this.hor.push(JSON.parse(localStorage.getItem(i)))
            }

            for (let c = 0; c < this.hor.length; c++) {
              if (document.getElementById(this.hor[c].id + 'z') != null) {
                document.getElementById(this.hor[c].id + 'z').style.display =
                  'none'
                document.getElementById(this.hor[c].id + 'x').style.display =
                  'block'
              }
            }
          }
        })
        .catch(error => console.error(error))
    },
    openUser(item) {
      this.$router.push('/catrasbacccard/' + item.id)
    },
    cartAdd(item) {
      document.getElementById(item.id + 'z').style.display = 'none'
      document.getElementById(item.id + 'x').style.display = 'block'
      item.count = 1
      localStorage.setItem(item.id, JSON.stringify(item))
    }
  }
}
</script>

<style>
.pic1 {
  position: absolute;
  z-index: 0;
}
.lll {
  background-size: cover;
}
.but {
  cursor: pointer;
}
</style>
