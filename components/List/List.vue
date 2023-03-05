<template>
  <section class="list">
    <div class="list__inner-container">
      <div
        v-for="(chunk, index) in schedules"
        :key="index"
        class="list__chunks"
      >
        <Card : />
        hehe
      </div>
    </div>
  </section>
</template>
<script>
// @ts-ignore
import data from '@/static/data.json'
import Card from '@/components/Card/Card.vue'
export default {
  name: 'List',
  components: { Card },
  data() {
    return {}
  },
  props: {
    schedules: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  watch: {},
  computed: {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
@use 'list.scss';
</style>
