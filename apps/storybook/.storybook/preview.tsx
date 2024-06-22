import React from 'react';

import type { Preview } from '@storybook/react';
import '@hana-store/shared/ui/base.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <div style={{ border: '1px solid #cccccc', padding: '16px', marginBottom: '8px' }}>
          <Story />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #cccccc', padding: '16px' }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;
