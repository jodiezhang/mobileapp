import { createAPI } from 'cube-ui';
import Vue from 'vue';
import HeaderDetail from 'components/header-detail/header-detail.vue';
import ShopCartList from 'components/shop-cart-list/shop-cart-list.vue';

createAPI(Vue, HeaderDetail);
createAPI(Vue, ShopCartList);
