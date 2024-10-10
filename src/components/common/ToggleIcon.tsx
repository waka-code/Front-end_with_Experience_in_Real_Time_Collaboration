import { useMemo } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";

export const ToggleIcon = ({
  showPassword,
  onClick,
}: {
  showPassword: boolean;
  onClick: () => void;
}) => {
  const IconComponent = useMemo(() => {
    return showPassword ? IoEyeSharp : PiEyeSlashFill;
  }, [showPassword, IoEyeSharp, PiEyeSlashFill]);
  
  return (
    <IconComponent
      size={25}
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    />
  );
};
