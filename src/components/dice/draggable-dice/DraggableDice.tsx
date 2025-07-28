import { View } from "react-native";
import DiceDisplay from "../dice-display/DiceDisplay";
import { DraggableDiceProps } from "./draggable-dice.types";

const DraggableDice = ({
  number,
  posX,
  posY,
  onDragEnd,
  onDragStart,
}: DraggableDiceProps) => {
  return (
    <View
      className="absolute"
      style={{ left: posX, top: posY }}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
    >
      <DiceDisplay number={number} />
    </View>
  );
};

export default DraggableDice;
