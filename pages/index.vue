<template>
  <Header :slides="slides"></Header>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header/Header.vue'

export default Vue.extend({
  components: { Header },
  name: 'IndexPage',
  data() {
    return {
      slides: [
        {
          title: 'Get a 3rd Night FREE this spring',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius mauris justo, eget varius quam gravida ut.',
          image: {
            narrow: 'images/img_1-min.jpg',
            wide: 'images/img_1.jpg',
            alt: 'image',
          },
        },
        {
          title: 'The adventure of a lifetime',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius mauris justo, eget varius quam gravida ut.',
          image: {
            narrow: 'images/img_2-min.jpg',
            wide: 'images/img_2.jpg',
            alt: 'image',
          },
        },
        {
          title: 'Join an epic wildlife adventure',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius mauris justo, eget varius quam gravida ut.',
          image: {
            narrow: 'images/img_3-min.jpg',
            wide: 'images/img_3.jpg',
            alt: 'image',
          },
        },
        {
          title: 'Hotel & Ferry Packages to Haida Gwaii',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius mauris justo, eget varius quam gravida ut.',
          image: {
            narrow: 'images/img_4-min.jpg',
            wide: 'images/img_4.jpg',
            alt: 'image',
          },
        },
      ],
    }
  },
})
</script>
