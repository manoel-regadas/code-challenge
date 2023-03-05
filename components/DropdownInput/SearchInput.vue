<template>
  <div class="searchInput" :class="disable ? 'searchInput--disable' : ''">
    <label
      :for="id"
      class="searchInput__label font-xs color-neu-08"
      v-text="label"
    />
    <div
      class="searchInput__innerContainer"
      :class="
        input || isInputOpened ? 'searchInput__innerContainer--active' : ''
      "
    >
      <div class="searchInput__inputContainer">
        <input
          type="text"
          class="searchInput__input font-xs"
          name="search"
          :id="id"
          v-model="input"
          :placeholder="placeholder"
          @keyup.enter="$emit('input', input)"
          @focus="isInputOpened = true"
        />
        <div class="searchInput__openBtn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 8L12 15L19 8" stroke="#070707" stroke-width="2" />
          </svg>
        </div>
        <button
          v-if="input"
          class="searchInput__searchCancel"
          @click="resetInput()"
        >
          <svg
            role="img"
            aria-describedby="resetInputText"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="resetInputText">reset Input Text</title>
            <path
              d="M9 15L15 9M15 15L9 9"
              stroke="#070707"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#070707"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
      <div v-if="isInputOpened" class="searchInput__resultsContainer">
        <ul class="searchInput__resultsList">
          <li
            v-for="(place, index) in filteredList"
            :key="index"
            class="searchInput__resultItem"
            role="button"
            @click="
              handleListClik(place)
              $emit('input', input)
            "
          >
            <p
              class="searchInput__resultInputText"
              :class="input ? 'searchInput__resultInputText--searching' : ''"
            >
              <span v-if="input" class="searchInput__resultIcon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#070707"
                    stroke-width="2"
                  />
                  <path
                    d="M20 20L16 16"
                    stroke="#070707"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  /></svg
              ></span>
              <span class="font-xs color-neu-08" v-html="place" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import UniqueID from '@/composables/UniqueID'
export default {
  name: 'SearchInput',
  data() {
    return {
      input: '',
      isInputOnFocus: false,
      isInputOpened: false,
      id: UniqueID().getID(),
    }
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    searchText: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    goSearch() {
      // if (this.input.length >= 3 && filteredList().length) {
      //   //fazer aqui o redirect para a pagina de search results
      //   alert('Search Results')
      // }
    },
    handleListClik(place) {
      this.input = place
      this.isInputOpened = false
    },
    resetInput() {
      this.input = ''
      this.$emit('input', this.input)
    },
  },
  computed: {
    filteredList() {
      return this.results.filter((item) =>
        item.toLowerCase().includes(this.input.toLowerCase())
      )
    },
  },
  watch: {
    disable(newValue, oldValue) {
      if (newValue) this.input = ''
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'searchInput.scss';
</style>
