import { ButtonProps } from "./button.types";
import { cn } from "../../utils/utils";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import Text from "../text/Text";

const Button = ({ className, onClick, children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.6}
      className={cn("bg-primary-500 px-4 py-2 rounded-lg", className)}
    >
      <View>
        <Text className="text-primary-900">{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
