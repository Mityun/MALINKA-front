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

    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="aspect-h-4 aspect-w-4 hidden overflow-hidden rounded-lg lg:block max-h-[651px]" >
        <img :src="base.photo_url" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center" >
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 max-h-[651px]">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img :src="base.photo_url" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img :src="base.photo_url" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{base.name}}</h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900 " v-if="base.discount != 0">{{Number(base.priceDiscounted).toLocaleString('ru-RU')}} ₽</p>
        <p class="text-3xl tracking-tight text-gray-900 " v-else>{{Number(base.price).toLocaleString('ru-RU')}} ₽</p>

        <!-- Reviews -->
    

        <form class="mt-10">
          <!-- Colors -->


          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border-2 border-[#BC1142] px-8 py-3 text-base font-medium text-[#BC1142]" @click.prevent="cartAdd(base)">Добавить в корзину</button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <!-- Description and details -->
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">Orange Pi 5 использует 8-ядерный 64-разрядный процессор Rockchip RK3588S нового поколения, четырехъядерный процессор A76 + четырехъядерный процессор A55, с 8-нм техпроцессом, основной частотой до 2,4 ГГц, встроенный графический процессор ARM Mali-G610, встроенный высокопроизводительный модуль ускорения 3D / 2D изображений, встроенный NPU с вычислительной мощностью 6Tops.
Orange Pi 5 предоставляет множество интерфейсов, включая выход HDMI, интерфейс GPIO, M.2 PCIe2.0, Type-C, порт Gigabit LAN, 2 * USB2.0, 1 * USB3.0 и т.д.; Он может широко использоваться в планшетах, периферийных вычислениях, искусственном интеллекте, облачных вычислениях, AR / VR, интеллектуальная безопасность, умный дом и другие области, охватывающие различные отрасли искусственного интеллекта.
Orange Pi 5 поддерживает Orange Pious (Дроид), официальную операционную систему, разработанную Orange Pi, а также Android 12 и Debian11</p>
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
            })
            .catch(error => console.error(error));
        },
        cartAdd(base) {
            this.base.count = 1
            console.log(this.base);
            localStorage.setItem(base.id, JSON.stringify(base));
        }
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>

<style>

</style>