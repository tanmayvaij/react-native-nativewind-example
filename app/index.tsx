import { View, Text, Image } from "react-native";

const Home = () => {
  return (
    <View className="flex items-center justify-center border h-full bg-gray-900">
      <Image
        alt=""
        source={require("@/assets/images/logo.png")}
        className="h-40 w-40"
      />
      <Text className="text-3xl text-yellow-500 font-bold text-center">
        React Native NativeWind Example
      </Text>
    </View>
  );
};

export default Home;
