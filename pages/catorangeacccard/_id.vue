<template>
  <section>
    <Navbar />

    <div class="mt-28">
      <div class="flex justify-center">
        <div
          class="main2 flex w-5/6 max-w-[1433px] flex-col justify-center text-2xl"
        >
          <div class="w-auto">
            <div
              class="fl flex max-w-[1433px] flex-row md:flex-wrap"
              style="white-space: nowrap"
            >
              <NuxtLink to="/orange">Каталог &nbsp;/</NuxtLink>
              <NuxtLink to="/orange" class="text-[#EA7102]">
                &nbsp; Orange pi
              </NuxtLink>
              &nbsp; / &nbsp;
              <NuxtLink
                class="text-[#EA7102]"
                to="/catorangeacccard/catorangeacc"
              >
                Аксессуары
              </NuxtLink>
              &nbsp; / &nbsp;
              <div class="text-[#EA7102]">{{ base.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-6 flex min-h-[133px] w-full flex-col items-center justify-around rounded-3xl bg-white pb-16 pt-16 md:py-5"
      >
        <div class="w-5/6 max-w-[1433px] md:w-[93%]">
          <div class="flex flex-row justify-start md:flex-col md:gap-y-2">
            <div
              class="flex basis-[55%] flex-row md:basis-auto md:flex-col-reverse md:gap-y-2"
            >
              <div
                class="-mt-4 max-h-[471px] w-[19%] overflow-x-visible overflow-y-scroll md:overflow-y-visible md:overflow-x-scroll"
              >
                <img
                  v-for="pic in pictures"
                  :id="pic"
                  :key="pic.id"
                  class="mt-4 h-[100px] w-[81%] rounded-xl border-2 border-black md:w-full"
                  :src="pic"
                  @click.prevent="photo(pic)"
                />
              </div>
              <div
                :style="{ 'background-image': 'url(' + picture + ')' }"
                class="ml-4 min-h-[471px] w-[81%] rounded-xl border-2 border-black bg-cover xl:h-[99%] lg:h-[51%] md:ml-0 md:w-full md:bg-center"
              ></div>
            </div>
            <div class="ml-4 flex basis-[45%] flex-col md:ml-0 md:basis-auto">
              <p
                class="black text-3xl font-semibold"
                style="white-space: nowrap"
              >
                {{ base.name }}
              </p>
              <div class="mt-10 flex flex-row">
                <div
                  v-if="base.discount != 0"
                  class="flex flex-row items-end text-5xl font-semibold text-black"
                >
                  {{ Number(base.priceDiscounted).toLocaleString('ru-RU') }}
                  <p class="ml-1 text-xl">₽</p>
                </div>
                <div
                  v-else
                  class="flex flex-row items-end text-5xl font-semibold text-black"
                >
                  {{ Number(base.price).toLocaleString('ru-RU') }}
                  <p class="ml-1 text-xl">₽</p>
                </div>

                <div
                  v-if="base.discount != 0"
                  class="ml-3 flex flex-row items-end text-2xl font-semibold text-black line-through opacity-40"
                >
                  {{ Number(base.price).toLocaleString('ru-RU') }}
                  <p class="ml-1 text-xl">₽</p>
                </div>
              </div>
              <div
                v-if="okey"
                style="cursor: pointer"
                class="stasik mt-10 flex h-[60px] w-full items-center justify-center rounded-[100px] border-2 border-[#EA7102] bg-[#EA7102] px-8 py-3 text-2xl font-medium text-white"
                @click.prevent="cartAdd(base)"
              >
                Купить
              </div>
              <div
                v-else
                class="mt-10 flex h-[60px] w-full items-center justify-center rounded-[100px] border-2 border-[#EA7102] bg-white px-8 py-3 text-2xl font-medium text-[#EA7102]"
              >
                В корзине
              </div>

              <div
                class="mt-10 grid h-[60px] grid-cols-3 rounded-full border-2 border-[#EA7102]"
                style="user-select: none"
              >
                <div
                  style="cursor: pointer"
                  class="flex items-center justify-center p-2"
                  @click="minus(base)"
                >
                  <img src="@/assets/Line10orange.svg" alt="" />
                </div>
                <div
                  :id="base.id"
                  class="p-auto flex w-auto items-center justify-center text-xl font-bold text-[#EA7102]"
                >
                  {{ base.count }}
                </div>
                <div
                  style="cursor: pointer"
                  class="flex items-center justify-center p-2"
                  @click="plus(base)"
                >
                  <img src="@/assets/Group30orange.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-10 flex flex-row items-end text-4xl font-semibold text-black md:text-2xl"
          >
            Описание
          </div>
          <div
            class="mt-10 flex flex-row items-end text-xl font-[400] text-black md:mt-5 md:text-lg"
          >
            {{ base.description }}
          </div>
          <div
            class="mt-10 flex flex-row items-end text-4xl font-semibold text-black md:text-2xl"
          >
            Характеристики
          </div>
          <div class="mt-10 flex text-3xl font-[400] md:mt-5 md:text-lg">
            <div class="flex basis-5/6 flex-col md:flex-grow md:basis-auto">
              <div
                v-for="one in name_technical_specifications"
                :key="one.id"
                class="flex flex-row items-center whitespace-nowrap"
              >
                {{ one }}
                <div class="bor ml-2 w-full"></div>
              </div>
            </div>
            <div
              class="flex basis-1/6 flex-col justify-start opacity-80 md:max-w-[50%] md:flex-shrink-0 md:basis-auto"
            >
              <div
                v-for="two in technical_specifications"
                :key="two.id"
                class="ml-2 mt-[4px] text-2xl md:text-lg"
              >
                {{ two }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Under />
    </div>
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
      arrar: [],
      base: {},
      pictures: [],
      prome: [],
      technical_specifications: [],
      name_technical_specifications: [],
      picture: '',
      hor: [],
      okey: true
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      fetch(`${process.env.BASE_URL}/products`)
        .then(response => response.json())
        .then(products => {
          for (let i = 0; i < products.length; i++) {
            this.arrar.push(products[i])

            // calculate discount and save if in priceC atrtibute
            if (products[i].discount != 0) {
              let priceDiscounted =
                (products[i].price * (100 - products[i].discount)) / 100
              priceDiscounted = Math.round(priceDiscounted)
              this.arrar[i].priceDiscounted = priceDiscounted
            }
            this.base = this.arrar[Number(this.$route.params.id) - 1]

            if (localStorage.getItem(i) != null) {
              this.hor.push(JSON.parse(localStorage.getItem(i)))
            }
          }

          if (localStorage.getItem(this.base.id) == null) {
            this.base.count = 1
          } else {
            this.base.count = JSON.parse(
              localStorage.getItem(this.base.id)
            ).count
          }
          this.picture =
            this.arrar[Number(this.$route.params.id) - 1].photo_url.split(
              ';'
            )[0]
          this.pictures = this.base.photo_url.split(';')

          this.prome = this.base.technical_specifications.split(';')

          for (let v = 0; v < this.prome.length; v++) {
            const ladnoOkey = this.prome[v].split(':')
            this.name_technical_specifications.push(ladnoOkey[0])
            this.technical_specifications.push(ladnoOkey[1])
          }

          if (localStorage.getItem(this.base.id) != null) {
            this.okey = false
          }
        })
        .catch(error => console.error(error))
    },
    cartAdd(base) {
      console.log(this.base)
      this.base.main_photo_url = this.pictures[0]
      localStorage.setItem(base.id, JSON.stringify(base))
      this.okey = false
    },
    plus(base) {
      this.base.main_photo_url = this.pictures[0]
      const k = Number(document.getElementById(base.id).innerHTML)
      if (Number(k) < 99) {
        document.getElementById(base.id).innerHTML = k + 1
        this.base.count = this.base.count + 1
        if (localStorage.getItem(this.base.id) != null) {
          localStorage.removeItem(base.id)
          localStorage.setItem(base.id, JSON.stringify(base))
        }
      }
    },
    minus(base) {
      this.base.main_photo_url = this.pictures[0]
      const k = Number(document.getElementById(base.id).innerHTML)
      if (k <= 1) {
        console.log('Pon')
      } else {
        document.getElementById(base.id).innerHTML = k - 1
        this.base.count = this.base.count - 1
        if (localStorage.getItem(this.base.id) != null) {
          localStorage.removeItem(base.id)
          localStorage.setItem(base.id, JSON.stringify(base))
        }
      }
    },
    photo(pic) {
      this.picture = pic
      console.log(document.getElementById(this.base.id + 'a'))
    }
  }
}
</script>

<style>
.ladnobut {
  user-select: none;
}
.bor {
  border-bottom: 1px black dashed;
}
</style>
