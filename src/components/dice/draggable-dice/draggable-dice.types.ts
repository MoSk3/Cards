import { DiceProps } from "../dice-display/dice.types";

export interface DraggableDiceProps extends DiceProps {
  posX: number; // X position of the dice
  posY: number; // Y position of the dice
  onDragStart?: () => void; // Callback when dragging starts
  onDragEnd?: () => void; // Callback when dragging ends
  isDragging?: boolean; // Indicates if the dice is currently being dragged
}
