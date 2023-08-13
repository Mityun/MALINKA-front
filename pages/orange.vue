<template>
  <section>
      <Navbar />
      <div class="flex justify-center">
        <div class="main2 flex flex-col justify-center items-center mt-28 text-2xl">
            <div class="w-full">
                <div class="fl flex flex-row">Каталог &nbsp;/ &nbsp; <div class="text-[#EA7102]">Orange pi</div></div>
            </div>
            <div class="text-[#D2D2D2] lana md:text-[150px] lg:text-[220px] xl:text-[255px] font-extrabold hhhh">Orange<br> pi</div>
        </div>
       </div>
      <div class="flex justify-end"><img src="@/assets/Rectangle.svg" style="position: absolute;" class="z-0 -mt-56 w-1/3" alt=""></div>
      <div class="flex justify-center mt-20">
          <div class="grid w-5/6 grid-cols-2 gap-4 mmm items-start max-w-[955px]">
            <NuxtLink to="/catorange16" class="bg-white backdrop-opacity-100 rounded-3xl p-3 flex flex-col justify-center">
                <img src="@/assets/image4.svg" alt="">
                <div class="h-28 flex items-center text-[#EA7102] text-2xl ml-3"><div class="pl-5 pr-5 p-2 rounded-3xl border-2 border-[#D2D2D2]">Orange Pi 5</div></div>
            </NuxtLink>
            <NuxtLink to="/catorangeacc" class="bg-white backdrop-opacity-100 rounded-3xl p-3 flex flex-col justify-center">
               <div class="flex justify-center items-center"> <img src="@/assets/image3.svg" alt="" class="w-2/3"></div>
                <div class="h-28 flex items-center text-[#EA7102] text-2xl ml-3"> <div class="pl-5 pr-5 p-2 rounded-3xl border-2 border-[#D2D2D2]">Аксессуары</div></div>
            </NuxtLink>
            <NuxtLink to="/catorange" class="bg-white backdrop-opacity-100 rounded-3xl p-3 flex flex-col justify-center">
                <img src="@/assets/image5.svg" alt="">
                <div class="h-28 flex items-center text-[#EA7102] text-2xl ml-3"> <div class="pl-5 pr-5 p-2 rounded-3xl border-2 border-[#D2D2D2]">Orange Pi 4</div></div>
            </NuxtLink>
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
  }
}
</script>

<style>
.lana{
    line-height: 1;
}
.mmm{
    grid-auto-rows: minmax(100px, auto);
}
.hhhh{
	text-shadow: 
		-0   -5px 0   #EA7102,
		 0   -5px 0   #EA7102,
		-0    5px 0   #EA7102,
		 0    5px 0   #EA7102,
		-5px -0   0   #EA7102,
		 5px -0   0   #EA7102,
		-5px  0   0   #EA7102,
		 5px  0   0   #EA7102,
		-1px -5px 0   #EA7102,
		 1px -5px 0   #EA7102,
		-1px  5px 0   #EA7102,
		 1px  5px 0   #EA7102,
		-5px -1px 0   #EA7102,
		 5px -1px 0   #EA7102,
		-5px  1px 0   #EA7102,
		 5px  1px 0   #EA7102,
		-2px -5px 0   #EA7102,
		 2px -5px 0   #EA7102,
		-2px  5px 0   #EA7102,
		 2px  5px 0   #EA7102,
		-5px -2px 0   #EA7102,
		 5px -2px 0   #EA7102,
		-5px  2px 0   #EA7102,
		 5px  2px 0   #EA7102,
		-3px -5px 0   #EA7102,
		 3px -5px 0   #EA7102,
		-3px  5px 0   #EA7102,
		 3px  5px 0   #EA7102,
		-5px -3px 0   #EA7102,
		 5px -3px 0   #EA7102,
		-5px  3px 0   #EA7102,
		 5px  3px 0   #EA7102,
		-4px -5px 0   #EA7102,
		 4px -5px 0   #EA7102,
		-4px  5px 0   #EA7102,
		 4px  5px 0   #EA7102,
		-5px -4px 0   #EA7102,
		 5px -4px 0   #EA7102,
		-5px  4px 0   #EA7102,
		 5px  4px 0   #EA7102,
		-5px -5px 0   #EA7102,
		 5px -5px 0   #EA7102,
		-5px  5px 0   #EA7102,
		 5px  5px 0   #EA7102,
		-5px -5px 0   #EA7102,
		 5px -5px 0   #EA7102,
		-5px  5px 0   #EA7102,
		 5px  5px 0   #EA7102;
}
</style>