<template>
  <section class="list">
    <div
      v-if="!schedules.destination && schedules.origin"
      class="list__inner-container grid"
    >
      <template v-for="(chunk, code) in chunks">
        <div :key="code" class="list__chunks">
          <p class="font-m color-neu-08">
            From: {{ CodeMapper(schedules.origin) }} to
            <span class="font-m-2">{{ CodeMapper(code) }}:</span>
          </p>
          <Card
            v-for="(card, index_) in chunk.sailings"
            :key="index_"
            v-bind="card"
            :detination="CodeMapper(code)"
          />
        </div>
      </template>
    </div>
    <div
      v-else-if="schedules.destination && schedules.origin"
      class="list__inner-container grid"
    >
      <div class="list__chunks">
        <p class="font-m color-neu-08">
          From: {{ CodeMapper(schedules.origin) }} to
          <span class="font-m-2">{{ CodeMapper(schedules.destination) }}:</span>
        </p>
        <Card
          v-for="(card, index_) in chunks.sailings"
          :key="index_"
          v-bind="card"
          :detination="CodeMapper(schedules.destination)"
        />
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card/Card.vue'
import CodeMapper from '@/composables/FerriesCodeMapper.ts'
export default {
  name: 'List',
  components: { Card },
  data() {
    return {
      CodeMapper,
      chunks: '',
    }
  },
  props: {
    schedules: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  watch: {
    schedules(newValue, oldValue) {
      if (newValue.origin) {
        axios
          .get(
            `/api/${newValue.origin}/${
              newValue.destination ? newValue.destination + '/' : ''
            }`
          )
          .then((response) => (this.chunks = response.data))
          .catch((err) => console.log(err))
      }
    },
  },
  computed: {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
@use 'list.scss';
</style>
