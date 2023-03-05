<template>
  <article class="card">
    <figure class="card__image">
      <img :src="image.src" :alt="image.alt" class="ratio-1-1" />
    </figure>
    <div class="card__content">
      <div class="card__text">
        <h5 class="card__detination color-neu-11 font-m-2">
          {{ detination }}
        </h5>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {}
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
    detination: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
    isCancelled: {
      type: Boolean,
      required: true,
    },
    fill: {
      type: Number,
      required: true,
    },
    carFill: {
      type: Number,
      required: true,
    },
    vesselName: {
      type: String,
      required: true,
    },
    vesselStatus: {
      type: String,
      required: true,
    },
    buttons: {
      type: Array,
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
@use 'card.scss';
</style>
