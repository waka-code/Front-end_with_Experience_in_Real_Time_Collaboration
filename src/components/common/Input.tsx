import { useMemo, useState } from "react";
import { ToggleIcon } from "./ToggleIcon";

export function Input({
  value,
  inputValue,
  onChange,
}: {
  value: string;
  inputValue: string;
  onChange: (n: string) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = useMemo(() => {
    if (value === "Email") {
      return "text";
    } else {
      return showPassword ? "text" : "password";
    }
  }, [value, showPassword]);

  return (
    <div className="input-container">
      <div className="input-label">
        <label htmlFor="input">{value}</label>
      </div>
      <div className="input-wrapper">
        <input
          id="input"
          type={getInputType}
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          placeholder={value}
        />
        {value === "Password" && (
          <ToggleIcon
            showPassword={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
}
