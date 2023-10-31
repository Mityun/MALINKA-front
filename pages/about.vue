<template>
  <section>
    <Navbar />
    <div class="mt-28 flex flex-col items-center justify-center md:mt-16">
      <div
        class="mainab flex w-full items-center justify-center md:py-5 md:pb-10"
      >
        <div
          class="flex h-1/2 w-5/6 max-w-[1163px] flex-col justify-around md:h-auto"
        >
          <div class="big text-[#D2D2D2] md:mb-5">О нас</div>
          <div class="text-3xl text-[#D2D2D2] md:text-xl">
            "DefaultMakers" - предприятие полного сервиса, основаное в 2022
            году, предлагающее поставки микрокомпьютеров и других технических
            составляющих, предоставление готовых решений для различных проектов,
            международные и местные грузоперевозки.
          </div>
        </div>
      </div>
      <div
        class="mt-28 flex w-5/6 max-w-[1163px] flex-col justify-center md:mt-10"
      >
        <div
          class="ml-24 flex w-full flex-row justify-start text-6xl font-semibold md:ml-0 md:text-3xl"
        >
          Наша миссия
        </div>
        <ul
          class="maincont11 ml-24 mt-10 flex w-[992px] flex-col items-center pb-56 md:pb-16"
        >
          <li class="w-2/3 text-2xl md:w-full md:text-lg">
            Давать клиентам сосредоточиться на своем бизнесе, предоставляя
            микрокомпьютеры и их составляющие в
            <b>кратчайшие сроки.</b>
          </li>
          <li class="w-2/3 text-2xl md:w-full md:text-lg">
            Быть компанией, которой можно доверять и работать c нами в
            долгосрочной перспективе.
          </li>
        </ul>
        <div
          class="ml-[-71px] flex w-full flex-row justify-end text-6xl font-semibold md:ml-0 md:justify-start md:text-3xl"
        >
          Наше Видение
        </div>
        <ul
          class="maincont12 ml-24 mt-10 flex w-[992px] flex-col items-center justify-end pb-56 md:m-0 md:w-full md:pb-16"
        >
          <li class="min-md:mt-24 w-2/3 text-2xl md:w-full md:text-lg">
            Быть лидерами рынка, обеспечить лучшие цены, лучшую логистику,
            лучшее сотрудничество.
          </li>
          <li class="w-2/3 text-2xl md:w-full md:text-lg">
            Мы всегда готовы выслушать ваши предложения и сделать все, что в
            наших силах!
          </li>
        </ul>
      </div>
      <div class="mainab1 flex w-full items-center justify-center md:py-10">
        <div class="flex h-1/2 w-5/6 max-w-[911px] flex-col md:h-auto">
          <div class="text-7xl font-semibold md:text-3xl">Наша команда!</div>
          <div
            class="mt-10 flex flex-row justify-between md:flex-col md:gap-y-10"
          >
            <div
              class="cardab flex h-[499px] w-96 flex-col items-center justify-around rounded-[40px] p-5 md:h-auto md:w-full md:gap-y-5"
            >
              <div
                class="h-[256px] w-[256px] rounded-full bg-[#D9D9D9] md:aspect-square md:h-auto md:w-3/4"
              ></div>
              <div class="text-2xl font-semibold md:text-lg">Дмитрий</div>
              <div class="text-center text-xl md:text-base">
                Специалист по международной торговле,&nbsp;экономист,
                бизнес-аналитик
              </div>
            </div>
            <div
              class="cardab flex h-[499px] w-96 flex-col items-center justify-around rounded-[40px] p-5 md:h-auto md:w-full md:gap-y-5"
            >
              <div
                class="h-[256px] w-[256px] rounded-full bg-[#D9D9D9] md:aspect-square md:h-auto md:w-3/4"
              ></div>
              <div class="text-2xl font-semibold md:text-lg">Владимир</div>
              <div class="text-center text-xl md:text-base">
                СММ - директор, логист, ведущий программист.
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

<style>
.maincont11 {
  background: url(@/assets/contacts1.svg);
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 1320px;
  height: auto;

  @apply md:m-0 md:w-auto md:bg-center;
}
.maincont12 {
  background: url(@/assets/Ellipse51.svg);
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 1320px;
}
.placed {
  background: none;
  height: 80px;
  padding: 11px;
  font-size: 35px;
  outline: none;
  background: #d9d9d9;
  border-radius: 0px;
}
.mainab {
  background: url(@/assets/aboutback.svg);
  height: 1111px;
  background-size: cover;

  @apply md:h-auto;
}
.mainab1 {
  background: #d9d9d9;
  height: 999px;
  background-size: cover;

  @apply md:h-auto;
}
.big {
  font-size: 251px;

  @apply md:text-4xl;
}
ul {
  list-style: inside; /* Квадрат в качестве маркера */
}
li {
  margin-top: 61px;

  @apply md:mt-8;
}
.cardab {
  background: linear-gradient(
    135deg,
    rgba(188, 17, 66, 0.3) 0%,
    rgba(234, 113, 2, 0.3) 100%
  );
}
</style>
