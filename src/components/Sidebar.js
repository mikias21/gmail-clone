import { useDispatch } from "react-redux";

// css
import "../styles/Sidebar.css";

// material UI
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

// component
import SidebarOption from "./SidebarOption";

// redux
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
        style={{ marginTop: 10 }}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="inbox"
        number={23}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="stared" number={4} />
      <SidebarOption Icon={WatchLaterIcon} title="snoozed" />
      <SidebarOption Icon={SendIcon} title="sent" number={10} />
      <SidebarOption Icon={InsertDriveFileIcon} title="drafts" number={5} />
      <SidebarOption Icon={ExpandMoreIcon} title="more" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
