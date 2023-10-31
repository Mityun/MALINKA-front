<template>
  <section class="nnn">
    <div class="main1 flex h-80 flex-row items-end p-0 md:h-auto">
      <div
        class="bottom flex h-56 w-full flex-row items-center justify-around md:h-auto md:flex-col md:gap-y-3 md:py-5"
      >
        <NuxtLink
          to="/"
          class="flex basis-1/6 items-center justify-center md:mb-4 md:basis-auto"
        >
          <img src="@/assets/BlackLogo1.svg" width="70%" alt="" />
        </NuxtLink>
        <div
          class="flex h-2/3 basis-1/6 flex-col items-center justify-center md:basis-auto"
        >
          <NuxtLink to="/rasb" class="text-2xl font-extralight">
            Каталог
          </NuxtLink>
          <NuxtLink to="/rasb" class="mt-1 text-lg font-thin">
            Raspberry Pi
          </NuxtLink>
          <NuxtLink to="/orange" class="text-lg font-thin">Orange Pi</NuxtLink>
          <NuxtLink to="/" class="text-lg font-thin">Прочее</NuxtLink>
        </div>
        <div
          class="flex h-2/3 basis-1/6 flex-col items-center justify-center md:basis-auto"
        >
          <NuxtLink to="/contacts" class="text-2xl font-extralight">
            Контакты
          </NuxtLink>
          <NuxtLink to="/contacts" class="mt-1 text-lg font-thin">
            Для Юр. лиц
          </NuxtLink>
          <NuxtLink to="/contacts" class="text-lg font-thin">
            Для Физ. лиц
          </NuxtLink>
          <a href="https://vk.com/makers_dafault" class="text-lg font-thin">
            мы в vk
          </a>
        </div>
        <NuxtLink
          to="/about"
          class="mar flex h-2/3 basis-1/6 flex-col items-center justify-start text-2xl font-extralight md:!mt-0 md:basis-auto"
        >
          О нас
        </NuxtLink>
        <NuxtLink
          to="/reviews"
          class="mar flex h-2/3 basis-1/6 flex-col items-center justify-start text-2xl font-extralight md:!mt-0 md:basis-auto"
        >
          Отзывы
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex basis-1/6 items-center justify-center md:mt-5"
        >
          <img
            src="@/assets/m2dgroup.svg"
            width="100%"
            class="md:max-w-[200px]"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.nnn {
  position: relative;
  @apply mt-28 md:mt-16;
}
section {
  width: 100%;
}
.bottom {
  background: #d9d9d9;
}
.mar {
  margin-top: 30px;
}
</style>
