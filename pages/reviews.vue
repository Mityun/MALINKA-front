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
                  <div class="font-thin text-3xl">Автор: Стив </div>
                  <div class="mt-1 font-normal text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie, dui id faucibus blandit, felis sapien posuere dui, venenatis feugiat tellus augue suscipit ligula</div>
                  <div class="font-thin text-3xl mt-1">Товар: Raspberry pi 7-8</div>
                  <div class="font-thin text-3xl mt-3">Источник: vk</div>
                </div>
                <div class="basis-1/3 bg-white w-1/3">02</div>
            </div>
            <div class="review flex flex-row h-fit w-full p-9" >
                <div class="basis-2/3 flex flex-col justify-start p-3">
                  <div class="font-thin text-3xl">Автор: Стив </div>
                  <div class="mt-1 font-normal text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie, dui id faucibus blandit, felis sapien posuere dui, venenatis feugiat tellus augue suscipit ligula</div>
                  <div class="font-thin text-3xl mt-1">Товар: Raspberry pi 7-8</div>
                  <div class="font-thin text-3xl mt-3">Источник: vk</div>
                </div>
                <div class="basis-1/3 bg-white w-1/3">02</div>
            </div>
            <div class="review flex flex-row h-fit w-full p-9" >
                <div class="basis-2/3 flex flex-col justify-start p-3">
                  <div class="font-thin text-3xl">Автор: Стив </div>
                  <div class="mt-1 font-normal text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie, dui id faucibus blandit, felis sapien posuere dui, venenatis feugiat tellus augue suscipit ligula</div>
                  <div class="font-thin text-3xl mt-1">Товар: Raspberry pi 7-8</div>
                  <div class="font-thin text-3xl mt-3">Источник: vk</div>
                </div>
                <div class="basis-1/3 bg-white w-1/3">02</div>
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
</style>