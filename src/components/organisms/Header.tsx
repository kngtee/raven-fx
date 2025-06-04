import SearchBar from "../molecules/SearchBar";
import "../../styles/organisms/_header.scss";
import { useAuthStore } from "../../hook/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../molecules/Avatar";
import Button from "../atoms/Button";

const Header = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo">Sisyphus</div>
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Dashboard
        </Link>
        <Link to="#" className="header__nav-link">
          Markets
        </Link>
        <Link to="#" className="header__nav-link">
          Wallet
        </Link>
        {user ? (
          <Link to="#" className="header__nav-link" onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to="/auth" className="header__nav-link">
            Profile
          </Link>
        )}
      </nav>
      <SearchBar onChange={() => {}} />
      {user ? (
        <Avatar />
      ) : (
        <Button variant="primary" onClick={() => navigate("/auth")}>
          Login
        </Button>
      )}
    </header>
  );
};

export default Header;
