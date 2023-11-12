<template>
  <section>
    <Navbar />
    <div class="flex justify-center">
      <div
        class="main2 mt-28 flex w-2/3 max-w-[946px] flex-col justify-center text-2xl"
      >
        <div class="w-2/3 max-w-[946px] md:w-full">
          <div class="fl flex flex-row md:flex-wrap">
            <NuxtLink to="/orange">Каталог &nbsp;/</NuxtLink>
            <NuxtLink to="/orange" class="text-[#EA7102]">
              &nbsp; Orange pi
            </NuxtLink>
            &nbsp; / &nbsp;
            <div class="text-[#EA7102]">Orange pi 4</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <img
        src="@/assets/Ellipse22.svg"
        width="100%"
        alt=""
        class="pic1 max-w-[1466px]"
      />
    </div>
    <div class="flex justify-center">
      <div class="mt-6 w-2/3 max-w-[946px] items-center justify-center">
        <div class="grid grid-cols-3 gap-4 md:grid-cols-1">
          <div
            v-for="item in arrar"
            :key="item.id"
            class="card flex h-[474px] w-full max-w-[306px] flex-col justify-between rounded-3xl bg-white p-3 backdrop-opacity-100 md:h-[500px] md:max-w-full"
          >
            <div
              class="absolute z-10 h-full w-full"
              @click.prevent="openUser(item)"
            ></div>
            <div class="flex h-full w-full justify-center">
              <div
                :style="{
                  'background-image': 'url(' + item.main_photo_url + ')'
                }"
                class="lll xl:h-[90%] xl:w-full lg:h-56 lg:w-56"
              ></div>
            </div>

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
                class="skidka flex h-12 flex-row items-center justify-center rounded-2xl border-[2px] border-[#EA7102] pl-4 pr-4 text-2xl text-black"
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
                  class="but flex flex-row items-center justify-center rounded-full border-[2px] border-[#EA7102] bg-white pb-4 pt-4"
                >
                  <div class="text-xl font-semibold text-[#EA7102]">
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
                  class="but flex flex-row items-center justify-center rounded-full border-[2px] border-[#EA7102] bg-[#EA7102] pb-4 pt-4 opacity-90"
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
      fetch(`${process.env.BASE_URL}/products/?subcategory=5`)
        .then(response => response.json())
        .then(products => {
          for (let i = 0; i < products.length; i++) {
            this.arrar.push(products[i])
            this.arrar[i].main_photo_url = this.arrar[i].photo.replace('default-pi.ru', 'default-pi.ru:1337')

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
      this.$router.push('/catorangecard/' + item.id)
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
