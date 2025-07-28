import { ButtonProps } from "./button.types";
import { cn } from "../../utils/utils";
import { TouchableOpacity } from "react-native";
import Text from "../text/Text";

const Button = ({ className, onClick, children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={cn("bg-primary-500 px-4 py-2 rounded-lg", className)}
      {...props}
    >
      <Text className="text-primary-900">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
