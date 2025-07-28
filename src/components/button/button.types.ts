import { ButtonProps as ButtonPropsRN } from "react-native";

export interface ButtonProps extends Omit<ButtonPropsRN, "onPress" | "title"> {
  children?: string;
  onClick?: () => void;
  className?: string;
}
