const routes = [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/project',
          name: 'project',
          component: () => import('../views/ProjectView.vue'),
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('../views/DetailView.vue'),
        },
        {
          path: '/test',
          name: 'test',
          component: () => import('../views/ContactView.vue'),
        },
      ],
    },
  ];

  export default routes;