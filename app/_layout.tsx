import { GluestackUIProvider } from '@/src/components/ui/gluestack-ui-provider';
import { Stack } from 'expo-router';

import '../src/styles/global.css';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function RootLayout() {
  const [colorMode] = useState<'light' | 'dark'>('dark');

  return (
    <GluestackUIProvider mode={colorMode}>
      <StatusBar style='auto' />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#111214' },
        }}
      />
    </GluestackUIProvider>
  );
}
