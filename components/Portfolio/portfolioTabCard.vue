<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      v-for="portfolioItem in portfolioItems"
      :key="portfolioItem.title"
    >
      <v-card flat class="pa-1 d-flex align-start flex-column" height="100%">
        <img :src="portfolioItem.image" width="100%" />
        <v-card-title class="pl-0 pt-1">{{ portfolioItem.title }}</v-card-title>
        <v-spacer></v-spacer>
        <v-card-actions class="pa-0">
        <v-btn
          class="rounded-0 mt-auto"
          large
          depressed
          dark
          color="#181d26"
          @click="showFullDescription(portfolioItem)"
          >Full Description</v-btn
        >
        </v-card-actions>
      </v-card>
    </v-col>
    <portfolio-popup :showPopup="showPopup" :chosenPortfolioItem="chosenPortfolioItem" @closePop="closePop" />
  </v-row>
</template>

<script>
export default {
  props: ["tabNameData"],
  computed: {
    portfolioItems() {
      return this.$store.state.portfolioDataStore.portfolioInfo;
    },
  },
  watch: {
    portfolioItems(newVal) {
      console.log(newVal);
    },
    tabNameData(newVal) {
      console.log(newVal);
      this.$store.dispatch("portfolioDataStore/getPortfolioData", newVal);
    },
  },
  data() {
        return {
            chosenPortfolioItem: null,
            showPopup: false
        }
    },
    methods: {
        showFullDescription(portfolioInfo) {
            this.chosenPortfolioItem = portfolioInfo;
            this.showPopup = true;
        },
        closePop() {
            this.chosenPortfolioItem = null;
            this.showPopup = false;
        }
    }
};
</script>

<style>
</style>