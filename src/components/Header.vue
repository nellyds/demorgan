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

<v-spacer>
    <v-toolbar-items >
      <v-btn
      :color="!isScrolling ? 'white' : 'black'"
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        text
      >
        <span @click="$vuetify.goTo(item.click)"  v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
</v-spacer>
  </v-app-bar>
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
    computed: {
      items () {
        return [
          {
            'to': '/',
            'text': 'Home',
            'click': '#home'
            
          },
          {
            'text': 'Services',
            'click': '#service'
          },
          {
            'text': 'Contact',
            'click': '#contact'
          },
          {
            'text': 'News',
            'click': '#news'
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