
import { createRouter, createWebHistory } from 'vue-router';
import ShopComp from '@/components/Shop/ShopComp.vue';
import MainComp from '@/components/Main/MainComp.vue';
import AboutComp from '@/components/About/AboutComp.vue';
import ContactsComp from '@/components/Сontacts/СontactsComp.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/main', component: MainComp, alias: '/' },
        {path: '/shop', component: ShopComp },
        {path: '/about', component: AboutComp },
        {path: '/contacts', component: ContactsComp }
    ]
})