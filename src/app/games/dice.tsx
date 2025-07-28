import { useState } from "react";
import { Dimensions, View } from "react-native";
import Text from "@components/text/Text";
import Button from "@components/button/Button";
import DraggableDice from "../../components/dice/draggable-dice/DraggableDice";
import { checkOverlaps, getRandomPosition } from "../../utils/geometry";
import { getRandomBetween } from "../../utils/math";

const NB_DICE = 10; // Number of dice to roll
const DICE_SIZE = 64; // Size of each dice in pixels
const HEADER_HEIGHT = 64; // Height of the header in pixels

const GameDice = () => {
  const [dices, setDices] = useState<DiceState[] | undefined>();

  const handleRoll = () => {
    const rolled = getRolledDices();
    setDices(rolled);
  };

  return (
    <View className="flex-1 items-center justify-center bg-primary-100">
      <Text className="text-2xl text-gray-800">Dice Game</Text>
      <Button className="mt-4" onClick={handleRoll}>
        Roll the Dice
      </Button>

      {dices?.map(({ number, posX, posY }, index) => (
        <DraggableDice
          number={number}
          posX={posX}
          posY={posY}
          key={index + "-" + number}
        />
      ))}
    </View>
  );
};

const getRolledDices = () => {
  // Get the dimensions of the device screen
  const { width, height } = Dimensions.get("window");
  const maxHeight = height - HEADER_HEIGHT; // Adjust height for header

  // Generate random dice values and positions
  const rolledDices: DiceState[] = [];

  let skipped = 0;
  for (let i = 0; i < NB_DICE; i++) {
    const diceValue = getRandomBetween(1, 6); // Random dice value between 1 and 6

    let dice: DiceState = {
      number: diceValue,
      posX: 0, // Placeholder for X position
      posY: 0, // Placeholder for Y position
    };

    do {
      const pos = getRandomPosition(width, maxHeight, DICE_SIZE, DICE_SIZE); // Get random position for the dice
      dice.posX = pos.x;
      dice.posY = pos.y;
      skipped++;
    } while (
      skipped < 100 && // Limit to 1000 attempts to find a non-overlapping position
      checkOverlaps(toRect(dice), rolledDices.map(toRect))
    );

    // Add the dice to the rolledDices array
    rolledDices.push(dice);
  }

  return rolledDices;
};

const toRect = (dice: DiceState) => ({
  x: dice.posX,
  y: dice.posY,
  width: DICE_SIZE,
  height: DICE_SIZE,
});

type DiceState = {
  number: number;
  posX: number;
  posY: number;
};

export default GameDice;
