<template>
  <section class="list">
    <div class="list__inner-container grid">
      <template v-for="(chunk, code) in schedules">
        <div :key="code" class="list__chunks">
          <p class="font-m color-neu-08">
            From: {{ CodeMapper(origin) }} to
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
    return { CodeMapper }
  },
  props: {
    schedules: {
      type: Object,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
  },
  methods: {},
  watch: {},
  computed: {},
  mounted() {
    axios
      .get('/api/')
      .then((response) => (this.api = response.data))
      .then(
        (response) =>
          (this.allCodes = CodeMapper(Object.keys(this.api.schedule)))
      )
  },
}
</script>
<style lang="scss" scoped>
@use 'list.scss';
</style>
