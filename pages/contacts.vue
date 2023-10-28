<template>
  <section>
    <Navbar />
    <div class="mt-28 flex flex-col items-center justify-center md:mt-16">
      <div class="w-5/6 max-w-[1333px]">
        <div
          class="flex w-full flex-row justify-start text-6xl font-semibold md:text-4xl"
        >
          Наши контакты:
        </div>
        <div
          class="maincont mt-20 flex flex-col items-end justify-end pb-24 pt-24 text-9xl font-semibold md:m-0 md:py-7 md:text-2xl"
        >
          <div>Для</div>
          <div>юридических</div>
          <div>лиц:</div>
        </div>
        <div class="flex w-full flex-col justify-start md:gap-y-1">
          <div class="text-lg font-thin">Email</div>
          <input
            type="text"
            class="placed !h-[80px] w-full !p-[11px] !text-[35px] md:!h-12 md:!p-2 md:!text-lg"
          />
        </div>
        <div
          class="mt-10 flex w-full flex-col justify-start md:mt-4 md:gap-y-1"
        >
          <div class="text-lg font-thin">Ваше имя</div>
          <input
            type="text"
            class="placed !h-[80px] w-full !p-[11px] !text-[35px] md:!h-12 md:!p-2 md:!text-lg"
          />
        </div>
        <div
          class="mt-10 flex w-full flex-col justify-start md:mt-4 md:gap-y-1"
        >
          <div class="text-lg font-thin">Телефон</div>
          <input
            type="text"
            class="placed !h-[80px] w-full !p-[11px] !text-[35px] md:!h-12 md:!p-2 md:!text-lg"
          />
        </div>
        <div
          style="cursor: pointer; border: 2px solid black; border-radius: 100px"
          class="mt-8 flex w-full items-center justify-center p-4 md:mt-6"
        >
          <div class="text-5xl font-semibold md:text-lg">Оставить заявку</div>
        </div>
        <div
          class="maincont1 mt-20 flex flex-col items-start justify-end pb-24 pt-24 text-9xl font-semibold md:m-0 md:mt-16 md:py-7 md:text-2xl"
        >
          <div>Для</div>
          <div>физических</div>
          <div>лиц:</div>
        </div>
        <div class="flex flex-col justify-start">
          <div class="flex flex-row md:flex-col md:gap-y-2">
            <div
              class="flex h-36 flex-col justify-around rounded-[50px] border-[2px] border-[black] p-5 md:h-16 md:items-center"
            >
              <div class="text-2xl font-semibold md:text-lg">
                Почта для связи:
              </div>
              <div class="text-3xl font-semibold md:text-lg">
                makersdefault@gmail.com
              </div>
            </div>
            <div
              class="ml-5 flex h-36 flex-col items-center justify-around rounded-[50px] border-[2px] border-[black] p-5 md:ml-0 md:h-16"
            >
              <div class="text-2xl font-semibold md:text-lg">
                Телефон для связи:
              </div>
              <div class="text-3xl font-semibold md:text-lg">
                +7-926-668-26-88
              </div>
            </div>
          </div>
          <div
            class="mt-5 flex h-36 w-1/4 flex-col items-center justify-around rounded-[50px] border-[2px] border-[black] p-5 md:h-16 md:w-full"
          >
            <a
              class="text-4xl font-semibold md:text-lg"
              href="https://vk.com/makers_dafault/"
            >
              Мы в VK
            </a>
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

<style>
.maincont {
  background: url(@/assets/contacts1.svg);
  background-size: 74%;
  background-repeat: no-repeat;
  background-position-y: 45%;
  background-position-x: 95%;
  max-width: 1320px;
}
.maincont1 {
  background: url(@/assets/contacts2.svg);
  background-size: 74%;
  background-repeat: no-repeat;
  background-position-y: 70%;
  background-position-x: 5%;
  max-width: 1320px;
}
.placed {
  background: none;
  outline: none;
  background: #d9d9d9;
  border-radius: 0px;
}
</style>
