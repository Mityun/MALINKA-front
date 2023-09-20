<template>
  <section>
      <Navbar />
      <div class="main">
        <div class="bigtext">
          <div class="text-9xl">Наши отзывы: </div>
        </div>
        <div class="glavreviews">
         <div class="reviews flex flex-col">
            <div class="review flex flex-row h-fit w-full p-9" >
                <div class="basis-2/3 flex flex-col justify-start p-3">
                  <div class="font-thin text-2xl">Автор: rk Авито </div>
                  <div class="mt-1 font-normal text-3xl">Покупал 10 малин. созвонились, договорились о цене и комплекте, продавец подъехал с товаром, проверили все и ударили по рукам. рекомендую к сотрудничеству.</div>
                  <div class="font-thin text-2xl mt-1">Товар: 10 raspberry pi 4 4gb</div>
                  <div class="font-thin text-2xl mt-3">Источник: Авито</div>
                </div>
                <div class="basis-1/3 w-1/3 onerev"></div>
            </div>
            <div class="review flex flex-row h-fit w-full p-9" >
                <div class="basis-2/3 flex flex-col justify-start p-3">
                  <div class="font-thin text-2xl">Автор: Валерий </div>
                  <div class="mt-1 font-normal text-3xl">Покупал на данном сайте платы, все пришло очень быстро, написал на почту по поводу установки прошивки. Быстро связались и скинули инструкцию по установке. Огромное спасибо!</div>
                  <div class="font-thin text-2xl mt-1">Товар: 5 orange pi 3 lts</div>
                  <div class="font-thin text-2xl mt-3">Источник: Сайт</div>
                </div>
                <div class="basis-1/3 tworev w-1/3"></div>
            </div>
            <div class="review flex flex-row h-fit w-full p-9" >
                <div class="basis-2/3 flex flex-col justify-start p-3">
                  <div class="font-thin text-2xl">Автор: Novikov tv </div>
                  <div class="mt-1 font-normal text-3xl">Все отлично!

Рекомендуем, ребята приняли заказ на большую партию, согласовали сроки, все привезли Вовремя!

Работают по эдо, что сильно упрощает

бухгалтерии жизнь Заказывали уже 2 раза, обязательно вернемся еще!

так же у ребят есть и комплектующие</div>
                  <div class="font-thin text-2xl mt-1">Товар: опт</div>
                  <div class="font-thin text-2xl mt-3">Источник: Вк</div>
                </div>
                <div class="basis-1/3 threerev w-1/3"></div>
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
    Navbar,Under
  }
}
</script>

<style>
section{
   width: 100%;
}
.bigtext{
   color: #000;
   font-family: 'Montserrat', sans-serif;
   width: 100%;
   font-style: normal;
   font-weight: 600;
   display: flex;
   justify-content: center;
   margin-top: 200px;
}
.reviews{
    width: 70%;
    display: flex;
    justify-content: center;
}
.review{
    border-bottom: 1px solid black;
}
.glavreviews{
    width: 100%;
    margin-top: 200px;
    display: flex;
    justify-content: center;
}
.onerev{
  background: url("../assets/onerev.jpg");
  background-size: cover;
}
.tworev{
  background: url("../assets/tworev.jpg");
  background-size: cover;
}
.threerev{
  background: url("../assets/threerev.jpg");
  background-size: cover;
}
</style>