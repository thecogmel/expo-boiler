import React from 'react';

import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';

import { config } from './src/config/gluestack-ui.config';

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </GluestackUIProvider>
  );
};

export default App;
