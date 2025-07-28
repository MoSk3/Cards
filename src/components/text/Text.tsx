import { Text as TextRN } from "react-native";
import { TextProps } from "./text.types";
import { cn } from "../../utils/utils";

const Text = ({ children, className }: TextProps) => {
  return <TextRN className={cn("text-gray-900", className)}>{children}</TextRN>;
};

export default Text;
