import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'

  },

  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        secondary: '#b0bec5',
        info: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
