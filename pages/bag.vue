<template>
  <section>
    <Navbar />
    <div v-if="!payment">
      <div class="flex justify-center">
        <div
          class="flex w-5/6 max-w-[1196px] flex-row justify-between md:flex-col"
        >
          <div class="w-[48%] md:w-full">
            <div class="mt-28 text-5xl font-semibold md:text-3xl">Корзина</div>
            <div class="flex flex-row">
              <div class="allCards w-full">
                <div
                  v-for="item in hor"
                  :id="item.id + 'a'"
                  :key="item.id"
                  class="bl mt-9 flex h-44 w-[96%] flex-row justify-between"
                >
                  <div class="flex basis-2/3 flex-col justify-between">
                    <div class="relative min-w-full text-3xl font-medium">
                      {{ item.name }}
                    </div>
                    <div class="flex flex-row items-center justify-between">
                      <div
                        v-if="item.discount != 0"
                        class="card flex flex-row items-end justify-end text-5xl font-semibold"
                      >
                        {{ item.priceDiscounted.toLocaleString('ru-RU') }}
                        <div class="ml-3 text-2xl">₽</div>
                      </div>
                      <div
                        v-else
                        class="card flex flex-row items-end justify-end text-5xl font-semibold"
                      >
                        {{ item.price.toLocaleString('ru-RU') }}
                        <div class="ml-3 text-2xl">₽</div>
                      </div>
                      <div>
                        <div
                          class="ladnobut grid max-w-[87%] grid-cols-3 rounded-full border border-black"
                        >
                          <div
                            style="
                              cursor: pointer;
                              border-right: 1px solid black;
                            "
                            class="flex items-center justify-center p-2"
                            @click="minus(item)"
                          >
                            <img src="@/assets/Line10.svg" alt="" />
                          </div>
                          <div
                            :id="item.id"
                            class="p-auto flex w-auto items-center justify-center text-xl font-bold"
                          >
                            {{ item.count }}
                          </div>
                          <div
                            style="
                              cursor: pointer;
                              border-left: 1px solid black;
                            "
                            class="flex items-center justify-center p-2"
                            @click="plus(item)"
                          >
                            <img src="@/assets/Group30.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card flex basis-1/3 items-baseline justify-end rounded-2xl"
                    :style="{
                      'background-image': 'url(' + item.main_photo_url + ')'
                    }"
                  >
                    <div style="cursor: pointer" @click="openUser(item)">
                      <img src="@/assets/Group29.svg" width="40px" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pri mt-28 flex w-[48%] flex-col items-center md:w-full">
            <div
              style="
                cursor: pointer;
                border: 2px solid black;
                border-radius: 100px;
              "
              class="mt-6 flex w-[90%] items-center justify-center p-4 md:mt-4 md:p-1"
            >
              <div class="text-5xl font-semibold md:text-2xl" @click="order">
                Оформить заказ
              </div>
            </div>
            <div class="w-[80%]">
              <div class="mt-12 flex flex-row justify-between">
                <div class="text-2xl font-semibold md:text-lg">
                  Всего товаров: {{ len.toLocaleString('ru-RU') }}
                </div>
                <div class="text-2xl font-semibold md:text-lg">
                  <div>{{ all_sum.toLocaleString('ru-RU') }} ₽</div>
                </div>
              </div>
              <div class="line mt-7 md:mt-4"></div>
              <div class="mt-7 flex flex-row justify-between md:mt-4">
                <div class="text-2xl font-semibold md:text-lg">Cкидка</div>
                <div class="text-2xl font-semibold md:text-lg">
                  <div>
                    -{{ (all_sum - final_sum).toLocaleString('ru-RU') }} ₽
                  </div>
                </div>
              </div>
              <div class="mt-[131px] flex flex-row justify-between md:mt-20">
                <div class="text-2xl font-semibold md:text-lg">Итого</div>
                <div class="text-2xl font-semibold md:text-lg">
                  <div>{{ final_sum.toLocaleString('ru-RU') }} ₽</div>
                </div>
              </div>
              <input
                id="coupon_input"
                type="text"
                placeholder="промокод"
                class="place coupon mb-[151px] mt-11 h-7 w-full rounded-full md:mb-10 md:mt-5 md:text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex justify-center">
        <div class="flex w-5/6 max-w-[1196px] flex-row justify-between">
          <form name="payform-tinkoff" @submit="makePayment">
            <input
              class="payform-tinkoff-row"
              type="hidden"
              name="terminalkey"
              value="1693506146087"
            />
            <input
              class="payform-tinkoff-row"
              type="hidden"
              name="frame"
              value="false"
            />
            <input
              class="payform-tinkoff-row"
              type="hidden"
              name="language"
              value="ru"
            />
            <input
              class="payform-tinkoff-row"
              type="hidden"
              name="receipt"
              value=""
            />
            <input
              class="place mb-0 mt-1 h-7 w-full rounded-full"
              type="hidden"
              name="description"
              value="Покупка в интернет-магазине default-pi.ru"
            />
            <input
              class="place mb-0 mt-1 h-7 w-full rounded-full"
              type="hidden"
              name="order"
            />

            <input
              id="order_sum"
              class="place mb-0 mt-11 h-7 w-full rounded-full"
              type="text"
              placeholder="Сумма заказа"
              name="amount"
              required
              readonly
            />
            <input
              class="place mb-0 mt-3 h-7 w-full rounded-full"
              type="text"
              placeholder="ФИО плательщика"
              name="name"
              required
            />
            <input
              class="place mb-0 mt-3 h-7 w-full rounded-full"
              type="text"
              placeholder="Адрес доставки"
              name="delivery_address"
              required
            />
            <input
              class="place mb-0 mt-3 h-7 w-full rounded-full"
              type="text"
              placeholder="E-mail"
              name="email"
              required
            />
            <input
              class="place mb-0 mt-3 h-7 w-full rounded-full"
              type="text"
              placeholder="Контактный телефон"
              name="phone"
              required
            />
            <input
              class="place mb-0 mt-7 h-7 rounded-full text-5xl font-semibold"
              type="submit"
              value="Оплатить"
            />
          </form>
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
  },
  data() {
    return {
      arrar: [],
      hor: [],
      final_sum: 0,
      len: 0,
      all_sum: 0,
      payment: false,
      used_coupon: false
    }
  },
  mounted() {
    const paymentScript = document.createElement('script')
    paymentScript.setAttribute(
      'src',
      'https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js'
    )
    document.head.appendChild(paymentScript)

    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      fetch(`${process.env.BASE_URL}/products`)
        .then(response => response.json())
        .then(products => {
          for (let i = 0; i < products.length; i++) {
            this.arrar.push(products[i])
            // console.log(this.hor[1]);
            // calculate discount and save if in priceC atrtibute
            if (products[i].discount != 0) {
              let priceDiscounted =
                (products[i].price * (100 - products[i].discount)) / 100
              priceDiscounted = Math.round(priceDiscounted)
              this.arrar[i].priceDiscounted = priceDiscounted
            }

            // console.log(this.arrar);
            this.base = this.arrar[Number(this.$route.params.id) - 1]
            if (localStorage.getItem(i) == null) {
              // console.log('ladno');
              // pass
            } else {
              this.hor.push(JSON.parse(localStorage.getItem(i)))
            }
          }

          for (let m = 0; m < this.hor.length; m++) {
            if (!this.hor[m].hasOwnProperty('count')) {
              this.hor[m].count = 1
            }

            this.all_sum =
              this.all_sum +
              Number(this.hor[m].price) * Number(this.hor[m].count)
            this.len = this.len + Number(this.hor[m].count)

            this.hor[m].main_photo_url = this.hor[m].photo_url.split(';')[0]

            if (this.hor[m].discount == 0) {
              this.final_sum =
                this.final_sum +
                Number(this.hor[m].price) * Number(this.hor[m].count)
            } else {
              this.final_sum =
                this.final_sum +
                Number(this.hor[m].priceDiscounted) * Number(this.hor[m].count)
            }
          }
        })
        .catch(error => console.error(error))
    },
    openUser(item) {
      localStorage.removeItem(item.id)
      document.getElementById(item.id + 'a').style.display = 'none'
      this.len = this.len - item.count
      this.all_sum = this.all_sum - Number(item.count) * Number(item.price)
      if (item.discount == 0) {
        this.final_sum =
          this.final_sum - Number(item.price) * Number(item.count)
      } else {
        this.final_sum =
          this.final_sum - Number(item.priceDiscounted) * Number(item.count)
      }
    },
    plus(item) {
      const k = document.getElementById(item.id).innerHTML
      if (Number(k) < 99) {
        const m = Number(k) + 1
        document.getElementById(item.id).innerHTML = m

        localStorage.removeItem(item.id)
        this.arrar[item.id - 1].count = m
        localStorage.setItem(item.id, JSON.stringify(this.arrar[item.id - 1]))

        this.all_sum = this.all_sum + Number(item.price)
        this.len = this.len + 1

        item.count = Number(item.count) + 1
        item.main_photo_url = item.photo_url.split(';')[0]

        if (item.discount == 0) {
          this.final_sum = this.final_sum + Number(item.price)
        } else {
          this.final_sum = this.final_sum + Number(item.priceDiscounted)
        }
      }
    },
    minus(item) {
      const k = Number(document.getElementById(item.id).innerHTML)
      if (k <= 1) {
        // console.log("Pon");
        // pass
      } else {
        const m = k - 1
        document.getElementById(item.id).innerHTML = m

        localStorage.removeItem(item.id)
        this.arrar[item.id - 1].count = m
        localStorage.setItem(item.id, JSON.stringify(this.arrar[item.id - 1]))

        this.all_sum = this.all_sum - Number(item.price)

        item.count = Number(item.count) - 1
        item.main_photo_url = item.photo_url.split(';')[0]
        if (item.discount == 0) {
          this.final_sum = this.final_sum - Number(item.price)
        } else {
          this.final_sum = this.final_sum - Number(item.priceDiscounted)
        }
        this.len = this.len - 1
      }
    },
    order() {
      const coupon_text = document.getElementById('coupon_input').value

      if (coupon_text != '' && !this.used_coupon) {
        fetch(
          `${process.env.BASE_URL}/coupons/?text=${coupon_text.toUpperCase()}`
        )
          .then(response => response.json())
          .then(coupons => {
            console.log(coupons)
            if (coupons.length == 0) {
              // console.log('no such coupon');
              // pass
            }
            if (coupons.length > 1) {
              // console.log('more than one coupon');
              // pass
            } else {
              const coupon_info = coupons[0]

              if (coupon_info.type == 'sum') {
                this.final_sum -= coupon_info.discount

                this.final_sum = Math.max(this.final_sum, 1)
              } else if (coupon_info.type == 'percent') {
                this.final_sum -= (this.final_sum * coupon_info.discount) / 100
              } else {
                // console.log('error', coupon_info.type);
                // pass
              }
            }
            this.used_coupon = true

            this.payment = true
            // если убрать, то элемент не будет существовать на момент поиска
            setTimeout(() => {
              document.getElementById('order_sum').value = this.final_sum
            }, 1)
          })
          .catch(error => console.error(error))
      } else {
        this.payment = true
        // если убрать, то элемент не будет существовать на момент поиска
        setTimeout(() => {
          document.getElementById('order_sum').value = this.final_sum
        }, 1)
      }
    },
    makePayment(e) {
      e.preventDefault()

      const form = e.target
      const name = form.description.value || 'Оплата'
      const amount = form.amount.value
      const email = form.email.value
      const phone = form.phone.value
      const delivery_address = form.delivery_address.value

      const order_id = Date.now()
      form.order.value = order_id

      console.log(name, amount, email, phone)
      if (amount && email && phone) {
        const item_list = []

        this.hor.forEach(el => {
          item_list.push({
            Name: el.name,
            Price: el.price + '00',
            Quantity: el.count,
            Amount: el.price * el.count + '00',
            PaymentMethod: 'full_prepayment',
            PaymentObject: 'commodity',
            Tax: 'vat20'
          })
        })

        form.receipt.value = JSON.stringify({
          Email: email,
          Phone: phone,
          EmailCompany: 'mail@mail.com',
          Taxation: 'patent',
          Items: item_list
        })

        fetch(`${process.env.BASE_URL}/orders/  `, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            order_id,
            phone_number: phone,
            email,
            name,
            delivery_address: delivery_address.replaceAll(',', ';'),
            sum: this.final_sum,
            products: this.hor
              .map(el => {
                return `${el.name};${el.count}`
              })
              .join(' '),
            status: 'Ожидание оплаты'
          })
        }).catch(error => console.error(error))

        // eslint-disable-next-line no-undef
        pay(form)
      } else {
        alert('Не все обязательные поля заполнены')
        // вывести предупреждение
      }

      return false
    }
  }
}
</script>

<style>
.line {
  height: 2px;
  background-color: black;
}
.none {
  display: none;
}
.bl {
  border-bottom: 1px black solid;
  padding-bottom: 36px;
}
.card {
  background-size: cover;
  background-position: center;
}
.pri {
  background: url(@/assets/backbag.svg);
  min-height: 299px;
  border-radius: 70px;
  max-height: 641px;
}
.place {
  background: none;
  border: 2px solid black;
  height: 51px;
  padding: 11px;
  font-size: 25px;
  outline: none;

  @apply md:text-lg;
}
input::-webkit-input-placeholder {
  color: black;
  font-size: 25px;
  font-weight: 500;
  position: absolute;
  margin-top: -2px;

  @apply md:text-lg;
}
.allCards {
  max-height: 850px;
  overflow-y: scroll;
}
.ladnobut {
  user-select: none;
}
.coupon {
  color: black;
}
</style>
