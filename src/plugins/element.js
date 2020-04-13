import Vue from 'vue'
import {
    Container,
    Header,
    Aside,
    Main,
    Footer,

    Button,
    Select,
    Option,

    Input,

    Loading,

} from 'element-ui'

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);

Vue.use(Input);


Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
