<template>
  <section>
    <div class="main relative grid grid-cols-12 bg-[#D2D2D2]">
      <div class="photo_navbar">
        <NuxtLink to="/" class="logo">
          <img src="@/assets/BlackLogo1.svg" width="80%" alt="" />
        </NuxtLink>
      </div>
      <button
        class="hidden md:absolute md:right-4 md:top-3 md:flex md:items-center md:justify-center md:p-1"
        @click="openBurger"
      >
        <img src="/images/burger-icon.svg" alt="" />
      </button>
      <div class="lan">
        <div
          :class="[
            'main_navbar max-w-4xl',
            isBurgerOpened ? 'md:!flex' : 'md:!hidden'
          ]"
        >
          <button
            class="hidden md:absolute md:right-4 md:top-3 md:flex md:items-center md:justify-center md:p-1"
            @click="closeBurger"
          >
            <img src="/images/burger-icon-opened.svg" alt="" />
          </button>
          <NuxtLink to="/" class="text-nav">Главная</NuxtLink>
          <div
            class="text-nav cat1 z-20 flex flex-col justify-center md:!hidden"
          >
            <div>Каталог</div>
            <div class="one z-10 flex flex-col bg-[#D2D2D2] duration-100">
              <NuxtLink to="/rasb" class="cat mt-[20px] md:mt-0">
                &#62; Rasberry Pi
              </NuxtLink>
              <NuxtLink to="/orange" class="cat">&#62; Orange Pi</NuxtLink>
              <NuxtLink to="/" class="cat">&#62; Прочее</NuxtLink>
              <div class="mt-4 flex justify-center md:hidden">
                <img src="@/assets/Line14.svg" alt="" />
              </div>
            </div>
          </div>
          <NuxtLink to="/about" class="text-nav">О нас</NuxtLink>
          <NuxtLink to="/reviews" class="text-nav">Отзывы</NuxtLink>
          <NuxtLink to="/contacts" class="text-nav">Контакты</NuxtLink>
          <NuxtLink to="/" class="search md:hidden"></NuxtLink>
          <div to="/bag" class="bag">
            <NuxtLink to="/bag"><img src="@/assets/bag.svg" alt="" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isBurgerOpened: false
    }
  },

  methods: {
    openBurger() {
      this.isBurgerOpened = true
    },
    closeBurger() {
      this.isBurgerOpened = false
    }
  }
}
</script>

<style>
section {
  width: 100%;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main_navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 60px;
  border: 1px solid black;
  border-radius: 100px;
  margin-top: 19px;

  @apply md:fixed md:inset-0 md:z-[999] md:mt-0 md:h-full md:w-full md:flex-col md:items-center md:justify-center md:gap-y-2 md:rounded-[0px] md:border-none md:bg-white;
}
.photo_navbar {
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.text-nav {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 100;

  @apply md:mb-2 md:flex md:flex-col md:items-center;
}
.lan {
  display: flex;
  justify-content: center;
}
.search {
  height: 85%;
  background-color: #d9d9d9;
  width: 20%;
  border-radius: 100px;
}
.logo {
  display: flex;
  justify-content: center;
}
.bag {
  width: 10%;
}
.cat1 {
  height: 60px;
  @apply md:h-auto;
}
.one {
  visibility: hidden;
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: -45px;
  height: 0px;
  overflow: hidden;
  margin-top: 60px;
  border: 1px solid black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @apply md:visible md:static md:ml-1 md:mt-2 md:h-auto md:overflow-auto md:rounded-none md:border-none md:!bg-transparent md:p-0;
}
.cat1:hover .one {
  visibility: visible;
  height: 150px;
  margin-top: 208px;

  @apply md:mt-2 md:h-auto md:hover:visible;
}
.one:hover {
  visibility: visible;

  @apply md:hover:visible;
}
</style>
