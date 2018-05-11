// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAreaLinkage from 'vue-area-linkage';
import VueHighcharts from 'vue-highcharts';
import storeConfig from "@/store/store";

Vue.use(VueAreaLinkage)
// import {mapState} from 'vuex';
Vue.use(VueHighcharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:storeConfig,
  components: { App },
  template: '<App/>',
    methods:{

        moreChart() {
            var options = this.getMoreOptions(this.type);

            if (this.chart) {
                this.chart.destroy();
            };
            // 初始化 Highcharts 图表
            this.chart = new Highcharts.Chart('highcharts-more', options);
        }
    }
})
