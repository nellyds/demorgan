<template>
  <v-content>
    <v-app-bar
      app
      clipped-left
      v-scroll="onScroll"
      :color="!isScrolling ? 'white' : 'rgba(65,189,255)'"
    >
      <v-app-bar-nav-icon
        :color="!isScrolling ? 'rgba(65,189,255)' : 'white'"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-items>
        <v-btn
          class="navTitle"
          :color="!isScrolling ? 'rgba(65,189,255)' : 'white'"
          text
          >The Demorgan Wellness Group</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="rgba(65,189,255)"
    >
      <v-list
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        dense
        class="rgba(65,189,255)"
      >
        <v-list-item>
          <span
            class="link"
            @click="$vuetify.goTo(item.click)"
            v-text="item.text"
          />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    isScrolling: false,
    drawer: false
  }),
  components: {},
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    items() {
      return [
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Services",
          click: "#service"
        },
        {
          text: "News",
          click: "#news"
        },
        {
          text: "Contact",
          click: "#contact"
        },
      ];
    }
  },
  methods: {
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 25;
    }
  }
};
</script>
<style scoped>
@media screen and (min-width: 416px) {
  .link {
    font-size: 1.7em;
    font-weight: bold;
    color: white;
  }
  .navTitle {
    font-size: 3.1em;
    font-weight: bold;
    color: white;
  }
}
@media screen and (max-width: 415px) {
  .link {
    font-size: 0.8em;
    font-weight: bold;
    color: white;
    font-family: "Montserrat";
  }
  .navTitle {
    font-size: 1.1em;
    font-weight: bold;
    color: white;
  }
}
</style>
