import { View } from "react-native";
import Text from "@components/text/Text";
import { router } from "expo-router";
import Card from "@components/card/Card";
import Heading from "@components/heading/Heading";

export default function Page() {
  const goTo = (path: string) => () => router.push(path);

  return (
    <View className="flex-1 items-center p-6 bg-gray-50">
      <View className="flex-1 justify-center max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-2">Hello World</Text>
        <Text className="text-4xl text-gray-700 text-center">
          This is the first page of your app.
        </Text>

        <View className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Card onPress={goTo("games/dice")}>
            <Heading size="md">Dice Game</Heading>
            <Text>Click the card to navigate to the Dice Game.</Text>
          </Card>
          <Card onPress={goTo("games/cards")}>
            <Heading size="md">Cards Game</Heading>
            <Text>Click the card to navigate to the Cards Game.</Text>
          </Card>
        </View>
      </View>
    </View>
  );
}
