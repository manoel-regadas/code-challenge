<template>
  <header class="header grid bgColor-neu-11">
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
          class="header__picture overlay-04"
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
          <h1
            class="header__title font-4xl color-neu-01"
            v-text="slide.title"
          />
          <p class="header__title font-l-3 color-neu-01" v-text="slide.text" />
        </div>
      </transition>
    </template>
    <div class="header__search-container">
      <search-input :placeholder="'From'" :searchText="'test'" />
      <search-input :placeholder="'To'" :searchText="'test'" />
    </div>
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
  </header>
</template>
<script lang="ts">
import SearchInput from '~/components/DropdownInput/SearchInput.vue'
export default {
  name: 'Header',
  components: { SearchInput },
  data() {
    return {
      currentSlide: 1,
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
    },
    previusSlide() {
      this.currentSlide === 1
        ? (this.currentSlide = this.slides.length)
        : this.currentSlide--
    },
  },
  computed: {},
}
</script>
<style lang="scss" scoped>
@use 'header.scss';
</style>
