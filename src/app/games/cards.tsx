import { View } from "react-native";
import Text from "@components/text/Text";
import Button from "@components/button/Button";

const Cards = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Text className="text-2xl text-gray-800">Cards Game</Text>
      <Button className="mt-4">Pick a card</Button>
    </View>
  );
};

export default Cards;
