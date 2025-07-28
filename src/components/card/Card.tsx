import { TouchableOpacity, View } from "react-native";
import { cn } from "../../utils/utils";
import { CardProps } from "./card.types";

const Card = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <TouchableOpacity {...props}>
      <View
        className={cn(
          size === "sm"
            ? "p-2 rounded-sm"
            : size === "md"
              ? "p-4 rounded-md"
              : "p-6 rounded-lg",
          variant === "outline"
            ? "border border-gray-300"
            : variant === "default" && "bg-gray-200",
          className
        )}
        {...props}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
