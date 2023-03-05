<template>
  <article
    class="card bgColor-neu-02"
    :class="isCancelled ? 'card--disable' : ''"
  >
    <p v-if="isCancelled" class="card__cancelled color-not-03 font-m-2">
      Cancelled
    </p>
    <div class="card__content">
      <header>
        <h5 class="card__detination color-m-01 font-m-2">
          {{ detination }}
        </h5>
        <h6 class="card__info color-neu-11 font-l-2">
          Vessel: {{ vesselName ? vesselName : '-' }}
        </h6>
      </header>
      <div class="card__text">
        <p class="card__info color-neu-11 font-m">
          ArrivalTime: {{ arrivalTime ? arrivalTime : '-' }}
        </p>
        <p class="card__info color-neu-11 font-m">
          Fill: {{ fill ? fill : '-' }}
        </p>
        <p class="card__info color-neu-11 font-m">
          Car Fill: {{ carFill ? carFill : '-' }}
        </p>
        <p class="card__info color-neu-11 font-m">
          Oversize Fill: {{ oversizeFill ? oversizeFill : '-' }}
        </p>
        <p class="card__info color-neu-11 font-m">
          Vessel Status: {{ vesselStatus ? vesselStatus : '-' }}
        </p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'Card',
  data() {
    return {}
  },
  props: {
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
    oversizeFill: {
      type: Number,
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
