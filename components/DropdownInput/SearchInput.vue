<template>
  <div class="searchInput">
    <small class="searchInput__label font-xs color-neu-06" v-text="label" />
    <div
      class="searchInput__innerContainer"
      :class="
        input || isInputOnFocus ? 'searchInput__innerContainer--active' : ''
      "
    >
      <div class="searchInput__inputContainer">
        <input
          type="text"
          class="searchInput__input font-xs"
          v-model="input"
          :placeholder="placeholder"
          @keyup.enter="goSearch"
          @focus="isInputOnFocus = true"
          @blur="isInputOnFocus = false"
        />
        <button class="searchInput__searchBtn" @click="goSearch">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 8L12 15L19 8" stroke="#070707" stroke-width="2" />
          </svg>
        </button>
        <button
          v-if="input"
          class="searchInput__searchCancel"
          @click="resetInput()"
        >
          ❌
        </button>
      </div>
      <div v-if="isInputOnFocus" class="searchInput__resultsContainer">
        <ul class="searchInput__resultsList">
          <li class="searchInput__resultItem">
            <p class="searchInput__resultInputText">
              <span v-if="input" class="searchInput__resultIcon"> 🔍 </span>
              <span class="font-xs-2 color-neu-08">{{ input }}</span>
              <span class="searchInput__resultText font-xs color-neu-08">
                - {{ searchText }}</span
              >
            </p>
          </li>
          <li
            v-for="(item, index) in filteredList"
            :key="index"
            class="searchInput__resultItem"
          >
            <p class="searchInput__resultInputText">
              <span v-if="input" class="searchInput__resultIcon"> 🔍 </span>
              <span
                class="font-xs color-neu-08"
                v-html="handleAutocomplete(item.word)"
              />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SearchInput',
  data() {
    return {
      input: '',
      isInputOnFocus: false,
      results: [
        {
          word: 'Cardiologia',
          link: 'link01',
        },
        {
          word: 'Cardiologia Pediátrica',
          link: 'link02',
        },
        {
          word: 'Ritmo Cardíaco',
          link: 'link03',
        },
        {
          word: 'Eletrocardiograma',
          link: 'link04',
        },
        {
          word: 'Pacemaker cardíaco',
          link: 'link05',
        },
        {
          word: 'Pediatria',
          link: 'link06',
        },
        {
          word: 'Imagiologia',
          link: 'link07',
        },
        {
          word: 'Orteopedia',
          link: 'link08',
        },
        {
          word: 'Geriatria',
          link: 'link09',
        },
      ],
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
  },
  methods: {
    goSearch(): any {
      // if (this.input.length >= 3 && filteredList().length) {
      //   //fazer aqui o redirect para a pagina de search results
      //   alert('Search Results')
      // }
    },
    handleAutocomplete(w: string): any {
      let inputLowerCase = this.input.toLocaleLowerCase()
      let test = w
        .toLocaleLowerCase()
        .replace(inputLowerCase, `<b class="font-xs-2">${inputLowerCase}</b>`)
      return test
    },
    resetInput(): any {
      this.input = ''
    },
    inputFocus(): any {
      this.isInputOnFocus = true
    },
  },
  computed: {
    filteredList(): any {
      return this.results.filter((item) =>
        item.word.toLowerCase().includes(this.input.toLowerCase())
      )
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'searchInput.scss';
</style>
