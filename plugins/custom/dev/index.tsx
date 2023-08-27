import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { customPlugin, CustomPage } from '../src/plugin';

createDevApp()
  .registerPlugin(customPlugin)
  .addPage({
    element: <CustomPage />,
    title: 'Root Page',
    path: '/custom'
  })
  .render();
