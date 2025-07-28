import { View } from "react-native";
import Text from "@components/text/Text";
import Button from "@components/button/Button";

const Dice = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Text className="text-2xl text-gray-800">Dice Game</Text>
      <Button className="mt-4">Roll the Dice</Button>
    </View>
  );
};

export default Dice;
