import { useSelector, useDispatch } from "react-redux";

// css
import "../styles/Header.css";

// Material UI
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

// redux
import { selectUser, logout } from "../features/userSlice";

// firebase
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const singOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon className="header__rightIcon" />
        </IconButton>
        <IconButton>
          <NotificationsIcon className="header__rightIcon" />
        </IconButton>
        <Avatar
          src={user?.image}
          onClick={singOut}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Header;
