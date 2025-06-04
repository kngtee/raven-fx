import { useAuthStore } from "../../hook/useAuthStore";
import Button from "../atoms/Button";

const Avatar = () => {
  const { user, logout } = useAuthStore();
  return (
    <div className="header__user">
      <img src={user?.avatar} alt={user?.email} className="header__avatar" />
      <span className="header__user-email">{user?.email}</span>
      <Button variant="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Avatar;
