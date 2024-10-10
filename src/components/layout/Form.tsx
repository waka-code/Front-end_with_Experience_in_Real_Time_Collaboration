import { Input } from "../common/Input";
import { Button } from "../common/Button";

export function Form({
  inputType,
  inputValue,
  onChangeEmail,
  btnOnClick,
  btnTitle,
  Password,
  onChangePass,
  warning,
}: {
  inputType: string[];
  onChangeEmail: (n: string) => void;
  onChangePass: (n: string) => void;
  btnOnClick: () => void;
  btnTitle: string;
  inputValue: string;
  Password: string;
  warning: boolean;
}) {
  return (
    <div className="form">
      {inputType.map((type) => (
        <Input
          value={type}
          inputValue={type === "Email" ? inputValue : Password}
          onChange={type === "Email" ? onChangeEmail : onChangePass}
        />
      ))}
      {warning && (
            <span
              style={{
                color: "red",
                fontSize: "15px",
              }}
            >
              Please enter a valid email address. Password must be at least 6
              characters long
            </span>
      )}
      <Button disable={
        !inputValue ||
        !Password ||
        inputValue.length < 6 ||
        Password.length < 6
      } btnTitle={btnTitle} onChange={btnOnClick} />
    </div>
  );
}
