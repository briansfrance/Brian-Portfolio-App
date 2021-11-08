<template>
  <v-card flat class="cardContainer pa-4 rounded-0">
    <h3 class="pa-0">Portfolio</h3>
    <v-tabs v-model="tab" color="#181d26">
      <v-tab v-for="tabName in tabNames" :key="tabName">
        {{ tabName }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tabName in tabNames" :key="tabName">
        <v-card
          flat
          fluid
          style="height: 66vh; overflow-y: auto; overflow-x: hidden"
        >
          <portfolio-tab-card :tabNameData="tabNames[tab]" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import portfolioTabCard from "./portfolioTabCard.vue";
export default {
  components: { portfolioTabCard },
  mounted() {
    this.$store.dispatch("portfolioDataStore/getPortfolioData", "Websites");
  },
  data() {
    return {
      tab: null,
      tabNames: ["Websites", "Applications", "Graphic Design"],
    };
  },
};
</script>

<style>
</style>