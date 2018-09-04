import Vue from 'vue';
import Router from 'vue-router';
import Backlog from '@/components/Backlog';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Default',
//       // component: HelloWorld,
//     },
//   ],
// });

export default new Router({
  routes: [
    {
      path: '/backlog',
      component: Backlog,
    },
    {
      path: '*',
      redirect: '/backlog',
    },
  ],
});
