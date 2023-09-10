<template>
  <section>
    <Navbar />
    <div class="flex items-center flex-col mt-28 justify-center">
        <div class="w-5/6 max-w-[1333px]">
            <div class="w-full flex justify-start flex-row text-6xl font-semibold">
                Наши контакты:
            </div>
            <div class="flex justify-end text-9xl font-semibold flex-col items-end mt-20 maincont pt-24 pb-24">
                <div>Для</div>
                <div>юридических</div>
                <div>лиц:</div>
            </div>
            <div class="w-full flex flex-col justify-start">
                <div class="text-lg font-thin">Email</div>
                <input type="text" class="placed w-full">
            </div>
            <div class="w-full flex flex-col justify-start mt-10">
                <div class="text-lg font-thin">Ваше имя</div>
                <input type="text" class="placed w-full">
            </div>
            <div class="w-full flex flex-col justify-start mt-10">
                <div class="text-lg font-thin">Телефон</div>
                <input type="text" class="placed w-full">
            </div>
            <div style="cursor:pointer;border: 2px solid black;border-radius:100px;" class="flex justify-center items-center p-4 mt-8 w-full">
                    <div class="text-5xl font-semibold">
                        Оставить заявку
                    </div>
            </div>
            <div class="flex justify-end text-9xl font-semibold flex-col items-start mt-20 maincont1 pt-24 pb-24">
                <div>Для</div>
                <div>физических</div>
                <div>лиц:</div>
            </div>
            <div class="flex flex-col justify-start">
                <div class="flex flex-row">
                    <div class="h-36 border-[2px] border-[black] rounded-[50px] flex flex-col justify-around p-5" >
                        <div class="font-semibold text-2xl">Почта для связи:</div>
                        <div class="font-semibold text-3xl">makersdefault@gmail.com</div>
                    </div>
                    <div class="h-36 border-[2px] border-[black] rounded-[50px] flex flex-col justify-around p-5 ml-5 items-center" >
                        <div class="font-semibold text-2xl">Телефон для связи:</div>
                        <div class="font-semibold text-3xl">+7-926-668-26-88</div>
                    </div>
                </div>
                <div class="h-36 border-[2px] border-[black] rounded-[50px] flex flex-col justify-around p-5 mt-5 items-center w-1/4" >
                    <a class="font-semibold text-4xl" href="https://vk.com/makers_dafault/">Мы в VK</a>
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
.maincont{
    background: url(@/assets/contacts1.svg);
    background-size: 74%;
    background-repeat: no-repeat;
    background-position-y: 45%;
    background-position-x: 95%;
    max-width: 1320px;
}
.maincont1{
    background: url(@/assets/contacts2.svg);
    background-size: 74%;
    background-repeat: no-repeat;
    background-position-y: 70%;
    background-position-x: 5%;
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

</style>