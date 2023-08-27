import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const customPlugin = createPlugin({
  id: 'custom',
  routes: {
    root: rootRouteRef,
  },
});

export const CustomPage = customPlugin.provide(
  createRoutableExtension({
    name: 'CustomPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
