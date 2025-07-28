import { Text as TextRN } from "react-native";
import { HeadingProps } from "./heading.types";
import { cn } from "../../utils/utils";

const Heading = ({ children, size, className }: HeadingProps) => {
  return (
    <TextRN
      className={cn(
        "text-gray-900 font-bold",
        size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl",
        className
      )}
    >
      {children}
    </TextRN>
  );
};

export default Heading;
