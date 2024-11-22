import { View, Text } from 'react-native';

export default function ErrorScreen() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-lg font-bold text-red-600'>Page Not Found</Text>
    </View>
  );
}
