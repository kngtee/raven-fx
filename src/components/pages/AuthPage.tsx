import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { getGravatarUrl } from "../../utils/gravatar";
import { useAuthStore } from "../../hook/useAuthStore";
import { useNavigate } from "react-router-dom";

export function AuthPage() {
  const setUser = useAuthStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFetchAvatar = () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }
    const avatar = getGravatarUrl(email);
    setUser({ email, avatar });
    navigate("/");
  };
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <div className="auth-page__form">
        <Input
          label="Email"
          type="email"
          value={email}
          placeholder="Enter your email"
          // error="Please enter a valid email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          size="large"
          fullWidth
          variant="primary"
          onClick={handleFetchAvatar}
        >
          Login
        </Button>
      </div>
      
    </div>
  );
}
