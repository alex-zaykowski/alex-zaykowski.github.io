import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface IconButtonProps {
  value: string;
  icon: IconDefinition;
  url: string;
  style?: string;
}

const openLink = (url: string) => {
  window.open(url, "_blank");
};

export const IconButton: React.FC<IconButtonProps> = ({
  value,
  icon,
  url,
  style,
}: IconButtonProps) => {
  const buttonStyle =
    style ??
    "me-2 mr-2 inline-flex cursor-pointer items-center gap-1 rounded border border-zinc-50 px-4 py-1 text-center text-sm";
  return (
    <div onClick={() => openLink(url)} className={buttonStyle}>
      <FontAwesomeIcon className="h-4 w-4" icon={icon} />
      {value}
    </div>
  );
};
