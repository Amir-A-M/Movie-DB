// Learn more: https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Use NativeWind with custom Tailwind configuration
module.exports = 
wrapWithReanimatedMetroConfig(
  withNativeWind(config, {
    input: './src/styles/global.css',
  })
);
