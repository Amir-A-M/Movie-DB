import { GluestackUIProvider } from '@/src/components/ui/gluestack-ui-provider';
import { ErrorBoundaryProps, Stack } from 'expo-router';

import '../src/styles/global.css';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@/src/components/ui/text';
import { LogBox } from '@/src/utils/logBox';

LogBox.ignoreLogs([
  'Warning: findDOMNode is deprecated and will be removed in the next major release.',
]);

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

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, margin: 50 }}>
      <Text>{error.message}</Text>
      <Pressable onPress={retry}>
        <Text>Try Again?</Text>
      </Pressable>
    </View>
  );
}
