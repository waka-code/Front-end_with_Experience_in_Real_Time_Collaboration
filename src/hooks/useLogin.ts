import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [Email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const validateCredentials = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(Email) ||
      pass.length < 6 ||
      Email === "" ||
      pass === ""
    ) {
      setError(true);
      return;
    }

    localStorage.setItem("email", Email);
    localStorage.setItem("pass", pass);

    setError(false);
    navigate("/dashboard");
  }, [Email, pass]);

  return {
    setEmail,
    setPass,
    Email,
    pass,
    validateCredentials,
    error,
  };
}

