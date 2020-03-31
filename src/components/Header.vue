<template>
<v-container>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'rgb(69,189,255)' : 'rgba(0, 0, 0, 0)'"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    app
    dark
    elevate-on-scroll
  >
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
      :color="!isScrolling ? 'white' : 'rgba(69, 189, 255, 1)'"
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        text
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
          <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="black--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Linke to another section</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Link to another section</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Linke to another section</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Linke to another section</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      isScrolling: false,
      drawer: false,
    }),
    components: {

    },
    watch: {
      group() {
        this.drawer = false
      }
    },
    computed: {
      items () {
        return [
          {
            'to': '/',
            'text': 'Home'
          },
          {
            'to': '/services',
            'text': 'Services'
          },
          {
            'to': '/projects',
            'text': 'Projects'
          },
          {
            'to': '/contact',
            'text': 'Contact'
          }
        ]
      }
    },
    methods: {
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 25
      }
    }
  }
</script>