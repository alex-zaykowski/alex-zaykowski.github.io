import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface IconButtonProps {
  value: string;
  onClick: () => any;
  icon: IconDefinition;
  style?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  value,
  onClick,
  icon,
  style,
}: IconButtonProps) => {
  const buttonStyle =
    style ??
    "me-2 mr-2 inline-flex cursor-pointer items-center gap-1 rounded border border-zinc-50 px-4 py-1 text-center text-sm";
  return (
    <div onClick={onClick} className={buttonStyle}>
      <FontAwesomeIcon className="h-4 w-4" icon={icon} />
      {value}
    </div>
  );
};
