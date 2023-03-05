<template>
  <div>
    <Header :slides="slides" @schedules="(e) => (schedules = e)"></Header>
    <List :schedules="schedules" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header/Header.vue'
import List from '~/components/List/List.vue'

export default Vue.extend({
  components: { Header, List },
  name: 'IndexPage',
  data() {
    return {
      schedules: {},
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
