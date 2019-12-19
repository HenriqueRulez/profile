import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Me from '@/views/Me.vue';
import Connect from '@/views/Connect.vue';
import Contact from '@/views/Contact.vue';
import Projects from '@/views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/connect',
    name: 'connect',
    component: Connect
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
