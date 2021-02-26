import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// css
import "../styles/EmailRow.css";

// Material UI
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

// redux
import { selectMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, description, timestamp }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        timestamp,
      })
    );

    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <div className="emailRow__time">{timestamp}</div>
    </div>
  );
}

export default EmailRow;
