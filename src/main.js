// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Block from './components/Block';
import vhtml from 'vhtml-ui';
import 'vhtml-ui/lib/vhtml.css';

Vue.config.productionTip = false;
Vue.component(Block.name, Block);
Vue.use(vhtml);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
