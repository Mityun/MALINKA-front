<template>
  <section>
    <Navbar />

    <div class="mt-28">
      <div class="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            class="mx-auto flex max-w-2xl items-center space-x-2 px-4 lg:max-w-7xl lg:px-8 sm:px-6"
          >
            <div
              class="main2 flex w-2/3 max-w-[1066px] flex-col justify-center text-2xl"
            >
              <div class="w-2/3 max-w-[1066px]">
                <div class="fl flex flex-row">
                  <NuxtLink to="/orange">Каталог &nbsp;/</NuxtLink>
                  <NuxtLink to="/orange" class="text-[#EA7102]">
                    &nbsp; Orange pi
                  </NuxtLink>
                  &nbsp; / &nbsp;
                  <div class="text-[#EA7102]">Orange pi 16</div>
                </div>
              </div>
            </div>
          </ol>
        </nav>

        <!-- Image gallery -->
        <div
          class="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 sm:px-6"
        >
          <div
            class="aspect-h-4 aspect-w-4 hidden overflow-hidden rounded-lg lg:block"
          >
            <img
              src="@/assets/image2.svg"
              alt="Two each of gray, white, and black shirts laying flat."
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="@/assets/image2.svg"
                alt="Model wearing plain black basic tee."
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="@/assets/image2.svg"
                alt="Model wearing plain gray basic tee."
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <!-- Product info -->
        <div
          class="mx-auto max-w-2xl px-4 pb-16 pt-10 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 sm:px-6"
        >
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              Orange pi 16
            </h1>
          </div>

          <!-- Options -->
          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">7878 ₽</p>

            <!-- Reviews -->

            <form class="mt-10">
              <!-- Colors -->

              <button
                type="submit"
                class="mt-10 flex w-full items-center justify-center rounded-md border-2 border-[#EA7102] px-8 py-3 text-base font-medium text-[#EA7102]"
              >
                Добавить в корзину
              </button>
            </form>
          </div>

          <div
            class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
          >
            <!-- Description and details -->
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p class="text-base text-gray-900">
                  Orange Pi 5 использует 8-ядерный 64-разрядный процессор
                  Rockchip RK3588S нового поколения, четырехъядерный процессор
                  A76 + четырехъядерный процессор A55, с 8-нм техпроцессом,
                  основной частотой до 2,4 ГГц, встроенный графический процессор
                  ARM Mali-G610, встроенный высокопроизводительный модуль
                  ускорения 3D / 2D изображений, встроенный NPU с вычислительной
                  мощностью 6Tops. Orange Pi 5 предоставляет множество
                  интерфейсов, включая выход HDMI, интерфейс GPIO, M.2 PCIe2.0,
                  Type-C, порт Gigabit LAN, 2 * USB2.0, 1 * USB3.0 и т.д.; Он
                  может широко использоваться в планшетах, периферийных
                  вычислениях, искусственном интеллекте, облачных вычислениях,
                  AR / VR, интеллектуальная безопасность, умный дом и другие
                  области, охватывающие различные отрасли искусственного
                  интеллекта. Orange Pi 5 поддерживает Orange Pious (Дроид),
                  официальную операционную систему, разработанную Orange Pi, а
                  также Android 12 и Debian11
                </p>
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
  }
}
</script>

<style></style>
