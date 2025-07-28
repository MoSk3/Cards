import { TouchableOpacityProps, ViewProps } from "react-native";

export interface CardProps extends ViewProps, TouchableOpacityProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}
