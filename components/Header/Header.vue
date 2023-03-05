<template>
  <header class="header">
    <div class="header__media grid">
      <button
        class="header__arrow header__arrow--left"
        title="previous slide"
        @click="previusSlide()"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12L5 12"
            stroke="#070707"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path d="M9 18L3 12L9 6" stroke="#070707" stroke-width="2" />
        </svg>
      </button>
      <template v-for="(slide, index) in slides">
        <transition name="picture" :key="index">
          <picture
            class="header__picture overlay-03 bgColor-neu-11"
            v-if="currentSlide === index + 1"
          >
            <source media="(max-width:1024px)" :srcset="slide.image.narrow" />
            <img :src="slide.image.wide" :alt="slide.image.alt" />
          </picture>
        </transition>
      </template>
      <template v-for="(slide, index) in slides">
        <transition name="text" :key="index">
          <div
            :key="slide.title"
            class="header__text-area"
            v-show="currentSlide === index + 1"
          >
            <h1 class="header__title font-4xl color-neu-11">
              <span class="bgColor-neu-01">{{ slide.title }}</span>
            </h1>
            <p class="header__text font-l-3 color-neu-01" v-text="slide.text" />
          </div>
        </transition>
      </template>
      <button
        class="header__arrow header__arrow--right"
        title="next slide"
        @click="nextSlide()"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12L3 12"
            stroke="#070707"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path d="M15 18L21 12L15 6" stroke="#070707" stroke-width="2" />
        </svg>
      </button>
    </div>
    <div class="header__search-container bgColor-neu-01">
      <p class="header__search-title font-m-2 color-neu-08">
        Choose your destination
      </p>

      <search-input
        class="header__search-input"
        :placeholder="'From'"
        :searchText="'test'"
        :label="'Leave from'"
        :results="allCodes"
        @input="(e) => (departureInput = e)"
      />
      <search-input
        class="header__search-input"
        :placeholder="'To'"
        :searchText="'test'"
        :label="'Going to'"
        :results="!departureCodes ? allCodes : departureCodes"
        @input="(e) => (arrivalInput = e)"
      />
    </div>
  </header>
</template>
<script>
// @ts-ignore
import data from '@/static/data.json'
import CodeMapper from '@/composables/FerriesCodeMapper.ts'
import SearchInput from '@/components/DropdownInput/SearchInput.vue'
export default {
  name: 'Header',
  components: { SearchInput },
  data() {
    return {
      currentSlide: 1,
      handleInterval: null,
      apiTest: data,
      allCodes: [],
      arrivalCodes: [],
      departureCodes: [],
      departureInput: '',
      arrivalInput: '',
    }
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide === this.slides.length
        ? (this.currentSlide = 1)
        : this.currentSlide++
      clearInterval(this.handleInterval)
      this.handleInterval = setInterval(this.handleSlider, 8000)
    },
    previusSlide() {
      this.currentSlide === 1
        ? (this.currentSlide = this.slides.length)
        : this.currentSlide--
      clearInterval(this.handleInterval)
      this.handleInterval = setInterval(this.handleSlider, 8000)
    },
    handleSlider() {
      this.nextSlide()
    },
    scheduleKeys() {
      const codes = CodeMapper(Object.keys(this.apiTest.schedule))
      return codes
    },
  },
  watch: {
    departureInput(newValue, oldValue) {
      const code = newValue.split('-')[1]?.trim()
      if (code) {
        this.departureCodes = CodeMapper(
          Object.keys(this.apiTest.schedule[code])
        )
        this.$emit('schedules', this.apiTest.schedule[code])
      } else {
        this.departureCodes = this.allCodes
      }
    },
    arrivalInput(newValue, oldValue) {
      console.log(newValue)
    },
  },
  computed: {},
  mounted() {
    this.handleInterval = setInterval(this.nextSlide, 8000)
    this.allCodes = this.scheduleKeys()
  },
}
</script>
<style lang="scss" scoped>
@use 'header.scss';
</style>
