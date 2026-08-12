import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconDefinition;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl";
  className?: string;
}

const Icon = ({ icon, size, className }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      className={className}
    />
  );
};

export default Icon;