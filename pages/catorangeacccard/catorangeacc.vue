<template>
    <section>
        <Navbar />
        <div class="flex justify-center">
            <div
                class="main2 flex flex-col justify-center mt-28 text-2xl w-2/3 max-w-[946px]"
            >
                <div class="w-2/3 max-w-[946px]">
                    <div class="fl flex flex-row">
                        <NuxtLink to="/orange"> Каталог &nbsp;/ </NuxtLink>
                        <NuxtLink to="/orange" class="text-[#EA7102]">&nbsp; Orange pi</NuxtLink>
                        &nbsp; / &nbsp;
                        <div class="text-[#EA7102]" >Аксессуары</div>
                    </div>
                </div>
            </div>
        </div>
        <img src="@/assets/Ellipse22.svg" width="100%" alt="" class="pic1 max-w-[1466px]" />
        <div class="flex justify-center">
            <div class="w-2/3 justify-center items-center mt-6 max-w-[946px]">
                <div class="grid grid-cols-3 gap-4">
                    <div
                        v-for="item in arrar"
                        :key="item.id"
                        class="w-full card flex flex-col justify-between bg-white p-3 rounded-3xl backdrop-opacity-100 max-w-[306px] h-[474px]"
                
                    >
                    <div class="absolute w-full h-full z-10" @click.prevent="openUser(item)"></div>
                        <div
                            :style="{
                                'background-image':
                                    'url(' + item.main_photo_url + ')',
                            }"
                            class="w-full h-64 lll"
                        ></div>
                        <div class="flex flex-row justify-between p-1">
                           <div class="ml-[13px]">
                                <div class="text-lg text-[#D2D2D2] line-through" v-if="item.discount != 0">{{Number(item.price).toLocaleString('ru-RU')}} ₽</div>
                                    <div class="flex flex-row items-end">
                                    <div class="text-4xl text-black font-semibold"  v-if="item.discount != 0">{{Number(item.priceDiscounted).toLocaleString('ru-RU')}}</div>
                                    <div class="text-4xl text-black font-semibold" v-else>{{Number(item.price).toLocaleString('ru-RU')}}</div>
                                    <div class="text-2xl text-black ml-1">₽</div>
                                    </div>
                                    <div class="text-2xl text-black">{{item.name}}</div>
                                </div>
                                <div class="skidka text-2xl text-black border-[#EA7102] border-[2px] rounded-2xl h-12 pl-4 pr-4 flex flex-row justify-center items-center"  v-if="item.discount != 0">
                                    <div>-{{item.discount}}%</div>
                                </div>
                           
                        </div>
                        <div class="flex justify-center items-center h-16">
                        <div class="z-50 hov w-2/3" style="display:none" v-bind:id="item.id+'x'" >
                            <div class="but flex flex-row justify-center border-[2px] pt-4 pb-4 border-[#EA7102] bg-white items-center rounded-full">
                            <div class="text-[#EA7102] font-semibold text-xl">В корзине</div>
                            </div>
                        </div>
                        <div class="z-50 hov w-2/3" @click.prevent="cartAdd(item)" v-bind:id="item.id+'z'" >
                            <div class="but flex flex-row justify-center border-[2px] pt-4 pb-4 border-[#EA7102] bg-[#EA7102] items-center rounded-full opacity-90">
                            <div class="text-[#FFFFFF] font-semibold text-xl">Купить</div>
                            </div>
                        </div>
                        <div to="/main" class="z-10 hov" style="display:none" @click="openUser(item)">
                            <div class="but flex flex-row justify-center rounded-3xl border border-black items-center ">
                            <div class="text-black p-2 pl-11 pr-11">Предзакать</div>
                            </div>
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
import Under from "@/components/Under.vue";
import Navbar from "@/components/Navbar.vue";


export default {
    components: {
        Navbar,
        Under,
    },
    data() {
        return {
            ara: [],
            arrar: [],
            hor: [],
        };
    },
    methods: {
        fetchProducts() {
            fetch(`${process.env.BASE_URL}/products/?subcategory=8`)
            .then(response => response.json())
            .then(products => {
                for (let i = 0; i < products.length; i++) {
                    this.arrar.push(products[i]);
                    this.arrar[i].main_photo_url = this.arrar[i].photo_url.split(';')[0]

                    // calculate discount and save if in priceC atrtibute
                    if (products[i].discount != 0) {
                        let priceDiscounted = products[i].price * (100 - products[i].discount) / 100;
                        priceDiscounted = Math.round(priceDiscounted);
                        this.arrar[i].priceDiscounted = priceDiscounted;
                    }
                
                }
            })
            .catch(error => console.error(error));
        },
        fetchProducts1(){
            fetch(`${process.env.BASE_URL}/products`)
            .then(response => response.json())
            .then(products => {
                for (let i = 0; i < products.length; i++) {
                   
                    if (localStorage.getItem(i) == null) {
                        
                    } else {
                        this.hor.push(JSON.parse(localStorage.getItem(i)))
                    }
                    


                    for (let c = 0; c < this.hor.length; c++) {
                        if(document.getElementById(this.hor[c].id + 'z') != null){
                            document.getElementById(this.hor[c].id + 'z').style.display = 'none'
                            document.getElementById(this.hor[c].id + 'x').style.display = 'block' 
                        }
                    }
                

                }
            })
            .catch(error => console.error(error));
        },
        openUser(item) {
            this.$router.push('/catorangeacccard/' + item.id)
        },
        cartAdd(item) {
            document.getElementById(item.id + 'z').style.display = 'none'
            document.getElementById(item.id + 'x').style.display = 'block'
            item.count = 1
            localStorage.setItem(item.id, JSON.stringify(item));
        }
    },
    mounted() {
        this.fetchProducts();
    },
    created(){
        this.fetchProducts1();
    }
};
</script>

<style>
.pic1 {
    position: absolute;
    z-index: 0;
}
.lll {
    background-size: cover;
}
.but{
    cursor: pointer;
}
</style>
