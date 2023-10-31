<template>
  <section>
    <Navbar />
    <div class="main">
      <div class="bigtext md:!mt-16">
        <div class="text-9xl md:text-4xl">Наши отзывы:</div>
      </div>
      <div class="glavreviews md:!mt-10">
        <div class="reviews flex flex-col">
          <div
            class="review flex h-fit w-full flex-row p-9 md:h-auto md:flex-col md:p-2"
          >
            <div
              class="flex basis-2/3 flex-col justify-start p-3 md:basis-auto md:p-0"
            >
              <div class="text-2xl font-thin md:text-xl">Автор: rk Авито</div>
              <div class="mt-1 text-3xl font-normal md:text-lg">
                Покупал 10 малин. созвонились, договорились о цене и комплекте,
                продавец подъехал с товаром, проверили все и ударили по рукам.
                рекомендую к сотрудничеству.
              </div>
              <div class="mt-1 text-2xl font-thin md:text-lg">
                Товар: 10 raspberry pi 4 4gb
              </div>
              <div class="mt-3 text-2xl font-thin md:text-xl">
                Источник: Авито
              </div>
            </div>
            <div
              class="onerev w-1/3 basis-1/3 md:mb-8 md:mt-5 md:h-[320px] md:w-full md:basis-auto"
            ></div>
          </div>
          <div class="review flex h-fit w-full flex-row p-9 md:flex-col md:p-2">
            <div
              class="flex basis-2/3 flex-col justify-start p-3 md:basis-auto md:p-0"
            >
              <div class="text-2xl font-thin md:text-xl">Автор: Валерий</div>
              <div class="mt-1 text-3xl font-normal md:text-lg">
                Покупал на данном сайте платы, все пришло очень быстро, написал
                на почту по поводу установки прошивки. Быстро связались и
                скинули инструкцию по установке. Огромное спасибо!
              </div>
              <div class="mt-1 text-2xl font-thin md:text-lg">
                Товар: 5 orange pi 3 lts
              </div>
              <div class="mt-3 text-2xl font-thin md:text-xl">
                Источник: Сайт
              </div>
            </div>
            <div
              class="tworev w-1/3 basis-1/3 md:mb-8 md:mt-5 md:h-[320px] md:w-full md:basis-auto"
            ></div>
          </div>
          <div class="review flex h-fit w-full flex-row p-9 md:flex-col md:p-2">
            <div
              class="flex basis-2/3 flex-col justify-start p-3 md:basis-auto md:p-0"
            >
              <div class="text-2xl font-thin md:text-xl">Автор: Novikov tv</div>
              <div class="mt-1 text-3xl font-normal md:text-lg">
                Все отлично! Рекомендуем, ребята приняли заказ на большую
                партию, согласовали сроки, все привезли Вовремя! Работают по
                эдо, что сильно упрощает бухгалтерии жизнь Заказывали уже 2
                раза, обязательно вернемся еще! так же у ребят есть и
                комплектующие
              </div>
              <div class="mt-1 text-2xl font-thin md:text-lg">Товар: опт</div>
              <div class="mt-3 text-2xl font-thin md:text-xl">Источник: Вк</div>
            </div>
            <div
              class="threerev w-1/3 basis-1/3 md:mb-8 md:mt-5 md:h-[320px] md:w-full md:basis-auto"
            ></div>
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
section {
  width: 100%;
}
.bigtext {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.reviews {
  width: 70%;
  display: flex;
  justify-content: center;
}
.review {
  border-bottom: 1px solid black;
}
.glavreviews {
  width: 100%;
  margin-top: 200px;
  display: flex;
  justify-content: center;
}
.onerev {
  background: url('../assets/onerev.jpg');
  background-size: cover;
}
.tworev {
  background: url('../assets/tworev.jpg');
  background-size: cover;
}
.threerev {
  background: url('../assets/threerev.jpg');
  background-size: cover;
}
</style>
