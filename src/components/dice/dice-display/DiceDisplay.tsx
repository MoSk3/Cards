// Loading dice images
import Dice1 from "@assets/images/dice/1.svg";
import Dice2 from "@assets/images/dice/2.svg";
import Dice3 from "@assets/images/dice/3.svg";
import Dice4 from "@assets/images/dice/4.svg";
import Dice5 from "@assets/images/dice/5.svg";
import Dice6 from "@assets/images/dice/6.svg";
import { DiceProps } from "./dice.types";

const DICE_BG_COLOR = "#ffffff"; // Default background color for dice
const DICE_DOT_COLOR = "#000000"; // Default color for dice dots

const diceDict = {
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
} as { [key: number]: any };

const DiceDisplay = ({ number }: DiceProps) => {
  return diceDict[number]({
    width: 64,
    height: 64,
    color: DICE_BG_COLOR,
    fill: DICE_DOT_COLOR,
  });
};

export default DiceDisplay;
