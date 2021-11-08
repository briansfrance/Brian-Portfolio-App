<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="drawer"
      fixed
      app
      permanent
      class="pt-2 d-flex flex-column"
    >
      <div width="100%" class="d-flex justify-center mb-1">
        <router-link to="/"
          ><img src="/Robot-logo.png" width="35" style="cursor: pointer"
        /></router-link>
      </div>
      <v-divider color="#181d26"></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <span v-if="!drawer">&copy; Brian S France Portfolio {{ new Date().getFullYear() }}</span
        >
      </template>
    </v-navigation-drawer>
    <v-app-bar fixed app flat dark color="#181d26">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "About Brian",
          to: "/",
        },
        {
          icon: "mdi-palette",
          title: "Portfolio",
          to: "/portfolio",
        },
        {
          icon: "mdi-file-account",
          title: "Resume",
          to: "/resume",
        },
      ],
      title: "Welcome To Brian's Portfolio",
    };
  },
};
</script>
