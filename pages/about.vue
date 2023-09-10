<template>
  <section>
    <Navbar />
    <div class="flex items-center flex-col mt-28 justify-center">
        <div class="mainab w-full flex justify-center items-center">
            <div class="w-5/6 max-w-[1163px] flex flex-col h-1/2 justify-around">
                <div class="big text-[#D2D2D2]">О нас</div>
                <div class="text-3xl text-[#D2D2D2]">"DefaultMakers" - предприятие полного сервиса, основаное в 2022 году, предлагающее поставки микрокомпьютеров и других технических составляющих, предоставление готовых решений для различных проектов, международные и местные грузоперевозки.</div>
            </div>
        </div>
        <div class="w-5/6 max-w-[1163px] mt-28 flex justify-center flex-col">
            <div class="w-full flex justify-start flex-row text-6xl font-semibold ml-24">
                Наша миссия
            </div>
            <ul class="flex flex-col mt-10 pb-56 maincont11 items-center w-[992px] ml-24">
                <li class="text-2xl w-2/3">Давать клиентам сосредоточиться на своем бизнесе, предоставляя микрокомпьютеры и их составляющие в <b>кратчайшие сроки.</b></li>
                <li class="text-2xl w-2/3">Быть компанией, которой можно доверять и работать c нами в долгосрочной перспективе.</li>
            </ul>
            <div class="w-full flex flex-row text-6xl font-semibold justify-end ml-[-71px]">
                Наше Видение
            </div>
            <ul class="flex flex-col mt-10 pb-56 maincont12 w-[992px] items-center justify-end ml-24">
                <li class="text-2xl w-2/3 mt-24">Быть лидерами рынка, обеспечить лучшие цены, лучшую логистику, лучшее сотрудничество.</li>
                <li class="text-2xl w-2/3">Мы всегда готовы выслушать ваши предложения и сделать все, что в наших силах!</li>
            </ul>
        </div>
        <div class="mainab1 w-full flex justify-center items-center">
            <div class="w-5/6 max-w-[911px] flex flex-col h-1/2">
                <div class="text-7xl font-semibold">Наша команда!</div>
                <div class="flex flex-row justify-between mt-10">
                    <div class="flex flex-col items-center w-96 h-[499px] cardab rounded-[40px] justify-around p-5">
                        <div class="w-[256px] h-[256px] bg-[#D9D9D9] rounded-full"></div>
                        <div class="font-semibold text-2xl">Дмитрий</div>
                        <div class="text-xl text-center">Специалист по международной торговле,&nbsp;экономист, бизнес-аналитик</div>
                    </div>
                    <div class="flex flex-col items-center w-96 h-[499px] cardab rounded-[40px] justify-around p-5">
                        <div class="w-[256px] h-[256px] bg-[#D9D9D9] rounded-full"></div>
                        <div class="font-semibold text-2xl">Владимир</div>
                        <div class="text-xl text-center">СММ - директор, логист, ведущий программист.</div>
                    </div>
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
    Navbar, Under
  },

}

</script>

<style>
.maincont11{
    background: url(@/assets/contacts1.svg);
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 1320px;
    height: auto;
}
.maincont12{
    background: url(@/assets/Ellipse51.svg);
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 1320px;
    
}
.placed{
    background: none;
    height: 80px;
    padding: 11px;
    font-size: 35px;
    outline:none;
    background: #D9D9D9;
    border-radius: 0px;
}
.mainab{
    background: url(@/assets/aboutback.svg);
    height: 1111px;
    background-size: cover;
}
.mainab1{
    background: #D9D9D9;
    height: 999px;
    background-size: cover;
}
.big{
    font-size: 251px;
}
ul{
    list-style: inside; /* Квадрат в качестве маркера */
}
li{
    margin-top: 61px;
}
.cardab{
    background: linear-gradient(135deg, rgba(188, 17, 66, 0.30) 0%, rgba(234, 113, 2, 0.30) 100%);
}
</style>