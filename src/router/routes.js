import Layout from 'layouts/MainLayout.vue';
import Index  from 'pages/Index.vue';
import List   from 'pages/Listado.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { 
        path: '', 
        component: Index, 
        name: 'home' 
      },
      { 
        path: 'list', 
        component: List, 
        name: 'list' 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
