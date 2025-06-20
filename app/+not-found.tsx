import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
      <View className="flex-1 items-center justify-center bg-red-500 p-10">
        <Text className="text-xl font-bold text-blue-500">
          404 page
        </Text>
      </View>
  );
}