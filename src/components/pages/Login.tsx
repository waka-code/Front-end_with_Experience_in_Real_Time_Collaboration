import { Form } from "../layout/Form";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const { setEmail, setPass, Email, pass, validateCredentials, error } =
    useLogin();

  return (
    <div className="login-container">
      <h1>ProLogin</h1>
      <Form
        inputType={["Email", "Password"]}
        inputValue={Email}
        Password={pass}
        onChangeEmail={setEmail}
        onChangePass={setPass}
        btnOnClick={validateCredentials}
        btnTitle={"Login"}
        warning={error}
      />
    </div>
  );
}

export default Login;
