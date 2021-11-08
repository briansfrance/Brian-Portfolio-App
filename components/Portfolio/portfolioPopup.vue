<template>
  <v-dialog
    v-model="showPopup"
    persistent
    class="rounded-0"
    width="98%"
    max-width="500px"
  >
    <v-card v-if="chosenPortfolioItem" class="rounded-0 pa-2">
      <v-card-actions class="pa-0 justify-end">
        <v-btn @click="closePop" icon tile><v-icon>mdi-close</v-icon></v-btn>
      </v-card-actions>
      <img :src="chosenPortfolioItem.image" width="100%" />
      <v-card-title class="pl-0 pt-1">{{
        chosenPortfolioItem.title
      }}</v-card-title>
      <v-card-text class="pa-0 my-3">{{
        chosenPortfolioItem.description
      }}</v-card-text>
      <v-btn
        class="rounded-0"
        large
        depressed
        dark
        color="#181d26"
        v-if="chosenPortfolioItem.link"
        :href="chosenPortfolioItem.link"
        target="_blank"
        >View Link</v-btn
      >
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["showPopup", "chosenPortfolioItem"],
  watch: {
    showPopup(newVal) {},
    chosenPortfolioItem(newVal) {},
  },
  methods: {
    closePop() {
      this.$emit("closePop");
    },
  },
};
</script>

<style>
</style>